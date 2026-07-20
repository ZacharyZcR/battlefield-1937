/** Axis-aligned box used by infantry / vehicle collision. */
export type AABB = { minX: number; maxX: number; minZ: number; maxZ: number }

/**
 * Uniform grid for 2D AABB queries.
 * navBlocked / move collision go from O(n) full scans to O(nearby cells).
 */
export class SpatialHash<T extends AABB = AABB> {
  private readonly inv: number
  private readonly cells = new Map<number, T[]>()

  constructor(cellSize = 4) {
    this.inv = 1 / cellSize
  }

  clear() {
    this.cells.clear()
  }

  rebuild(items: readonly T[]) {
    this.clear()
    for (const item of items) this.insert(item)
  }

  insert(item: T) {
    const x0 = Math.floor(item.minX * this.inv)
    const x1 = Math.floor(item.maxX * this.inv)
    const z0 = Math.floor(item.minZ * this.inv)
    const z1 = Math.floor(item.maxZ * this.inv)
    for (let z = z0; z <= z1; z++) {
      for (let x = x0; x <= x1; x++) {
        const key = this.key(x, z)
        const bucket = this.cells.get(key)
        if (bucket) bucket.push(item)
        else this.cells.set(key, [item])
      }
    }
  }

  /** True if a circle (as AABB) overlaps any stored box. */
  blocked(x: number, z: number, radius: number): boolean {
    const minX = x - radius
    const maxX = x + radius
    const minZ = z - radius
    const maxZ = z + radius
    const x0 = Math.floor(minX * this.inv)
    const x1 = Math.floor(maxX * this.inv)
    const z0 = Math.floor(minZ * this.inv)
    const z1 = Math.floor(maxZ * this.inv)
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        const bucket = this.cells.get(this.key(cx, cz))
        if (!bucket) continue
        for (let i = 0; i < bucket.length; i++) {
          const box = bucket[i]
          if (maxX > box.minX && minX < box.maxX && maxZ > box.minZ && minZ < box.maxZ) return true
        }
      }
    }
    return false
  }

  /** Collect unique items overlapping an AABB (no duplicates across cells). */
  query(minX: number, maxX: number, minZ: number, maxZ: number, out: T[] = []): T[] {
    out.length = 0
    const seen = new Set<T>()
    const x0 = Math.floor(minX * this.inv)
    const x1 = Math.floor(maxX * this.inv)
    const z0 = Math.floor(minZ * this.inv)
    const z1 = Math.floor(maxZ * this.inv)
    for (let cz = z0; cz <= z1; cz++) {
      for (let cx = x0; cx <= x1; cx++) {
        const bucket = this.cells.get(this.key(cx, cz))
        if (!bucket) continue
        for (let i = 0; i < bucket.length; i++) {
          const box = bucket[i]
          if (seen.has(box)) continue
          if (maxX > box.minX && minX < box.maxX && maxZ > box.minZ && minZ < box.maxZ) {
            seen.add(box)
            out.push(box)
          }
        }
      }
    }
    return out
  }

  private key(cx: number, cz: number) {
    // Interleave into a single int key (enough for battlefield scale).
    return ((cx + 512) & 0x3ff) | (((cz + 512) & 0x3ff) << 10)
  }
}
