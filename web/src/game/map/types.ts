import * as THREE from 'three'

export type Collider = { minX: number; maxX: number; minZ: number; maxZ: number }
export type Ladder = { x: number; z: number; y0: number; y1: number; face: number }
export type Platform = { minX: number; maxX: number; minZ: number; maxZ: number; y: number }
export type FieldStructure = { root: THREE.Group; body: THREE.Mesh; roof: THREE.Mesh; collider: Collider; hp: number; damageStage: number; destroyed: boolean; rubble: THREE.Mesh[] }
export type UrbanBuilding = { root: THREE.Group; body: THREE.Mesh; details: THREE.Object3D[]; colliders: Collider[]; ladder?: Ladder; platform?: Platform; hp: number; damageStage: number; destroyed: boolean; height: number; rubble: THREE.Mesh[] }
export type MinimapFeatures = { roads: { points: { x: number; z: number }[]; width: number }[]; water: Collider[]; buildings: Collider[]; walls: { x1: number; z1: number; x2: number; z2: number }[]; rails: { x1: number; z1: number; x2: number; z2: number }[] }
