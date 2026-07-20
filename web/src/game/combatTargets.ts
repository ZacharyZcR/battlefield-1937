import type { Object3D, Mesh } from 'three'

/** Minimal shape so Game can rebuild hit lists without pulling the whole Bot/Tank graph into a circular type mess. */
export type CombatEntitySource = {
  bots: readonly { alive: boolean; team: 'ally' | 'enemy'; body: Object3D; head: Object3D }[]
  tanks: readonly { alive: boolean; team: 'ally' | 'enemy'; hitbox: Object3D; crewMen: readonly { alive: boolean; hitbox?: Object3D }[] }[]
  transports: readonly { alive: boolean; team: 'ally' | 'enemy'; hitbox: Object3D }[]
  emplacements: readonly { alive: boolean; team: 'ally' | 'enemy'; hitbox: Object3D }[]
  planes: readonly { alive: boolean; team: 'ally' | 'enemy'; hitbox: Object3D }[]
  depots: readonly { destroyed: boolean; hitbox: Object3D }[]
  coverMeshes: readonly Mesh[]
}

/**
 * Cached raycast target lists.
 * Rebuild once per frame (or on demand) instead of filter/flatMap on every shot.
 */
export class CombatTargets {
  readonly vsEnemy: Object3D[] = []
  readonly vsAlly: Object3D[] = []
  /** Structural occluders only — skips tiny window/detail meshes for LOS. */
  readonly occluders: Object3D[] = []
  private coverCount = -1

  rebuild(source: CombatEntitySource) {
    this.fill(this.vsEnemy, 'enemy', source)
    this.fill(this.vsAlly, 'ally', source)
    this.occluders.length = 0
    for (const mesh of source.coverMeshes) if (this.isOccluder(mesh)) this.occluders.push(mesh)
    this.coverCount = source.coverMeshes.length
  }

  /** True if lists look stale relative to cover mesh count (cheap dirty probe). */
  coverChanged(source: CombatEntitySource) {
    return source.coverMeshes.length !== this.coverCount
  }

  against(team: 'ally' | 'enemy') {
    return team === 'enemy' ? this.vsEnemy : this.vsAlly
  }

  private fill(list: Object3D[], against: 'ally' | 'enemy', source: CombatEntitySource) {
    list.length = 0
    for (const bot of source.bots) {
      if (!bot.alive || bot.team !== against) continue
      list.push(bot.body, bot.head)
    }
    for (const tank of source.tanks) {
      if (!tank.alive || tank.team !== against) continue
      list.push(tank.hitbox)
      for (const crew of tank.crewMen) if (crew.alive && crew.hitbox) list.push(crew.hitbox)
    }
    for (const transport of source.transports) {
      if (!transport.alive || transport.team !== against) continue
      list.push(transport.hitbox)
    }
    for (const gun of source.emplacements) {
      if (!gun.alive || gun.team !== against) continue
      list.push(gun.hitbox)
    }
    for (const plane of source.planes) {
      if (!plane.alive || plane.team !== against) continue
      list.push(plane.hitbox)
    }
    if (against === 'enemy') {
      for (const depot of source.depots) if (!depot.destroyed) list.push(depot.hitbox)
    }
    for (const mesh of source.coverMeshes) list.push(mesh)
  }

  private isOccluder(mesh: Mesh) {
    const data = mesh.userData as {
      structure?: unknown
      urbanBuilding?: { body: Object3D; details?: Object3D[] }
      blockLOS?: boolean
    }
    if (data.blockLOS) return true
    if (data.structure) return true
    if (data.urbanBuilding && mesh === data.urbanBuilding.body) return true
    // 城市楼的 details 里既有整面承重墙也有梯档/窗框小件，落到下面的尺寸测试区分，不能一律排除
    if (!mesh.geometry.boundingSphere) mesh.geometry.computeBoundingSphere()
    const radius = mesh.geometry.boundingSphere?.radius ?? 0
    const scale = Math.max(mesh.scale.x, mesh.scale.y, mesh.scale.z)
    return radius * scale > .5
  }
}
