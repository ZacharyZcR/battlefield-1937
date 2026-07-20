import * as THREE from 'three'
import type { Campaign } from '../campaigns'
import type { MapBounds } from '../mapBounds'
import type { Collider, FieldStructure, Ladder, MinimapFeatures, Platform, UrbanBuilding } from './types'
import { rngFor } from './rng'

const trunkGeometry = new THREE.CylinderGeometry(.18, .3, 1, 7), pineCrownGeometry = new THREE.ConeGeometry(1, 1, 8), broadCrownGeometry = new THREE.IcosahedronGeometry(1, 1), bambooGeometry = new THREE.CylinderGeometry(.055, .08, 1, 6), cropGeometry = new THREE.ConeGeometry(.07, .62, 5), sleeperGeometry = new THREE.BoxGeometry(1.4, .03, .14), stoneGeometry = new THREE.BoxGeometry(1, 1, 1), identityQuaternion = new THREE.Quaternion()

export type MapBuilderContext = {
  scene: THREE.Scene
  campaign: Campaign
  renderer: THREE.WebGLRenderer
  mapBounds: MapBounds
  textureCache: Map<string, THREE.CanvasTexture>
  materialCache: Map<string, THREE.MeshStandardMaterial>
  colliders: Collider[]
  vehicleColliders: Collider[]
  coverMeshes: THREE.Mesh[]
  ladders: Ladder[]
  platforms: Platform[]
  urbanBuildings: UrbanBuilding[]
  fieldStructures: FieldStructure[]
  markCollidersDirty: () => void
}

export class MapBuilder {
  private scene: THREE.Scene
  private campaign: Campaign
  private renderer: THREE.WebGLRenderer
  private mapBounds: MapBounds
  private textureCache: Map<string, THREE.CanvasTexture>
  private materialCache: Map<string, THREE.MeshStandardMaterial>
  private colliders: Collider[]
  private vehicleColliders: Collider[]
  private coverMeshes: THREE.Mesh[]
  private ladders: Ladder[]
  private platforms: Platform[]
  private urbanBuildings: UrbanBuilding[]
  private fieldStructures: FieldStructure[]
  private markCollidersDirty: () => void
  private rng: () => number
  private roadPath: { x: number; z: number }[] = []
  private batches = new Map<string, { geometry: THREE.BufferGeometry; material: THREE.Material; matrices: THREE.Matrix4[]; colors: (THREE.Color | undefined)[]; cast: boolean; receive: boolean }>()
  readonly minimapFeatures: MinimapFeatures = { roads: [], water: [], buildings: [], walls: [], rails: [] }
  /** 地面网格（城市平板或起伏地形），build() 后可用，供子弹/视线遮挡检测（不进 coverMeshes，避免影响掩体逻辑）。 */
  ground?: THREE.Mesh

  constructor(context: MapBuilderContext) {
    this.scene = context.scene
    this.campaign = context.campaign
    this.renderer = context.renderer
    this.mapBounds = context.mapBounds
    this.textureCache = context.textureCache
    this.materialCache = context.materialCache
    this.colliders = context.colliders
    this.vehicleColliders = context.vehicleColliders
    this.coverMeshes = context.coverMeshes
    this.ladders = context.ladders
    this.platforms = context.platforms
    this.urbanBuildings = context.urbanBuildings
    this.fieldStructures = context.fieldStructures
    this.markCollidersDirty = context.markCollidersDirty
    this.rng = rngFor(context.campaign.id)
  }

  private surfaceTexture(color: number, bucket: number) {
    const key = `${color}:${bucket}`, cached = this.textureCache.get(key); if (cached) return cached
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128; const context = canvas.getContext('2d')!, base = new THREE.Color(color), dark = base.clone().multiplyScalar(.68), light = base.clone().lerp(new THREE.Color(0xffffff), .16), rgba = (c: THREE.Color, a: number) => `rgba(${Math.round(c.r * 255)},${Math.round(c.g * 255)},${Math.round(c.b * 255)},${a})`
    context.fillStyle = `#${base.getHexString()}`; context.fillRect(0, 0, 128, 128); let seed = (color ^ 0x9e3779b9) >>> 0, random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
    for (let index = 0; index < 26; index++) { context.globalAlpha = .05 + random() * .08; context.fillStyle = random() < .62 ? `#${dark.getHexString()}` : `#${light.getHexString()}`; const size = 6 + random() * 5; context.fillRect(random() * 128, random() * 128, size, size) }
    for (let index = 0; index < 420; index++) { context.globalAlpha = .06 + random() * .12; context.fillStyle = random() < .72 ? `#${dark.getHexString()}` : `#${light.getHexString()}`; const size = .35 + random() * 1.35; context.fillRect(random() * 128, random() * 128, size, size) }
    for (let index = 0; index < 3 + Math.floor(random() * 3); index++) { const x = random() * 128, y = random() * 128, radius = 9 + random() * 15, stain = random() < .72 ? dark : light, gradient = context.createRadialGradient(x, y, 0, x, y, radius); gradient.addColorStop(0, rgba(stain, .18)); gradient.addColorStop(1, rgba(stain, 0)); context.globalAlpha = 1; context.fillStyle = gradient; context.beginPath(); context.ellipse(x, y, radius, radius * (.5 + random() * .4), random() * Math.PI, 0, Math.PI * 2); context.fill() }
    context.globalAlpha = .09; context.strokeStyle = `#${dark.getHexString()}`; context.lineWidth = .45; for (let line = 0; line < 7; line++) { const y = random() * 128; context.beginPath(); context.moveTo(0, y); context.bezierCurveTo(36, y + (random() - .5) * 8, 88, y + (random() - .5) * 8, 128, y + (random() - .5) * 6); context.stroke() }
    context.globalAlpha = 1; const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.repeat.set(bucket, bucket); texture.anisotropy = Math.min(8, this.renderer?.capabilities.getMaxAnisotropy?.() ?? 1); this.textureCache.set(key, texture); return texture
  }
  private shade(color: number) { const c = new THREE.Color(color); c.offsetHSL(0, (this.rng() - .5) * .08, (Math.floor(this.rng() * 4) - 1.5) * .025); return c.getHex() }
  mat(c: number, r = .88, bucket = 2) {
    const key = `${c}|${r.toFixed(2)}|${bucket}`
    const cached = this.materialCache.get(key)
    if (cached) return cached
    const material = r >= .62
      ? new THREE.MeshStandardMaterial({ color: 0xffffff, map: this.surfaceTexture(c, bucket), roughness: r })
      : new THREE.MeshStandardMaterial({ color: c, roughness: r, metalness: r < .4 ? .18 : 0 })
    material.userData.shared = true
    this.materialCache.set(key, material)
    return material
  }
  box(s: [number, number, number], p: [number, number, number], c: number, parent: THREE.Object3D = this.scene, bucket?: number) {
    const span = Math.max(s[0], s[2]), tier = bucket ?? (span <= 4 ? 1 : span <= 8 ? 2 : span <= 16 ? 4 : 8), m = new THREE.Mesh(new THREE.BoxGeometry(...s), this.mat(c, .88, tier)); m.position.set(...p); m.receiveShadow = true; m.castShadow = s[1] >= .15 && s[0] * s[1] * s[2] >= .02; parent.add(m); return m
  }
  private shadeRatio(color: number) { const shaded = new THREE.Color(this.shade(color)), base = new THREE.Color(color); return new THREE.Color(shaded.r / base.r, shaded.g / base.g, shaded.b / base.b) }
  private instance(key: string, geometry: THREE.BufferGeometry, material: THREE.Material, matrix: THREE.Matrix4, color: THREE.Color | undefined, cast: boolean, receive: boolean) {
    let batch = this.batches.get(key); if (!batch) { batch = { geometry, material, matrices: [], colors: [], cast, receive }; this.batches.set(key, batch) }
    batch.matrices.push(matrix); batch.colors.push(color)
  }
  private flushInstances() {
    const white = new THREE.Color(0xffffff)
    for (const batch of this.batches.values()) { const mesh = new THREE.InstancedMesh(batch.geometry, batch.material, batch.matrices.length); batch.matrices.forEach((matrix, index) => mesh.setMatrixAt(index, matrix)); if (batch.colors.some(Boolean)) batch.colors.forEach((color, index) => mesh.setColorAt(index, color ?? white)); mesh.instanceMatrix.needsUpdate = true; if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true; mesh.castShadow = batch.cast; mesh.receiveShadow = batch.receive; this.scene.add(mesh) }
    this.batches.clear()
  }
  private cover(s: [number, number, number], p: [number, number, number], c: number) {
    const mesh = this.box(s, p, c), collider = { minX: p[0] - s[0] / 2, maxX: p[0] + s[0] / 2, minZ: p[2] - s[2] / 2, maxZ: p[2] + s[2] / 2 }; mesh.userData.collider = collider; this.colliders.push(collider); this.coverMeshes.push(mesh); this.markCollidersDirty(); return mesh
  }
  battlefieldHalfWidth() { return this.mapBounds.halfWidth }
  private rotatedAabb(x: number, z: number, halfW: number, halfD: number, face: number): Collider {
    const halfX = Math.abs(Math.cos(face)) * halfW + Math.abs(Math.sin(face)) * halfD, halfZ = Math.abs(Math.sin(face)) * halfW + Math.abs(Math.cos(face)) * halfD
    return { minX: x - halfX, maxX: x + halfX, minZ: z - halfZ, maxZ: z + halfZ }
  }
  terrainHeight(x: number, z: number) {
    const theme = this.campaign.theme; if (theme === 'delta' || theme === 'ruin' || theme === 'canal') return 0
    const edgeFade = THREE.MathUtils.smoothstep(this.mapBounds.halfDepth + 2 - Math.abs(z), 0, 15), laneFade = THREE.MathUtils.lerp(.35, 1, THREE.MathUtils.smoothstep(Math.abs(x), 5, 23)), wave = Math.sin(x * .115 + z * .035) + Math.cos(z * .09 - x * .045) * .72
    if (theme === 'loess') return Math.max(0, Math.round((.65 + wave * .38) * 2) / 2) * edgeFade * laneFade
    if (theme === 'alpine') return Math.max(0, 1.35 + wave * .82 + Math.sin(z * .035) * .5) * edgeFade * laneFade
    if (theme === 'jungle') return Math.max(0, .65 + wave * .42) * edgeFade * laneFade
    return Math.max(0, .45 + wave * .3) * edgeFade * laneFade
  }
  build() {
    const theme = this.campaign.theme, palette = { delta: [0x50554c, 0x303331, 0x685f54], ruin: [0x595751, 0x393936, 0x625b54], canal: [0x696653, 0x46453f, 0x776b58], green: [0x4e6048, 0x343c31, 0x696754], loess: [0x806c4e, 0x594b3c, 0x826f57], jungle: [0x3d5842, 0x29382e, 0x55634d], alpine: [0x59645d, 0x39413d, 0x67675f] }[theme], urban = theme === 'delta' || theme === 'ruin' || theme === 'canal', mapWidth = this.mapBounds.halfWidth * 2 + 24, mapDepth = this.mapBounds.halfDepth * 2 + 14
    if (urban) this.ground = this.box([mapWidth, .3, mapDepth], [0, -.18, 0], palette[0], this.scene, 16); else { const geometry = new THREE.PlaneGeometry(mapWidth, mapDepth, 52, 72), positions = geometry.getAttribute('position') as THREE.BufferAttribute; for (let index = 0; index < positions.count; index++) positions.setZ(index, this.terrainHeight(positions.getX(index), -positions.getY(index))); positions.needsUpdate = true; geometry.computeVertexNormals(); const ground = new THREE.Mesh(geometry, this.mat(palette[0], .88, 16)); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; this.scene.add(ground); this.ground = ground }
    const road = this.campaign.layout?.road ?? 'straight', halfDepth = this.mapBounds.halfDepth
    if (road === 's-curve') { const jitter = () => (this.rng() - .5) * 6; this.roadPath = [{ x: 0, z: halfDepth }, { x: -8 + jitter(), z: 20 }, { x: 8 + jitter(), z: -12 }, { x: 0, z: -halfDepth }]; for (let index = 0; index < this.roadPath.length - 1; index++) this.fieldRoad(this.roadPath[index].x, this.roadPath[index].z, this.roadPath[index + 1].x, this.roadPath[index + 1].z, 6.5, palette[1]); this.minimapFeatures.roads.push({ points: this.roadPath.map(point => ({ ...point })), width: 6.5 }) }
    else { const roadX = road === 'rail-side' ? 6 : 0; this.box([15, .06, mapDepth], [roadX, .01, 0], palette[1]); this.box([mapWidth, .06, 10], [0, .02, -18], palette[1]); this.minimapFeatures.roads.push({ points: [{ x: roadX, z: -halfDepth }, { x: roadX, z: halfDepth }], width: 15 }, { points: [{ x: -this.mapBounds.halfWidth, z: -18 }, { x: this.mapBounds.halfWidth, z: -18 }], width: 10 }) }
    if (this.campaign.id === 'songhu') {
      for (const x of [-20, 22]) { this.box([7, .065, mapDepth], [x, .015, 0], palette[1]); this.minimapFeatures.roads.push({ points: [{ x, z: -halfDepth }, { x, z: halfDepth }], width: 7 }) }
      for (const z of [-102, -58, -14, 30, 74, 112]) { this.box([mapWidth, .065, 6.5], [0, .02, z], palette[1]); this.minimapFeatures.roads.push({ points: [{ x: -this.mapBounds.halfWidth, z }, { x: this.mapBounds.halfWidth, z }], width: 6.5 }) }
    }
    if (urban) this.urbanMap(palette)
    else this.naturalMap(theme, palette)
    this.campaignLandmarks()
    this.battlefieldCover(urban, palette)
    if (theme === 'delta' || theme === 'canal' || theme === 'loess') { for (const x of [-2.35, 2.35]) { this.box([.09, .06, mapDepth], [x, .08, 0], 0x777d77); for (let z = -halfDepth; z <= halfDepth; z += 2.8) this.instance('sleeper', sleeperGeometry, this.mat(0x3f3025, .88, 1), new THREE.Matrix4().makeTranslation(x, .025, z), undefined, false, true); this.minimapFeatures.rails.push({ x1: x, z1: -halfDepth, x2: x, z2: halfDepth }) } }
    for (const z of [32, 2, -33]) for (let row = 0; row < 2; row++) for (let i = 0; i < (row ? 5 : 7); i++) this.cover([1.45, .42, .55], [(i - (row ? 2 : 3)) * 1.1, .23 + row * .42, z], row ? 0x655845 : 0x75664d)
    const stoneDepth = this.mapBounds.halfDepth - 3
    for (let i = 0; i < 28; i++) { const sx = .4 + this.rng(), sy = .15 + this.rng() * .6, sz = .4 + this.rng(), px = -7 + this.rng() * 14, pz = -stoneDepth + this.rng() * stoneDepth * 2; this.instance('stone', stoneGeometry, this.mat(theme === 'green' || theme === 'jungle' ? 0x37402f : 0x4b4035, .88, 1), new THREE.Matrix4().compose(new THREE.Vector3(px, .1, pz), identityQuaternion, new THREE.Vector3(sx, sy, sz)), undefined, false, true) }
    if (urban) this.urbanBackdrop(palette)
    this.ensureGroundCoverColliders()
    this.flushInstances()
  }
  private ensureGroundCoverColliders() {
    const bounds = new THREE.Box3(), size = new THREE.Vector3(), center = new THREE.Vector3()
    for (const mesh of this.coverMeshes) {
      bounds.setFromObject(mesh); bounds.getSize(size); bounds.getCenter(center)
      if (size.x < .12 || size.z < .12 || bounds.min.y > this.terrainHeight(center.x, center.z) + .68) continue
      const collider = { minX: bounds.min.x, maxX: bounds.max.x, minZ: bounds.min.z, maxZ: bounds.max.z }
      const covered = this.colliders.some(existing => existing.minX <= collider.minX + .08 && existing.maxX >= collider.maxX - .08 && existing.minZ <= collider.minZ + .08 && existing.maxZ >= collider.maxZ - .08)
      if (!covered) this.colliders.push(collider)
      mesh.userData.collider ??= collider
    }
    this.markCollidersDirty()
  }
  private urbanBackdrop(palette: number[]) {
    const geometry = stoneGeometry, material = this.mat(palette[2] - 0x10100c, .95, 8), position = new THREE.Vector3(), scale = new THREE.Vector3()
    for (const side of [-1, 1]) for (let index = 0; index < 24; index++) {
      const width = 7 + this.rng() * 10, depth = 10 + this.rng() * 18, height = 12 + this.rng() * 24, x = side * (this.mapBounds.halfWidth + 14 + this.rng() * 18), z = -this.mapBounds.halfDepth - 25 + index * (this.mapBounds.halfDepth * 2 + 50) / 23
      this.instance('urban-backdrop', geometry, material, new THREE.Matrix4().compose(position.set(x, height / 2 - .1, z), identityQuaternion, scale.set(width, height, depth)), undefined, false, true)
    }
    for (const end of [-1, 1]) for (let index = 0; index < 14; index++) {
      const width = 7 + this.rng() * 9, depth = 9 + this.rng() * 15, height = 10 + this.rng() * 22, x = -this.mapBounds.halfWidth - 15 + index * (this.mapBounds.halfWidth * 2 + 30) / 13, z = end * (this.mapBounds.halfDepth + 18 + this.rng() * 12)
      this.instance('urban-backdrop', geometry, material, new THREE.Matrix4().compose(position.set(x, height / 2 - .1, z), identityQuaternion, scale.set(width, height, depth)), undefined, false, true)
    }
  }
  private battlefieldCover(urban: boolean, palette: number[]) {
    const place = (x: number, z: number, alongX: boolean, length: number, color: number, height: number) => {
      const width = alongX ? length : .72, depth = alongX ? .72 : length
      if (this.colliders.some(box => x > box.minX - width / 2 - .45 && x < box.maxX + width / 2 + .45 && z > box.minZ - depth / 2 - .45 && z < box.maxZ + depth / 2 + .45)) return false
      const mesh = this.cover([width, height, depth], [x, this.terrainHeight(x, z) + height / 2, z], color); mesh.userData.crushable = height < 1.1; this.vehicleColliders.push(mesh.userData.collider as Collider); return true
    }
    for (const [index, flag] of this.campaign.flags.entries()) {
      for (let slot = 0; slot < 10; slot++) { const angle = slot / 10 * Math.PI * 2 + index * .37, distance = flag.radius + 2.2 + slot % 2 * 2.4, height = [.78, 1.16, 1.68][(slot + index) % 3]; place(flag.x + Math.cos(angle) * distance, flag.z + Math.sin(angle) * distance, Math.abs(Math.sin(angle)) > .7, 4.8 + (slot + index) % 3 * 1.35, urban ? (slot % 2 ? 0x676158 : 0x75664f) : palette[2], height) }
    }
    const count = Math.round((this.mapBounds.halfDepth / 1.25 + this.mapBounds.halfWidth / 2) * (this.campaign.layout?.density ?? 1))
    let placed = 0
    for (let attempt = 0; attempt < count * 4 && placed < count; attempt++) {
      const x = (this.rng() * 2 - 1) * (this.mapBounds.halfWidth - 5), z = (this.rng() * 2 - 1) * (this.mapBounds.halfDepth - 7)
      if (this.campaign.flags.some(flag => Math.hypot(flag.x - x, flag.z - z) < 3.4)) continue
      const heightRoll = this.rng(), height = heightRoll < .36 ? .7 + this.rng() * .16 : heightRoll < .78 ? 1.05 + this.rng() * .24 : 1.52 + this.rng() * .34
      if (place(x, z, this.rng() > .5, 4 + this.rng() * 3.2, urban ? (placed % 2 ? 0x625b52 : 0x75664f) : palette[2], height)) placed++
    }
  }
  private urbanMap(palette: number[]) {
    const rows = Math.max(9, Math.floor(this.mapBounds.halfDepth * 2 / 14)), firstZ = -(rows - 1) * 7
    for (const side of [-1, 1]) {
      this.box([3.6, .24, this.mapBounds.halfDepth * 2 + 8], [side * 9.2, .1, 0], 0x77766e)
      for (let row = 0; row < rows; row++) {
        if (row % 4 === 3) continue
        const g = new THREE.Group(), z = firstZ + row * 14, w = 10 + row % 3 * 1.5, h = 8 + row % 4 * 2.1; g.position.set(side * (this.mapBounds.halfWidth * .54 + row % 2 * 2), 0, z); this.scene.add(g)
        const color = row % 2 ? palette[2] : palette[2] + 0x080604, depth = 10.5, floorHeight = 3.2, upperHeight = h - floorHeight
        const body = this.box([w, upperHeight, depth], [0, floorHeight + upperHeight / 2, 0], color, g), details: THREE.Object3D[] = [], colliders: Collider[] = []
        const wall = (size: [number, number, number], position: [number, number, number], solid = true) => { const mesh = this.box(size, position, color, g); details.push(mesh); if (solid) { const collider = { minX: g.position.x + position[0] - size[0] / 2, maxX: g.position.x + position[0] + size[0] / 2, minZ: z + position[2] - size[2] / 2, maxZ: z + position[2] + size[2] / 2 }; colliders.push(collider); this.colliders.push(collider); this.vehicleColliders.push(collider) } return mesh }
        const faceX = -side * w / 2, rearX = side * w / 2, doorway = 2.1, facadePart = (depth - doorway) / 2
        for (const wallX of [faceX, rearX]) { wall([.24, floorHeight, facadePart], [wallX, floorHeight / 2, -(doorway + facadePart) / 2]); wall([.24, floorHeight, facadePart], [wallX, floorHeight / 2, (doorway + facadePart) / 2]); wall([.24, .75, doorway], [wallX, floorHeight - .375, 0], false) }
        const sidePart = (w - doorway) / 2
        for (const wallZ of [-depth / 2, depth / 2]) { wall([sidePart, floorHeight, .24], [-(doorway + sidePart) / 2, floorHeight / 2, wallZ]); wall([sidePart, floorHeight, .24], [(doorway + sidePart) / 2, floorHeight / 2, wallZ]); wall([doorway, .75, .24], [0, floorHeight - .375, wallZ], false) }
        const fx = -side * (w / 2 + .03)
        for (let f = 1; f < Math.floor(h / 3); f++) for (const wz of [-3, 0, 3]) details.push(this.box([.08, 1.15, 1.25], [fx, 2 + f * 2.6, wz], 0x202828, g))
        details.push(this.box([.1, .7, 5.2], [fx - side * .04, 3.55, 0], row % 3 ? 0x5a3d32 : 0x625638, g)); this.box([1.4, .04, 1.8], [faceX + side * .72, .025, 0], 0x443e35, g)
        let ladder: Ladder | undefined, platform: Platform | undefined
        if (row % 3 === 0) {
          const localX = faceX - side * .14, ladderZ = 3.65; for (const offset of [-.34, .34]) details.push(this.box([.07, h + .35, .07], [localX, (h + .35) / 2, ladderZ + offset], 0x54412d, g)); for (let y = .35; y <= h + .15; y += .38) details.push(this.box([.07, .055, .78], [localX, y, ladderZ], 0x6a5136, g))
          ladder = { x: g.position.x + localX, z: z + ladderZ, y0: .65, y1: h + 1.82, face: side * Math.PI / 2 }; platform = { minX: g.position.x - w / 2 + .25, maxX: g.position.x + w / 2 - .25, minZ: z - depth / 2 + .25, maxZ: z + depth / 2 - .25, y: h + .1 }; this.ladders.push(ladder); this.platforms.push(platform)
          for (const edge of [-1, 1]) { details.push(this.box([w, .08, .08], [0, h + .82, edge * (depth / 2 - .18)], 0x50402f, g)); details.push(this.box([.08, .08, depth], [edge * (w / 2 - .18), h + .82, 0], 0x50402f, g)) }
        }
        const building: UrbanBuilding = { root: g, body, details, colliders, ladder, platform, hp: 900, damageStage: 0, destroyed: false, height: h, rubble: [] }; for (const mesh of [body, ...details]) { mesh.userData.urbanBuilding = building; this.coverMeshes.push(mesh as THREE.Mesh) } this.urbanBuildings.push(building); this.minimapFeatures.buildings.push({ minX: g.position.x - w / 2, maxX: g.position.x + w / 2, minZ: z - depth / 2, maxZ: z + depth / 2 })
      }
    }
    for (let alleyRow = 3; alleyRow < rows; alleyRow += 4) { const alleyZ = firstZ + alleyRow * 14; for (const side of [-1, 1]) for (let i = -1; i <= 1; i++) { const px = side * (this.mapBounds.halfWidth * .72 + (i % 2 ? .9 : 0)), pz = alleyZ + i * 1.3, crate = this.cover([1.2, .8, 1.2], [px, .4, pz], 0x6a675f); crate.userData.crushable = true; this.vehicleColliders.push(crate.userData.collider as Collider) } }
    if (this.campaign.id === 'songhu') this.urbanSideBlocks(palette)
    const tram = new THREE.Group(); tram.position.set(2.2, 0, -7); tram.rotation.y = .12; this.scene.add(tram); const tramBody = this.box([3.1, 2.8, 7.5], [0, 1.5, 0], 0x465448, tram); this.box([3.2, .18, 7.7], [0, 3, 0], 0x252c28, tram); this.colliders.push({ minX: .2, maxX: 4.2, minZ: -11.1, maxZ: -2.9 }); this.coverMeshes.push(tramBody)
  }
  private urbanSideBlocks(palette: number[]) {
    const crossStreets = [-102, -58, -14, 30, 74, 112], halfDepth = this.mapBounds.halfDepth
    for (const side of [-1, 1]) for (let index = 0, z = -halfDepth + 18; z < halfDepth - 18; z += 18, index++) {
      if (crossStreets.some(street => Math.abs(street - z) < 6)) continue
      const root = new THREE.Group(), width = 8.5 + index % 2 * 1.5, depth = 11.5, floorHeight = 3.2, height = 7.5 + index % 3 * 1.7, upperHeight = height - floorHeight, x = side * (this.mapBounds.halfWidth * .82 + index % 2 * 1.2), color = index % 2 ? palette[2] : palette[2] + 0x070503
      root.position.set(x, 0, z); this.scene.add(root)
      const body = this.box([width, upperHeight, depth], [0, floorHeight + upperHeight / 2, 0], color, root), details: THREE.Object3D[] = [], colliders: Collider[] = [], doorway = 2.15
      const wall = (size: [number, number, number], position: [number, number, number], solid = true) => { const mesh = this.box(size, position, color, root); details.push(mesh); if (solid) { const collider = { minX: x + position[0] - size[0] / 2, maxX: x + position[0] + size[0] / 2, minZ: z + position[2] - size[2] / 2, maxZ: z + position[2] + size[2] / 2 }; colliders.push(collider); this.colliders.push(collider); this.vehicleColliders.push(collider) } }
      const zPart = (depth - doorway) / 2, xPart = (width - doorway) / 2
      for (const wallX of [-width / 2, width / 2]) { wall([.24, floorHeight, zPart], [wallX, floorHeight / 2, -(doorway + zPart) / 2]); wall([.24, floorHeight, zPart], [wallX, floorHeight / 2, (doorway + zPart) / 2]); wall([.24, .72, doorway], [wallX, floorHeight - .36, 0], false) }
      for (const wallZ of [-depth / 2, depth / 2]) { wall([xPart, floorHeight, .24], [-(doorway + xPart) / 2, floorHeight / 2, wallZ]); wall([xPart, floorHeight, .24], [(doorway + xPart) / 2, floorHeight / 2, wallZ]); wall([doorway, .72, .24], [0, floorHeight - .36, wallZ], false) }
      for (const localZ of [-3.4, 0, 3.4]) details.push(this.box([.08, 1.05, 1.2], [-side * (width / 2 + .02), 5.05, localZ], 0x22292a, root))
      const building: UrbanBuilding = { root, body, details, colliders, hp: 900, damageStage: 0, destroyed: false, height, rubble: [] }
      for (const mesh of [body, ...details]) { mesh.userData.urbanBuilding = building; this.coverMeshes.push(mesh as THREE.Mesh) }
      this.urbanBuildings.push(building); this.minimapFeatures.buildings.push({ minX: x - width / 2, maxX: x + width / 2, minZ: z - depth / 2, maxZ: z + depth / 2 })
    }
  }
  private bridgeCanal(z: number, color = 0x35434a) {
    const y = this.terrainHeight(0, z), water = this.box([55, .06, 7.5], [0, y + .015, z], color); const material = water.material as THREE.MeshStandardMaterial; material.roughness = .22; material.metalness = .12; this.minimapFeatures.water.push({ minX: -27.5, maxX: 27.5, minZ: z - 3.75, maxZ: z + 3.75 })
    this.box([6.2, .28, 9], [0, y + .14, z], 0x777064); for (const side of [-1, 1]) { this.box([.25, .75, 9], [side * 3.05, y + .48, z], 0x635d53); for (let offset = -3.5; offset <= 3.5; offset += 1.75) this.box([.38, 1.05, .38], [side * 3.05, y + .55, z + offset], 0x4d4942) }
  }
  private windmill(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, 0, z); this.scene.add(root); const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.45, 2.1, 5.4, 8), this.mat(0x796d58)); tower.position.y = 2.7; root.add(tower); const roof = new THREE.Mesh(new THREE.ConeGeometry(1.75, 1.45, 8), this.mat(0x403a32)); roof.position.y = 6.1; root.add(roof); const hub = new THREE.Group(); hub.position.set(0, 4.7, -1.55); root.add(hub); for (let blade = 0; blade < 4; blade++) { const arm = this.box([.18, 4.5, .12], [0, 1.85, 0], 0x55422c, hub); arm.rotation.z = blade * Math.PI / 2 } hub.rotation.z = .35; this.colliders.push({ minX: x - 1.8, maxX: x + 1.8, minZ: z - 1.8, maxZ: z + 1.8 }); this.vehicleColliders.push(this.colliders[this.colliders.length - 1]); this.coverMeshes.push(tower, roof)
    root.position.y = this.terrainHeight(x, z)
  }
  private railLandmark(x: number, z: number) {
    const station = this.box([7.5, 2.8, 4.2], [x, 1.4, z], 0x77664f); const roof = this.box([8.2, .35, 5], [x, 3, z], 0x3e3b34); roof.rotation.z = .05; this.coverMeshes.push(station, roof); const collider = { minX: x - 3.75, maxX: x + 3.75, minZ: z - 2.1, maxZ: z + 2.1 }; this.colliders.push(collider); this.vehicleColliders.push(collider)
    const wagon = new THREE.Group(); wagon.position.set(x - 10, .65, z - 4); wagon.rotation.y = Math.PI / 2; this.scene.add(wagon); const body = this.box([2.5, 1.8, 6], [0, .9, 0], 0x584c3d, wagon); this.box([2.7, .18, 6.2], [0, 1.9, 0], 0x353733, wagon); for (const wz of [-2.1, 2.1]) for (const wx of [-.85, .85]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.38, .38, .18, 10), this.mat(0x202220)); wheel.position.set(wx, -.35, wz); wheel.rotation.z = Math.PI / 2; wagon.add(wheel) } this.coverMeshes.push(body)
    const stationY = this.terrainHeight(x, z); station.position.y += stationY; roof.position.y += stationY; wagon.position.y += this.terrainHeight(x - 10, z - 4)
  }
  private well(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, 0, z); this.scene.add(root); const rim = new THREE.Mesh(new THREE.TorusGeometry(1, .22, 8, 18), this.mat(0x6d685c)); rim.position.y = .55; rim.rotation.x = Math.PI / 2; root.add(rim); for (const side of [-1, 1]) this.box([.16, 2.4, .16], [side * 1.05, 1.2, 0], 0x4e3b28, root); const roof = new THREE.Mesh(new THREE.ConeGeometry(1.65, .85, 4), this.mat(0x4b4033)); roof.position.y = 2.45; roof.rotation.y = Math.PI / 4; root.add(roof); this.colliders.push({ minX: x - 1.2, maxX: x + 1.2, minZ: z - 1.2, maxZ: z + 1.2 }); this.coverMeshes.push(rim, roof)
    root.position.y = this.terrainHeight(x, z)
  }
  private bunker(x: number, z: number, face = 0) {
    const root = new THREE.Group(); root.position.set(x, 0, z); root.rotation.y = face; this.scene.add(root); const body = this.box([5.8, 1.8, 4.2], [0, .9, 0], 0x54584f, root), roof = this.box([6.5, .55, 4.8], [0, 2, 0], 0x454a43, root); this.box([3.1, .55, .18], [0, 1.25, -2.12], 0x191d1c, root); const collider = this.rotatedAabb(x, z, 3, 2.2, face); this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, roof)
    root.position.y = this.terrainHeight(x, z)
  }
  private bambooGrove(x: number, z: number) { for (let index = 0; index < 12; index++) { const angle = index * 2.4, radius = .6 + index % 4 * .5, height = 4.2 + index % 3, px = x + Math.sin(angle) * radius, pz = z + Math.cos(angle) * radius, base = index % 2 ? 0x557044 : 0x69824c; this.instance(`bamboo${index % 2}`, bambooGeometry, this.mat(base), new THREE.Matrix4().compose(new THREE.Vector3(px, this.terrainHeight(px, pz) + height / 2, pz), new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.sin(index) * .035)), new THREE.Vector3(1, height, 1)), this.shadeRatio(base), true, false) } }
  private farmField(x: number, z: number, width = 9, depth = 7) {
    const y = this.terrainHeight(x, z); this.box([width, .025, depth], [x, y + .012, z], 0x66583b); for (let row = -depth / 2 + .6; row < depth / 2; row += .7) { const ridge = this.box([width - .5, .09, .16], [x, y + .07, z + row], 0x806b45); ridge.receiveShadow = true; for (let crop = -width / 2 + .7; crop < width / 2; crop += 1.1) this.instance('crop', cropGeometry, this.mat(0x7b8047), new THREE.Matrix4().makeTranslation(x + crop, y + .36, z + row), this.shadeRatio(0x7b8047), false, false) }
  }
  private caveDwelling(x: number, z: number, face = 0) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); root.rotation.y = face; this.scene.add(root); const body = this.box([6.2, 3.1, 4.8], [0, 1.5, 0], 0x806746, root); for (const side of [-1, 1]) this.box([2.1, 2.35, .28], [side * 2, 1.15, -2.45], 0x8e7350, root); const arch = new THREE.Mesh(new THREE.TorusGeometry(1.05, .27, 7, 16, Math.PI), this.mat(0x725b3f)); arch.position.set(0, 1.25, -2.6); arch.rotation.z = Math.PI; root.add(arch); this.box([1.65, 1.8, .08], [0, .9, -2.48], 0x29251f, root); const collider = this.rotatedAabb(x, z, 3.1, 2.4, face); this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body)
  }
  private logCabin(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); this.scene.add(root); const body = this.box([5.2, 2.5, 4.4], [0, 1.25, 0], 0x514531, root), roof = new THREE.Mesh(new THREE.ConeGeometry(3.7, 1.45, 4), this.mat(0x343a35)); roof.position.y = 3.2; roof.rotation.y = Math.PI / 4; roof.scale.z = 1.1; root.add(roof); for (let y = .25; y < 2.5; y += .32) for (const side of [-1, 1]) this.box([5.35, .18, .18], [0, y, side * 2.18], 0x655338, root); const collider = { minX: x - 2.6, maxX: x + 2.6, minZ: z - 2.2, maxZ: z + 2.2 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, roof)
  }
  private cityGate(z: number) { for (const side of [-1, 1]) { const tower = this.cover([6.5, 5.8, 4.5], [side * 7.8, 2.9, z], 0x665b50); this.box([7.1, .45, 5.1], [side * 7.8, 5.95, z], 0x373936); this.coverMeshes.push(tower); this.minimapFeatures.buildings.push({ minX: side * 7.8 - 3.25, maxX: side * 7.8 + 3.25, minZ: z - 2.25, maxZ: z + 2.25 }) } this.box([9.2, 1.1, 1.1], [0, 5.15, z], 0x5b5148) }
  private headquarters(team: 'ally' | 'enemy') {
    const direction = team === 'ally' ? 1 : -1, z = direction * (this.mapBounds.halfDepth - 11), cloth = team === 'ally' ? 0x526859 : 0x777151, accent = team === 'ally' ? 0x557ea8 : 0xa54c3e
    for (const x of [-12, -5, 6, 13]) this.tent(x, z + direction * (Math.abs(x) % 3), direction < 0 ? 0 : Math.PI)
    for (const x of [-17, 17]) this.cover([8, 1.05, .8], [x, this.terrainHeight(x, z - direction * 5) + .52, z - direction * 5], 0x75654b)
    const command = this.box([7.4, 2.7, 5.2], [0, this.terrainHeight(0, z) + 1.35, z], cloth); this.coverMeshes.push(command); this.colliders.push({ minX: -3.7, maxX: 3.7, minZ: z - 2.6, maxZ: z + 2.6 }); this.vehicleColliders.push(this.colliders[this.colliders.length - 1])
    const mast = this.box([.12, 6.2, .12], [4.5, this.terrainHeight(4.5, z) + 3.1, z], 0x373a35), flag = this.box([2.1, 1.05, .08], [5.5, this.terrainHeight(4.5, z) + 5.45, z], accent); this.coverMeshes.push(mast, flag)
    for (const x of [-3, 0, 3]) this.box([1.4, .8, 1.1], [x, this.terrainHeight(x, z - direction * 4) + .4, z - direction * 4], 0x5f4d32)
    this.minimapFeatures.buildings.push({ minX: -18, maxX: 18, minZ: z - 7, maxZ: z + 5 })
  }
  private campaignLandmarks() {
    if (this.campaign.id === 'songhu') { this.bridgeCanal(0); this.railLandmark(17, -43); this.wreckTruck(18, 18, .3); this.stoneWall(-21, 34, -10, 39); this.headquarters('ally'); this.headquarters('enemy') }
    else if (this.campaign.id === 'nanjing') { this.cityGate(22); this.bunker(-20, -25, Math.PI); this.church(18, -5); this.wreckTruck(-19, 5, -.2); this.ruinedBuilding(13, -12); this.ruinedBuilding(-13, 30); this.ruinedBuilding(11, 9) }
    else if (this.campaign.id === 'taierzhuang') { this.bridgeCanal(24, 0x3a4a4b); this.railLandmark(17, -27); this.stoneWall(-21, 6, -9, 9) }
    else if (this.campaign.id === 'wuhan') { this.windmill(20, -10); this.well(-18, 28); this.farmField(-19, -18); this.farmField(18, 33, 8, 6); this.barn(19, 13); this.stoneWall(-22, 8, -10, 12) }
    else if (this.campaign.id === 'baituan') { this.railLandmark(16, 8); this.bunker(-19, -26); this.caveDwelling(-20, 28); this.caveDwelling(20, -10, Math.PI); this.wreckTruck(-18, -5, .15); for (const point of [[-20, -37], [19, 30], [-17, 45]] as const) this.deadTree(point[0], point[1]) }
    else if (this.campaign.id === 'changsha') { this.windmill(-20, 26); this.well(18, -22); this.farmField(19, 8); this.farmField(-18, -30, 8, 6); this.barn(-19, 7); this.stoneWall(10, 30, 22, 34); this.burntHut(16, -34); this.burntHut(-16, 22) }
    else if (this.campaign.id === 'burma') { this.bridgeCanal(4, 0x263f39); for (const z of [-38, -18, 24, 42]) this.bambooGrove(z % 3 ? 20 : -20, z); this.wreckTruck(18, -28, -.35); this.deadTree(-19, 13, true) }
    else if (this.campaign.id === 'changde') { this.cityGate(-24); this.bunker(20, 26); this.church(-18, 8); this.wreckTruck(18, -9, .25); this.ruinedBuilding(11, -12); this.ruinedBuilding(-11, 30); const wallX = this.mapBounds.halfWidth - 6; for (const side of [-1, 1]) { this.cityWall(side * wallX, -20, -4); this.cityWall(side * wallX, 4, 20) } }
    else if (this.campaign.id === 'xiangxi') { this.bunker(-19, -26, Math.PI); this.bunker(19, 23); this.well(-18, 4); this.logCabin(18, -8); this.logCabin(-19, 38); this.deadTree(20, 41, true); this.stoneWall(-22, -4, -11, 1) }
    if (this.campaign.id !== 'songhu') { this.tent(-18, 50, .1); this.tent(18, -50, Math.PI + .1) }
  }
  private fieldRoad(ax: number, az: number, bx: number, bz: number, width: number, color: number) { const dx = bx - ax, dz = bz - az, length = Math.hypot(dx, dz), x = (ax + bx) / 2, z = (az + bz) / 2, road = this.box([width, .035, length], [x, this.terrainHeight(x, z) + .025, z], color); road.rotation.y = Math.atan2(dx, dz) }
  private nearRoad(x: number, z: number, range: number) { return this.roadPath.some((point, index) => { const next = this.roadPath[index + 1]; if (!next) return false; const dx = next.x - point.x, dz = next.z - point.z, t = THREE.MathUtils.clamp(((x - point.x) * dx + (z - point.z) * dz) / (dx * dx + dz * dz), 0, 1); return Math.hypot(x - (point.x + dx * t), z - (point.z + dz * t)) < range }) }
  private fieldHut(x: number, z: number, color: number, roofColor: number) { const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); this.scene.add(root); const body = this.box([4.6, 2.6, 5.2], [0, 1.3, 0], color, root), roof = new THREE.Mesh(new THREE.ConeGeometry(3.8, 1.5, 4), this.mat(roofColor)); roof.position.y = 3.25; roof.rotation.y = Math.PI / 4; roof.scale.z = 1.15; root.add(roof); this.box([1.2, 1.65, .08], [0, .83, -2.64], 0x292d29, root); for (const side of [-1, 1]) this.box([.72, .72, .08], [side * 1.45, 1.45, -2.65], 0x25302e, root); const collider = { minX: x - 2.3, maxX: x + 2.3, minZ: z - 2.6, maxZ: z + 2.6 }, structure: FieldStructure = { root, body, roof, collider, hp: 360, damageStage: 0, destroyed: false, rubble: [] }; body.userData.structure = structure; roof.userData.structure = structure; this.fieldStructures.push(structure); this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, roof) }
  private church(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); this.scene.add(root); const stone = 0x67645d, dark = 0x343532, body = this.box([6.2, 4.4, 9], [0, 2.2, 0], stone, root), tower = this.box([3.1, 7, 3.2], [0, 3.5, -5.1], stone, root), roof = new THREE.Mesh(new THREE.ConeGeometry(4.8, 2.4, 4), this.mat(dark)); roof.position.y = 5.6; roof.rotation.y = Math.PI / 4; roof.scale.z = 1.45; root.add(roof); const spire = new THREE.Mesh(new THREE.ConeGeometry(2.1, 3.2, 4), this.mat(dark)); spire.position.set(0, 8.6, -5.1); spire.rotation.y = Math.PI / 4; root.add(spire); this.box([.14, 1.6, .14], [0, 10.65, -5.1], 0x272925, root); this.box([.9, .12, .12], [0, 10.8, -5.1], 0x272925, root); for (const side of [-1, 1]) { const window = this.box([.9, 1.8, .08], [side * 1.7, 2.5, -4.55], 0x26353a, root); window.material = new THREE.MeshStandardMaterial({ color: 0x293b42, emissive: 0x172328, emissiveIntensity: .35 }) } const collider = { minX: x - 3.2, maxX: x + 3.2, minZ: z - 6.7, maxZ: z + 4.6 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, tower, roof, spire)
  }
  private ruinedBuilding(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, 0, z); this.scene.add(root); const stone = 0x5b564d, dark = 0x3b3831
    const wall = (size: [number, number, number], position: [number, number, number], color = stone) => { const mesh = this.box(size, position, color, root), collider = { minX: x + position[0] - size[0] / 2, maxX: x + position[0] + size[0] / 2, minZ: z + position[2] - size[2] / 2, maxZ: z + position[2] + size[2] / 2 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(mesh); return mesh }
    wall([5.5, 2.2, .35], [0, 1.1, -2.5]); wall([3.6, 3.3, .35], [-.95, 1.65, 2.5]); wall([.35, 2.7, 5.4], [-2.6, 1.35, 0]); wall([2.2, 1.2, .35], [1.65, .6, -2.5], dark)
    for (let index = 0; index < 3; index++) { const rubble = this.box([.7 + this.rng(), .3 + this.rng() * .4, .7 + this.rng()], [x + (this.rng() - .5) * 4, .2, z + (this.rng() - .5) * 4], index % 2 ? dark : stone); rubble.rotation.y = this.rng() * Math.PI; this.coverMeshes.push(rubble) }
  }
  private burntHut(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); this.scene.add(root); const body = this.box([4.6, 2.6, 5.2], [0, 1.3, 0], 0x2b2723, root), roof = new THREE.Mesh(new THREE.ConeGeometry(3.8, 1.5, 4), this.mat(0x201c18)); roof.position.set(.6, 2.35, .4); roof.rotation.y = Math.PI / 4; roof.rotation.z = .38; roof.scale.set(.8, .55, .95); root.add(roof); this.box([1.2, 1.65, .08], [0, .83, -2.64], 0x14110e, root); const collider = { minX: x - 2.3, maxX: x + 2.3, minZ: z - 2.6, maxZ: z + 2.6 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, roof); this.deadTree(x - 3.4, z + 2.8); this.deadTree(x + 3.1, z - 2.4)
  }
  private cityWall(x: number, z1: number, z2: number) {
    const z = (z1 + z2) / 2, length = Math.abs(z2 - z1), body = this.box([1.2, 3.2, length], [x, 1.6, z], 0x5f5a52), collider = { minX: x - .6, maxX: x + .6, minZ: Math.min(z1, z2), maxZ: Math.max(z1, z2) }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body); this.minimapFeatures.walls.push({ x1: x, z1, x2: x, z2 })
    for (let offset = -length / 2 + .7; offset < length / 2; offset += 2.2) this.box([1.35, .55, .8], [x, 3.45, z + offset], 0x55504a)
    for (const end of [z1, z2]) { const cap = this.box([1.6, 3.9, 1.6], [x, 1.95, end], 0x565149); this.coverMeshes.push(cap) }
  }
  private barn(x: number, z: number) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); this.scene.add(root); const body = this.box([7.2, 3.8, 8.2], [0, 1.9, 0], 0x66513a, root), roof = new THREE.Mesh(new THREE.ConeGeometry(5.7, 2.5, 4), this.mat(0x403a30)); roof.position.y = 5; roof.rotation.y = Math.PI / 4; roof.scale.z = 1.25; root.add(roof); this.box([3.1, 3.2, .1], [0, 1.6, -4.15], 0x302a24, root); for (const side of [-1, 1]) for (let y = .5; y < 3.7; y += .65) this.box([7.35, .12, .12], [0, y, side * 4.1], 0x806444, root); const collider = { minX: x - 3.6, maxX: x + 3.6, minZ: z - 4.1, maxZ: z + 4.1 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(body, roof)
  }
  private tent(x: number, z: number, face = 0) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); root.rotation.y = face; this.scene.add(root); for (const side of [-1, 1]) { const canvas = this.box([2.2, .08, 4.2], [side * .78, 1.05, 0], side < 0 ? 0x77705b : 0x6c6855, root); canvas.rotation.z = side * -.72; this.coverMeshes.push(canvas) } const collider = this.rotatedAabb(x, z, 1.65, 2.15, face); this.colliders.push(collider)
  }
  private wreckTruck(x: number, z: number, face = 0) {
    const root = new THREE.Group(); root.position.set(x, this.terrainHeight(x, z), z); root.rotation.y = face; root.rotation.z = .05; this.scene.add(root); const chassis = this.box([2.2, .55, 5.4], [0, .75, 0], 0x343936, root), cab = this.box([2.1, 1.7, 1.8], [0, 1.45, -1.75], 0x454943, root); this.box([1.65, .7, .06], [0, 1.68, -2.68], 0x202625, root); for (const side of [-1, 1]) for (const front of [-1.65, 1.55]) { const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.5, .5, .32, 10), this.mat(0x202220, .34)); wheel.position.set(side * 1.12, .52, front); wheel.rotation.z = Math.PI / 2; root.add(wheel) } const collider = { minX: x - 1.35, maxX: x + 1.35, minZ: z - 2.8, maxZ: z + 2.8 }; this.colliders.push(collider); this.vehicleColliders.push(collider); this.coverMeshes.push(chassis, cab)
  }
  private stoneWall(x1: number, z1: number, x2: number, z2: number) {
    const dx = x2 - x1, dz = z2 - z1, length = Math.hypot(dx, dz), segments = Math.ceil(length / 4.8), face = Math.atan2(dx, dz); this.minimapFeatures.walls.push({ x1, z1, x2, z2 })
    for (let index = 0; index < segments; index++) { const t = (index + .5) / segments, x = THREE.MathUtils.lerp(x1, x2, t), z = THREE.MathUtils.lerp(z1, z2, t), size = length / segments + .12, wall = this.box([.62, 1.15, size], [x, this.terrainHeight(x, z) + .575, z], index % 2 ? 0x69665d : 0x5d5c56); wall.rotation.y = face; this.coverMeshes.push(wall); const halfX = Math.abs(Math.sin(face)) * size / 2 + .4, halfZ = Math.abs(Math.cos(face)) * size / 2 + .4; this.colliders.push({ minX: x - halfX, maxX: x + halfX, minZ: z - halfZ, maxZ: z + halfZ }) }
  }
  private hedgerow(x1: number, z1: number, x2: number, z2: number) {
    const dx = x2 - x1, dz = z2 - z1, length = Math.hypot(dx, dz), segments = Math.ceil(length / 3.8), face = Math.atan2(dx, dz)
    for (let index = 0; index < segments; index++) { const t = (index + .5) / segments, x = THREE.MathUtils.lerp(x1, x2, t), z = THREE.MathUtils.lerp(z1, z2, t), size = length / segments + .5, height = 1.8 + index % 3 * .18, hedge = this.box([1.35, height, size], [x, this.terrainHeight(x, z) + height / 2, z], index % 2 ? 0x354a32 : 0x3d5236); hedge.rotation.y = face; this.coverMeshes.push(hedge); const halfX = Math.abs(Math.sin(face)) * size / 2 + .75, halfZ = Math.abs(Math.cos(face)) * size / 2 + .75; this.colliders.push({ minX: x - halfX, maxX: x + halfX, minZ: z - halfZ, maxZ: z + halfZ }) }
  }
  private deadTree(x: number, z: number, fallen = false) {
    const height = fallen ? 4.8 : 3.8, trunk = new THREE.Mesh(new THREE.CylinderGeometry(.14, .3, height, 6), this.mat(0x3e3429)); trunk.position.set(x, this.terrainHeight(x, z) + (fallen ? .38 : height / 2), z); trunk.rotation.z = fallen ? Math.PI / 2 - .12 : (this.rng() - .5) * .2; trunk.rotation.y = this.rng() * Math.PI; trunk.castShadow = true; this.scene.add(trunk); this.coverMeshes.push(trunk); this.colliders.push(fallen ? this.rotatedAabb(x, z, 2.4, .35, trunk.rotation.y) : { minX: x - .32, maxX: x + .32, minZ: z - .35, maxZ: z + .35 })
  }
  private fieldDefenses(x: number, z: number, color: number, side: -1 | 0 | 1 = 0) { for (const s of side ? [side] : [-1, 1]) for (let index = -2; index <= 2; index++) { const px = x + index * 1.05, pz = z + s * 3.4, mesh = this.box([.95, .52, .7], [px, this.terrainHeight(px, pz) + .27, pz], index % 2 ? color : color + 0x080604); this.coverMeshes.push(mesh); this.colliders.push({ minX: px - .475, maxX: px + .475, minZ: pz - .35, maxZ: pz + .35 }) } }
  private fieldTrench(x: number, z: number, alongX: boolean, length: number, earth: number) {
    const baseY = this.terrainHeight(x, z), floor = this.box(alongX ? [length, .035, 2.15] : [2.15, .035, length], [x, baseY + .018, z], 0x39342b); floor.receiveShadow = true
    const segment = length / 2 - 1.15, centers = [-(length / 4 + .575), length / 4 + .575]
    for (const side of [-1, 1]) for (const offset of centers) {
      const px = x + (alongX ? offset : side * 1.35), pz = z + (alongX ? side * 1.35 : offset), width = alongX ? segment : .72, depth = alongX ? .72 : segment
      const berm = this.box([width, .62, depth], [px, baseY + .28, pz], side < 0 ? earth : earth + 0x070503); berm.rotation[alongX ? 'z' : 'x'] = side * .08; this.coverMeshes.push(berm); this.colliders.push({ minX: px - width / 2, maxX: px + width / 2, minZ: pz - depth / 2, maxZ: pz + depth / 2 })
      for (let stake = -1; stake <= 1; stake++) { const sx = px + (alongX ? stake * width * .28 : -side * .08), sz = pz + (alongX ? -side * .08 : stake * depth * .28), post = this.box([.055, .48, .055], [sx, baseY + .38, sz], 0x4b3926); post.rotation.z = side * .08 }
    }
    for (const end of [-1, 1]) { const px = x + (alongX ? end * length / 2 : 0), pz = z + (alongX ? 0 : end * length / 2); for (const side of [-1, 1]) { const bag = this.box(alongX ? [.72, .44, .7] : [.7, .44, .72], [px + (alongX ? 0 : side * .62), baseY + .22, pz + (alongX ? side * .62 : 0)], 0x756249); this.coverMeshes.push(bag) } }
  }
  private watchtower(x: number, z: number) {
    const root = new THREE.Group(), baseY = this.terrainHeight(x, z); root.position.set(x, baseY, z); this.scene.add(root); const wood = 0x4d3b28, dark = 0x2d2c25, height = 4.25
    for (const sx of [-1.55, 1.55]) for (const sz of [-1.55, 1.55]) { const leg = this.box([.18, height, .18], [sx, height / 2, sz], wood, root); leg.rotation.z = sx * .025; leg.rotation.x = sz * -.025; this.colliders.push({ minX: x + sx - .16, maxX: x + sx + .16, minZ: z + sz - .16, maxZ: z + sz + .16 }) }
    const floor = this.box([3.8, .18, 3.8], [0, height, 0], dark, root); this.coverMeshes.push(floor); this.platforms.push({ minX: x - 1.78, maxX: x + 1.78, minZ: z - 2.12, maxZ: z + 1.78, y: baseY + height + .1 })
    for (const side of [-1, 1]) { this.box([3.9, .08, .08], [0, height + .92, side * 1.82], wood, root); this.box([.08, .9, .08], [-1.72, height + .48, side * 1.82], wood, root); this.box([.08, .9, .08], [1.72, height + .48, side * 1.82], wood, root); this.box([.08, .08, 3.7], [side * 1.82, height + .92, 0], wood, root) }
    const ladderZ = z - 1.96; for (const side of [-.34, .34]) this.box([.07, height + .35, .07], [x + side, (height + .35) / 2, ladderZ], wood); for (let y = .35; y <= height + .15; y += .38) this.box([.78, .055, .07], [x, y, ladderZ], 0x685039)
    this.ladders.push({ x, z: ladderZ, y0: baseY + .65, y1: baseY + height + 1.82, face: 0 })
  }
  private naturalMap(theme: Campaign['theme'], palette: number[]) {
    const halfWidth = this.mapBounds.halfWidth, halfDepth = this.mapBounds.halfDepth, layout = this.campaign.layout, blocks = layout?.blocks ?? (theme === 'jungle' ? 'forest' : theme === 'loess' || theme === 'alpine' ? 'terraces' : 'village'), density = layout?.density ?? 1, jungle = theme === 'jungle', alpine = theme === 'alpine'
    const route = [{ x: 0, z: halfDepth }, ...[...this.campaign.flags].sort((a, b) => b.z - a.z), { x: 0, z: -halfDepth }]
    for (let index = 0; index < route.length - 1; index++) this.fieldRoad(route[index].x, route[index].z, route[index + 1].x, route[index + 1].z, jungle ? 3.2 : 4.2, theme === 'loess' ? 0x927a58 : alpine ? 0x606761 : 0x62604e)
    this.minimapFeatures.roads.push({ points: route.map(point => ({ x: point.x, z: point.z })), width: jungle ? 3.2 : 4.2 })
    const defenseSide: -1 | 0 | 1 = this.campaign.rule === 'conquest' ? 0 : this.campaign.attacker === 'ally' ? 1 : -1
    for (const [index, flag] of this.campaign.flags.entries()) { this.fieldRoad(0, flag.z, flag.x, flag.z, 2.4, theme === 'loess' ? 0x8d7453 : 0x59594b); this.minimapFeatures.roads.push({ points: [{ x: 0, z: flag.z }, { x: flag.x, z: flag.z }], width: 2.4 }); this.fieldDefenses(flag.x, flag.z, jungle ? 0x4c5238 : 0x6d5d45, defenseSide); const trenchX = THREE.MathUtils.clamp(flag.x + (index % 2 ? -5.5 : 5.5), -18, 18), trenchZ = flag.z + (index % 2 ? 7.5 : -7.5); this.fieldTrench(trenchX, trenchZ, index % 2 === 0, 9.5, theme === 'loess' ? 0x806746 : jungle ? 0x455038 : 0x665b45) }
    if (blocks === 'village') {
      const wallA = theme === 'loess' ? 0x846d4d : jungle ? 0x4e513b : 0x6a6451, wallB = theme === 'loess' ? 0x796346 : 0x615e4d, roofA = alpine ? 0x3f4642 : 0x494435
      for (const flag of this.campaign.flags.filter((_, index) => index % 2 === 1).slice(0, 3)) {
        const cx = THREE.MathUtils.clamp(flag.x + (this.rng() - .5) * 9, -halfWidth + 7, halfWidth - 7), cz = THREE.MathUtils.clamp(flag.z + (this.rng() - .5) * 7, -halfDepth + 8, halfDepth - 8), huts = 3 + Math.round(this.rng())
        for (let index = 0; index < huts; index++) { const angle = index / huts * Math.PI * 2 + this.rng() * .6, radius = 5.6 + this.rng() * 1.4; this.fieldHut(cx + Math.sin(angle) * radius, cz + Math.cos(angle) * radius, index % 2 ? wallB : wallA, index % 2 ? 0x403b31 : roofA) }
        this.stoneWall(cx - 4.5, cz + (this.rng() - .5) * 3, cx + 4.5, cz + (this.rng() - .5) * 3); this.well(cx, cz)
      }
    }
    else for (const flag of this.campaign.flags.filter((_, index) => index % 2 === 1)) { const side = flag.x >= 0 ? -1 : 1, hutX = THREE.MathUtils.clamp(flag.x + side * 8, -22, 22); this.fieldHut(hutX, flag.z + 5.5, theme === 'loess' ? 0x846d4d : jungle ? 0x4e513b : 0x6a6451, alpine ? 0x3f4642 : 0x494435); this.fieldHut(hutX + side * 5.5, flag.z - 2, theme === 'loess' ? 0x796346 : 0x615e4d, 0x403b31) }
    const count = Math.round((jungle ? 62 : alpine ? 42 : theme === 'green' ? 34 : 18) * density)
    if (blocks === 'forest') {
      const blobs = 2 + Math.round(this.rng()), centers: { x: number; z: number }[] = []
      for (let tries = 0; tries < 30 && centers.length < blobs; tries++) { const x = (this.rng() * 2 - 1) * (halfWidth - 8), z = (this.rng() * 2 - 1) * (halfDepth - 6); if (this.campaign.flags.some(flag => Math.hypot(flag.x - x, flag.z - z) < 8) || this.nearRoad(x, z, 4) || centers.some(center => Math.hypot(center.x - x, center.z - z) < 20)) continue; centers.push({ x, z }) }
      for (const center of centers) for (let index = 0; index < Math.round(count / centers.length); index++) { const x = center.x + (this.rng() - .5) * 13, z = center.z + (this.rng() - .5) * 13; if (this.campaign.flags.some(flag => Math.hypot(flag.x - x, flag.z - z) < 8) || this.nearRoad(x, z, 4)) continue; this.tree(x, z, jungle, alpine) }
    }
    else for (let i = 0; i < count; i++) { const side = i % 2 ? -1 : 1, x = side * (halfWidth * .32 + this.rng() * halfWidth * .5), z = -(halfDepth + 1) + this.rng() * (halfDepth + 1) * 2; this.tree(x, z, jungle, alpine) }
    const rocks = Math.round((alpine ? 22 : theme === 'loess' ? 18 : jungle ? 12 : 8) * density)
    for (let i = 0; i < rocks; i++) { const side = i % 2 ? -1 : 1, x = side * (halfWidth * .3 + this.rng() * halfWidth * .4), z = -(halfDepth - 1) + this.rng() * (halfDepth - 1) * 2, scale = .7 + this.rng() * 1.5; const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(scale, 0), this.mat(alpine ? 0x555c58 : palette[2])); rock.position.set(x, this.terrainHeight(x, z) + scale * .55, z); rock.scale.y = .65; rock.rotation.set(this.rng(), this.rng(), this.rng()); rock.castShadow = rock.receiveShadow = true; this.scene.add(rock); this.colliders.push({ minX: x - scale * .8, maxX: x + scale * .8, minZ: z - scale * .8, maxZ: z + scale * .8 }); this.coverMeshes.push(rock) }
    if (theme === 'loess') for (const z of [-43, -12, 19, 47]) { this.box([18, 2.2, 3.5], [-17, 1, z], 0x776044); this.box([18, 1.4, 3.5], [17, .65, z + 5], 0x8b7354) }
    if (blocks === 'terraces') { const lines = 2 + Math.round(this.rng()); for (let index = 0; index < lines; index++) { const z = (index - (lines - 1) / 2) * halfDepth * .55 + (this.rng() - .5) * 10, cx = (index % 2 ? -1 : 1) * (7 + this.rng() * 7); this.stoneWall(cx - 6 - this.rng() * 2, z, cx + 6 + this.rng() * 2, z + (this.rng() - .5) * 4) } }
    if (theme === 'green' || theme === 'alpine') for (const z of [-24, 24]) { this.cover([5.5, .8, .7], [-4.6, .4, z], 0x514a39); this.cover([4, .8, .7], [5.2, .4, z + 3], 0x514a39) }
    if (theme === 'green') { this.hedgerow(-23, -7, -12, -4); this.hedgerow(11, 18, 23, 22) }
    if (jungle) for (const z of [-40, -8, 27]) { this.cover([3.8, .75, .8], [-4.8, .38, z], 0x454b35); this.cover([3.2, .75, .8], [5.1, .38, z + 4], 0x454b35) }
    this.watchtower(theme === 'jungle' ? -18 : 18, this.campaign.flags[Math.floor(this.campaign.flags.length / 2)]?.z ?? 0)
  }
  private tree(x: number, z: number, jungle: boolean, pine: boolean) {
    const ground = this.terrainHeight(x, z), height = (jungle ? 4.5 : 3.5) + this.rng() * 3, position = new THREE.Vector3(), scale = new THREE.Vector3()
    this.instance(jungle ? 'jungle-trunk' : 'trunk', trunkGeometry, this.mat(jungle ? 0x443822 : 0x51412b), new THREE.Matrix4().compose(position.set(x, ground + height / 2, z), identityQuaternion, scale.set(1, height, 1)), undefined, true, true)
    if (pine) for (let i = 0; i < 3; i++) { const radius = 1.7 - i * .25; this.instance('pine-crown', pineCrownGeometry, this.mat(0x30483b), new THREE.Matrix4().compose(position.set(x, ground + height - 1 + i * 1.05, z), identityQuaternion, scale.set(radius, 2.8, radius)), this.shadeRatio(0x30483b), true, false) }
    else { const radius = jungle ? 2 : 1.6, base = jungle ? 0x294a31 : 0x405a3a; this.instance(jungle ? 'jungle-crown' : 'crown', broadCrownGeometry, this.mat(base), new THREE.Matrix4().compose(position.set(x, ground + height, z), identityQuaternion, scale.set(1.2 * radius, .8 * radius, radius)), this.shadeRatio(base), true, false) }
  }
}
