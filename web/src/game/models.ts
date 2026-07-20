import * as THREE from 'three'

export type Team = 'ally' | 'enemy'
export type BoxFn = (s: [number, number, number], p: [number, number, number], c: number, parent: THREE.Object3D) => THREE.Mesh
export type MatFn = (c: number, r?: number) => THREE.MeshStandardMaterial

export type SoldierMesh = {
  root: THREE.Group
  torso: THREE.Group
  body: THREE.Mesh
  head: THREE.Mesh
  weapon: THREE.Group
  muzzle: THREE.Mesh
  legs: THREE.Group[]
  arms: THREE.Mesh[]
  squadTag?: THREE.Mesh
}

export type TankMesh = {
  root: THREE.Group
  turret: THREE.Group
  pitch: THREE.Group
  barrel: THREE.Mesh
  muzzle: THREE.Object3D
  coaxMuzzle: THREE.Object3D
  hitbox: THREE.Mesh
  wheels: THREE.Mesh[]
}

export type TransportMesh = {
  root: THREE.Group
  hitbox: THREE.Mesh
  wheels: THREE.Mesh[]
}

export type PlaneMesh = {
  root: THREE.Group
  hitbox: THREE.Mesh
  prop: THREE.Group
}

function cyl(mat: MatFn, rTop: number, rBot: number, h: number, color: number, segs = 10, roughness = .55) {
  return new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBot, h, segs), mat(color, roughness))
}

/** Infantry silhouette with torso hierarchy for stance poses. */
export function buildSoldier(opts: {
  team: Team
  role: string
  cpc: boolean
  inSquad: boolean
  box: BoxFn
  mat: MatFn
}): SoldierMesh {
  const { team, role, cpc, inSquad, box, mat } = opts
  const root = new THREE.Group()
  const torso = new THREE.Group(); root.add(torso)
  const tunic = team === 'ally' ? cpc ? 0x777d72 : 0x4f6b61 : 0x8a7b4b
  const pants = team === 'ally' ? cpc ? 0x5f665c : 0x3f463f : 0x575438
  const boot = 0x29251f
  const leather = 0x423728
  const metal = 0x242927

  // Torso / neck / head
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(.31, .72, 5, 9), mat(tunic)); body.position.y = 1.37; body.castShadow = true; torso.add(body)
  box([.72, .12, .38], [0, 1.72, 0], tunic, torso) // shoulders
  const neck = cyl(mat, .09, .11, .12, 0xb88968, 8, .9); neck.position.y = 1.92; torso.add(neck)
  const head = new THREE.Mesh(new THREE.SphereGeometry(.27, 12, 9), mat(0xb88968)); head.position.y = 2.14; head.castShadow = true; torso.add(head)
  // Simple face shadow (eye sockets) so units read at distance
  box([.16, .04, .04], [0, 2.16, -.24], 0x3a2a22, torso)
  box([.06, .035, .04], [-.07, 2.12, -.25], 0x2a1f18, torso)
  box([.06, .035, .04], [.07, 2.12, -.25], 0x2a1f18, torso)

  const helmetColor = team === 'ally' ? cpc ? 0x777d72 : 0x3d5149 : 0x68613c
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(.32, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(helmetColor))
  helmet.position.y = cpc ? 2.29 : 2.31
  if (cpc) helmet.scale.set(1.05, .38, 1.12)
  torso.add(helmet)
  if (cpc) {
    box([.38, .075, .34], [0, 2.35, 0], helmetColor, torso)
    box([.29, .035, .12], [0, 2.3, -.27], helmetColor, torso)
    box([.045, .045, .025], [0, 2.37, -.183], 0xb52e28, torso)
  } else if (team === 'enemy') {
    const brim = new THREE.Mesh(new THREE.CylinderGeometry(.35, .37, .045, 12), mat(helmetColor)); brim.position.y = 2.3; torso.add(brim)
    box([.035, .05, .025], [0, 2.39, -.285], 0xd8b840, torso)
  } else {
    box([.045, .045, .025], [0, 2.39, -.292], 0x2050b0, torso)
    box([.02, .02, .028], [0, 2.39, -.307], 0xe8e8e8, torso)
  }

  // Belt + webbing
  box([.66, .075, .42], [0, 1.31, 0], leather, torso)
  box([.1, .12, .08], [-.22, 1.31, .2], leather, torso)
  box([.1, .12, .08], [.22, 1.31, .2], leather, torso)
  box([.09, .14, .09], [.28, 1.28, -.05], 0x3a4638, torso) // canteen
  for (const px of [-.22, .22]) {
    const strap = box([.055, .72, .035], [px, 1.51, -.292], leather, torso)
    strap.rotation.z = px * -.16
  }
  // Back pack / bedroll
  box([.43, .53, .18], [0, 1.45, .29], team === 'ally' ? 0x465043 : 0x656044, torso)
  box([.38, .12, .2], [0, 1.72, .32], 0x4a4034, torso)

  // Role kit
  if (role === 'medic') {
    box([.28, .22, .16], [-.34, 1.28, .08], 0xe5e2d2, torso)
    box([.12, .04, .18], [-.34, 1.4, .08], 0xb73c34, torso)
    box([.04, .12, .18], [-.34, 1.4, .08], 0xb73c34, torso)
  } else if (role === 'support') {
    box([.18, .2, .14], [-.32, 1.3, .12], metal, torso)
    box([.18, .2, .14], [-.32, 1.3, -.08], metal, torso)
  } else if (role === 'anti-tank') {
    box([.26, .28, .18], [-.36, 1.35, .05], 0x4a4030, torso)
  } else if (role === 'scout') {
    const glass = cyl(mat, .04, .04, .12, 0x1a221c, 8, .25); glass.rotation.z = Math.PI / 2; glass.position.set(.32, 1.42, -.18); torso.add(glass)
    const glass2 = glass.clone(); glass2.position.x = .42; torso.add(glass2)
    box([.14, .04, .04], [.37, 1.42, -.18], metal, torso)
  }

  // Arms + hands
  const arms: THREE.Mesh[] = []
  for (const px of [-.38, .38]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(.095, .5, 4, 7), mat(tunic))
    arm.position.set(px, 1.45, -.18); arm.rotation.x = -.9; arm.castShadow = true; torso.add(arm); arms.push(arm)
    const hand = new THREE.Mesh(new THREE.SphereGeometry(.08, 8, 6), mat(0xb88968, .9))
    hand.position.set(px * .55, 1.12, -.55); torso.add(hand)
  }

  // Legs with puttees / gaiters
  const legs = [-.18, .18].map(px => {
    const pivot = new THREE.Group(); pivot.position.set(px, 1, 0)
    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(.11, .58, 4, 7), mat(pants))
    mesh.position.y = -.38; mesh.castShadow = true; pivot.add(mesh)
    if (team === 'enemy') {
      // Japanese puttees
      for (const y of [-.52, -.62, -.72]) box([.24, .06, .24], [0, y, 0], 0x6a6348, pivot)
    } else {
      box([.22, .1, .22], [0, -.58, 0], pants, pivot)
    }
    box([.24, .22, .38], [0, -.79, -.045], boot, pivot)
    box([.2, .08, .12], [0, -.72, .16], boot, pivot) // heel
    root.add(pivot)
    return pivot
  })

  // Role badge
  const roleColor = role === 'medic' ? 0xe5e2d2 : role === 'support' ? 0xd2ad55 : role === 'anti-tank' ? 0xc86f43 : role === 'scout' ? 0x88a879 : 0x6f8c75
  const roleBadge = new THREE.Mesh(new THREE.BoxGeometry(.13, .13, .035), new THREE.MeshBasicMaterial({ color: roleColor }))
  roleBadge.position.set(.34, 1.6, -.28); torso.add(roleBadge)
  if (role === 'medic') {
    const cross = new THREE.Mesh(new THREE.BoxGeometry(.06, .16, .04), new THREE.MeshBasicMaterial({ color: 0xb73c34 }))
    cross.position.set(.34, 1.6, -.305); torso.add(cross)
    const bar = cross.clone(); bar.geometry = new THREE.BoxGeometry(.16, .06, .04); torso.add(bar)
  }

  // Weapons
  const weapon = new THREE.Group(); torso.add(weapon)
  const wood = cpc ? 0x55351f : team === 'enemy' ? 0x5f4326 : 0x4b2e1b
  let muzzleZ = -1.28
  if (role === 'assault') {
    box([.12, .12, .72], [.18, 1.36, -.48], metal, weapon)
    box([.14, .15, .42], [.18, 1.34, .06], wood, weapon)
    const barrel = box([.055, .055, .58], [.18, 1.36, -1.13], metal, weapon); barrel.rotation.x = -.03
    box([.08, .06, .08], [.18, 1.42, -.2], wood, weapon) // rear sight
    const magazine = box(cpc ? [.12, .42, .18] : [.16, .4, .14], [cpc ? .18 : team === 'enemy' ? .18 : -.02, 1.12, -.5], metal, weapon)
    if (team === 'ally' && !cpc) magazine.rotation.z = Math.PI / 2
    muzzleZ = -1.44
  } else if (role === 'support') {
    box([.14, .14, 1.05], [.18, 1.35, -.42], wood, weapon)
    box([.11, .11, .9], [.18, 1.36, -1.25], metal, weapon)
    box([.2, .28, .25], [.18, 1.61, -.65], metal, weapon)
    box([.16, .08, .2], [.18, 1.2, -.55], metal, weapon)
    for (const side of [-.09, .09]) {
      const leg = box([.035, .55, .035], [.18 + side, 1.03, -1.62], metal, weapon)
      leg.rotation.z = side < 0 ? -.24 : .24
    }
    muzzleZ = -1.72
  } else if (role === 'anti-tank' && team === 'enemy') {
    box([.15, .15, 1.15], [.18, 1.34, -.35], wood, weapon)
    box([.16, .16, 1.15], [.18, 1.37, -1.42], metal, weapon)
    box([.24, .34, .2], [.18, 1.13, -.82], metal, weapon)
    for (const side of [-.12, .12]) {
      const leg = box([.035, .7, .035], [.18 + side, 1.02, -2], metal, weapon)
      leg.rotation.z = side < 0 ? -.27 : .27
    }
    muzzleZ = -2.12
  } else {
    const rifle = box([.1, .1, 1.45], [.18, 1.35, -.48], wood, weapon); rifle.rotation.x = -.15
    box([.065, .065, .82], [.18, 1.35, -1.32], metal, weapon)
    box([.08, .12, .18], [.18, 1.22, -.15], wood, weapon) // stock grip
    box([.05, .05, .08], [.18, 1.42, -.55], metal, weapon)
    if (role === 'scout') {
      const scope = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .5, 8), mat(0x252a28, .3))
      scope.rotation.x = Math.PI / 2; scope.position.set(.18, 1.53, -.72); weapon.add(scope)
      box([.04, .04, .06], [.18, 1.48, -.5], metal, weapon)
      box([.04, .04, .06], [.18, 1.48, -.95], metal, weapon)
    }
    if (role === 'anti-tank' && team === 'ally') {
      // Bundled satchel charges on weapon hip for KMT AT
      box([.14, .14, .2], [-.05, 1.15, .1], 0x4a4030, weapon)
    }
    muzzleZ = -1.75
  }
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffc45e }))
  muzzle.position.set(.18, 1.34, muzzleZ); muzzle.scale.set(1, 1, 2.4); muzzle.visible = false; weapon.add(muzzle)

  const squadTag = inSquad ? new THREE.Mesh(new THREE.OctahedronGeometry(.13), new THREE.MeshBasicMaterial({ color: 0x86ffa6, depthTest: false })) : undefined
  if (squadTag) { squadTag.position.y = 2.85; squadTag.renderOrder = 7; torso.add(squadTag) }

  return { root, torso, body, head, weapon, muzzle, legs, arms, squadTag }
}

/** WWII light/medium/SPG tank with readable silhouette. */
export function buildTank(opts: {
  color: number
  team: Team
  style: 'light' | 'medium' | 'spg'
  box: BoxFn
  mat: MatFn
}): TankMesh {
  const { color, team, style, box, mat } = opts
  const root = new THREE.Group()
  const dark = 0x242824
  const track = 0x323833
  const steel = 0x292e2a
  const scale = style === 'light' ? .88 : style === 'spg' ? 1.02 : 1
  const hullW = 2.4 * scale, hullH = .8 * scale, hullL = 4.4 * scale

  const hitbox = box([hullW, hullH, hullL], [0, .72 * scale, 0], color, root)
  // Lower hull / sponsons
  box([hullW + .3, .38 * scale, 3.5 * scale], [0, .3 * scale, 0], track, root)
  // Front glacis (angled plate)
  const glacis = box([hullW * .92, .12, 1.1 * scale], [0, 1.05 * scale, -1.85 * scale], color, root)
  glacis.rotation.x = .42
  // Rear engine deck
  box([hullW * .85, .18, 1.1 * scale], [0, 1.15 * scale, 1.55 * scale], color, root)
  box([.35, .22, .45], [0, 1.32 * scale, 1.75 * scale], dark, root) // engine hatch
  // Exhaust
  for (const x of [-.55, .55]) {
    const pipe = cyl(mat, .05, .05, .55, dark, 8, .4)
    pipe.rotation.z = Math.PI / 2; pipe.position.set(x, 1.05 * scale, 2.05 * scale); root.add(pipe)
  }
  // Headlights
  for (const x of [-.85, .85]) {
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(.08, 8, 6), mat(0xd8d0a8, .35))
    lamp.position.set(x * scale, .95 * scale, -2.15 * scale); root.add(lamp)
  }
  // Tracks + road wheels
  const wheels: THREE.Mesh[] = []
  for (const x of [-1.28 * scale, 1.28 * scale]) {
    box([.34, .55 * scale, 4.5 * scale], [x, .42 * scale, 0], dark, root)
    // Track top run
    box([.22, .08, 4.2 * scale], [x, .72 * scale, 0], 0x2a2e2a, root)
    // Sprocket / idler
    for (const z of [-1.95 * scale, 1.95 * scale]) {
      const big = new THREE.Mesh(new THREE.CylinderGeometry(.36 * scale, .36 * scale, .2, 14), mat(0x343934, .55))
      big.rotation.z = Math.PI / 2; big.position.set(x, .42 * scale, z); root.add(big); wheels.push(big)
    }
    for (const z of [-1.1, -.35, .4, 1.15].map(v => v * scale)) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.28 * scale, .28 * scale, .18, 12), mat(0x343934, .55))
      wheel.rotation.z = Math.PI / 2; wheel.position.set(x, .38 * scale, z); root.add(wheel); wheels.push(wheel)
    }
  }
  // Hull MG port
  box([.2, .12, .18], [.7 * scale, .95 * scale, -2.05 * scale], steel, root)
  const hullMg = cyl(mat, .03, .035, .45, steel, 7, .35)
  hullMg.rotation.x = Math.PI / 2; hullMg.position.set(.7 * scale, .95 * scale, -2.25 * scale); root.add(hullMg)

  // Turret
  const turret = new THREE.Group(); turret.position.y = 1.28 * scale; root.add(turret)
  if (style === 'spg') {
    // Open-top casemate feel
    box([1.9 * scale, .55 * scale, 2.2 * scale], [0, .22, .1], color, turret)
    box([1.7 * scale, .12, 1.8 * scale], [0, .52, .05], dark, turret)
    for (const x of [-.85, .85]) box([.1, .45, 1.6], [x * scale, .35, .15], color, turret)
  } else {
    const tw = style === 'light' ? 1.35 : 1.65, tl = style === 'light' ? 1.5 : 1.8, th = style === 'light' ? .52 : .62
    box([tw * scale, th * scale, tl * scale], [0, .26, -.05], color, turret)
    // Cupola
    const cupola = cyl(mat, .22 * scale, .26 * scale, .18 * scale, color, 10, .75)
    cupola.position.set(style === 'light' ? 0 : -.28 * scale, .62 * scale, -.15); turret.add(cupola)
    box([.12, .08, .12], [style === 'light' ? 0 : -.28 * scale, .74 * scale, -.15], dark, turret) // hatch
  }
  // Antenna
  const antenna = cyl(mat, .015, .015, 1.1 * scale, 0x1a1c1a, 6, .4)
  antenna.position.set(.55 * scale, .9 * scale, .4); turret.add(antenna)

  // National mark
  const mark = box([.28, .28, .02], [0, .4, style === 'spg' ? .9 : -.85 * scale], team === 'ally' ? 0xb52e28 : 0xd8b840, turret)
  if (team === 'ally') box([.08, .28, .025], [0, .4, mark.position.z - .01], 0xf0e8d0, turret)

  const pitch = new THREE.Group(); pitch.position.y = style === 'spg' ? .35 : .28; pitch.position.z = style === 'spg' ? -.4 : 0; turret.add(pitch)
  const barrelLen = style === 'spg' ? 3.4 : style === 'light' ? 2.2 : 2.8
  const barrelR = style === 'spg' ? .1 : .075
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(barrelR * .85, barrelR, barrelLen * scale, 10), mat(steel, .35))
  barrel.rotation.x = Math.PI / 2; barrel.position.set(0, 0, -barrelLen * .5 * scale - .3); pitch.add(barrel)
  // Muzzle brake / ring
  const brake = cyl(mat, barrelR * 1.35, barrelR * 1.2, .18, steel, 8, .35)
  brake.rotation.x = Math.PI / 2; brake.position.set(0, 0, -barrelLen * scale - .15); pitch.add(brake)
  // Mantlet
  box([.55 * scale, .4 * scale, .35 * scale], [0, 0, -.15], color, pitch)

  const muzzle = new THREE.Object3D(); muzzle.position.set(0, 0, -barrelLen * scale - .35); pitch.add(muzzle)
  const coax = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, 1.05, 7), mat(0x242925, .4))
  coax.rotation.x = Math.PI / 2; coax.position.set(.42 * scale, -.12, -1.25 * scale); pitch.add(coax)
  const coaxMuzzle = new THREE.Object3D(); coaxMuzzle.position.set(.42 * scale, -.12, -1.8 * scale); pitch.add(coaxMuzzle)

  root.traverse(child => { if (child instanceof THREE.Mesh) child.castShadow = true })
  return { root, turret, pitch, barrel, muzzle, coaxMuzzle, hitbox, wheels }
}

/** Soft-skin truck with cab, bed, and fenders. */
export function buildTransport(opts: {
  color: number
  team: Team
  captured: boolean
  box: BoxFn
  mat: MatFn
}): TransportMesh {
  const { color, team, captured, box, mat } = opts
  const root = new THREE.Group()
  const dark = 0x202320
  const canvas = captured ? 0x6a6454 : team === 'ally' ? 0x5a6a58 : 0x6e6a4e
  const wheels: THREE.Mesh[] = []

  const hitbox = box([2.15, .85, 4.8], [0, 1, 0], color, root)
  // Cab
  box([2, .95, 1.55], [0, 1.72, 1.25], color, root)
  // Windshield frame + glass tint
  box([1.7, .55, .06], [0, 2.05, .55], 0x2a322c, root)
  const glass = box([1.55, .42, .04], [0, 2.08, .52], 0x6a8a9a, root)
  glass.material = mat(0x6a8a9a, .25)
  // Hood / grille
  box([1.85, .55, 1.1], [0, 1.35, 2.35], color, root)
  for (const y of [1.2, 1.35, 1.5]) box([1.55, .04, .06], [0, y, 2.88], dark, root)
  // Headlights
  for (const x of [-.72, .72]) {
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(.1, 8, 6), mat(0xe8dcb0, .3))
    lamp.position.set(x, 1.25, 2.85); root.add(lamp)
  }
  // Bumper
  box([2.1, .12, .18], [0, .85, 2.95], dark, root)
  // Fenders
  for (const x of [-1.05, 1.05]) {
    box([.28, .1, 1.1], [x, .95, 1.45], color, root)
    box([.28, .1, 1.1], [x, .95, -1.55], color, root)
  }
  // Cargo bed
  box([2.05, .12, 2.5], [0, 1.48, -1.2], 0x3b4238, root)
  for (const x of [-.72, .72]) box([.12, .62, 2.6], [x, 1.77, -1.18], 0x31382f, root)
  box([2, .12, .12], [0, 2.05, -2.4], 0x31382f, root)
  // Canvas cover bows
  for (const z of [-.5, -1.2, -1.9]) {
    const bow = box([1.9, .08, .08], [0, 2.35, z], 0x3a4038, root)
    bow.rotation.z = 0
    box([.08, .55, .08], [-.9, 2.05, z], 0x3a4038, root)
    box([.08, .55, .08], [.9, 2.05, z], 0x3a4038, root)
  }
  box([1.85, .06, 2.2], [0, 2.42, -1.2], canvas, root)
  // Spare tire
  const spare = new THREE.Mesh(new THREE.CylinderGeometry(.38, .38, .18, 12), mat(dark, .7))
  spare.rotation.z = Math.PI / 2; spare.position.set(-1.15, 1.55, .35); root.add(spare)
  // Running boards
  for (const x of [-1.12, 1.12]) box([.18, .06, 1.4], [x, .78, .6], dark, root)
  // Wheels
  for (const x of [-1.08, 1.08]) for (const z of [-1.55, 1.45]) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(.43, .43, .26, 12), mat(dark, .7))
    wheel.rotation.z = Math.PI / 2; wheel.position.set(x, .55, z); wheel.castShadow = true; root.add(wheel); wheels.push(wheel)
  }
  // National door mark
  box([.02, .28, .28], [1.02, 1.75, 1.2], team === 'ally' ? 0xb52e28 : 0xd8b840, root)

  root.traverse(child => { if (child instanceof THREE.Mesh) child.castShadow = true })
  return { root, hitbox, wheels }
}

/** Fighter silhouette with prop, cowling, canopy, and roundels. */
export function buildPlane(opts: {
  color: number
  team: Team
  scale: number
  box: BoxFn
  mat: MatFn
}): PlaneMesh {
  const { color, team, scale, box, mat } = opts
  const root = new THREE.Group()
  const metal = 0x2a302c
  const dark = 0x1e221f

  const hitbox = box([.7 * scale, .55, 3.6 * scale], [0, 0, 0], color, root)
  // Fuselage tapering via stacked boxes
  box([.55 * scale, .48, 1.4 * scale], [0, 0, -.9 * scale], color, root)
  box([.45 * scale, .4, 1.1 * scale], [0, .02, .9 * scale], color, root)
  // Engine cowling
  const cowl = cyl(mat, .32 * scale, .38 * scale, .55 * scale, color, 12, .65)
  cowl.rotation.x = Math.PI / 2; cowl.position.set(0, 0, -1.95 * scale); root.add(cowl)
  const spinner = new THREE.Mesh(new THREE.SphereGeometry(.12 * scale, 10, 8), mat(0xc8c2a8, .4))
  spinner.position.set(0, 0, -2.35 * scale); root.add(spinner)

  // Propeller
  const prop = new THREE.Group(); prop.position.set(0, 0, -2.28 * scale); root.add(prop)
  for (const angle of [0, Math.PI / 2]) {
    const blade = box([.12 * scale, 1.35 * scale, .04], [0, 0, 0], dark, prop)
    blade.rotation.z = angle
  }

  // Wings
  const wing = box([7.2 * scale, .1, 1.25], [0, 0, -.15], color, root)
  wing.rotation.z = 0
  // Slight wing thickness root
  box([1.8 * scale, .16, 1.1], [0, -.02, -.15], color, root)
  // Aileron lines
  box([1.6 * scale, .04, .18], [-2.4 * scale, .02, .35], metal, root)
  box([1.6 * scale, .04, .18], [2.4 * scale, .02, .35], metal, root)

  // Tail
  box([2.6 * scale, .08, .75], [0, .1, 1.45 * scale], color, root)
  box([.1, .9 * scale, .7], [0, .4, 1.45 * scale], color, root)
  box([.08, .35 * scale, .4], [0, .55, 1.7 * scale], color, root) // rudder tip

  // Canopy
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(.28 * scale, 10, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x7aa0b8, .2))
  canopy.scale.set(1, .7, 1.4); canopy.position.set(0, .32 * scale, -.15); root.add(canopy)
  box([.35 * scale, .08, .7 * scale], [0, .22, -.15], metal, root)

  // Landing gear (simplified fixed)
  for (const x of [-.55 * scale, .55 * scale]) {
    const strut = box([.05, .45 * scale, .05], [x, -.35 * scale, -.4], metal, root)
    strut.rotation.z = x > 0 ? .15 : -.15
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(.12 * scale, .12 * scale, .08, 10), mat(dark, .7))
    tire.rotation.z = Math.PI / 2; tire.position.set(x * 1.15, -.55 * scale, -.45); root.add(tire)
  }
  // Tail wheel
  const tailWheel = new THREE.Mesh(new THREE.CylinderGeometry(.06 * scale, .06 * scale, .05, 8), mat(dark, .7))
  tailWheel.rotation.z = Math.PI / 2; tailWheel.position.set(0, -.25 * scale, 1.55 * scale); root.add(tailWheel)

  // Roundels on wings
  const roundelColor = team === 'ally' ? 0xb52e28 : 0xd8b840
  for (const x of [-2.6 * scale, 2.6 * scale]) {
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(.28 * scale, .28 * scale, .02, 14), mat(roundelColor, .8))
    disc.position.set(x, .06, -.15); root.add(disc)
    if (team === 'ally') {
      const star = box([.08 * scale, .03, .2 * scale], [x, .08, -.15], 0xf0e8d0, root)
      const star2 = box([.2 * scale, .03, .08 * scale], [x, .08, -.15], 0xf0e8d0, root)
      void star; void star2
    } else {
      const center = new THREE.Mesh(new THREE.CylinderGeometry(.12 * scale, .12 * scale, .025, 12), mat(0xb52e28, .8))
      center.position.set(x, .08, -.15); root.add(center)
    }
  }

  root.traverse(child => { if (child instanceof THREE.Mesh) child.castShadow = true })
  return { root, hitbox, prop }
}
