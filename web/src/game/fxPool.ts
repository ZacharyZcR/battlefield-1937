import * as THREE from 'three'

export type PooledParticle = {
  mesh: THREE.Sprite
  velocity: THREE.Vector3
  age: number
  life: number
  gravity: number
  grow: number
  baseOpacity: number
  pooled: boolean
}

export type PooledCasing = {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  angular: THREE.Vector3
  age: number
  bounced: boolean
  pooled: boolean
}

/**
 * Shared geometry pools for short-lived combat FX.
 * Each particle keeps its own material so opacity fades stay independent.
 */
export class FxPool {
  private readonly particleMap = this.createParticleMap()
  private readonly freeParticles: PooledParticle[] = []
  private readonly freeCasings: PooledCasing[] = []
  private readonly freeTracers: THREE.Line[] = []
  private readonly activeTracers: { line: THREE.Line; born: number }[] = []
  private readonly casingGeoRifle = new THREE.CylinderGeometry(.011, .011, .052, 6)
  private readonly casingGeoPistol = new THREE.CylinderGeometry(.009, .009, .038, 6)
  private readonly casingMat = new THREE.MeshStandardMaterial({ color: 0xc4a14d, roughness: .5, metalness: .35 })
  readonly maxParticles = 180
  readonly maxCasings = 28
  readonly maxTracers = 48

  private createParticleMap() {
    const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64
    const context = canvas.getContext('2d')!, gradient = context.createRadialGradient(32, 32, 2, 32, 32, 31)
    gradient.addColorStop(0, 'rgba(255,255,255,.95)'); gradient.addColorStop(.42, 'rgba(255,255,255,.72)'); gradient.addColorStop(.78, 'rgba(255,255,255,.18)'); gradient.addColorStop(1, 'rgba(255,255,255,0)')
    context.fillStyle = gradient; context.fillRect(0, 0, 64, 64)
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture
  }

  acquireParticle(scene: THREE.Scene, position: THREE.Vector3, velocity: THREE.Vector3, color: number, size: number, life: number, gravity: number, grow: number, opacity: number): PooledParticle {
    let item = this.freeParticles.pop()
    if (!item) {
      const material = new THREE.SpriteMaterial({ map: this.particleMap, color, transparent: true, opacity, depthWrite: false })
      const mesh = new THREE.Sprite(material)
      item = { mesh, velocity: new THREE.Vector3(), age: 0, life, gravity, grow, baseOpacity: opacity, pooled: true }
    }
    const material = item.mesh.material as THREE.SpriteMaterial
    material.color.setHex(color)
    material.opacity = opacity
    material.depthWrite = false
    item.mesh.position.copy(position)
    item.mesh.scale.setScalar(Math.max(.01, size))
    item.mesh.visible = true
    item.velocity.copy(velocity)
    item.age = 0
    item.life = life
    item.gravity = gravity
    item.grow = grow
    item.baseOpacity = opacity
    scene.add(item.mesh)
    return item
  }

  releaseParticle(scene: THREE.Scene, item: PooledParticle) {
    scene.remove(item.mesh)
    item.mesh.visible = false
    if (this.freeParticles.length < this.maxParticles) this.freeParticles.push(item)
  }

  acquireCasing(scene: THREE.Scene, sidearm: boolean): PooledCasing {
    let item = this.freeCasings.pop()
    if (!item) {
      const mesh = new THREE.Mesh(sidearm ? this.casingGeoPistol : this.casingGeoRifle, this.casingMat)
      item = { mesh, velocity: new THREE.Vector3(), angular: new THREE.Vector3(), age: 0, bounced: false, pooled: true }
    } else {
      item.mesh.geometry = sidearm ? this.casingGeoPistol : this.casingGeoRifle
      item.mesh.material = this.casingMat
    }
    item.age = 0
    item.bounced = false
    item.mesh.visible = true
    scene.add(item.mesh)
    return item
  }

  releaseCasing(scene: THREE.Scene, item: PooledCasing) {
    scene.remove(item.mesh)
    item.mesh.visible = false
    if (this.freeCasings.length < this.maxCasings) this.freeCasings.push(item)
  }

  spawnTracer(scene: THREE.Scene, start: THREE.Vector3, end: THREE.Vector3, color: number) {
    let line = this.freeTracers.pop()
    if (!line) {
      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3))
      const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: .72 })
      line = new THREE.Line(geometry, material)
      line.frustumCulled = false
    }
    const material = line.material as THREE.LineBasicMaterial
    material.color.setHex(color)
    material.opacity = .72
    const positions = line.geometry.getAttribute('position') as THREE.BufferAttribute
    positions.setXYZ(0, start.x, start.y, start.z)
    positions.setXYZ(1, end.x, end.y, end.z)
    positions.needsUpdate = true
    line.geometry.computeBoundingSphere()
    scene.add(line)
    this.activeTracers.push({ line, born: performance.now() })
  }

  /** 统一驱动所有曳光淡出（每帧一次，替代每发一个 rAF）。 */
  updateTracers(scene: THREE.Scene, now = performance.now()) {
    for (let index = this.activeTracers.length - 1; index >= 0; index--) {
      const tracer = this.activeTracers[index], t = Math.min((now - tracer.born) / 110, 1)
      ;(tracer.line.material as THREE.LineBasicMaterial).opacity = (1 - t) * .72
      if (t >= 1) { this.activeTracers.splice(index, 1); scene.remove(tracer.line); if (this.freeTracers.length < this.maxTracers) this.freeTracers.push(tracer.line) }
    }
  }
}
