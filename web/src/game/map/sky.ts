import * as THREE from 'three'

function glowTexture(inner: string, outer: string) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 64; const context = canvas.getContext('2d')!
  const gradient = context.createRadialGradient(32, 32, 2, 32, 32, 31); gradient.addColorStop(0, inner); gradient.addColorStop(.42, outer); gradient.addColorStop(1, 'rgba(255,244,220,0)')
  context.fillStyle = gradient; context.fillRect(0, 0, 64, 64)
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture
}

function cloudTexture() {
  const canvas = document.createElement('canvas'); canvas.width = 128; canvas.height = 64; const context = canvas.getContext('2d')!
  let seed = 20260720; const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296 }
  for (let index = 0; index < 14; index++) { const x = 20 + random() * 88, y = 24 + random() * 22, r = 9 + random() * 15, gradient = context.createRadialGradient(x, y, 0, x, y, r); gradient.addColorStop(0, 'rgba(255,255,255,.34)'); gradient.addColorStop(1, 'rgba(255,255,255,0)'); context.fillStyle = gradient; context.beginPath(); context.ellipse(x, y, r, r * (.5 + random() * .3), 0, 0, Math.PI * 2); context.fill() }
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; return texture
}

export class SkyDome {
  private material: THREE.ShaderMaterial
  private sun: THREE.Sprite
  private clouds: THREE.Sprite[] = []
  private cloudMaterial: THREE.SpriteMaterial

  constructor(scene: THREE.Scene, background: number, fog: number, theme: string, weather: string) {
    const wet = weather.includes('雨'), overcast = wet || weather === '阴霾', storm = weather === '雷雨' || weather === '暴雨'
    const horizon = new THREE.Color(fog).lerp(new THREE.Color(0xcfc0a0), .24), top = new THREE.Color(background).multiplyScalar(.7).lerp(new THREE.Color(theme === 'alpine' ? 0x50697c : 0x39485a), .5)
    const dim = storm ? .52 : overcast ? .7 : 1, grey = new THREE.Color(0x6e7378)
    if (dim < 1) { horizon.multiplyScalar(dim).lerp(grey.clone().multiplyScalar(dim), .28); top.multiplyScalar(dim).lerp(grey.clone().multiplyScalar(dim * .8), .28) }
    this.material = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, uniforms: { topColor: { value: top }, horizonColor: { value: horizon } }, vertexShader: 'varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }', fragmentShader: 'uniform vec3 topColor; uniform vec3 horizonColor; varying vec3 vPos; void main(){ float h = clamp(normalize(vPos).y, 0.0, 1.0); gl_FragColor = vec4(mix(horizonColor, topColor, pow(h, 0.55)), 1.0); }' })
    const dome = new THREE.Mesh(new THREE.SphereGeometry(400, 28, 14), this.material); dome.frustumCulled = false; dome.renderOrder = -10; scene.add(dome)
    this.sun = new THREE.Sprite(new THREE.SpriteMaterial({ map: glowTexture('rgba(255,250,235,1)', 'rgba(255,242,208,.85)'), color: 0xfff2d0, transparent: true, opacity: overcast ? 0 : .95, fog: false, depthWrite: false }))
    this.sun.position.set(-38, 65, 25).normalize().multiplyScalar(360); this.sun.scale.setScalar(52); this.sun.frustumCulled = false; this.sun.visible = !overcast; scene.add(this.sun)
    this.cloudMaterial = new THREE.SpriteMaterial({ map: cloudTexture(), color: storm ? 0x484c52 : overcast ? 0x878b8f : 0xf4f1e8, transparent: true, opacity: overcast ? .82 : .58, depthWrite: false })
    const count = overcast ? 10 : 7
    for (let index = 0; index < count; index++) {
      const cloud = new THREE.Sprite(this.cloudMaterial); const spread = index / count
      cloud.position.set(-260 + spread * 520 + (index % 3) * 37, (storm ? 55 : 78) + (index % 4) * 12, -240 + (index * 97) % 480); cloud.scale.set((storm ? 150 : 95) + (index % 3) * 34, (storm ? 46 : 30) + (index % 3) * 9, 1); cloud.frustumCulled = false; scene.add(cloud); this.clouds.push(cloud)
    }
  }

  update(dt: number) {
    for (const cloud of this.clouds) { cloud.position.x += dt * (.3 + (cloud.position.y % 7) * .06); if (cloud.position.x > 300) cloud.position.x = -300 }
  }
}
