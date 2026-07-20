import * as THREE from 'three'
import { MeshBVH, acceleratedRaycast } from 'three-mesh-bvh'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

let raycastPatched = false

/** 把 build 后固定不变的掩体 mesh 烘焙合并成一个带 BVH 的不可见 mesh，仅用于子弹/视线 raycast（命中语义等价于逐个 raycast 原 mesh：point/distance 一致，object 无 userData）。 */
export function buildStaticCover(meshes: THREE.Mesh[]) {
  if (!raycastPatched) { THREE.Mesh.prototype.raycast = acceleratedRaycast; raycastPatched = true }
  const geometries: THREE.BufferGeometry[] = []
  for (const mesh of [...new Set(meshes)]) {
    mesh.updateWorldMatrix(true, false)
    let geometry = mesh.geometry.clone()
    if (geometry.index) geometry = geometry.toNonIndexed()
    for (const name of Object.keys(geometry.attributes)) if (name !== 'position') geometry.deleteAttribute(name)
    geometry.applyMatrix4(mesh.matrixWorld)
    geometries.push(geometry)
  }
  if (!geometries.length) return undefined
  const merged = mergeGeometries(geometries, false)!
  for (const geometry of geometries) geometry.dispose()
  merged.boundsTree = new MeshBVH(merged)
  const mesh = new THREE.Mesh(merged, new THREE.MeshBasicMaterial())
  mesh.matrixAutoUpdate = false
  return mesh
}
