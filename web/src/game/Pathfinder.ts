import type { SpatialHash } from './SpatialHash'
import type { MapBounds } from './mapBounds'

export type NavPoint = { x: number; z: number }

/**
 * Pre-baked walkability grid + binary-heap A*.
 * Rebuild when static/dynamic colliders change; queries stay cheap.
 */
export class Pathfinder {
  private spacing = 1.5
  private columns = 0
  private rows = 0
  private count = 0
  private halfW = 28
  private halfZ = 58
  private blocked = new Uint8Array(0)
  private costs = new Float32Array(0)
  private came = new Int32Array(0)
  private heap = new Int32Array(0)
  private heapScore = new Float32Array(0)
  private heapSize = 0
  private stamp = new Uint32Array(0)
  private generation = 1
  private readonly scratch: NavPoint[] = []
  private readonly raw: NavPoint[] = []

  get ready() {
    return this.count > 0
  }

  rebuild(hash: SpatialHash, bounds: MapBounds, spacing = 1.5, agentRadius = .4) {
    this.spacing = spacing
    this.halfW = bounds.halfWidth
    this.halfZ = bounds.halfDepth
    this.columns = Math.floor(this.halfW * 2 / spacing) + 1
    this.rows = Math.floor(this.halfZ * 2 / spacing) + 1
    this.count = this.columns * this.rows
    if (this.blocked.length < this.count) {
      this.blocked = new Uint8Array(this.count)
      this.costs = new Float32Array(this.count)
      this.came = new Int32Array(this.count)
      this.heap = new Int32Array(this.count)
      this.heapScore = new Float32Array(this.count)
      this.stamp = new Uint32Array(this.count)
    } else {
      this.blocked.fill(0, 0, this.count)
    }
    for (let index = 0; index < this.count; index++) {
      const x = index % this.columns * spacing - this.halfW
      const z = Math.floor(index / this.columns) * spacing - this.halfZ
      if (Math.abs(x) > this.halfW - agentRadius || Math.abs(z) > this.halfZ - agentRadius) {
        this.blocked[index] = 1
        continue
      }
      this.blocked[index] = hash.blocked(x, z, agentRadius) ? 1 : 0
    }
  }

  worldOf(index: number): NavPoint {
    return {
      x: index % this.columns * this.spacing - this.halfW,
      z: Math.floor(index / this.columns) * this.spacing - this.halfZ,
    }
  }

  cellOf(x: number, z: number): number {
    const cx = Math.max(0, Math.min(this.columns - 1, Math.round((x + this.halfW) / this.spacing)))
    const cz = Math.max(0, Math.min(this.rows - 1, Math.round((z + this.halfZ) / this.spacing)))
    return cz * this.columns + cx
  }

  isBlockedWorld(x: number, z: number, radius = .4): boolean {
    if (Math.abs(x) > this.halfW - radius || Math.abs(z) > this.halfZ - radius) return true
    if (!this.count) return false
    return this.blocked[this.cellOf(x, z)] === 1
  }

  findPath(fromX: number, fromZ: number, toX: number, toZ: number, lineClear: (ax: number, az: number, bx: number, bz: number) => boolean): NavPoint[] {
    if (!this.count) return [{ x: toX, z: toZ }]
    const start = this.nearestOpen(this.cellOf(fromX, fromZ))
    const goal = this.nearestOpen(this.cellOf(toX, toZ))
    if (start === goal) return [{ x: toX, z: toZ }]

    this.generation = this.generation + 1 || 1
    const gen = this.generation
    this.heapSize = 0
    this.stamp[start] = gen
    this.costs[start] = 0
    this.came[start] = -1
    this.heapPush(start, this.heuristic(start, goal))

    const directions = [
      [1, 0, 1], [-1, 0, 1], [0, 1, 1], [0, -1, 1],
      [1, 1, 1.414], [1, -1, 1.414], [-1, 1, 1.414], [-1, -1, 1.414],
    ] as const
    let guard = 0
    const limit = this.count * 3
    let found = false

    while (this.heapSize > 0 && guard++ < limit) {
      const current = this.heapPop()
      if (current === goal) { found = true; break }
      const cx = current % this.columns
      const cz = Math.floor(current / this.columns)
      const baseCost = this.costs[current]
      for (const [dx, dz, step] of directions) {
        const x = cx + dx
        const z = cz + dz
        if (x < 0 || x >= this.columns || z < 0 || z >= this.rows) continue
        const next = z * this.columns + x
        if (this.blocked[next]) continue
        if (dx && dz) {
          const sideA = cz * this.columns + x
          const sideB = z * this.columns + cx
          if (this.blocked[sideA] || this.blocked[sideB]) continue
        }
        const nextCost = baseCost + step
        if (this.stamp[next] === gen && nextCost >= this.costs[next]) continue
        this.stamp[next] = gen
        this.costs[next] = nextCost
        this.came[next] = current
        this.heapPush(next, nextCost + this.heuristic(next, goal))
      }
    }

    if (!found && this.stamp[goal] !== gen) return []

    this.raw.length = 0
    this.raw.push({ x: toX, z: toZ })
    for (let node = goal; node !== start && node >= 0; node = this.came[node]) {
      this.raw.push(this.worldOf(node))
    }
    this.raw.reverse()

    // String-pull smooth.
    this.scratch.length = 0
    let ax = fromX, az = fromZ, index = 0
    while (index < this.raw.length) {
      let far = index
      const limitFar = Math.min(this.raw.length, index + 14)
      for (let candidate = index; candidate < limitFar; candidate++) {
        if (lineClear(ax, az, this.raw[candidate].x, this.raw[candidate].z)) far = candidate
      }
      const point = this.raw[far]
      this.scratch.push(point)
      ax = point.x
      az = point.z
      index = far + 1
    }
    return this.scratch.slice()
  }

  private nearestOpen(start: number): number {
    if (!this.blocked[start]) return start
    const sx = start % this.columns
    const sz = Math.floor(start / this.columns)
    for (let radius = 1; radius < 8; radius++) {
      for (let dz = -radius; dz <= radius; dz++) {
        for (let dx = -radius; dx <= radius; dx++) {
          if (Math.max(Math.abs(dx), Math.abs(dz)) !== radius) continue
          const x = sx + dx
          const z = sz + dz
          if (x < 0 || x >= this.columns || z < 0 || z >= this.rows) continue
          const index = z * this.columns + x
          if (!this.blocked[index]) return index
        }
      }
    }
    return start
  }

  private heuristic(a: number, b: number) {
    const ax = a % this.columns
    const az = Math.floor(a / this.columns)
    const bx = b % this.columns
    const bz = Math.floor(b / this.columns)
    const dx = Math.abs(ax - bx)
    const dz = Math.abs(az - bz)
    return Math.max(dx, dz) + (Math.SQRT2 - 1) * Math.min(dx, dz)
  }

  private heapPush(node: number, score: number) {
    let i = this.heapSize++
    this.heap[i] = node
    this.heapScore[i] = score
    while (i > 0) {
      const parent = (i - 1) >> 1
      if (this.heapScore[parent] <= this.heapScore[i]) break
      this.swap(i, parent)
      i = parent
    }
  }

  private heapPop(): number {
    const root = this.heap[0]
    const last = --this.heapSize
    if (last > 0) {
      this.heap[0] = this.heap[last]
      this.heapScore[0] = this.heapScore[last]
      let i = 0
      for (;;) {
        const left = i * 2 + 1
        const right = left + 1
        let smallest = i
        if (left < this.heapSize && this.heapScore[left] < this.heapScore[smallest]) smallest = left
        if (right < this.heapSize && this.heapScore[right] < this.heapScore[smallest]) smallest = right
        if (smallest === i) break
        this.swap(i, smallest)
        i = smallest
      }
    }
    return root
  }

  private swap(a: number, b: number) {
    const n = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = n
    const s = this.heapScore[a]
    this.heapScore[a] = this.heapScore[b]
    this.heapScore[b] = s
  }
}
