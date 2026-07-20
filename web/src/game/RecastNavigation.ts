import * as THREE from 'three'
import { Crowd, NavMeshQuery, init, type CrowdAgent } from '@recast-navigation/core'
import { threeToTiledNavMesh } from '@recast-navigation/three'
import type { Collider } from './map/types'

type AgentState = { agent: CrowdAgent; target: THREE.Vector2 }

export class RecastNavigation {
  private query?: NavMeshQuery
  private crowd?: Crowd
  private agents = new Map<object, AgentState>()

  async build(ground: THREE.Mesh, colliders: Collider[], terrainHeight: (x: number, z: number) => number) {
    await init()
    const material = new THREE.MeshBasicMaterial()
    const meshes: THREE.Mesh[] = [ground]
    const obstacles = colliders.map(collider => {
      const width = collider.maxX - collider.minX, depth = collider.maxZ - collider.minZ
      const x = (collider.minX + collider.maxX) / 2, z = (collider.minZ + collider.maxZ) / 2
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(width, 2.5, depth), material)
      mesh.position.set(x, terrainHeight(x, z) + 1.25, z)
      mesh.updateMatrixWorld(true)
      return mesh
    })
    meshes.push(...obstacles)
    ground.updateMatrixWorld(true)
    const result = threeToTiledNavMesh(meshes, {
      tileSize: 32,
      cs: .38,
      ch: .2,
      walkableSlopeAngle: 48,
      walkableHeight: 1.65,
      walkableClimb: .55,
      walkableRadius: .38,
      maxEdgeLen: 10,
      maxSimplificationError: 1.15,
      minRegionArea: 2,
      mergeRegionArea: 8,
      maxVertsPerPoly: 6,
      detailSampleDist: 2.3,
      detailSampleMaxError: .8,
    })
    obstacles.forEach(mesh => mesh.geometry.dispose())
    material.dispose()
    if (!result.success) throw new Error(result.error)
    this.query = new NavMeshQuery(result.navMesh)
    this.crowd = new Crowd(result.navMesh, { maxAgents: 256, maxAgentRadius: .5 })
  }

  get ready() { return Boolean(this.query && this.crowd) }

  update(dt: number) { this.crowd?.update(Math.min(dt, .05)) }

  path(from: THREE.Vector2, target: THREE.Vector2) {
    if (!this.query) return undefined
    const result = this.query.computePath(
      { x: from.x, y: 0, z: from.y },
      { x: target.x, y: 0, z: target.y },
      { halfExtents: { x: 2, y: 4, z: 2 }, maxPathPolys: 384, maxStraightPathPoints: 128 },
    )
    if (!result.success || result.path.length < 2) return undefined
    return result.path.map(point => new THREE.Vector2(point.x, point.z))
  }

  steer(key: object, position: THREE.Vector3, target: THREE.Vector2, speed: number) {
    if (!this.crowd) return undefined
    let state = this.agents.get(key)
    if (!state) {
      const agent = this.crowd.addAgent({ x: position.x, y: position.y, z: position.z }, {
        radius: .34,
        height: 1.7,
        maxAcceleration: 24,
        maxSpeed: speed,
        collisionQueryRange: 3.2,
        pathOptimizationRange: 12,
        separationWeight: 2.2,
        obstacleAvoidanceType: 3,
      })
      state = { agent, target: target.clone() }
      this.agents.set(key, state)
      agent.requestMoveTarget({ x: target.x, y: 0, z: target.y })
    }
    const agentPosition = state.agent.position()
    if (Math.hypot(agentPosition.x - position.x, agentPosition.z - position.z) > 1.1) state.agent.teleport({ x: position.x, y: position.y, z: position.z })
    state.agent.updateParameters({ maxSpeed: speed })
    if (state.target.distanceToSquared(target) > 1) {
      state.target.copy(target)
      state.agent.requestMoveTarget({ x: target.x, y: 0, z: target.y })
    }
    const velocity = state.agent.desiredVelocityObstacleAdjusted()
    if (velocity.x * velocity.x + velocity.z * velocity.z < .01) return undefined
    return new THREE.Vector2(velocity.x, velocity.z)
  }

  remove(key: object) {
    const state = this.agents.get(key)
    if (state) this.crowd?.removeAgent(state.agent)
    this.agents.delete(key)
  }
}
