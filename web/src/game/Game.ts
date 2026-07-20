import * as THREE from 'three'
import { loadouts, loadoutsForCampaign, sidearm, type Loadout } from './loadouts'
import { BattlefieldAudio } from './Audio'
import type { Campaign } from './campaigns'
import { boundsForCampaign, DEFAULT_MAP_BOUNDS, type MapBounds } from './mapBounds'
import { SpatialHash } from './SpatialHash'
import { Pathfinder } from './Pathfinder'
import { RecastNavigation } from './RecastNavigation'
import { MapBuilder } from './map/builder'
import { SkyDome } from './map/sky'
import type { Collider, FieldStructure, Ladder, MinimapFeatures, Platform, UrbanBuilding } from './map/types'
import { CombatTargets } from './combatTargets'
import { FxPool } from './fxPool'
import { buildStaticCover } from './map/staticCover'
import { buildEmplacement, buildMachineGun, buildMortar, buildPlane, buildSoldier, buildTank, buildTransport, buildViewWeapon } from './models'

type Team = 'ally' | 'enemy'
type TankCrewRole = 'driver' | 'gunner' | 'commander' | 'loader'
type TankCrew = { role: TankCrewRole; mesh?: THREE.Group; hitbox?: THREE.Mesh; hp: number; alive: boolean; respawnAt: number }
type BotPose = 'stand' | 'crouch' | 'prone'
type Bot = { root: THREE.Group; torso: THREE.Group; body: THREE.Mesh; head: THREE.Mesh; weapon: THREE.Group; muzzle: THREE.Mesh; team: Team; role: string; name: string; kills: number; deaths: number; objectiveScore: number; hp: number; alive: boolean; inSquad: boolean; squadTag?: THREE.Mesh; antiTank: boolean; antiTankGrenades: number; nextAidAt: number; nextRocket: number; nextMortar: number; mortarRig?: { root: THREE.Group; tube: THREE.Mesh }; mortarRigUntil: number; lastSeen?: THREE.Vector3; lastSeenUntil: number; phase: number; legs: THREE.Group[]; arms: THREE.Mesh[]; mag: number; reloadUntil: number; bandages: number; bandageUntil: number; coverTarget?: THREE.Vector3; coverUntil: number; nextCoverAt: number; reviveTarget?: Bot; reviveUntil: number; reviver?: Bot; nextShot: number; shotAt: number; nextMelee: number; meleeAt: number; nextGrenade: number; throwAt: number; grenades: number; smokes: number; smokeAt: number; suppression: number; nextWireDamage: number; reviveAt: number; respawnAt: number; deathToken: number; strafe: number; chuting: boolean; pose: BotPose; urbanLane?: -1 | 0 | 1; navPath?: THREE.Vector2[]; navTarget?: THREE.Vector2; navIndex?: number; navRefreshAt?: number; stuckFor?: number; vaultFrom?: THREE.Vector3; vaultTo?: THREE.Vector3; vaultStartedAt?: number; vaultUntil?: number; riding?: Transport; drivingTank?: Tank; drivingTransport?: Transport; piloting?: Plane; emplacement?: Emplacement; machineGun?: MachineGun }
type Tank = { root: THREE.Group; turret: THREE.Group; pitch: THREE.Group; barrel: THREE.Mesh; muzzle: THREE.Object3D; coaxMuzzle: THREE.Object3D; hitbox: THREE.Mesh; wheels: THREE.Mesh[]; team: Team; name: string; armor: { front: number; side: number; rear: number; turret: number; top: number }; gunDamage: number; gunPen: number; maxHp: number; hp: number; tracks: number; engine: number; turretHealth: number; crew: number; crewCapacity: number; crewMen: TankCrew[]; driver?: Bot; wreckCollider?: Collider; alive: boolean; playerDriven: boolean; recoilToken: number; ramSlowUntil: number; stalledFor: number; reverseUntil: number; reverseTurn: number; nextShot: number; nextMg: number; mgBurst: number; mgPauseUntil: number; nextSmoke: number; lastDamageAt: number; respawnAt: number; lastDamageCause?: string; lastDamageSource?: THREE.Vector3 }
type TransportMission = 'pickup' | 'transit' | 'unload' | 'hold'
type Transport = { root: THREE.Group; hitbox: THREE.Mesh; wheels: THREE.Mesh[]; team: Team; name: string; maxHp: number; hp: number; alive: boolean; playerDriven: boolean; driver?: Bot; wreckCollider?: Collider; mission: TransportMission; waitUntil: number; nextDrop: number; stalledFor: number; reverseUntil: number; reverseTurn: number; nextSmoke: number; lastDamageAt: number; respawnAt: number }
type Emplacement = { root: THREE.Group; yaw: THREE.Group; muzzle: THREE.Object3D; hitbox: THREE.Mesh; team: Team; kind: 'at' | 'aa'; hp: number; alive: boolean; occupied: boolean; operator?: Bot; operatorUntil: number; nextShot: number; respawnAt: number }
type Plane = { root: THREE.Group; hitbox: THREE.Mesh; prop?: THREE.Group; team: Team; name: string; maxHp: number; hp: number; alive: boolean; playerDriven: boolean; abandoned: boolean; pilot?: Bot; speed: number; throttle: number; angle: number; bombs: number; maxBombs: number; nextBomb: number; bombRearmAt: number; stallWarned: boolean; nextAttack: number; nextShot: number; respawnAt: number; lastDamageCause?: string; lastDamageSource?: THREE.Vector3 }
type BailedPilot = { root: THREE.Group; chute: THREE.Group; team: Team; velocity: THREE.Vector3; landedAt: number; bot?: Bot }
type PlaneWreck = { root: THREE.Group; velocity: THREE.Vector3; rollVelocity: number; state: 'fall' | 'rest'; smokeAt: number; restUntil: number; team: Team; playerOwned: boolean; name: string; collider?: Collider }
type Particle = { mesh: THREE.Mesh | THREE.Sprite; velocity: THREE.Vector3; age: number; life: number; gravity: number; grow: number; baseOpacity?: number; pooled?: boolean }
type Casing = { mesh: THREE.Mesh; velocity: THREE.Vector3; angular: THREE.Vector3; age: number; bounced: boolean; pooled?: boolean }
type DeathHeat = { position: THREE.Vector3; team: Team; at: number }
type SmokeCloud = { root: THREE.Group; position: THREE.Vector3; bornAt: number; expiresAt: number }
type Objective = { id: string; position: THREE.Vector3; radius: number; owner: Team | null; capturing: Team | null; progress: number; ring: THREE.Mesh; flag: THREE.Mesh }
type Grenade = { mesh: THREE.Mesh; velocity: THREE.Vector3; detonateAt: number; team: Team; playerOwned: boolean; owner?: Bot; smoke?: boolean; antiTank?: boolean; bomb?: boolean; crash?: boolean; sourceName?: string; mortar?: boolean; lastBounceAt?: number }
type ArtilleryShell = { position: THREE.Vector3; team: Team; impactAt: number; marker: THREE.Mesh }
type CannonShell = { mesh: THREE.Mesh; velocity: THREE.Vector3; life: number; team: Team; playerOwned: boolean; damage: number; penetration: number; sourceName: string; sourcePosition: THREE.Vector3 }
type Stance = 'stand' | 'crouch' | 'prone'
type Medkit = { root: THREE.Group; team: Team; expiresAt: number; nextHeal: number; uses: number }
type SupplyAction = { kind: 'ammo' | 'medical'; completeAt: number; medkit?: Medkit }
type BuildKind = 'sandbag' | 'wire' | 'hedgehog' | 'mg'
type BuildAction = { kind: BuildKind; center: THREE.Vector3; alongX: boolean; face: number; cost: number; startedAt: number; completeAt: number }
type Fortification = { kind: BuildKind; center: THREE.Vector3; team: Team; meshes: THREE.Mesh[]; colliders: Collider[] }
type ConstructionRise = { object: THREE.Object3D; targetY: number; startedAt: number; duration: number }
type CorpseMotion = { bot: Bot; velocity: THREE.Vector3; angular: THREE.Vector3; floor: number; settled: boolean }
type Mortar = { root: THREE.Group; tube: THREE.Mesh; position: THREE.Vector3; ammo: number; occupied: boolean }
type MachineGun = { root: THREE.Group; yaw: THREE.Group; pitch: THREE.Group; muzzle: THREE.Object3D; position: THREE.Vector3; heat: number; occupied: boolean; deployable: boolean; operator?: Bot; operatorUntil: number; nextShot: number }
type Depot = { id: string; root: THREE.Group; hitbox: THREE.Mesh; position: THREE.Vector3; hp: number; destroyed: boolean }
export type TacticalSnapshot = { player: [number, number, number]; infantry: [number, number, Team][]; tanks: [number, number, Team][]; flags: [string, number, number, Team | null, boolean][]; depots: [string, number, number, boolean][] }
export type ScoreRow = { name: string; role?: string; kills: number; deaths: number; score: number; player?: boolean; alive: boolean }
export type GameSettings = { quality: 'low' | 'medium' | 'high'; volume: number; sensitivity: number }
export type BattleOptions = { difficulty: 'recruit' | 'veteran' | 'elite'; size: 'standard' | 'reinforced' | 'epic' }
export type Events = { ammo(m: number, r: number, loading: boolean): void; equipment(grenades: number, aid: number, medkit: boolean, builds: number, buildName: string, mortarAmmo: number, mortarPlaced: boolean, prompt: string): void; grenadeMode(mode: 'frag' | 'anti-tank', antiTankGrenades: number): void; grenadeCook(remaining?: number): void; brace(canBrace: boolean, braced: boolean): void; breath(scoped: boolean, holding: boolean, exhausted: boolean): void; grenadeWarning(show: boolean): void; suppression(value: number): void; damageDirection(angle: number, strength: number): void; downed(kills: number, deaths: number, cause: string, damage: number): void; downedState(medic: string, reviveProgress: number, giveUpProgress: number): void; revived(): void; vehicle(active: boolean, hp: number, ready: boolean, name?: string, mode?: string, maxHp?: number, readiness?: number): void; tankSight(active: boolean, gunnerView: boolean, ready: boolean, pipX?: number, pipY?: number): void; emplacementLead(x?: number, y?: number): void; movement(stamina: number, stance: Stance): void; tactical(value: TacticalSnapshot): void; scoreboard(allies: ScoreRow[], enemies: ScoreRow[]): void; loadout(value: Loadout): void; aim(value: boolean): void; squad(alive: number, total: number, order: string): void; hit(kill: boolean, headshot?: boolean, damage?: number): void; achievement(label: string, count: number): void; health(v: number, damaged?: boolean): void; kill(v: number, target?: string, headshot?: boolean): void; objectiveScore(points: number, label: string, total: number): void; combatKill(attacker: string, attackerTeam: Team, victim: string, victimTeam: Team, headshot?: boolean): void; death(kills: number, deaths: number, cause: string, damage: number): void; battle(tickets: [number, number], flags: string, capture: string, spawns: string[], seconds: number): void; end(won: boolean, kills: number, deaths: number, score: number): void }

export class Game {
  private renderer: THREE.WebGLRenderer
  private mapBuilder!: MapBuilder
  private sky!: SkyDome
  private audio = new BattlefieldAudio()
  private scene = new THREE.Scene()
  private textureCache = new Map<string, THREE.CanvasTexture>()
  private materialCache = new Map<string, THREE.MeshStandardMaterial>()
  private mapBounds: MapBounds = { ...DEFAULT_MAP_BOUNDS }
  private colliderHash = new SpatialHash(4)
  private vehicleHash = new SpatialHash(6)
  private pathfinder = new Pathfinder()
  private recastNavigation = new RecastNavigation()
  private vehiclePathfinder = new Pathfinder()
  private vehicleNavigation = new Map<THREE.Object3D, { path: THREE.Vector2[]; index: number; target: THREE.Vector2; refreshAt: number }>()
  private combatTargets = new CombatTargets()
  private fxPool = new FxPool()
  private collidersDirty = true
  private lastColliderCount = -1
  private lastVehicleColliderCount = -1
  private combatLogBuffer: unknown[] = []
  private combatLogFlushAt = 0
  private scoreboardAt = 0
  private readonly tmpV2A = new THREE.Vector2()
  private readonly tmpV2B = new THREE.Vector2()
  private readonly tmpV3A = new THREE.Vector3()
  private readonly tmpV3B = new THREE.Vector3()
  private readonly tmpV3C = new THREE.Vector3()
  private readonly aliveEnemies: Bot[] = []
  private readonly aliveAllies: Bot[] = []
  private camera = new THREE.PerspectiveCamera(72, 1, .06, 420)
  private clock = new THREE.Clock()
  private ray = new THREE.Raycaster()
  private keys = new Set<string>()
  private bots: Bot[] = []
  private tanks: Tank[] = []
  private transports: Transport[] = []
  private emplacements: Emplacement[] = []
  private planes: Plane[] = []
  private planeWrecks: PlaneWreck[] = []
  private bailedPilots: BailedPilot[] = []
  private particles: Particle[] = []
  private casings: Casing[] = []
  private corpses: CorpseMotion[] = []
  private craters: THREE.Mesh[] = []
  private smokeClouds: SmokeCloud[] = []
  private playerTank?: Tank
  private playerTransport?: Transport
  private playerTransportPassenger = false
  private playerTransportSeat = -1
  private playerEmplacement?: Emplacement
  private playerPlane?: Plane
  private parachuting = false
  private parachute?: THREE.Group
  private tankShotAt = 0
  private tankMgShotAt = 0
  private tankMgFiring = false
  private tankGunnerView = false
  /** Smoothed drive inputs for vehicles (avoids binary on/off lurch). */
  private vehicleThrottle = 0
  private vehicleSteer = 0
  private readonly chaseCamPos = new THREE.Vector3()
  private readonly chaseCamLook = new THREE.Vector3()
  private objectives: Objective[] = []
  private depots: Depot[] = []
  private assaultIndex = 0
  private operationPhase = 0
  private operationTransitionUntil = 0
  private operationOpeningUntil = 0
  private operationOpeningBarrage = false
  private colliders: Collider[] = []
  private vehicleColliders: Collider[] = []
  private coverMeshes: THREE.Mesh[] = []
  private staticCover?: THREE.Mesh
  private staticCoverSet = new Set<THREE.Mesh>()
  private dynamicCoverScratch: THREE.Mesh[] = []
  private botMotion = new Map<Bot, { position: THREE.Vector2; sampledAt: number; stalledFor: number }>()
  private grenadesInWorld: Grenade[] = []
  private artilleryShells: ArtilleryShell[] = []
  private nextArtilleryAt = 0
  private cannonShells: CannonShell[] = []
  private medkits: Medkit[] = []
  private fortifications: Fortification[] = []
  private constructionRisers: ConstructionRise[] = []
  private ladders: Ladder[] = []
  private platforms: Platform[] = []
  private playerLadder?: Ladder
  private groundLevel = 0
  private fieldStructures: FieldStructure[] = []
  private urbanBuildings: UrbanBuilding[] = []
  private mortar?: Mortar
  private playerMortar?: Mortar
  private mortarAmmo = 16
  private mortarShotAt = 0
  private mortarMarker = new THREE.Mesh(new THREE.RingGeometry(.8, 1.05, 28), new THREE.MeshBasicMaterial({ color: 0xffc866, transparent: true, opacity: .8, side: THREE.DoubleSide, depthTest: false }))
  private machineGuns: MachineGun[] = []
  private playerMG?: MachineGun
  private mgShotAt = 0
  private reinforcementWaveAt: Record<Team, number> = { ally: 0, enemy: 0 }
  private deathHeat: DeathHeat[] = []
  private sun = new THREE.DirectionalLight(0xffe1b2, 3.1)
  private sunAnchor = new THREE.Vector2(Infinity, Infinity)
  private hemi = new THREE.HemisphereLight(0xdbe1dd, 0x34372f, 1.5)
  private precipitation?: THREE.LineSegments | THREE.Points
  private snowing = false
  private rainSpeed = 0
  private lightningAt = 0
  private stormFlash = 0
  private ammoCrates: THREE.Vector3[] = []
  private squadMode: 'autonomous' | 'move' = 'autonomous'
  private squadTarget = new THREE.Vector3()
  private squadMarker = new THREE.Mesh(new THREE.ConeGeometry(.35, .75, 4), new THREE.MeshBasicMaterial({ color: 0xffd75a, depthTest: false }))
  private tickets: [number, number] = [120, 120]
  private maxTickets = 120
  private enemyAccuracy = 1
  private enemyFireRate = 1
  private enemyDamage = 1
  private matchTime = 18 * 60
  private weapon = new THREE.Group()
  private bolt = new THREE.Group()
  private weaponMagazine?: THREE.Object3D
  private playerMuzzle: THREE.Mesh = new THREE.Mesh(new THREE.SphereGeometry(.11, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffc45e }))
  private yaw = Math.PI
  private pitch = -.04
  private planeStickPitch = -.04
  private recoil = 0
  private lean = 0
  private meleeAt = -10
  private meleeCooldown = 0
  private stance: Stance = 'stand'
  private stamina = 1
  private staminaRegenAt = 0
  private jumpHeight = 0
  private jumpVelocity = 0
  private landingKick = 0
  private canBrace = false
  private braced = false
  private braceYaw = 0
  private holdingBreath = false
  private breathPhase = 0
  private breathExhaustedUntil = 0
  private movePhase = 0
  private nextFootstepAt = 0
  private selectedLoadout = loadouts[0]
  private battleLoadouts: readonly Loadout[] = loadouts
  private weaponSlot: 'primary' | 'sidearm' = 'primary'
  private primaryAmmo: [number, number] = [this.selectedLoadout.magazine, this.selectedLoadout.reserve]
  private sidearmAmmo: [number, number] = [sidearm.magazine, sidearm.reserve]
  private mag = this.selectedLoadout.magazine
  private reserve = this.selectedLoadout.reserve
  private grenades = this.selectedLoadout.grenades
  private antiTankGrenades = 0
  private grenadeMode: 'frag' | 'anti-tank' = 'frag'
  private grenadeCooking = false
  private grenadeFuse = 3.8
  private heldGrenade?: THREE.Mesh
  private smokeGrenades = 1
  private suppression = 0
  private nextWhizzAt = 0
  private aid = this.selectedLoadout.aid
  private bandagingUntil = 0
  private bandagingStartedAt = 0
  private heldBandage?: THREE.Mesh
  private medkitAvailable = false
  private buildCharges = 0
  private buildKind: BuildKind = 'sandbag'
  private buildAction?: BuildAction
  private heldTool?: THREE.Group
  private repairAt = 0
  private resupplyAt = 0
  private bandageResupplyAt = 0
  private supplyAction?: SupplyAction
  private heldSupply?: THREE.Mesh
  private status = ''
  private statusUntil = 0
  private tacticalAt = 0
  private hp = 100
  private lastDamageAt = -99
  private kills = 0
  private multiKills = 0
  private lastPlayerKillAt = -99
  private lastDamageCause = '未知伤害'
  private lastDamageAmount = 0
  private lastDamageSource?: THREE.Vector3
  private playerReviver?: Bot
  private playerReviveStartedAt = 0
  private giveUpStartedAt = 0
  private downedFreeLook = false
  private deaths = 0
  private objectiveScore = 0
  private nextPlayerShot = 0
  private active = false
  private paused = false
  private loading = false
  private reloadToken = 0
  private nextWireDamage = 0
  private firing = false
  private aiming = false
  private shotAt = -10
  private dead = false
  private deathSceneToken = 0
  private matchOver = false
  private sensitivity = .0022
  private pointerLockGraceUntil = 0
  private pointerMovementReady = false
  private canvas: HTMLCanvasElement
  private events: Events
  private campaign: Campaign
  private activeLoadout() { return this.weaponSlot === 'primary' ? this.selectedLoadout : sidearm }
  private logCombat(type: string, details: Record<string, unknown>) {
    const entry = { at: new Date().toISOString(), battleTime: Math.round(performance.now()), campaign: this.campaign.id, type, playerPosition: [Number(this.camera.position.x.toFixed(2)), Number(this.camera.position.y.toFixed(2)), Number(this.camera.position.z.toFixed(2))], ...details }
    this.combatLogBuffer.push(entry)
    if (this.combatLogBuffer.length > 80) this.flushCombatLog(false)
    else if (performance.now() >= this.combatLogFlushAt) this.flushCombatLog(false)
  }
  private flushCombatLog(force: boolean) {
    if (!this.combatLogBuffer.length && !force) return
    this.combatLogFlushAt = performance.now() + 2000
    if (!this.combatLogBuffer.length) return
    try {
      const key = 'battlefield1937_combat_log'
      const stored = JSON.parse(localStorage.getItem(key) ?? '[]') as unknown[]
      stored.push(...this.combatLogBuffer)
      localStorage.setItem(key, JSON.stringify(stored.slice(-400)))
      this.combatLogBuffer.length = 0
    } catch (error) { console.warn('[战地1937] 战斗日志写入失败', error); this.combatLogBuffer.length = 0 }
  }
  private rebuildSpatialIndexes() {
    this.colliderHash.rebuild(this.colliders)
    this.vehicleHash.rebuild(this.vehicleColliders)
    this.pathfinder.rebuild(this.colliderHash, this.mapBounds)
    this.vehiclePathfinder.rebuild(this.vehicleHash, this.mapBounds, 3, 1.7)
    this.collidersDirty = false
    this.lastColliderCount = this.colliders.length
    this.lastVehicleColliderCount = this.vehicleColliders.length
  }
  private syncColliders() {
    if (!this.collidersDirty && this.colliders.length === this.lastColliderCount && this.vehicleColliders.length === this.lastVehicleColliderCount) return
    this.rebuildSpatialIndexes()
  }
  private markCollidersDirty() { this.collidersDirty = true }
  private refreshCombatTargets() {
    this.combatTargets.rebuild({
      bots: this.bots,
      tanks: this.tanks,
      transports: this.transports,
      emplacements: this.emplacements,
      planes: this.planes,
      depots: this.depots,
      coverMeshes: this.dynamicCover(),
    })
  }
  private captureStaticCover() {
    this.staticCoverSet = new Set(this.coverMeshes.filter(mesh => !mesh.userData.urbanBuilding && !mesh.userData.structure))
    const meshes = [...this.staticCoverSet]; if (this.mapBuilder.ground) meshes.push(this.mapBuilder.ground)
    this.staticCover = buildStaticCover(meshes)
    this.ray.firstHitOnly = true
  }
  private dynamicCover() { const scratch = this.dynamicCoverScratch; scratch.length = 0; for (const mesh of this.coverMeshes) if (!this.staticCoverSet.has(mesh)) scratch.push(mesh); return scratch }
  private withStaticCover(hit: THREE.Intersection | undefined) { const staticHit = this.staticCover ? this.ray.intersectObject(this.staticCover, false)[0] : undefined; return staticHit && (!hit || staticHit.distance < hit.distance) ? staticHit : hit }
  private hitTargetsAgainst(team: Team) { return this.combatTargets.against(team) }
  private occlusionMeshes() { return this.combatTargets.occluders.length ? this.combatTargets.occluders : this.coverMeshes }

  constructor(canvas: HTMLCanvasElement, events: Events, campaign: Campaign) {
    this.canvas = canvas
    this.events = events
    this.campaign = campaign
    this.mapBounds = boundsForCampaign(campaign)
    this.battleLoadouts = loadoutsForCampaign(campaign.id)
    this.selectedLoadout = this.battleLoadouts[0]
    this.tickets = [campaign.tickets, campaign.tickets]
    this.maxTickets = campaign.tickets
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.outputColorSpace = THREE.SRGBColorSpace
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = .95
    ;(window as unknown as { exportBattlefield1937Log: () => void }).exportBattlefield1937Log = () => { this.flushCombatLog(true); const data = localStorage.getItem('battlefield1937_combat_log') ?? '[]', link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([data], { type: 'application/json' })); link.download = `战地1937-战斗日志-${new Date().toISOString().replace(/[:.]/g, '-')}.json`; link.click(); URL.revokeObjectURL(link.href) }
    const atmosphere = { delta: [0x737c79, 0x858d89], ruin: [0x77756e, 0x85837b], canal: [0x8b8a7e, 0x99988b], green: [0x778477, 0x899489], loess: [0x9a8769, 0xa49172], jungle: [0x536b5b, 0x647766], alpine: [0x7c8987, 0x929c99] }[campaign.theme], fogBase = { delta: .018, ruin: .02, canal: .016, green: .01, loess: .01, jungle: .02, alpine: .012 }[campaign.theme]; this.scene.fog = new THREE.FogExp2(atmosphere[1], fogBase + (campaign.weather.includes('雨') ? .004 : 0) + (campaign.weather === '雷雨' ? .002 : 0)); this.sky = new SkyDome(this.scene, atmosphere[0], atmosphere[1], campaign.theme, campaign.weather)
    this.camera.position.set(0, 1.72, this.mapBounds.halfDepth - 11)
    this.mapBuilder = new MapBuilder({ scene: this.scene, campaign: this.campaign, renderer: this.renderer, mapBounds: this.mapBounds, textureCache: this.textureCache, materialCache: this.materialCache, colliders: this.colliders, vehicleColliders: this.vehicleColliders, coverMeshes: this.coverMeshes, ladders: this.ladders, platforms: this.platforms, urbanBuildings: this.urbanBuildings, fieldStructures: this.fieldStructures, markCollidersDirty: () => this.markCollidersDirty() })
    const rear = this.mapBounds.halfDepth - 14, supportLine = this.mapBounds.halfDepth * .48, airDefenseLine = this.mapBounds.halfDepth * .72
    this.lights(); this.mapBuilder.build(); this.captureStaticCover(); this.initWeather(); for (const flag of campaign.flags) this.objective(flag.id, flag.x, flag.z, flag.radius); if (campaign.rule === 'demolition') for (const flag of campaign.flags) this.depot(flag.id, flag.x, flag.z); this.resetModeState(); this.fixedMachineGuns(); this.supply(4, rear); this.squadMarker.visible = false; this.squadMarker.renderOrder = 5; this.scene.add(this.squadMarker); this.mortarMarker.rotation.x = -Math.PI / 2; this.mortarMarker.visible = false; this.mortarMarker.renderOrder = 6; this.scene.add(this.mortarMarker); this.gun(); this.forces(); this.tank('ally'); this.tank('enemy'); this.transport('ally'); this.transport('enemy'); this.emplacement('ally', 'at', -5.5, supportLine); this.emplacement('enemy', 'at', 5.5, -supportLine); this.emplacement('ally', 'aa', 6, airDefenseLine); this.emplacement('enemy', 'aa', -6, -airDefenseLine); this.plane('ally'); this.plane('enemy'); this.input(); this.resize(); this.rebuildSpatialIndexes(); this.initializeRecastNavigation(); this.refreshCombatTargets(); this.loop()
    this.expandVehicleForces()
    this.configureSonghuForces()
    addEventListener('resize', () => this.resize())
    addEventListener('beforeunload', () => this.flushCombatLog(true))
  }

  private initializeRecastNavigation() {
    const ground = this.mapBuilder.ground
    if (!ground) return
    void this.recastNavigation.build(ground, [...this.colliders], (x, z) => this.terrainHeight(x, z))
      .then(() => console.info('[战地1937] Detour tiled NavMesh / Crowd 已启用'))
      .catch(error => console.warn('[战地1937] Detour 初始化失败，继续使用网格寻路', error))
  }

  private expandVehicleForces() {
    for (const team of ['ally', 'enemy'] as const) { while (this.tanks.filter(tank => tank.team === team).length < 3) this.tank(team); while (this.planes.filter(plane => plane.team === team).length < 2) this.plane(team) }
  }
  private configureSonghuForces() {
    if (!this.isSonghuOperation()) return
    for (const team of ['ally', 'enemy'] as const) {
      this.tanks.filter(tank => tank.team === team).forEach((tank, index) => { if (team === 'enemy' && index === 0) return; tank.alive = false; tank.root.visible = false; tank.respawnAt = Infinity })
      this.planes.filter(plane => plane.team === team).forEach(plane => { this.releasePlanePilot(plane); plane.alive = false; plane.root.visible = false; plane.respawnAt = Infinity })
    }
  }
  private stageSonghuAttackers() {
    if (!this.isSonghuOperation()) return
    const baseZ = -this.mapBounds.halfDepth + 11, attackers = this.bots.filter(bot => bot.alive && bot.team === 'enemy' && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting)
    attackers.forEach((bot, index) => {
      const lane = index % 6, row = Math.floor(index / 6), position = this.openPlacement((lane - 2.5) * 6, baseZ + 4 - row * 4, .45)
      bot.root.position.copy(position); bot.root.rotation.set(0, 0, 0); bot.coverTarget = undefined; bot.lastSeen = undefined; bot.lastSeenUntil = 0
    })
  }
  private deploySonghuReinforcements(now: number) {
    if (this.operationPhase === 1) {
      const alliedTank = this.tanks.find(tank => tank.team === 'ally' && !tank.alive && tank.respawnAt === Infinity)
      const enemyTank = this.tanks.find((tank, index) => tank.team === 'enemy' && index > 0 && !tank.alive && tank.respawnAt === Infinity)
      if (alliedTank) this.reinforceTank(alliedTank, now)
      if (enemyTank) this.reinforceTank(enemyTank, now)
      return
    }
    for (const team of ['ally', 'enemy'] as const) { const plane = this.planes.find(item => item.team === team && !item.alive && item.respawnAt === Infinity); if (plane) this.reinforcePlane(plane, now) }
  }
  private fixedMachineGuns() {
    this.campaign.flags.forEach((flag, index) => { const position = this.openPlacement(flag.x + (index % 2 ? -6 : 6), flag.z + (index % 3 - 1) * 3, 1.35), gun = this.createMachineGun(position, index % 2 ? Math.PI : 0, false); gun.root.position.y = position.y + 1; this.machineGuns.push(gun) })
  }

  start() { this.active = true; this.dead = true }
  configureBattle(options: BattleOptions) {
    if (this.active) return
    const size = { standard: [11, 330], reinforced: [16, 430], epic: [22, 540] }[options.size]
    this.maxTickets = size[1]
    this.resetTickets()
    for (const team of ['ally', 'enemy'] as const) {
      const teamBots = this.bots.filter(bot => bot.team === team)
      for (const bot of teamBots.slice(size[0])) { this.disposeGroup(bot.root); this.bots.splice(this.bots.indexOf(bot), 1) }
      for (let index = teamBots.length; index < size[0]; index++) { const spawn = this.reinforcementSpawn(team, index); this.bot(team, spawn.x, spawn.z) }
    }
    this.stageSonghuAttackers()
    const difficulty = { recruit: [.72, 1.24, .78], veteran: [1, 1, 1], elite: [1.22, .82, 1.18] }[options.difficulty]
    ;[this.enemyAccuracy, this.enemyFireRate, this.enemyDamage] = difficulty
  }
  setPaused(value: boolean) { if (!this.active || this.matchOver) return; if (value) { this.releaseGrenadeCook(); this.interruptBandage(); this.clearSupplyAction(); this.clearBuildAction('建造已取消') } this.paused = value; this.firing = false; this.aiming = false; this.events.aim(false); if (!value) this.clock.getDelta() }
  configure(settings: GameSettings) {
    this.sensitivity = THREE.MathUtils.clamp(settings.sensitivity, .0007, .005)
    this.audio.setVolume(settings.volume)
    const ratio = settings.quality === 'low' ? 1 : settings.quality === 'medium' ? Math.min(devicePixelRatio, 1.5) : Math.min(devicePixelRatio, 2)
    this.renderer.setPixelRatio(ratio)
    this.renderer.shadowMap.enabled = settings.quality !== 'low'
    this.renderer.shadowMap.type = settings.quality === 'high' ? THREE.PCFSoftShadowMap : THREE.PCFShadowMap
    this.sun.shadow.mapSize.setScalar(settings.quality === 'high' ? 2048 : settings.quality === 'medium' ? 1024 : 512)
    this.renderer.toneMappingExposure = settings.quality === 'low' ? 1 : .95
    this.resize()
  }
  unlockAudio() { this.audio.unlock({ rain: this.campaign.weather.includes('雨'), birds: !['ruin', 'alpine'].includes(this.campaign.theme) }) }
  respawn(loadoutIndex = 0, spawnId = 'base') {
    if (this.matchOver || !this.dead || this.tickets[0] <= 0) return
    const initialOperationDeploy = this.isSonghuOperation() && !this.operationOpeningUntil && !this.operationOpeningBarrage
    if (initialOperationDeploy) { this.stageSonghuAttackers(); this.operationOpeningUntil = performance.now() / 1000 + 15 }
    this.clearGrenadeCook(); this.clearBandage(); this.clearSupplyAction(); this.clearBuildAction()
    if (this.playerTransport) { this.playerTransport.playerDriven = false; this.playerTransport = undefined; this.playerTransportPassenger = false; this.playerTransportSeat = -1 }
    if (this.playerPlane) { this.playerPlane.playerDriven = false; this.playerPlane = undefined }
    this.parachuting = false; if (this.parachute) { this.disposeGroup(this.parachute); this.parachute = undefined }
    if (this.playerEmplacement) this.playerEmplacement.occupied = false
    this.deathSceneToken++; this.playerTank = undefined; this.playerMortar = undefined; this.playerEmplacement = undefined; this.playerMG = undefined; this.playerLadder = undefined; this.groundLevel = 0; this.mortarMarker.visible = false; this.weapon.visible = true; this.stance = 'stand'; this.stamina = 1; this.jumpHeight = 0; this.jumpVelocity = 0; this.landingKick = 0; this.braced = false; this.canBrace = false; this.holdingBreath = false; this.breathExhaustedUntil = 0; this.selectedLoadout = this.battleLoadouts[loadoutIndex] ?? this.battleLoadouts[0]; this.weaponSlot = 'primary'; this.primaryAmmo = [this.selectedLoadout.magazine, this.selectedLoadout.reserve]; this.sidearmAmmo = [sidearm.magazine, sidearm.reserve]; this.dead = false; this.active = true; this.hp = 100; this.lastDamageAt = -99; [this.mag, this.reserve] = this.primaryAmmo; this.grenades = this.selectedLoadout.grenades; this.antiTankGrenades = this.selectedLoadout.antiTankGrenades ?? 0; this.grenadeMode = 'frag'; this.events.grenadeMode(this.grenadeMode, this.antiTankGrenades); this.smokeGrenades = 1; this.suppression = 0; this.events.suppression(0); this.aid = this.selectedLoadout.aid; this.medkitAvailable = this.selectedLoadout.id === 'medic'; this.buildCharges = this.selectedLoadout.id === 'engineer' ? 6 : 0; this.buildKind = 'sandbag'; this.mortarAmmo = this.selectedLoadout.id === 'mortar' ? this.mortar?.ammo ?? 16 : 0; this.loading = false; this.aiming = false; this.buildWeapon()
    const requested = this.objectives.find(o => o.id === spawnId && this.objectiveDeployable(o, 'ally'))
    const spawnObjectives = this.isSonghuOperation() ? this.activeAssaultObjectives() : this.objectives
    const safe = requested ?? spawnObjectives.filter(o => this.objectiveDeployable(o, 'ally')).sort((a, b) => b.position.z - a.position.z)[0]
    const headquartersDeploy = this.isSonghuOperation() && spawnId === 'base' && !initialOperationDeploy, deployment = headquartersDeploy ? this.randomDeploymentPosition(new THREE.Vector3(0, 0, this.mapBounds.halfDepth - 16), 7) : safe ? this.randomDeploymentPosition(safe.position, safe.radius) : this.randomDeploymentPosition(new THREE.Vector3(0, 0, this.mapBounds.halfDepth - 16), 7); this.groundLevel = this.terrainHeight(deployment.x, deployment.z); this.camera.position.set(deployment.x, this.groundLevel + 1.72, deployment.z); this.pitch = -.04; this.recoil = 0; this.resetCameraView()
    this.events.health(this.hp, false); this.events.vehicle(false, 0, false); this.events.tankSight(false, false, false); this.events.emplacementLead(); this.events.movement(this.stamina, this.stance); this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), '')
    if (spawnId === 'vehicle-tank') { const tank = this.tanks.find(item => item.team === 'ally' && item.alive && !item.playerDriven && this.vehicleDeployable(item.root, item.team, item.lastDamageAt)); if (tank) this.enterTank(tank) }
    if (spawnId === 'vehicle-transport') { const transport = this.transports.find(item => item.team === 'ally' && item.alive && !item.playerDriven && this.vehicleDeployable(item.root, item.team, item.lastDamageAt)); if (transport) this.enterTransport(transport) }
    if (spawnId === 'vehicle-plane') { const plane = this.planes.find(item => item.team === 'ally' && item.alive && !item.playerDriven); if (plane) this.enterPlane(plane) }
    this.canvas.requestPointerLock()
  }
  restart() {
    this.clearGrenadeCook(); this.clearBandage(); this.clearSupplyAction(); this.clearBuildAction()
    if (this.playerTransport) { this.playerTransport.playerDriven = false; this.playerTransport = undefined; this.playerTransportPassenger = false; this.playerTransportSeat = -1 }
    if (this.playerPlane) { this.playerPlane.playerDriven = false; this.playerPlane = undefined }
    this.parachuting = false; if (this.parachute) { this.disposeGroup(this.parachute); this.parachute = undefined }
    this.deathSceneToken++; this.kills = 0; this.deaths = 0; this.objectiveScore = 0; this.matchOver = false; this.paused = false; this.dead = true; this.deathHeat.length = 0
    for (const shell of this.artilleryShells) { this.scene.remove(shell.marker); shell.marker.geometry.dispose(); (shell.marker.material as THREE.Material).dispose() } this.artilleryShells.length = 0; this.nextArtilleryAt = performance.now() / 1000 + 12
    for (const crater of this.craters) { this.scene.remove(crater); crater.geometry.dispose(); (crater.material as THREE.Material).dispose() } this.craters.length = 0
    for (const casing of this.casings) { if (casing.pooled) this.fxPool.releaseCasing(this.scene, casing as never); else { this.scene.remove(casing.mesh); casing.mesh.geometry.dispose(); this.disposeMaterial(casing.mesh.material as THREE.Material) } } this.casings.length = 0
    for (const medkit of this.medkits) { this.scene.remove(medkit.root); medkit.root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }) } this.medkits.length = 0
    for (const shell of this.cannonShells) { this.scene.remove(shell.mesh); shell.mesh.geometry.dispose(); (shell.mesh.material as THREE.Material).dispose() } this.cannonShells.length = 0
    for (const wreck of this.planeWrecks) { this.disposeWreck(wreck); if (wreck.collider) { const colliderIndex = this.vehicleColliders.indexOf(wreck.collider); if (colliderIndex >= 0) this.vehicleColliders.splice(colliderIndex, 1) } } this.planeWrecks.length = 0
    for (const pilot of this.bailedPilots) { if (pilot.bot) { pilot.chute.removeFromParent(); this.disposeGroup(pilot.chute); pilot.bot.chuting = false } else this.disposeGroup(pilot.root) } this.bailedPilots.length = 0
    for (const structure of this.fieldStructures) { this.clearRubble(structure.rubble); structure.damageStage = 0 }
    for (const building of this.urbanBuildings) { this.clearRubble(building.rubble); building.damageStage = 0 }
    for (const structure of this.fieldStructures) { structure.hp = 360; structure.destroyed = false; structure.body.position.set(0, 1.3, 0); structure.body.scale.set(1, 1, 1); structure.roof.position.set(0, 3.25, 0); structure.roof.rotation.set(0, Math.PI / 4, 0); structure.roof.scale.set(1, 1, 1.15); structure.root.children.forEach(child => child.visible = true); if (!this.colliders.includes(structure.collider)) this.colliders.push(structure.collider); if (!this.vehicleColliders.includes(structure.collider)) this.vehicleColliders.push(structure.collider); if (!this.coverMeshes.includes(structure.body)) this.coverMeshes.push(structure.body); if (!this.coverMeshes.includes(structure.roof)) this.coverMeshes.push(structure.roof) }
    for (const building of this.urbanBuildings) { building.hp = 900; building.destroyed = false; building.body.position.y = 3.2 + (building.height - 3.2) / 2; building.body.scale.set(1, 1, 1); building.body.rotation.set(0, 0, 0); building.details.forEach(detail => { detail.visible = true; if (detail instanceof THREE.Mesh && !this.coverMeshes.includes(detail)) this.coverMeshes.push(detail) }); if (!this.coverMeshes.includes(building.body)) this.coverMeshes.push(building.body); for (const collider of building.colliders) { if (!this.colliders.includes(collider)) this.colliders.push(collider); if (!this.vehicleColliders.includes(collider)) this.vehicleColliders.push(collider) } if (building.ladder && !this.ladders.includes(building.ladder)) this.ladders.push(building.ladder); if (building.platform && !this.platforms.includes(building.platform)) this.platforms.push(building.platform) }
    this.constructionRisers.length = 0; for (const fortification of this.fortifications) { for (const mesh of fortification.meshes) { this.scene.remove(mesh); mesh.geometry.dispose(); const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; materials.forEach(material => this.disposeMaterial(material)); const index = this.coverMeshes.indexOf(mesh); if (index >= 0) this.coverMeshes.splice(index, 1) } for (const collider of fortification.colliders) { const index = this.colliders.indexOf(collider); if (index >= 0) this.colliders.splice(index, 1) } } this.fortifications.length = 0
    if (this.mortar) { this.disposeGroup(this.mortar.root); this.mortar = undefined; this.playerMortar = undefined; this.mortarMarker.visible = false }
    for (let index = this.machineGuns.length - 1; index >= 0; index--) { const machineGun = this.machineGuns[index]; if (machineGun.deployable) { this.disposeGroup(machineGun.root); this.machineGuns.splice(index, 1) } else { if (machineGun.operator) machineGun.operator.machineGun = undefined; machineGun.operator = undefined; machineGun.operatorUntil = 0; machineGun.occupied = false; machineGun.heat = 0; machineGun.nextShot = 0 } } this.playerMG = undefined
    this.resetModeState()
    const time = performance.now() / 1000; this.reinforcementWaveAt = { ally: time + 8, enemy: time + 8 }; for (const tank of this.tanks) this.reinforceTank(tank, time); for (const transport of this.transports) this.reinforceTransport(transport, time); for (const bot of this.bots) { bot.kills = 0; bot.deaths = 0; bot.objectiveScore = 0; this.reinforce(bot, time) } for (const plane of this.planes) this.reinforcePlane(plane, time); this.configureSonghuForces(); for (const gun of this.emplacements) { gun.alive = true; gun.occupied = false; gun.hp = gun.kind === 'aa' ? 180 : 240; gun.root.rotation.z = 0; gun.nextShot = time + 2 }
    this.playerEmplacement = undefined
    this.markCollidersDirty()
    this.rebuildSpatialIndexes()
    this.active = true
  }
  private mat(c: number, r = .88) { return this.mapBuilder.mat(c, r) }
  private disposeMaterial(material: THREE.Material) { if (material.userData?.shared) return; material.dispose() }
  private box(s: [number, number, number], p: [number, number, number], c: number, parent: THREE.Object3D = this.scene) { return this.mapBuilder.box(s, p, c, parent) }
  private disposeGroup(root: THREE.Group) { this.scene.remove(root); root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }) }
  private clearRubble(rubble: THREE.Mesh[]) { for (const mesh of rubble) { const coverIndex = this.coverMeshes.indexOf(mesh); if (coverIndex >= 0) this.coverMeshes.splice(coverIndex, 1); mesh.removeFromParent(); mesh.geometry.dispose(); const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; materials.forEach(material => this.disposeMaterial(material)) } rubble.length = 0 }
  private battlefieldHalfWidth() { return this.mapBuilder.battlefieldHalfWidth() }
  private mapTacticalX(x: number) { return x * (this.battlefieldHalfWidth() > 12 ? .46 : 1) }
  get minimapFeatures(): MinimapFeatures {
    const features = this.mapBuilder.minimapFeatures, mx = (x: number) => this.mapTacticalX(x)
    return { roads: features.roads.map(road => ({ width: road.width, points: road.points.map(point => ({ x: mx(point.x), z: point.z })) })), water: features.water.map(rect => ({ ...rect, minX: mx(rect.minX), maxX: mx(rect.maxX) })), buildings: features.buildings.map(rect => ({ ...rect, minX: mx(rect.minX), maxX: mx(rect.maxX) })), walls: features.walls.map(wall => ({ x1: mx(wall.x1), z1: wall.z1, x2: mx(wall.x2), z2: wall.z2 })), rails: features.rails.map(rail => ({ x1: mx(rail.x1), z1: rail.z1, x2: mx(rail.x2), z2: rail.z2 })) }
  }
  private battlefieldHalfDepth() { return this.mapBounds.halfDepth }
  private openPlacement(x: number, z: number, radius: number) {
    this.syncColliders()
    for (let ring = 0; ring <= 10; ring++) {
      const distance = ring * .85, count = Math.max(1, ring * 8)
      for (let index = 0; index < count; index++) {
        const angle = index / count * Math.PI * 2, px = x + Math.cos(angle) * distance, pz = z + Math.sin(angle) * distance
        let occupied = false
        for (const item of this.machineGuns) { if ((item.root.position.x - px) ** 2 + (item.root.position.z - pz) ** 2 < (radius + 1.2) ** 2) { occupied = true; break } }
        if (!occupied) for (const item of this.emplacements) { if ((item.root.position.x - px) ** 2 + (item.root.position.z - pz) ** 2 < (radius + 1.8) ** 2) { occupied = true; break } }
        if (!occupied && !this.navBlocked(px, pz, radius)) return new THREE.Vector3(px, this.terrainHeight(px, pz), pz)
      }
    }
    return new THREE.Vector3(x, this.terrainHeight(x, z), z)
  }
  private moveWithCollision(position: THREE.Vector3, dx: number, dz: number, radius: number) {
    this.syncColliders()
    const blocked = (x: number, z: number) => this.colliderHash.blocked(x, z, radius)
    const width = this.battlefieldHalfWidth(), depth = this.battlefieldHalfDepth(), beforeX = position.x, beforeZ = position.z
    const nextX = THREE.MathUtils.clamp(position.x + dx, -width, width); if (!blocked(nextX, position.z)) position.x = nextX
    const nextZ = THREE.MathUtils.clamp(position.z + dz, -depth, depth); if (!blocked(position.x, nextZ)) position.z = nextZ
    return Math.abs(position.x - beforeX) + Math.abs(position.z - beforeZ) > .001
  }
  private moveTankWithCollision(position: THREE.Vector3, dx: number, dz: number) {
    const tank = this.tanks.find(candidate => candidate.alive && candidate.root.position === position), transport = this.transports.find(candidate => candidate.alive && candidate.root.position === position), vehicle = tank ?? transport, now = performance.now() / 1000
    if (tank && now < tank.ramSlowUntil) { dx *= .58; dz *= .58 }
    const yaw = vehicle?.root.rotation.y ?? 0, localHalfX = 1.15, localHalfZ = transport ? 2.45 : 1.8, halfX = Math.abs(Math.cos(yaw)) * localHalfX + Math.abs(Math.sin(yaw)) * localHalfZ, halfZ = Math.abs(Math.sin(yaw)) * localHalfX + Math.abs(Math.cos(yaw)) * localHalfZ
    const overlaps = (box: Collider, x: number, z: number) => x + halfX > box.minX && x - halfX < box.maxX && z + halfZ > box.minZ && z - halfZ < box.maxZ
    const vehicleOverlap = (other: Tank | Transport, x: number, z: number) => {
      const otherYaw = other.root.rotation.y, otherHalfZ = 'tracks' in other ? 1.8 : 2.45
      const otherHalfX = Math.abs(Math.cos(otherYaw)) * 1.15 + Math.abs(Math.sin(otherYaw)) * otherHalfZ
      const otherHalfDepth = Math.abs(Math.sin(otherYaw)) * 1.15 + Math.abs(Math.cos(otherYaw)) * otherHalfZ
      return Math.min(x + halfX, other.root.position.x + otherHalfX) - Math.max(x - halfX, other.root.position.x - otherHalfX) > 0
        && Math.min(z + halfZ, other.root.position.z + otherHalfDepth) - Math.max(z - halfZ, other.root.position.z - otherHalfDepth) > 0
    }
    if (tank && Math.hypot(dx, dz) > .028) {
      const rammed = this.fieldStructures.find(structure => !structure.destroyed && overlaps(structure.collider, position.x + dx, position.z + dz))
      if (rammed) { this.damageStructure(rammed, 999); tank.ramSlowUntil = now + .65; tank.hp = Math.max(1, tank.hp - 6); tank.tracks = Math.max(0, tank.tracks - 4); this.status = `${tank.name}撞塌建筑`; this.statusUntil = now + 1.5; const sound = this.soundAt(rammed.root.position); this.audio.explosion(sound.volume * .55, sound.pan) }
    }
    if (vehicle && Math.hypot(dx, dz) > .025) {
      const crushable = this.coverMeshes.find(mesh => mesh.userData.crushable && mesh.userData.collider && overlaps(mesh.userData.collider as Collider, position.x + dx, position.z + dz))
      if (crushable && (tank || Math.random() < .72)) { const collider = crushable.userData.collider as Collider; this.scene.remove(crushable); crushable.geometry.dispose(); this.coverMeshes.splice(this.coverMeshes.indexOf(crushable), 1); const infantryIndex = this.colliders.indexOf(collider), vehicleIndex = this.vehicleColliders.indexOf(collider); if (infantryIndex >= 0) this.colliders.splice(infantryIndex, 1); if (vehicleIndex >= 0) this.vehicleColliders.splice(vehicleIndex, 1); this.markCollidersDirty(); for (let dust = 0; dust < 3; dust++) this.particle(crushable.position, new THREE.Vector3((Math.random() - .5) * 2, .4 + Math.random(), (Math.random() - .5) * 2), 0x6b604e, .08, .45, 2) }
    }
    this.syncColliders()
    const blocked = (x: number, z: number) => {
      const hits = this.vehicleHash.query(x - halfX, x + halfX, z - halfZ, z + halfZ)
      for (let i = 0; i < hits.length; i++) if (overlaps(hits[i], x, z)) return true
      for (const item of this.fortifications) {
        if (item.kind !== 'hedgehog') continue
        for (const box of item.colliders) if (overlaps(box, x, z)) return true
      }
      for (const other of [...this.tanks, ...this.transports]) {
        if (!other.alive || other === vehicle || !vehicleOverlap(other, x, z)) continue
        if (!vehicleOverlap(other, position.x, position.z)) return true
        const currentDistance = (position.x - other.root.position.x) ** 2 + (position.z - other.root.position.z) ** 2, nextDistance = (x - other.root.position.x) ** 2 + (z - other.root.position.z) ** 2
        if (nextDistance <= currentDistance) return true
      }
      return false
    }
    const width = this.battlefieldHalfWidth() - Math.max(halfX, 1.8), depth = this.battlefieldHalfDepth() + 1 - Math.max(halfZ, 1.8), distance = Math.hypot(dx, dz), slices = Math.max(1, Math.ceil(distance / .12)), stepX = dx / slices, stepZ = dz / slices
    const beforeX = position.x, beforeY = position.y, beforeZ = position.z
    for (let slice = 0; slice < slices; slice++) { const nextX = THREE.MathUtils.clamp(position.x + stepX, -width, width); if (!blocked(nextX, position.z)) position.x = nextX; const nextZ = THREE.MathUtils.clamp(position.z + stepZ, -depth, depth); if (!blocked(position.x, nextZ)) position.z = nextZ }
    position.y = this.terrainHeight(position.x, position.z)
    const movement = this.tmpV3A.set(position.x - beforeX, position.y - beforeY, position.z - beforeZ)
    if (tank) { const tankForward = new THREE.Vector3(0, 0, -1).applyQuaternion(tank.root.quaternion), roll = movement.dot(tankForward) / .31; for (const wheel of tank.wheels) wheel.rotateY(roll); this.resolveTankInteractions(tank, movement) }
    else if (transport) this.resolveTransportInteractions(transport, movement)
    return movement.lengthSq() > .000001
  }
  private moveVehicleToward(position: THREE.Vector3, target: THREE.Vector3, step: number, side: number) {
    const vehicle = [...this.tanks, ...this.transports].find(candidate => candidate.alive && candidate.root.position === position), direction = vehicle ? this.vehicleNavDirection(vehicle.root, target) : target.clone().sub(position).setY(0), before = position.distanceToSquared(target); if (!direction.lengthSq()) return true
    direction.normalize(); if (vehicle) vehicle.root.rotation.y = Math.atan2(direction.x, direction.z) + ('tracks' in vehicle ? Math.PI : 0); this.moveTankWithCollision(position, direction.x * step, direction.z * step)
    if (before - position.distanceToSquared(target) > Math.max(.002, step * .08)) return true
    const tangent = new THREE.Vector3(-direction.z * side, 0, direction.x * side), bypass = direction.clone().addScaledVector(tangent, 1.35).normalize()
    this.moveTankWithCollision(position, bypass.x * step, bypass.z * step)
    if (before - position.distanceToSquared(target) > Math.max(.002, step * .04)) return true
    const alternate = direction.clone().addScaledVector(tangent, -1.35).normalize()
    this.moveTankWithCollision(position, alternate.x * step, alternate.z * step)
    return before - position.distanceToSquared(target) > Math.max(.002, step * .025)
  }
  private vehicleLineClear(ax: number, az: number, bx: number, bz: number) {
    this.syncColliders(); const distance = Math.hypot(bx - ax, bz - az), steps = Math.ceil(distance / .8)
    for (let index = 1; index < steps; index++) { const t = index / steps; if (this.vehicleHash.blocked(THREE.MathUtils.lerp(ax, bx, t), THREE.MathUtils.lerp(az, bz, t), 1.7)) return false }
    return true
  }
  private vehicleNavDirection(root: THREE.Object3D, target: THREE.Vector3) {
    const now = performance.now() / 1000, from = new THREE.Vector2(root.position.x, root.position.z), destination = new THREE.Vector2(target.x, target.z)
    if (from.distanceToSquared(destination) < 8 ** 2 && this.vehicleLineClear(from.x, from.y, destination.x, destination.y)) { this.vehicleNavigation.delete(root); return target.clone().sub(root.position).setY(0) }
    let navigation = this.vehicleNavigation.get(root)
    if (!navigation || navigation.target.distanceToSquared(destination) > 6 ** 2 || now >= navigation.refreshAt || navigation.index >= navigation.path.length) {
      const path = this.vehiclePathfinder.findPath(from.x, from.y, destination.x, destination.y, (ax, az, bx, bz) => this.vehicleLineClear(ax, az, bx, bz)).map(point => new THREE.Vector2(point.x, point.z))
      navigation = { path, index: 0, target: destination, refreshAt: now + 2.2 }; this.vehicleNavigation.set(root, navigation)
    }
    let waypoint = navigation.path[navigation.index]
    while (waypoint && from.distanceToSquared(waypoint) < 2.4 ** 2 && navigation.index < navigation.path.length - 1) waypoint = navigation.path[++navigation.index]
    return waypoint ? new THREE.Vector3(waypoint.x - root.position.x, 0, waypoint.y - root.position.z) : target.clone().sub(root.position).setY(0)
  }
  private resolveTankInteractions(tank: Tank, movement: THREE.Vector3) {
    const moving = movement.lengthSq() > .00035, forward = movement.lengthSq() ? movement.clone().normalize() : new THREE.Vector3(0, 0, -1).applyQuaternion(tank.root.quaternion), sweep = new THREE.Line3(tank.root.position.clone().sub(movement).setY(0), tank.root.position.clone().setY(0)), closest = new THREE.Vector3()
    for (const bot of this.bots) {
      if (!bot.alive || bot.riding) continue
      const offset = bot.root.position.clone().sub(tank.root.position), local = offset.clone().applyQuaternion(tank.root.quaternion.clone().invert())
      sweep.closestPointToPoint(bot.root.position.clone().setY(0), true, closest); const swept = closest.distanceToSquared(bot.root.position.clone().setY(0)) < 1.45 ** 2
      if (!swept && (Math.abs(local.x) > 1.55 || Math.abs(local.z) > 2.6)) continue
      const frontal = moving && (swept || forward.dot(offset.setY(0).normalize()) > .15)
      if (frontal && bot.team !== tank.team) { if (this.playerTank === tank) this.kill(bot, false, forward.clone().multiplyScalar(2.2)); else { this.down(bot, forward.clone().multiplyScalar(2.2)); this.events.combatKill(tank.name, tank.team, bot.name, bot.team) } continue }
      const side = local.x >= 0 ? 1 : -1, push = new THREE.Vector3(side * .22, 0, 0).applyQuaternion(tank.root.quaternion); this.moveWithCollision(bot.root.position, push.x, push.z, .34)
    }
    if (tank.team === 'enemy' && moving && !this.dead && !this.playerTank && tank.root.position.distanceToSquared(this.camera.position) < 2.2 ** 2) this.hurtPlayer(320, tank.root.position, `${tank.name} · 履带碾压`)
    for (const other of this.tanks) {
      if (other === tank || !other.alive) continue
      const delta = tank.root.position.clone().sub(other.root.position), distance = delta.length(); if (distance >= 3.1 || distance < .001) continue
      if (!moving) continue
      tank.stalledFor = Math.max(tank.stalledFor, .35); other.stalledFor = Math.max(other.stalledFor, .35)
    }
    if (!moving) return
    for (let index = this.fortifications.length - 1; index >= 0; index--) {
      const wire = this.fortifications[index]; if (wire.kind === 'hedgehog' || wire.kind === 'mg' || wire.center.distanceToSquared(tank.root.position) >= 2.8 ** 2) continue
      this.fortifications.splice(index, 1); for (const collider of wire.colliders) { const colliderIndex = this.colliders.indexOf(collider); if (colliderIndex >= 0) this.colliders.splice(colliderIndex, 1) } for (const mesh of wire.meshes) { const point = mesh.position.clone(), coverIndex = this.coverMeshes.indexOf(mesh); if (coverIndex >= 0) this.coverMeshes.splice(coverIndex, 1); this.scene.remove(mesh); mesh.geometry.dispose(); const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; materials.forEach(material => this.disposeMaterial(material)); for (let spark = 0; spark < 2; spark++) this.particle(point, new THREE.Vector3((Math.random() - .5) * 2, .4 + Math.random(), (Math.random() - .5) * 2), 0x5d5a4d, .055, .45, 2.5) }
      this.status = `${tank.name}碾毁${wire.kind === 'wire' ? '铁丝网' : '沙袋墙'}`; this.statusUntil = performance.now() / 1000 + 1.4
    }
  }
  private resolveTransportInteractions(transport: Transport, movement: THREE.Vector3) {
    if (movement.lengthSq() <= .00035) return
    const forward = movement.clone().normalize(), sweep = new THREE.Line3(transport.root.position.clone().sub(movement).setY(0), transport.root.position.clone().setY(0)), closest = new THREE.Vector3()
    for (const bot of this.bots) {
      if (!bot.alive || bot.riding === transport) continue
      const offset = bot.root.position.clone().sub(transport.root.position), local = offset.clone().applyQuaternion(transport.root.quaternion.clone().invert())
      sweep.closestPointToPoint(bot.root.position.clone().setY(0), true, closest); const swept = closest.distanceToSquared(bot.root.position.clone().setY(0)) < 1.6 ** 2
      if (!swept && (Math.abs(local.x) > 1.5 || Math.abs(local.z) > 3 || forward.dot(offset.setY(0).normalize()) < -.15)) continue
      if (bot.team !== transport.team) { if (this.playerTransport === transport) this.kill(bot, false, forward.clone().multiplyScalar(2.6)); else { this.down(bot, forward.clone().multiplyScalar(2.6)); this.events.combatKill(transport.name, transport.team, bot.name, bot.team) } continue }
      const side = local.x >= 0 ? 1 : -1, push = new THREE.Vector3(side * .28, 0, 0).applyQuaternion(transport.root.quaternion); this.moveWithCollision(bot.root.position, push.x, push.z, .34)
    }
    sweep.closestPointToPoint(this.camera.position.clone().setY(0), true, closest); if (transport.team === 'enemy' && !this.dead && !this.playerTank && !this.playerTransport && closest.distanceToSquared(this.camera.position.clone().setY(0)) < 1.65 ** 2) this.hurtPlayer(260, transport.root.position, `${transport.name} · 车轮碾压`)
    for (let index = this.fortifications.length - 1; index >= 0; index--) {
      const fortification = this.fortifications[index]; if (fortification.kind === 'hedgehog' || fortification.center.distanceToSquared(transport.root.position) >= 3.2 ** 2) continue
      this.fortifications.splice(index, 1); for (const collider of fortification.colliders) { const infantryIndex = this.colliders.indexOf(collider); if (infantryIndex >= 0) this.colliders.splice(infantryIndex, 1) } for (const mesh of fortification.meshes) { const coverIndex = this.coverMeshes.indexOf(mesh); if (coverIndex >= 0) this.coverMeshes.splice(coverIndex, 1); this.scene.remove(mesh); mesh.geometry.dispose() } this.markCollidersDirty()
    }
  }
  private navBlocked(x: number, z: number, radius = .4) {
    if (Math.abs(x) > this.battlefieldHalfWidth() - radius || Math.abs(z) > this.battlefieldHalfDepth() + 1 - radius) return true
    this.syncColliders()
    return this.colliderHash.blocked(x, z, radius)
  }
  private navLineClear(from: THREE.Vector2, to: THREE.Vector2) {
    return this.navLineClearXZ(from.x, from.y, to.x, to.y)
  }
  private navLineClearXZ(ax: number, az: number, bx: number, bz: number) {
    const distance = Math.hypot(bx - ax, bz - az), steps = Math.ceil(distance / .55)
    for (let index = 1; index < steps; index++) {
      const t = index / steps
      if (this.navBlocked(ax + (bx - ax) * t, az + (bz - az) * t)) return false
    }
    return true
  }
  private findBotPath(from: THREE.Vector2, target: THREE.Vector2) {
    this.syncColliders()
    const recastPath = this.recastNavigation.path(from, target)
    if (recastPath?.length) return recastPath
    const path = this.pathfinder.findPath(from.x, from.y, target.x, target.y, (ax, az, bx, bz) => this.navLineClearXZ(ax, az, bx, bz))
    return path.map(point => new THREE.Vector2(point.x, point.z))
  }
  private songhuTacticalAnchor(bot: Bot, objective: Objective, formationSlot: number, finalAnchor: THREE.Vector3) {
    if (bot.urbanLane === undefined) {
      const laneSlot = formationSlot % 10
      bot.urbanLane = laneSlot < 4 ? -1 : laneSlot < 8 ? 1 : 0
    }
    const laneX = bot.urbanLane < 0 ? -20 : bot.urbanLane > 0 ? 22 : 6
    const zDistance = objective.position.z - bot.root.position.z
    const direction = Math.sign(zDistance) || 1
    if (Math.abs(zDistance) <= 22) return finalAnchor
    // Enter the assigned street first, then advance parallel to the main road.
    // A single diagonal waypoint lets shortest-path navigation drift straight back onto the avenue.
    if (Math.abs(bot.root.position.x - laneX) > 3.2) return new THREE.Vector3(laneX, 0, bot.root.position.z + direction * 5)
    return new THREE.Vector3(laneX, 0, objective.position.z - direction * 18)
  }
  private botNavDirection(bot: Bot, target: THREE.Vector2, time: number) {
    const from = this.tmpV2A.set(bot.root.position.x, bot.root.position.z)
    if (from.distanceToSquared(target) < 16 || this.navLineClear(from, target)) { bot.navPath = undefined; bot.navTarget = undefined; return this.tmpV2B.set(target.x - from.x, target.y - from.y) }
    const targetChanged = !bot.navTarget || bot.navTarget.distanceToSquared(target) > 4
    if (targetChanged || !bot.navPath?.length || time >= (bot.navRefreshAt ?? 0)) { bot.navPath = this.findBotPath(from, target); bot.navTarget = target.clone(); bot.navIndex = 0; bot.navRefreshAt = time + 1.6 + Math.random() * .6 }
    const waypoint = bot.navPath?.[bot.navIndex ?? 0]; if (!waypoint) return this.tmpV2B.set(target.x - from.x, target.y - from.y)
    if (from.distanceToSquared(waypoint) < .75 ** 2 && (bot.navIndex ?? 0) < bot.navPath!.length - 1) { bot.navIndex = (bot.navIndex ?? 0) + 1; const next = bot.navPath[bot.navIndex]; return this.tmpV2B.set(next.x - from.x, next.y - from.y) }
    return this.tmpV2B.set(waypoint.x - from.x, waypoint.y - from.y)
  }
  private moveBot(bot: Bot, dx: number, dz: number, speed: number, dt: number) {
    if (bot.vaultUntil) return true
    const now = performance.now() / 1000, target = new THREE.Vector2(bot.root.position.x + dx, bot.root.position.z + dz), sample = this.botMotion.get(bot) ?? { position: new THREE.Vector2(bot.root.position.x, bot.root.position.z), sampledAt: now, stalledFor: 0 }
    if (now - sample.sampledAt >= .7) { const current = new THREE.Vector2(bot.root.position.x, bot.root.position.z); sample.stalledFor = current.distanceTo(sample.position) < .16 ? sample.stalledFor + now - sample.sampledAt : 0; sample.position.copy(current); sample.sampledAt = now }
    this.botMotion.set(bot, sample)
    if (sample.stalledFor > 1.35) { const candidates: THREE.Vector3[] = []; for (const radius of [1, 1.6, 2.3, 3]) for (let index = 0; index < 16; index++) { const angle = index / 16 * Math.PI * 2, point = new THREE.Vector3(bot.root.position.x + Math.cos(angle) * radius, 0, bot.root.position.z + Math.sin(angle) * radius); if (!this.navBlocked(point.x, point.z, .38)) candidates.push(point) } const landing = candidates.sort((a, b) => new THREE.Vector2(a.x, a.z).distanceToSquared(target) - new THREE.Vector2(b.x, b.z).distanceToSquared(target))[0]; if (landing) { landing.y = this.terrainHeight(landing.x, landing.z); bot.vaultFrom = bot.root.position.clone(); bot.vaultTo = landing; bot.vaultStartedAt = now; bot.vaultUntil = now + .5; bot.navPath = undefined; bot.navTarget = undefined; bot.navRefreshAt = 0; sample.stalledFor = 0; return true } }
    const desired = this.recastNavigation.steer(bot, bot.root.position, target, speed) ?? this.botNavDirection(bot, target, now); if (!desired.lengthSq()) return false; desired.normalize()
    const separation = new THREE.Vector2()
    for (const other of this.bots) { if (other === bot || !other.alive || other.riding) continue; const ox = bot.root.position.x - other.root.position.x, oz = bot.root.position.z - other.root.position.z, distanceSq = ox * ox + oz * oz, spacing = other.team === bot.team ? 2.1 : 1.15; if (distanceSq > .01 && distanceSq < spacing ** 2) separation.add(new THREE.Vector2(ox, oz).multiplyScalar((spacing - Math.sqrt(distanceSq)) / distanceSq * (other.team === bot.team ? 1 : .45))) }
    desired.addScaledVector(separation, .52).normalize(); const step = speed * dt
    if (this.moveWithCollision(bot.root.position, desired.x * step, desired.y * step, .34)) { bot.stuckFor = 0; bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z); return true }
    const probe = bot.root.position.clone().add(new THREE.Vector3(desired.x * .72, 0, desired.y * .72)), obstacle = this.colliders.find(collider => probe.x > collider.minX - .34 && probe.x < collider.maxX + .34 && probe.z > collider.minZ - .34 && probe.z < collider.maxZ + .34), vaultable = obstacle && this.fortifications.some(item => (item.kind === 'sandbag' || item.kind === 'wire') && item.colliders.includes(obstacle))
    if (vaultable) { const landing = bot.root.position.clone().add(new THREE.Vector3(desired.x * 1.65, 0, desired.y * 1.65)); if (!this.navBlocked(landing.x, landing.z, .34)) { const now = performance.now() / 1000; landing.y = this.terrainHeight(landing.x, landing.z); bot.vaultFrom = bot.root.position.clone(); bot.vaultTo = landing; bot.vaultStartedAt = now; bot.vaultUntil = now + .48; bot.stuckFor = 0; bot.navPath = undefined; return true } }
    const baseAngle = Math.atan2(desired.y, desired.x), turns = [bot.strafe, -bot.strafe, bot.strafe * 2, -bot.strafe * 2, 3, -3]
    for (const turn of turns) { const angle = baseAngle + turn * Math.PI / 4, candidate = new THREE.Vector2(Math.cos(angle), Math.sin(angle)); if (!this.moveWithCollision(bot.root.position, candidate.x * step, candidate.y * step, .34)) continue; bot.stuckFor = (bot.stuckFor ?? 0) + dt; bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z); if (bot.stuckFor > .9) { for (let probe = 0; probe < 12; probe++) { const escapeAngle = baseAngle + probe * Math.PI / 6, landing = bot.root.position.clone().add(new THREE.Vector3(Math.cos(escapeAngle) * 1.25, 0, Math.sin(escapeAngle) * 1.25)); if (this.navBlocked(landing.x, landing.z, .34)) continue; const now = performance.now() / 1000; landing.y = this.terrainHeight(landing.x, landing.z); bot.vaultFrom = bot.root.position.clone(); bot.vaultTo = landing; bot.vaultStartedAt = now; bot.vaultUntil = now + .42; bot.navPath = undefined; bot.navRefreshAt = 0; bot.stuckFor = 0; break } } return true }
    bot.stuckFor = (bot.stuckFor ?? 0) + dt
    if (bot.stuckFor > .45) { bot.navPath = undefined; bot.navRefreshAt = 0; bot.strafe *= -1 }
    return false
  }
  private updateBotVault(bot: Bot, time: number) {
    if (!bot.vaultUntil || !bot.vaultFrom || !bot.vaultTo || !bot.vaultStartedAt) return false
    const duration = bot.vaultUntil - bot.vaultStartedAt, progress = THREE.MathUtils.clamp((time - bot.vaultStartedAt) / duration, 0, 1)
    bot.root.position.lerpVectors(bot.vaultFrom, bot.vaultTo, progress); bot.root.position.y += Math.sin(progress * Math.PI) * .82; bot.root.scale.set(1, 1, 1); bot.torso.position.y = 0; bot.torso.rotation.x = 0; bot.pose = 'stand'; bot.legs[0].rotation.x = -1.05 + progress * 1.8; bot.legs[1].rotation.x = .75 - progress * 1.8; bot.weapon.rotation.z = .32; bot.muzzle.visible = false
    if (progress < 1) return true
    bot.vaultFrom = undefined; bot.vaultTo = undefined; bot.vaultStartedAt = undefined; bot.vaultUntil = undefined; bot.weapon.rotation.z = 0; bot.legs.forEach(leg => leg.rotation.x = 0)
    return false
  }
  private lights() {
    const wet = this.campaign.weather.includes('雨'), overcast = wet || this.campaign.weather === '阴霾'; this.hemi.intensity = overcast ? 1.7 : 1.5; this.sun.intensity = overcast ? wet ? 2 : 1.7 : 3.1; this.scene.add(this.hemi)
    this.sun.position.set(-38, 65, 25); this.sun.castShadow = true; this.sun.shadow.mapSize.set(2048, 2048)
    Object.assign(this.sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30 }); this.sun.shadow.camera.updateProjectionMatrix(); this.scene.add(this.sun, this.sun.target)
  }
  private updateSun() { const x = Math.round(this.camera.position.x / 8) * 8, z = Math.round(this.camera.position.z / 8) * 8; if (x === this.sunAnchor.x && z === this.sunAnchor.y) return; this.sunAnchor.set(x, z); this.sun.target.position.set(x, 0, z); this.sun.position.set(x - 38, 65, z + 25) }
  private terrainHeight(x: number, z: number) { return this.mapBuilder.terrainHeight(x, z) }
  private initWeather() {
    if (this.campaign.theme === 'alpine') {
      const count = 520, positions = new Float32Array(count * 3); for (let index = 0; index < count; index++) positions.set([-24 + Math.random() * 48, Math.random() * 26, -24 + Math.random() * 48], index * 3)
      const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)); this.precipitation = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0xf1f4f6, size: .14, transparent: true, opacity: .88, depthWrite: false, fog: false })); this.precipitation.frustumCulled = false; this.scene.add(this.precipitation); this.snowing = true; this.rainSpeed = 3.4; return
    }
    if (!this.campaign.weather.includes('雨')) return
    const storm = this.campaign.weather === '雷雨', heavy = storm || this.campaign.weather === '暴雨', count = heavy ? 720 : 460, positions = new Float32Array(count * 6)
    for (let i = 0; i < count; i++) { const x = -24 + Math.random() * 48, y = Math.random() * 26, z = -24 + Math.random() * 48, offset = i * 6; positions.set([x, y, z, x, y - .7, z], offset) }
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3)); this.precipitation = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({ color: 0x9db4c8, transparent: true, opacity: heavy ? .48 : .34, fog: false })); this.precipitation.frustumCulled = false; this.scene.add(this.precipitation); this.rainSpeed = heavy ? 36 : 27; this.lightningAt = performance.now() / 1000 + 6 + Math.random() * 8
  }
  private updateWeather(dt: number, time: number) {
    if (!this.precipitation) return
    this.precipitation.position.set(this.camera.position.x, this.camera.position.y - 8, this.camera.position.z); const positions = this.precipitation.geometry.getAttribute('position') as THREE.BufferAttribute
    if (this.snowing) { for (let index = 0; index < positions.count; index++) { let y = positions.getY(index) - dt * this.rainSpeed, x = positions.getX(index) + Math.sin(time * .7 + index) * dt * .35, z = positions.getZ(index) + Math.cos(time * .45 + index * .7) * dt * .18; if (y < 0) { y += 26; x = -24 + Math.random() * 48; z = -24 + Math.random() * 48 } positions.setXYZ(index, x, y, z) } positions.needsUpdate = true; return }
    for (let i = 0; i < positions.count; i += 2) { let y = positions.getY(i) - dt * this.rainSpeed, x = positions.getX(i) + dt * .8; if (y < 0) { y += 26; x = -24 + Math.random() * 48; const z = -24 + Math.random() * 48; positions.setZ(i, z); positions.setZ(i + 1, z) } positions.setX(i, x); positions.setX(i + 1, x); positions.setY(i, y); positions.setY(i + 1, y - .7) } positions.needsUpdate = true
    if (this.campaign.weather !== '雷雨') return
    this.stormFlash = Math.max(0, this.stormFlash - dt * 5); this.sun.intensity = 2 + this.stormFlash * 7
    if (time < this.lightningAt) return
    this.lightningAt = time + 7 + Math.random() * 10; this.stormFlash = 1; setTimeout(() => this.audio.explosion(.28, (Math.random() - .5) * .8), 550 + Math.random() * 500)
  }
  private gun() {
    this.camera.add(this.weapon); this.scene.add(this.camera); this.buildWeapon()
  }
  private buildWeapon() {
    this.reloadToken++; this.weapon.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }); this.weapon.clear(); this.bolt.clear(); this.weaponMagazine = undefined
    const loadout = this.activeLoadout()
    const built = buildViewWeapon({
      id: loadout.id,
      weaponName: loadout.weapon,
      kind: loadout.kind,
      vehicleDamage: loadout.vehicleDamage,
      parent: this.weapon,
      bolt: this.bolt,
      box: (s, p, c, parent) => this.box(s, p, c, parent),
      mat: (c, r) => this.mat(c, r),
    })
    this.weaponMagazine = built.magazine
    this.playerMuzzle = built.muzzle
    this.weapon.position.set(.32, -.27, -.65); this.weapon.rotation.set(0, 0, 0)
  }
  private switchWeapon(slot: 'primary' | 'sidearm') {
    if (this.dead || this.buildAction || this.bandagingUntil || this.supplyAction || this.playerTank || (this.playerTransport && !this.playerTransportPassenger) || this.playerPlane || this.playerMortar || this.playerEmplacement || this.playerMG || this.loading || this.weaponSlot === slot) return
    if (this.weaponSlot === 'primary') this.primaryAmmo = [this.mag, this.reserve]; else this.sidearmAmmo = [this.mag, this.reserve]
    this.braced = false; this.weaponSlot = slot; [this.mag, this.reserve] = slot === 'primary' ? this.primaryAmmo : this.sidearmAmmo; this.aiming = false; this.events.aim(false); this.buildWeapon(); this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false)
  }
  private objective(id: string, x: number, z: number, radius = 5) {
    const y = this.terrainHeight(x, z), pole = new THREE.Mesh(new THREE.CylinderGeometry(.045, .06, 4.8, 8), this.mat(0x4a4d47)); pole.position.set(x, y + 2.4, z); this.scene.add(pole)
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.05), new THREE.MeshBasicMaterial({ color: 0xd4cdb8, side: THREE.DoubleSide })); flag.position.set(x + .94, y + 4.15, z); this.scene.add(flag)
    const ring = new THREE.Mesh(new THREE.RingGeometry(radius - .2, radius, 48), new THREE.MeshBasicMaterial({ color: 0xd4cdb8, transparent: true, opacity: .38, side: THREE.DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.set(x, y + .035, z); this.scene.add(ring)
    this.objectives.push({ id, position: new THREE.Vector3(x, y, z), radius, owner: null, capturing: null, progress: 0, ring, flag })
    this.supply(x + 3.3, z)
  }
  private weaponShotOffset(weapon: Loadout) {
    const moving = this.keys.has('KeyW') || this.keys.has('KeyA') || this.keys.has('KeyS') || this.keys.has('KeyD'), stanceScale = this.stance === 'prone' ? .55 : this.stance === 'crouch' ? .78 : 1, movementScale = moving ? (this.jumpHeight ? 1.85 : 1.35) : 1, braceScale = this.braced ? .35 : 1
    const degrees = (this.aiming ? weapon.spreadAds : weapon.spreadHip) * stanceScale * movementScale * braceScale + this.suppression * 2.2
    const radius = Math.sqrt(Math.random()) * Math.tan(THREE.MathUtils.degToRad(degrees)) / Math.tan(THREE.MathUtils.degToRad(this.camera.fov * .5)), angle = Math.random() * Math.PI * 2
    return new THREE.Vector2(Math.cos(angle) * radius / this.camera.aspect, Math.sin(angle) * radius)
  }
  private supply(x: number, z: number) {
    const y = this.terrainHeight(x, z); this.box([1.1, .65, .8], [x, y + .34, z], 0x5c452a); this.box([1.16, .08, .86], [x, y + .72, z], 0x765a35); for (const offset of [-.38, .38]) this.box([.06, .72, .84], [x + offset, y + .37, z], 0x292d29)
    this.ammoCrates.push(new THREE.Vector3(x, y, z))
  }
  private depot(id: string, x: number, z: number) { const root = new THREE.Group(), y = this.terrainHeight(x, z); root.position.set(x, y, z); this.scene.add(root); const hitbox = this.box([2.3, 1.7, 2.1], [0, .86, 0], 0x64543b, root); this.box([2.5, .18, 2.3], [0, 1.78, 0], 0x3f443d, root); for (const offset of [-.72, 0, .72]) this.box([.12, 1.75, 2.2], [offset, .88, 0], 0x343934, root); const depot: Depot = { id, root, hitbox, position: new THREE.Vector3(x, y, z), hp: 420, destroyed: false }; hitbox.userData.depot = depot; this.depots.push(depot) }
  private resetTickets() {
    this.tickets = [this.maxTickets, this.maxTickets]
    if (this.campaign.rule !== 'conquest') this.tickets[this.campaign.attacker === 'ally' ? 1 : 0] = Infinity
  }
  private isSonghuOperation() { return this.campaign.id === 'songhu' }
  private operationOpeningActive(time: number) { return this.isSonghuOperation() && this.operationPhase === 0 && this.operationOpeningUntil > time }
  private operationCeasefireActive(time: number) { return this.operationOpeningActive(time) || this.isSonghuOperation() && time < this.operationTransitionUntil }
  private operationStages() { return [[0, 1], [2, 3], [4, 5]] as const }
  private activeAssaultIndices() { return this.isSonghuOperation() ? [...this.operationStages()[this.operationPhase]] : [this.assaultIndex] }
  private activeAssaultObjectives() { return this.activeAssaultIndices().map(index => this.objectives[index]).filter(Boolean) }
  private assaultAttacker(): Team { return this.isSonghuOperation() && this.operationPhase === 2 ? 'ally' : this.campaign.attacker ?? 'ally' }
  private pendingAssaultObjectives() { const attacker = this.assaultAttacker(); return this.activeAssaultObjectives().filter(objective => objective.owner !== attacker) }
  private operationLabel() { return ['天通庵前哨战', '八字桥血战', '闸北阵地反攻'][this.operationPhase] ?? '' }
  private resetModeState() {
    this.assaultIndex = 0; this.operationPhase = 0; this.operationTransitionUntil = 0; this.operationOpeningUntil = 0; this.operationOpeningBarrage = false; this.resetTickets(); this.matchTime = this.isSonghuOperation() ? 24 * 60 : this.campaign.rule === 'demolition' ? 16 * 60 : 18 * 60
    const defender: Team = this.campaign.attacker === 'ally' ? 'enemy' : 'ally'
    for (const point of this.objectives) { point.owner = this.campaign.rule === 'conquest' ? null : defender; point.capturing = null; point.progress = 0 }
    if (this.isSonghuOperation()) for (const point of this.objectives) point.owner = 'ally'
    if (this.campaign.rule === 'conquest') { const sorted = [...this.objectives].sort((a, b) => b.position.z - a.position.z); if (sorted.length) { sorted[0].owner = 'ally'; sorted[sorted.length - 1].owner = 'enemy' } if (sorted.length >= 5) { sorted[1].owner = 'ally'; sorted[sorted.length - 2].owner = 'enemy' } }
    for (const depot of this.depots) { depot.hp = 420; depot.destroyed = false; depot.root.visible = true; depot.root.rotation.set(0, 0, 0); (depot.hitbox.material as THREE.MeshStandardMaterial).color.setHex(0x64543b) }
  }
  private forces() { const rear = this.mapBounds.halfDepth - 22, allyLine = this.isSonghuOperation() ? this.campaign.flags.slice(0, 2).reduce((sum, flag) => sum + flag.z, 0) / 2 + 17 : rear, enemyLine = this.isSonghuOperation() ? -this.mapBounds.halfDepth + 11 : -rear; for (let i = 0; i < this.campaign.allies; i++) this.bot('ally', -5.5 + i % 6 * 2.2, allyLine + Math.floor(i / 6) * 3 - Math.abs(i % 6 - 2.5)); for (let i = 0; i < this.campaign.enemies; i++) this.bot('enemy', -7 + i % 6 * 2.8, enemyLine - Math.floor(i / 6) * 4) }
  private bot(team: Team, x: number, z: number) {
    const index = this.bots.filter(bot => bot.team === team).length, role = (team === 'ally' ? this.battleLoadouts : loadouts)[index % loadouts.length].id, inSquad = team === 'ally' && index < 3, cpc = team === 'ally' && this.campaign.id === 'baituan'
    const mesh = buildSoldier({ team, role, cpc, inSquad, box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    mesh.root.position.set(x, this.terrainHeight(x, z), z); mesh.root.rotation.y = team === 'ally' ? Math.PI : 0; this.scene.add(mesh.root)
    const { root, torso, body, head, weapon, muzzle, legs, arms, squadTag } = mesh
    const allyNames = cpc ? ['李云龙', '赵刚', '王铁蛋', '孙德胜', '张大彪', '魏和尚', '段鹏', '沈泉', '邢志国', '陈铁柱', '石头', '柱子'] : ['陈树生', '姚子青', '谢晋元', '杨瑞符', '雷雄', '王根英', '李增援', '张自忠', '戴安澜'], enemyNames = ['佐藤', '山田', '高桥', '中村', '小林', '渡边', '伊藤', '加藤', '吉田', '山本', '清水', '松本', '井上', '木村', '林田', '藤原'], name = team === 'ally' ? allyNames[index % allyNames.length] : enemyNames[index % enemyNames.length]
    const botLoadout = (team === 'ally' ? this.battleLoadouts : loadouts).find(item => item.id === role), bot: Bot = { root, torso, body, head, weapon, muzzle, team, role, name, kills: 0, deaths: 0, objectiveScore: 0, hp: 100, alive: true, inSquad, squadTag, antiTank: role === 'anti-tank' && !(team === 'ally' && this.campaign.id === 'baituan'), antiTankGrenades: role === 'support' ? 2 : botLoadout?.antiTankGrenades ?? 0, nextAidAt: 8 + Math.random() * 8, nextRocket: 6 + Math.random() * 8, nextMortar: 5 + Math.random() * 5, mortarRigUntil: 0, lastSeenUntil: 0, phase: Math.random() * Math.PI * 2, legs, arms, mag: this.botWeapon(role, team).magazine, reloadUntil: 0, bandages: 1, bandageUntil: 0, coverUntil: 0, nextCoverAt: 0, reviveUntil: 0, nextShot: 1 + Math.random() * 2, shotAt: -10, nextMelee: 0, meleeAt: -10, nextGrenade: 7 + Math.random() * 10, throwAt: -10, grenades: 1, smokes: 1, smokeAt: 12 + Math.random() * 10, suppression: 0, nextWireDamage: 0, reviveAt: 0, respawnAt: 0, deathToken: 0, strafe: Math.random() < .5 ? -1 : 1, chuting: false, pose: 'stand' }; body.userData.bot = bot; body.userData.hitZone = 'body'; head.userData.bot = bot; head.userData.hitZone = 'head'; this.bots.push(bot)
  }
  /** Crouch/prone via bone-like offsets — never squash root.scale.y. */
  private poseBot(bot: Bot, pose: BotPose, dt: number, legSwing = 0) {
    bot.pose = pose
    bot.root.scale.set(1, 1, 1)
    if (pose === 'stand') {
      bot.torso.position.y = THREE.MathUtils.damp(bot.torso.position.y, 0, 14, dt)
      bot.torso.rotation.x = THREE.MathUtils.damp(bot.torso.rotation.x, 0, 14, dt)
      bot.root.rotation.x = THREE.MathUtils.damp(bot.root.rotation.x, 0, 14, dt)
      bot.legs[0].rotation.x = THREE.MathUtils.damp(bot.legs[0].rotation.x, legSwing, 14, dt)
      bot.legs[1].rotation.x = THREE.MathUtils.damp(bot.legs[1].rotation.x, -legSwing, 14, dt)
      bot.arms[0].rotation.x = THREE.MathUtils.damp(bot.arms[0].rotation.x, -.9, 12, dt)
      bot.arms[1].rotation.x = THREE.MathUtils.damp(bot.arms[1].rotation.x, -.9, 12, dt)
      return
    }
    if (pose === 'crouch') {
      bot.torso.position.y = THREE.MathUtils.damp(bot.torso.position.y, -.46, 14, dt)
      bot.torso.rotation.x = THREE.MathUtils.damp(bot.torso.rotation.x, .18, 14, dt)
      bot.root.rotation.x = THREE.MathUtils.damp(bot.root.rotation.x, 0, 14, dt)
      // Knees forward, shins stay near ground via hip pitch.
      bot.legs[0].rotation.x = THREE.MathUtils.damp(bot.legs[0].rotation.x, 1.15 + legSwing * .3, 14, dt)
      bot.legs[1].rotation.x = THREE.MathUtils.damp(bot.legs[1].rotation.x, 1.15 - legSwing * .3, 14, dt)
      bot.arms[0].rotation.x = THREE.MathUtils.damp(bot.arms[0].rotation.x, -1.05, 12, dt)
      bot.arms[1].rotation.x = THREE.MathUtils.damp(bot.arms[1].rotation.x, -1.05, 12, dt)
      return
    }
    // prone: lay flat, torso slightly forward, legs stretched
    bot.torso.position.y = THREE.MathUtils.damp(bot.torso.position.y, -.08, 12, dt)
    bot.torso.rotation.x = THREE.MathUtils.damp(bot.torso.rotation.x, .08, 12, dt)
    bot.root.rotation.x = THREE.MathUtils.damp(bot.root.rotation.x, -1.48, 11, dt)
    bot.legs[0].rotation.x = THREE.MathUtils.damp(bot.legs[0].rotation.x, .2 + legSwing * .12, 12, dt)
    bot.legs[1].rotation.x = THREE.MathUtils.damp(bot.legs[1].rotation.x, -.15 - legSwing * .12, 12, dt)
    bot.arms[0].rotation.x = THREE.MathUtils.damp(bot.arms[0].rotation.x, -1.35, 12, dt)
    bot.arms[1].rotation.x = THREE.MathUtils.damp(bot.arms[1].rotation.x, -1.25, 12, dt)
  }
  private tank(team: Team) {
    const captured = team === 'ally' && this.campaign.id === 'baituan', index = this.tanks.filter(tank => tank.team === team).length
    const kmt = [
      { name: '维克斯 6 吨轻型坦克', maxHp: 520, crew: 2, gunDamage: 210, gunPen: 52, color: 0x5c6858, armor: { front: 17, side: 13, rear: 10, turret: 17, top: 9 }, style: 'light' as const },
      { name: 'T-26 援华轻型坦克', maxHp: 640, crew: 3, gunDamage: 250, gunPen: 70, color: 0x556050, armor: { front: 15, side: 15, rear: 10, turret: 15, top: 10 }, style: 'medium' as const },
      { name: 'M3 斯图亚特（美援）', maxHp: 620, crew: 3, gunDamage: 200, gunPen: 70, color: 0x5d7050, armor: { front: 44, side: 29, rear: 25, turret: 44, top: 13 }, style: 'light' as const },
    ]
    const cpc = [
      { name: '九七式中战车（缴获）', maxHp: 600, crew: 3, gunDamage: 250, gunPen: 86, color: 0x687062, armor: { front: 47, side: 25, rear: 20, turret: 47, top: 12 }, style: 'medium' as const },
      { name: '九五式轻战车（缴获）', maxHp: 430, crew: 2, gunDamage: 160, gunPen: 42, color: 0x636b5e, armor: { front: 12, side: 12, rear: 10, turret: 12, top: 9 }, style: 'light' as const },
    ]
    const japanese = [
      { name: '九五式轻战车', maxHp: 430, crew: 2, gunDamage: 160, gunPen: 42, color: 0x756e48, armor: { front: 12, side: 12, rear: 10, turret: 12, top: 9 }, style: 'light' as const },
      { name: '九七式改中战车', maxHp: 650, crew: 3, gunDamage: 260, gunPen: 86, color: 0x6f6a4c, armor: { front: 47, side: 25, rear: 20, turret: 47, top: 12 }, style: 'medium' as const },
      { name: '一式炮战车', maxHp: 500, crew: 3, gunDamage: 330, gunPen: 104, color: 0x6a6548, armor: { front: 50, side: 25, rear: 12, turret: 16, top: 0 }, style: 'spg' as const },
    ]
    const roster = team === 'enemy' ? japanese : captured ? cpc : kmt, config = roster[index % roster.length]
    const mesh = buildTank({ color: config.color, team, style: config.style, box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    this.scene.add(mesh.root)
    const { root, turret, pitch, barrel, muzzle, coaxMuzzle, hitbox, wheels } = mesh
    const tank: Tank = { root, turret, pitch, barrel, muzzle, coaxMuzzle, hitbox, wheels, team, name: config.name, armor: config.armor, gunDamage: config.gunDamage, gunPen: config.gunPen, maxHp: config.maxHp, hp: config.maxHp, tracks: 100, engine: 100, turretHealth: 100, crew: config.crew, crewCapacity: config.crew, crewMen: [], alive: true, playerDriven: false, recoilToken: 0, ramSlowUntil: 0, stalledFor: 0, reverseUntil: 0, reverseTurn: Math.random() < .5 ? -1 : 1, nextShot: 3 + Math.random() * 3, nextMg: 0, mgBurst: 0, mgPauseUntil: 0, nextSmoke: 0, lastDamageAt: -99, respawnAt: 0 }; hitbox.userData.tank = tank; this.initTankCrew(tank); this.tanks.push(tank); this.reinforceTank(tank, performance.now() / 1000)
  }
  private initTankCrew(tank: Tank) {
    for (const role of (['driver', 'gunner', 'commander', 'loader'] as TankCrewRole[]).slice(0, tank.crewCapacity)) {
      const crew: TankCrew = { role, hp: 65, alive: true, respawnAt: 0 }
      if (role === 'commander') {
        const group = new THREE.Group(); group.position.set(-.42, .78, -.28); tank.turret.add(group); const body = this.box([.36, .44, .25], [0, 0, 0], tank.team === 'ally' ? 0x4f6b61 : 0x817447, group); const head = new THREE.Mesh(new THREE.SphereGeometry(.18, 10, 7), this.mat(0xb88968)); head.position.y = .34; group.add(head); const helmet = new THREE.Mesh(new THREE.SphereGeometry(.21, 10, 5, 0, Math.PI * 2, 0, Math.PI / 2), this.mat(tank.team === 'ally' ? 0x3d5149 : 0x68613c)); helmet.position.y = .46; group.add(helmet); body.userData.tankCrew = { tank, crew }; head.userData.tankCrew = { tank, crew }; crew.mesh = group; crew.hitbox = head
      }
      tank.crewMen.push(crew)
    }
  }
  private crewAlive(tank: Tank, role: TankCrewRole) { const crew = tank.crewMen.find(member => member.role === role); return !crew || crew.alive }
  private damageTankCrew(tank: Tank, crew: TankCrew, damage: number, playerOwned: boolean, headshot = false) { if (!tank.alive || !crew.alive) return; const dealt = Math.min(crew.hp, damage); crew.hp -= damage; if (crew.hp > 0) { if (playerOwned) this.events.hit(false, headshot, dealt); return } crew.alive = false; crew.respawnAt = performance.now() / 1000 + 9; if (crew.mesh) crew.mesh.visible = false; tank.crew = tank.crewMen.filter(member => member.alive).length; if (playerOwned && tank.team === 'enemy') { const roleName = crew.role === 'driver' ? '驾驶员' : crew.role === 'gunner' ? '炮手' : crew.role === 'loader' ? '装填手' : '车长'; this.events.hit(true, headshot, dealt); this.events.kill(++this.kills, `日军坦克${roleName}`, headshot); this.notePlayerKill() } }
  private damageRandomTankCrew(tank: Tank, playerOwned: boolean) { const alive = tank.crewMen.filter(crew => crew.alive); if (!alive.length) return; this.damageTankCrew(tank, alive[Math.floor(Math.random() * alive.length)], 90, playerOwned) }
  private updateTankCrew(tank: Tank, time: number) { for (const crew of tank.crewMen) if (!crew.alive && time >= crew.respawnAt && tank.alive) { crew.alive = true; crew.hp = 65; if (crew.mesh) crew.mesh.visible = true } tank.crew = tank.crewMen.filter(crew => crew.alive).length }
  private transport(team: Team) {
    const captured = team === 'ally' && this.campaign.id === 'baituan', config = team === 'enemy' ? { name: '九四式六轮卡车', maxHp: 280 } : captured ? { name: '改装民用卡车', maxHp: 260 } : { name: 'CCKW 十轮卡车（援华）', maxHp: 320 }, color = captured ? 0x5e5a4a : team === 'ally' ? 0x4c5d50 : 0x6b6745
    const mesh = buildTransport({ color, team, captured, box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    this.scene.add(mesh.root)
    const { root, hitbox, wheels } = mesh
    const transport: Transport = { root, hitbox, wheels, team, name: config.name, maxHp: config.maxHp, hp: config.maxHp, alive: true, playerDriven: false, mission: 'pickup', waitUntil: 0, nextDrop: 0, stalledFor: 0, reverseUntil: 0, reverseTurn: Math.random() < .5 ? -1 : 1, nextSmoke: 0, lastDamageAt: -99, respawnAt: 0 }; hitbox.userData.transport = transport; this.transports.push(transport); this.reinforceTransport(transport, performance.now() / 1000)
  }
  private emplacement(team: Team, kind: 'at' | 'aa', x: number, z: number) {
    const placement = this.openPlacement(x, z, 1.45)
    const mesh = buildEmplacement({ team, kind, box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    mesh.root.position.copy(placement); mesh.root.rotation.y = team === 'ally' ? Math.PI : 0; this.scene.add(mesh.root)
    const { root, yaw, muzzle, hitbox } = mesh
    const emplacement: Emplacement = { root, yaw, muzzle, hitbox, team, kind, hp: kind === 'aa' ? 180 : 240, alive: true, occupied: false, operatorUntil: 0, nextShot: 2 + Math.random() * 2, respawnAt: 0 }; hitbox.userData.emplacement = emplacement; this.emplacements.push(emplacement)
  }
  private plane(team: Team) {
    const captured = team === 'ally' && this.campaign.id === 'baituan', index = this.planes.filter(plane => plane.team === team).length
    const allied = [{ name: '霍克三型战斗机', maxHp: 230, bombs: 1, color: 0x50655a }, { name: '伊-16 援华战斗机', maxHp: 280, bombs: 2, color: 0x5f6a58 }], capturedRoster = [{ name: '一式战“隼”（缴获）', maxHp: 290, bombs: 2, color: 0x6f7a6a }, { name: '九九式轻爆机（缴获）', maxHp: 300, bombs: 3, color: 0x667062 }], japanese = [{ name: '零式舰上战斗机', maxHp: 220, bombs: 1, color: 0x8a9284 }, { name: '一式战斗机“隼”', maxHp: 290, bombs: 3, color: 0x77806e }]
    const roster = team === 'enemy' ? japanese : captured ? capturedRoster : allied, config = roster[index % roster.length], scale = index % 2 ? 1.1 : 1
    const mesh = buildPlane({ color: config.color, team, scale, box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    this.scene.add(mesh.root)
    const { root, hitbox, prop } = mesh
    const plane: Plane = { root, hitbox, prop, team, name: config.name, maxHp: config.maxHp, hp: config.maxHp, alive: true, playerDriven: false, abandoned: false, speed: 30, throttle: .8, angle: team === 'ally' ? 0 : Math.PI, bombs: config.bombs, maxBombs: config.bombs, nextBomb: 0, bombRearmAt: 0, stallWarned: false, nextAttack: 5 + Math.random() * 5, nextShot: 0, respawnAt: 0 }; hitbox.userData.plane = plane; this.planes.push(plane); this.reinforcePlane(plane, performance.now() / 1000)
  }
  private input() {
    addEventListener('keydown', e => { this.keys.add(e.code); if (e.repeat) return; if (e.code === 'Space') this.jump(); if (e.code === 'KeyJ') this.toggleBrace(); if (e.code === 'Digit1') this.switchWeapon('primary'); if (e.code === 'Digit2') this.switchWeapon('sidearm'); if (e.code === 'Digit4') this.cycleGrenade(); if (e.code === 'KeyR') this.reload(); if (e.code === 'KeyG') this.beginGrenadeCook(); if (e.code === 'KeyX') this.throwSmoke(); if (e.code === 'KeyV') this.melee(); if (e.code === 'KeyH') this.heal(); if (e.code === 'KeyB') this.playerPlane ? this.dropPlaneBomb() : this.deployUtility(); if (e.code === 'Digit5') this.cycleBuild(); if (e.code === 'KeyF') { if (this.playerPlane) this.leavePlane(); else this.repairTank() } if (e.code === 'KeyE') this.interact(); if (e.code === 'KeyT') this.orderSquadMove(); if (e.code === 'KeyY') this.orderSquadFollow(); if (e.code === 'KeyC' && this.playerTank) this.tankGunnerView = !this.tankGunnerView; else if (e.code === 'KeyC' && !this.jumpHeight && !this.playerPlane && !this.playerTransport && !this.playerMortar && !this.playerEmplacement && !this.playerMG) this.stance = this.stance === 'crouch' ? 'stand' : 'crouch'; if (e.code === 'KeyZ' && !this.playerTank && !this.playerPlane && !this.playerTransport && !this.jumpHeight) this.stance = this.stance === 'prone' ? 'stand' : 'prone' }); addEventListener('keyup', e => { this.keys.delete(e.code); if (e.code === 'KeyG') this.releaseGrenadeCook() })
    addEventListener('mousemove', e => {
      if (!this.active || document.pointerLockElement !== this.canvas || performance.now() < this.pointerLockGraceUntil) return
      if (!this.pointerMovementReady) { this.pointerMovementReady = true; return }
      const rawX = Number.isFinite(e.movementX) ? e.movementX : 0, rawY = Number.isFinite(e.movementY) ? e.movementY : 0, magnitude = Math.hypot(rawX, rawY), maxMovement = .12 / this.sensitivity, scale = magnitude > maxMovement ? maxMovement / magnitude : 1, movementX = rawX * scale, movementY = rawY * scale
      // Infantry ADS slows look; vehicle freelook is slightly softer; gunner optic a bit tighter; plane stick a bit livelier.
      const lookScale = this.playerPlane ? 1.15 : this.playerTank || this.playerTransport ? (this.tankGunnerView ? .72 : .82) : this.aiming ? this.camera.fov / 72 : 1
      const sens = this.sensitivity * lookScale
      if (this.dead) { this.downedFreeLook = true; this.yaw -= movementX * this.sensitivity; this.pitch = THREE.MathUtils.clamp(this.pitch - movementY * this.sensitivity, -.85, .85); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); return }
      if (this.playerPlane) {
        this.planeStickPitch = THREE.MathUtils.clamp(this.planeStickPitch - movementY * sens, -1, .95)
        this.yaw -= movementX * sens * .55
      } else {
        this.yaw -= movementX * sens
        this.pitch = THREE.MathUtils.clamp(this.pitch - movementY * sens, -1.35, 1.35)
      }
    })
    addEventListener('mousedown', e => { if (!this.active || this.dead) return; if (document.pointerLockElement !== this.canvas) { this.canvas.requestPointerLock(); return } if (this.operationCeasefireActive(performance.now() / 1000)) return; if (e.button === 0 && (!this.playerTransport || this.playerTransportPassenger)) { this.firing = true; this.playerTank ? this.firePlayerTank() : this.playerMortar ? this.fireMortar() : this.playerEmplacement ? this.fireEmplacement() : this.playerMG ? this.fireMachineGun() : this.fire() } if (e.button === 2 && this.playerTank) { this.tankMgFiring = true; this.firePlayerTankMg() } else if (e.button === 2 && this.playerPlane) this.dropPlaneBomb(); else if (e.button === 2 && (!this.playerTransport || this.playerTransportPassenger) && !this.playerMortar && !this.playerEmplacement && !this.playerMG) { this.aiming = true; this.events.aim(true) } })
    addEventListener('mouseup', e => { if (e.button === 0) this.firing = false; if (e.button === 2) { this.tankMgFiring = false; this.aiming = false; this.events.aim(false) } }); addEventListener('contextmenu', e => e.preventDefault()); addEventListener('pointerlockchange', () => { this.pointerMovementReady = false; this.pointerLockGraceUntil = performance.now() + 180; if (document.pointerLockElement !== this.canvas) { this.releaseGrenadeCook(); this.firing = false; this.tankMgFiring = false; this.aiming = false; this.events.aim(false) } })
  }
  private fire() {
    if (this.parachuting) return
    if (this.playerPlane) { this.firePlayerPlane(); return }
    const weapon = this.activeLoadout()
    const now = performance.now(); if (this.buildAction || this.bandagingUntil || this.supplyAction || this.loading || !this.mag || now < this.nextPlayerShot) return; this.nextPlayerShot = now + 60000 / weapon.rpm; this.shotAt = now / 1000; this.mag--; this.recoil = weapon.recoil * (this.braced ? .45 : this.stance === 'prone' ? .7 : 1); this.events.ammo(this.mag, this.reserve, false); if (weapon.kind === 'bolt') this.cycleBolt(); this.ray.setFromCamera(this.weaponShotOffset(weapon), this.camera)
    const targets = this.hitTargetsAgainst('enemy'), hit = this.withStaticCover(this.ray.intersectObjects(targets, false)[0]), bot = hit?.object.userData.bot as Bot | undefined, tankCrewHit = hit?.object.userData.tankCrew as { tank: Tank; crew: TankCrew } | undefined, tank = hit?.object.userData.tank as Tank | undefined, transport = hit?.object.userData.transport as Transport | undefined, emplacement = hit?.object.userData.emplacement as Emplacement | undefined, plane = hit?.object.userData.plane as Plane | undefined, depot = hit?.object.userData.depot as Depot | undefined, structure = hit?.object.userData.structure as FieldStructure | undefined, urbanBuilding = hit?.object.userData.urbanBuilding as UrbanBuilding | undefined, start = this.playerMuzzle.getWorldPosition(this.tmpV3A), end = hit?.point ?? this.ray.ray.at(100, this.tmpV3B); this.tracer(start, end, 0xffd67a); this.ejectCasing(); this.audio.shot(weapon.kind); this.alertBots('ally', this.camera.position); if (hit) this.impactFx(end, Boolean(bot || tankCrewHit))
    this.suppressBots(start, end)
    if (tankCrewHit) { this.damageTankCrew(tankCrewHit.tank, tankCrewHit.crew, weapon.damage * weapon.headMultiplier, true, true); return } if (!bot && !tank && !transport && !emplacement && !plane && !depot && !structure && !urbanBuilding) { if (hit && Math.random() < .3) { const sound = this.soundAt(end); this.audio.ricochet(sound.volume, sound.pan) } return } this.audio.click(tank || transport || emplacement || plane || depot || structure || urbanBuilding ? 520 : 1250, tank || transport || emplacement || plane || depot || structure || urbanBuilding ? .075 : .045); if (urbanBuilding) { this.damageUrbanBuilding(urbanBuilding, weapon.damage * .08); return } if (structure) { this.damageStructure(structure, weapon.vehicleDamage ? weapon.vehicleDamage * .7 : weapon.damage * .22); return } if (depot) { this.damageDepot(depot, weapon.vehicleDamage ? weapon.vehicleDamage * .6 : weapon.damage * .42, true); return } if (plane) { this.damagePlane(plane, weapon.vehicleDamage ? weapon.vehicleDamage * .8 : weapon.damage * .55, true); return } if (emplacement) { this.damageEmplacement(emplacement, weapon.vehicleDamage ? weapon.vehicleDamage * .9 : weapon.damage * .65, true); return } if (transport) { this.damageTransport(transport, weapon.vehicleDamage ? weapon.vehicleDamage * .85 : Math.max(4, weapon.damage * .14), true); return } if (tank) { this.damageTank(tank, weapon.vehicleDamage ?? Math.max(2, weapon.damage * .06), true, hit?.point, weapon.armorPen, this.ray.ray.direction); return } if (!bot) return; const headshot = hit?.object.userData.hitZone === 'head', falloff = THREE.MathUtils.clamp(1 - Math.max(0, (hit?.distance ?? 0) - 35) * .003, .72, 1), damage = weapon.damage * falloff * (headshot ? weapon.headMultiplier : 1), dealt = Math.min(bot.hp, damage); bot.hp -= damage; const killed = bot.hp <= 0; this.events.hit(killed, headshot, dealt); if (killed) this.kill(bot, headshot, this.ray.ray.direction)
  }
  private melee() {
    if (this.parachuting) return
    if (this.playerEmplacement) return
    const time = performance.now() / 1000; if (this.dead || this.buildAction || this.bandagingUntil || this.supplyAction || this.playerTank || this.playerTransport || this.playerMortar || this.playerMG || this.loading || time < this.meleeCooldown) return; this.meleeCooldown = time + .75; this.meleeAt = time; this.aiming = false; this.events.aim(false); this.audio.click(1350, .08); this.ray.setFromCamera(new THREE.Vector2(), this.camera); const hit = this.withStaticCover(this.ray.intersectObjects(this.hitTargetsAgainst('enemy'), false)[0]); if (!hit || hit.distance > 2.7) return; const bot = hit.object.userData.bot as Bot; if (!bot || bot.team !== 'enemy') return; const dealt = Math.min(bot.hp, 125); bot.hp -= 125; this.impactFx(hit.point, true); const killed = bot.hp <= 0; this.events.hit(killed, hit.object.userData.hitZone === 'head', dealt); if (killed) this.kill(bot, hit.object.userData.hitZone === 'head')
  }
  private cycleGrenade() {
    if (this.dead || this.buildAction || this.grenadeCooking || this.selectedLoadout.id !== 'anti-tank') return
    this.grenadeMode = this.grenadeMode === 'frag' ? 'anti-tank' : 'frag'; this.events.grenadeMode(this.grenadeMode, this.antiTankGrenades); this.status = this.grenadeMode === 'anti-tank' ? '反坦克手雷已选择' : '破片手雷已选择'; this.statusUntil = performance.now() / 1000 + 1.3
  }
  private beginGrenadeCook() {
    if (this.grenadeMode === 'anti-tank') { this.throwGrenade(); return }
    if (this.grenadeCooking || this.buildAction || this.bandagingUntil || this.supplyAction || this.parachuting || this.playerEmplacement || this.dead || this.playerTank || (this.playerTransport && !this.playerTransportPassenger) || this.playerMortar || this.playerMG || !this.grenades) return
    this.grenadeCooking = true; this.grenadeFuse = 3.8; this.aiming = false; this.events.aim(false); this.weapon.visible = false
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.045, .055, .27, 9), this.mat(0x3f4936, .48)); mesh.rotation.z = .22; mesh.position.set(.22, -.22, -.48); mesh.castShadow = true; this.camera.add(mesh); this.heldGrenade = mesh; this.events.grenadeCook(this.grenadeFuse); this.audio.click(1180, .07)
  }
  private clearGrenadeCook(dispose = true) {
    this.grenadeCooking = false; this.events.grenadeCook(); const mesh = this.heldGrenade; this.heldGrenade = undefined
    if (mesh) { mesh.removeFromParent(); if (dispose) { mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose() } }
    if (!this.dead && !this.playerTank && !this.playerPlane && !this.playerMortar && !this.playerEmplacement && !this.playerMG && (!this.playerTransport || this.playerTransportPassenger)) this.weapon.visible = true
  }
  private releaseGrenadeCook() { if (!this.grenadeCooking) return; const fuse = Math.max(.05, this.grenadeFuse); this.clearGrenadeCook(); this.throwGrenade(fuse) }
  private updateGrenadeCook(dt: number, time: number) {
    if (!this.grenadeCooking) return
    this.grenadeFuse -= dt; this.events.grenadeCook(Math.max(0, this.grenadeFuse)); if (this.heldGrenade) { this.heldGrenade.rotation.x += dt * 1.7; this.heldGrenade.position.y = -.22 + Math.sin(time * 8) * .012 }
    if (this.grenadeFuse > 0) return
    const mesh = this.heldGrenade, position = mesh?.getWorldPosition(new THREE.Vector3()) ?? this.camera.position.clone(); this.grenades = Math.max(0, this.grenades - 1); this.clearGrenadeCook(false)
    if (!mesh) return; mesh.position.copy(position); mesh.rotation.set(0, 0, 0); this.scene.add(mesh); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), '手雷在手中爆炸'); this.explode({ mesh, velocity: new THREE.Vector3(), detonateAt: time, team: 'ally', playerOwned: true })
  }
  private throwGrenade(fuse = 2.7) {
    if (this.parachuting) return
    if (this.playerEmplacement) return
    const antiTank = this.grenadeMode === 'anti-tank'; if (this.dead || this.buildAction || this.playerTank || (this.playerTransport && !this.playerTransportPassenger) || this.playerMortar || this.playerMG || (antiTank ? !this.antiTankGrenades : !this.grenades)) return
    const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); const mesh = antiTank ? new THREE.Mesh(new THREE.SphereGeometry(.11, 9, 7), this.mat(0x494b3a, .52)) : new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, .26, 8), this.mat(0x3f4936, .55)); mesh.castShadow = true; mesh.position.copy(this.camera.position).addScaledVector(direction, .45); this.scene.add(mesh)
    this.grenadesInWorld.push({ mesh, velocity: direction.multiplyScalar(antiTank ? 10 : 13).add(new THREE.Vector3(0, antiTank ? 2.7 : 3.2, 0)), detonateAt: performance.now() / 1000 + (antiTank ? 2.15 : fuse), team: 'ally', playerOwned: true, antiTank }); if (antiTank) this.antiTankGrenades--; else this.grenades--; this.events.grenadeMode(this.grenadeMode, this.antiTankGrenades); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), '')
  }
  private throwSmoke() {
    if (this.parachuting) return
    if (this.playerEmplacement) return
    if (this.dead || this.buildAction || this.bandagingUntil || this.supplyAction || this.playerTank || (this.playerTransport && !this.playerTransportPassenger) || this.playerMortar || this.playerMG || !this.smokeGrenades) return
    const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .16, 8), this.mat(0x899087, .65)); mesh.castShadow = true; mesh.position.copy(this.camera.position).addScaledVector(direction, .45); this.scene.add(mesh); this.grenadesInWorld.push({ mesh, velocity: direction.multiplyScalar(11).add(new THREE.Vector3(0, 3, 0)), detonateAt: performance.now() / 1000 + 1.8, team: 'ally', playerOwned: true, smoke: true }); this.smokeGrenades--
  }
  private throwNpcGrenade(bot: Bot, target: THREE.Vector3, time: number) {
    const start = bot.root.position.clone().add(new THREE.Vector3(0, 1.65, 0)), delta = target.clone().setY(0).sub(bot.root.position.clone().setY(0)), flight = THREE.MathUtils.clamp(delta.length() / 12, .9, 1.7), velocity = new THREE.Vector3(delta.x / flight, 5.2 + flight * 1.4, delta.z / flight), mesh = new THREE.Mesh(new THREE.CylinderGeometry(.035, .045, .26, 8), this.mat(bot.team === 'ally' ? 0x3f4936 : 0x514b32, .55)); mesh.position.copy(start); mesh.castShadow = true; this.scene.add(mesh)
    this.grenadesInWorld.push({ mesh, velocity, detonateAt: time + 2.35, team: bot.team, playerOwned: false, owner: bot }); bot.grenades--; bot.throwAt = time; bot.nextGrenade = time + 18; bot.nextShot = Math.max(bot.nextShot, time + 1.1)
  }
  private updateBotAntiTankGrenade(bot: Bot, dt: number, time: number) {
    if (!bot.antiTankGrenades || bot.inSquad || bot.riding || bot.suppression > 1.05) return false
    const tank = this.tanks.filter(candidate => candidate.alive && candidate.team !== bot.team).sort((a, b) => bot.root.position.distanceToSquared(a.root.position) - bot.root.position.distanceToSquared(b.root.position))[0]; if (!tank) return false
    const dx = tank.root.position.x - bot.root.position.x, dz = tank.root.position.z - bot.root.position.z, distance = Math.hypot(dx, dz); if (distance > 55) return false
    bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; bot.weapon.visible = true
    if (distance >= 11 && distance <= 26 && time >= bot.nextGrenade) {
      const start = bot.root.position.clone().add(new THREE.Vector3(0, 1.5, 0)), flight = THREE.MathUtils.clamp(distance / 11, .95, 1.65), velocity = new THREE.Vector3(dx / flight, 5.4 + flight * 1.2, dz / flight), mesh = new THREE.Mesh(new THREE.SphereGeometry(.11, 9, 7), this.mat(0x494b3a, .52)); mesh.position.copy(start); mesh.castShadow = true; this.scene.add(mesh); this.grenadesInWorld.push({ mesh, velocity, detonateAt: time + 2.15, team: bot.team, playerOwned: false, owner: bot, antiTank: true }); bot.antiTankGrenades--; bot.nextGrenade = time + 9 + Math.random() * 5; bot.throwAt = time; bot.nextShot = Math.max(bot.nextShot, time + 1.15); return true
    }
    const destination = distance < 10 ? bot.root.position.clone().add(new THREE.Vector3(-dx, 0, -dz).normalize().multiplyScalar(5)) : tank.root.position.clone().add(new THREE.Vector3(bot.strafe * 5, 0, 4.5).applyQuaternion(tank.root.quaternion)), moveX = destination.x - bot.root.position.x, moveZ = destination.z - bot.root.position.z, travel = Math.hypot(moveX, moveZ)
    if (travel > .5) this.moveBot(bot, moveX, moveZ, distance < 10 ? 2.6 : 1.7, dt)
    const step = Math.sin(time * 8 + bot.phase) * .62; bot.legs[0].rotation.x = step; bot.legs[1].rotation.x = -step; bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z) + Math.abs(step) * .025; return true
  }
  private throwNpcSmoke(bot: Bot, target: THREE.Vector3, time: number) { const start = bot.root.position.clone().add(new THREE.Vector3(0, 1.4, 0)), delta = target.clone().setY(0).sub(bot.root.position.clone().setY(0)).normalize(), mesh = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .16, 8), this.mat(0x899087, .65)); mesh.position.copy(start); this.scene.add(mesh); this.grenadesInWorld.push({ mesh, velocity: delta.multiplyScalar(8).add(new THREE.Vector3(0, 4.2, 0)), detonateAt: time + 1.7, team: bot.team, playerOwned: false, owner: bot, smoke: true }); bot.smokes--; bot.smokeAt = time + 22 + Math.random() * 10; bot.throwAt = time; bot.nextShot = Math.max(bot.nextShot, time + 1.1) }
  private heal() {
    if (this.dead || this.buildAction || this.bandagingUntil || this.supplyAction || this.loading || this.grenadeCooking || this.playerTank || this.playerPlane || (this.playerTransport && !this.playerTransportPassenger) || this.playerMortar || this.playerEmplacement || this.playerMG || !this.aid || this.hp >= 100) return
    const time = performance.now() / 1000; this.bandagingStartedAt = time; this.bandagingUntil = time + 2.6; this.firing = false; this.aiming = false; this.events.aim(false); this.weapon.visible = false
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.055, .055, .24, 12), this.mat(0xd7d0bb, .82)); mesh.rotation.z = Math.PI / 2; mesh.position.set(.12, -.2, -.42); this.camera.add(mesh); this.heldBandage = mesh; this.status = '正在包扎 · 受伤会中断'; this.statusUntil = this.bandagingUntil
  }
  private clearBandage() {
    this.bandagingUntil = 0; this.bandagingStartedAt = 0; const mesh = this.heldBandage; this.heldBandage = undefined
    if (mesh) { mesh.removeFromParent(); mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose() }
    if (!this.dead && !this.grenadeCooking && !this.playerTank && !this.playerPlane && !this.playerMortar && !this.playerEmplacement && !this.playerMG && (!this.playerTransport || this.playerTransportPassenger)) this.weapon.visible = true
  }
  private interruptBandage() { if (!this.bandagingUntil) return; this.clearBandage(); this.status = '包扎被打断'; this.statusUntil = performance.now() / 1000 + 1.4 }
  private updateBandage(time: number) {
    if (!this.bandagingUntil) return
    const progress = THREE.MathUtils.clamp((time - this.bandagingStartedAt) / 2.6, 0, 1); if (this.heldBandage) { this.heldBandage.position.x = .12 + Math.sin(progress * Math.PI * 8) * .1; this.heldBandage.position.y = -.2 + Math.sin(progress * Math.PI * 4) * .035; this.heldBandage.rotation.y = progress * Math.PI * 5 }
    if (time < this.bandagingUntil) return
    this.aid--; this.hp = Math.min(100, this.hp + 45); this.clearBandage(); this.status = '包扎完成 +45'; this.statusUntil = time + 1.6; this.events.health(this.hp, false); this.audio.click(1200, .08); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), this.status)
  }
  private deployUtility() {
    if (this.selectedLoadout.id === 'medic') this.deployMedkit()
    if (this.selectedLoadout.id === 'engineer') this.deployFortification()
    if (this.selectedLoadout.id === 'mortar') this.toggleMortar()
  }
  private buildLabel() { return this.buildKind === 'sandbag' ? '沙袋墙' : this.buildKind === 'wire' ? '铁丝网' : this.buildKind === 'hedgehog' ? '拒马' : '重机枪' }
  private cycleBuild() { if (this.dead || this.buildAction || this.playerTank || this.playerMortar || this.playerMG || this.selectedLoadout.id !== 'engineer') return; const kinds: BuildKind[] = ['sandbag', 'wire', 'hedgehog', 'mg']; this.buildKind = kinds[(kinds.indexOf(this.buildKind) + 1) % kinds.length]; this.status = `工事：${this.buildLabel()}`; this.statusUntil = performance.now() / 1000 + 1.4 }
  private placeMedkit(position: THREE.Vector3, team: Team, time: number) { const root = new THREE.Group(); root.position.copy(position).setY(this.terrainHeight(position.x, position.z)); this.scene.add(root); this.box([.8, .32, .55], [0, .18, 0], team === 'ally' ? 0x64553c : 0x62583d, root); this.box([.38, .04, .58], [0, .36, 0], 0xc9c4ad, root); this.box([.04, .38, .58], [0, .36, 0], 0xc9c4ad, root); this.medkits.push({ root, team, expiresAt: time + 25, nextHeal: time, uses: 4 }) }
  private deployMedkit() {
    if (this.dead || this.playerTank || this.selectedLoadout.id !== 'medic' || !this.medkitAvailable) return; const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); direction.y = 0; direction.normalize(); const time = performance.now() / 1000; this.placeMedkit(this.camera.position.clone().addScaledVector(direction, 1.2), 'ally', time); this.medkitAvailable = false; this.status = '医疗箱已部署'; this.statusUntil = time + 1.6; this.events.equipment(this.grenades, this.aid, false, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), this.status)
  }
  private deployFortification() {
    const cost = this.buildKind === 'mg' ? 3 : 1
    if (this.dead || this.buildAction || this.bandagingUntil || this.supplyAction || this.grenadeCooking || this.playerTank || this.playerPlane || this.playerTransport || this.playerMortar || this.playerEmplacement || this.playerMG || this.selectedLoadout.id !== 'engineer' || this.buildCharges < cost) { if (this.selectedLoadout.id === 'engineer' && this.buildCharges < cost) { this.status = `建造点数不足，需要 ${cost} 点`; this.statusUntil = performance.now() / 1000 + 1.5 } return }
    const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); direction.y = 0; direction.normalize(); const center = this.camera.position.clone().addScaledVector(direction, 2.4), alongX = Math.abs(direction.z) >= Math.abs(direction.x), halfX = alongX ? 2.15 : .42, halfZ = alongX ? .42 : 2.15; center.y = this.terrainHeight(center.x, center.z)
    if (Math.abs(center.x) + halfX > this.battlefieldHalfWidth() - .6 || Math.abs(center.z) + halfZ > this.battlefieldHalfDepth() - 1 || this.colliders.some(box => center.x + halfX > box.minX && center.x - halfX < box.maxX && center.z + halfZ > box.minZ && center.z - halfZ < box.maxZ)) { this.status = '这里无法构筑'; this.statusUntil = performance.now() / 1000 + 1.4; return }
    const duration = { sandbag: 2.2, wire: 2.2, hedgehog: 1.8, mg: 3.4 }[this.buildKind], time = performance.now() / 1000; this.buildAction = { kind: this.buildKind, center, alongX, face: this.yaw, cost, startedAt: time, completeAt: time + duration }; this.firing = false; this.aiming = false; this.events.aim(false); this.weapon.visible = false
    const tool = new THREE.Group(), handle = new THREE.Mesh(new THREE.CylinderGeometry(.025, .032, .45, 7), this.mat(0x654326, .65)), head = new THREE.Mesh(new THREE.BoxGeometry(.28, .1, .1), this.mat(0x303532, .3)); handle.rotation.z = -.5; head.position.set(-.1, .18, 0); head.rotation.z = -.5; tool.add(handle, head); tool.position.set(.2, -.18, -.42); this.camera.add(tool); this.heldTool = tool; this.status = `正在构筑${this.buildLabel()} · 移动取消`; this.statusUntil = time + duration
  }
  private clearBuildAction(message?: string) {
    const hadAction = Boolean(this.buildAction || this.heldTool); this.buildAction = undefined; const tool = this.heldTool; this.heldTool = undefined; if (tool) { tool.removeFromParent(); tool.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }) }
    if (!this.dead && !this.bandagingUntil && !this.supplyAction && !this.grenadeCooking && !this.playerTank && !this.playerPlane && !this.playerMortar && !this.playerEmplacement && !this.playerMG && (!this.playerTransport || this.playerTransportPassenger)) this.weapon.visible = true
    if (message && hadAction) { this.status = message; this.statusUntil = performance.now() / 1000 + 1.3 }
  }
  private updateBuildAction(time: number) {
    const action = this.buildAction; if (!action) return
    if (this.keys.has('KeyW') || this.keys.has('KeyA') || this.keys.has('KeyS') || this.keys.has('KeyD') || this.keys.has('Space')) { this.clearBuildAction('建造已取消'); return }
    const duration = action.completeAt - action.startedAt, progress = THREE.MathUtils.clamp((time - action.startedAt) / duration, 0, 1), swing = Math.sin(progress * Math.PI * duration * 4); if (this.heldTool) { this.heldTool.rotation.x = -.35 - Math.max(0, swing) * .9; this.heldTool.rotation.z = .15 + swing * .16 }
    if (time < action.completeAt) return
    const { kind, center, alongX, face, cost } = action, halfX = alongX ? 2.15 : .42, halfZ = alongX ? .42 : 2.15, meshes: THREE.Mesh[] = [], colliders: Collider[] = [], rising: THREE.Object3D[] = [], addCollider = (collider: Collider) => { colliders.push(collider); this.colliders.push(collider) }, addCover = (mesh: THREE.Mesh) => { meshes.push(mesh); this.coverMeshes.push(mesh) }
    if (kind === 'sandbag') for (let index = -2; index <= 2; index++) { const x = center.x + (alongX ? index * .82 : 0), z = center.z + (alongX ? 0 : index * .82), mesh = this.box(alongX ? [.78, .64, .65] : [.65, .64, .78], [x, .32, z], index % 2 ? 0x827052 : 0x756247); addCover(mesh); addCollider({ minX: x - (alongX ? .39 : .325), maxX: x + (alongX ? .39 : .325), minZ: z - (alongX ? .325 : .39), maxZ: z + (alongX ? .325 : .39) }) }
    if (kind === 'wire') { for (const offset of [-1.9, 0, 1.9]) { const x = center.x + (alongX ? offset : 0), z = center.z + (alongX ? 0 : offset), post = this.box([.08, 1.05, .08], [x, .52, z], 0x454942); meshes.push(post) } for (const height of [.28, .58, .86]) { const wire = this.box(alongX ? [4, .025, .025] : [.025, .025, 4], [center.x, height, center.z], 0x292d2a); meshes.push(wire) } }
    if (kind === 'hedgehog') { for (const offset of [-1.25, 0, 1.25]) { const x = center.x + (alongX ? offset : 0), z = center.z + (alongX ? 0 : offset); for (const rotation of [0, Math.PI / 3, -Math.PI / 3]) { const beam = this.box([.14, 1.5, .14], [x, .58, z], 0x444942); beam.rotation.z = rotation; addCover(beam) } } addCollider({ minX: center.x - halfX, maxX: center.x + halfX, minZ: center.z - halfZ, maxZ: center.z + halfZ }) }
    if (kind === 'mg') { const machineGun = this.createMachineGun(center, face); machineGun.root.position.y = center.y + 1; this.machineGuns.push(machineGun); rising.push(machineGun.root); addCollider({ minX: center.x - .65, maxX: center.x + .65, minZ: center.z - .65, maxZ: center.z + .65 }) }
    for (const mesh of meshes) mesh.position.y += center.y
    for (const object of rising.length ? rising : meshes) { const targetY = object.position.y; object.position.y -= 1.1; this.constructionRisers.push({ object, targetY, startedAt: time, duration: .85 }) }
    for (let index = 0; index < 7; index++) this.particle(center.clone().add(new THREE.Vector3((Math.random() - .5) * 3.2, .12 + Math.random() * .3, (Math.random() - .5) * 3.2)), new THREE.Vector3((Math.random() - .5) * 2, .5 + Math.random() * 1.1, (Math.random() - .5) * 2), 0x756247, .08 + Math.random() * .08, .55 + Math.random() * .35, 2.2, .25, .8)
    this.fortifications.push({ kind, center, team: 'ally', meshes, colliders }); this.buildCharges -= cost; const label = kind === 'sandbag' ? '沙袋墙' : kind === 'wire' ? '铁丝网' : kind === 'hedgehog' ? '拒马' : '重机枪'; this.clearBuildAction(); this.status = `${label}已构筑`; this.statusUntil = time + 1.6; this.audio.click(420, .09); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), this.status)
  }
  private updateConstructionRisers(time: number) {
    for (let index = this.constructionRisers.length - 1; index >= 0; index--) { const riser = this.constructionRisers[index], progress = THREE.MathUtils.clamp((time - riser.startedAt) / riser.duration, 0, 1), smooth = progress * progress * (3 - 2 * progress); riser.object.position.y = riser.targetY - 1.1 * (1 - smooth); if (progress >= 1) this.constructionRisers.splice(index, 1) }
  }
  private toggleMortar() {
    if (this.dead || this.playerTank || this.playerMortar || this.playerMG || this.selectedLoadout.id !== 'mortar') return
    if (this.mortar) { if (this.camera.position.distanceToSquared(this.mortar.position) > 3.5 ** 2 || this.mortar.occupied) { this.status = '靠近自己的迫击炮才能回收'; this.statusUntil = performance.now() / 1000 + 1.5; return } this.mortarAmmo = this.mortar.ammo; this.disposeGroup(this.mortar.root); this.mortar = undefined; this.status = '迫击炮已回收'; this.statusUntil = performance.now() / 1000 + 1.5; return }
    const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); direction.y = 0; direction.normalize(); const position = this.camera.position.clone().addScaledVector(direction, 1.8); position.y = this.terrainHeight(position.x, position.z)
    if (this.colliders.some(box => position.x + .7 > box.minX && position.x - .7 < box.maxX && position.z + .7 > box.minZ && position.z - .7 < box.maxZ)) { this.status = '这里无法架设迫击炮'; this.statusUntil = performance.now() / 1000 + 1.5; return }
    const mesh = buildMortar({ box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    mesh.root.position.copy(position); mesh.root.rotation.y = this.yaw; this.scene.add(mesh.root)
    this.mortar = { root: mesh.root, tube: mesh.tube, position, ammo: this.mortarAmmo, occupied: false }; this.status = '迫击炮已架设，按 E 操作'; this.statusUntil = performance.now() / 1000 + 1.8; this.audio.click(800, .1)
  }
  private enterMortar(mortar: Mortar) { this.playerMortar = mortar; mortar.occupied = true; this.weapon.visible = false; this.aiming = false; this.events.aim(false); this.camera.position.copy(mortar.position).add(new THREE.Vector3(0, 1.35, 0)); this.status = '迫击炮瞄准中'; this.statusUntil = performance.now() / 1000 + 1.3 }
  private leaveMortar() { const mortar = this.playerMortar; if (!mortar) return; mortar.occupied = false; this.playerMortar = undefined; this.mortarMarker.visible = false; this.weapon.visible = true; this.camera.position.copy(mortar.position).add(new THREE.Vector3(1.2, 1.72, 0)); this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false) }
  private mortarTarget() { const distance = THREE.MathUtils.clamp(22 + (-this.pitch + .15) * 30, 18, 62), direction = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)), target = this.playerMortar!.position.clone().addScaledVector(direction, distance), width = this.battlefieldHalfWidth() - .8, depth = this.battlefieldHalfDepth() - 1; target.x = THREE.MathUtils.clamp(target.x, -width, width); target.z = THREE.MathUtils.clamp(target.z, -depth, depth); target.y = this.terrainHeight(target.x, target.z) + .14; return target }
  private fireMortar() {
    const mortar = this.playerMortar, now = performance.now(); if (!mortar || !mortar.ammo || now < this.mortarShotAt) return; this.mortarShotAt = now + 3200; mortar.ammo--; this.mortarAmmo = mortar.ammo
    const target = this.mortarTarget(), origin = mortar.root.localToWorld(new THREE.Vector3(0, .75, -.22)), distance = origin.distanceTo(target), flight = THREE.MathUtils.clamp(distance / 19, 1.8, 3.5), velocity = target.clone().sub(origin).divideScalar(flight); velocity.y = 4.9 * flight
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.05, .065, .28, 8), this.mat(0x303731, .35)); mesh.position.copy(origin); mesh.castShadow = true; this.scene.add(mesh); this.grenadesInWorld.push({ mesh, velocity, detonateAt: now / 1000 + flight + 1, team: 'ally', playerOwned: true, mortar: true }); this.audio.shot('bolt', .55); mortar.tube.rotation.x = .45; setTimeout(() => { if (this.mortar === mortar) mortar.tube.rotation.x = .62 }, 180)
  }
  private updatePlayerMortar(dt: number) { const mortar = this.playerMortar; if (!mortar) return; this.camera.position.copy(mortar.position).add(new THREE.Vector3(0, 1.35, 0)); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); const target = this.mortarTarget(); this.mortarMarker.position.copy(target); this.mortarMarker.visible = true; this.mortarMarker.rotation.z += dt * 1.2; this.events.ammo(mortar.ammo, 0, performance.now() < this.mortarShotAt); this.events.loadout({ ...this.selectedLoadout, weapon: '轻型迫击炮', mode: `曲射 · ${Math.round(mortar.position.distanceTo(target))}m` }) }
  private createMachineGun(position: THREE.Vector3, face: number, deployable = true) {
    const mesh = buildMachineGun({ box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    mesh.root.position.copy(position).setY(1); mesh.root.rotation.y = face; this.scene.add(mesh.root)
    return { root: mesh.root, yaw: mesh.yaw, pitch: mesh.pitch, muzzle: mesh.muzzle, position: position.clone(), heat: 0, occupied: false, deployable, operatorUntil: 0, nextShot: 0 }
  }
  private enterMachineGun(machineGun: MachineGun) { if (machineGun.operator) { machineGun.operator.machineGun = undefined; machineGun.operator = undefined } this.playerMG = machineGun; machineGun.occupied = true; this.weapon.visible = false; this.aiming = false; this.events.aim(false); this.camera.position.copy(machineGun.position).add(new THREE.Vector3(0, 1.45, 0)); this.status = '重机枪已就位'; this.statusUntil = performance.now() / 1000 + 1.2 }
  private leaveMachineGun() { const machineGun = this.playerMG; if (!machineGun) return; machineGun.occupied = false; this.playerMG = undefined; this.weapon.visible = true; this.camera.position.copy(machineGun.position).add(new THREE.Vector3(1.1, 1.72, 0)); this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false) }
  private fireMachineGun() {
    const machineGun = this.playerMG, now = performance.now(); if (!machineGun || machineGun.heat >= 1 || now < this.mgShotAt) return; this.mgShotAt = now + 60000 / 650; machineGun.heat = Math.min(1, machineGun.heat + .018); this.ray.setFromCamera(new THREE.Vector2((Math.random() - .5) * (.009 + machineGun.heat * .014), (Math.random() - .5) * (.009 + machineGun.heat * .014)), this.camera); const hit = this.withStaticCover(this.ray.intersectObjects(this.hitTargetsAgainst('enemy'), false)[0]), bot = hit?.object.userData.bot as Bot | undefined, tank = hit?.object.userData.tank as Tank | undefined, depot = hit?.object.userData.depot as Depot | undefined, start = machineGun.muzzle.getWorldPosition(new THREE.Vector3()), end = hit?.point ?? this.ray.ray.at(120, new THREE.Vector3()); this.tracer(start, end, 0xffdf82); this.particle(start, new THREE.Vector3(), 0xffbd55, .11, .05); this.audio.shot('auto'); if (bot) { const headshot = hit?.object.userData.hitZone === 'head', shotDamage = headshot ? 46 : 25, dealt = Math.min(bot.hp, shotDamage); bot.hp -= shotDamage; const killed = bot.hp <= 0; this.events.hit(killed, headshot, dealt); if (killed) this.kill(bot, headshot) } else if (tank) this.damageTank(tank, 3, true); else if (depot) this.damageDepot(depot, 7, true)
  }
  private updatePlayerMachineGun(dt: number) { const machineGun = this.playerMG; if (!machineGun) return; if (this.firing) this.fireMachineGun(); machineGun.heat = Math.max(0, machineGun.heat - dt * (this.firing ? .035 : .2)); this.camera.position.copy(machineGun.position).add(new THREE.Vector3(0, 1.45, 0)); this.pitch = THREE.MathUtils.clamp(this.pitch, -.45, .3); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); machineGun.yaw.rotation.y = this.yaw - machineGun.root.rotation.y; machineGun.pitch.rotation.x = this.pitch; this.events.ammo(-1, 0, machineGun.heat >= 1); this.events.loadout({ ...this.selectedLoadout, weapon: '二四式重机枪', mode: machineGun.heat >= 1 ? '枪管过热 · 停火冷却' : `固定火力 · 热量 ${Math.round(machineGun.heat * 100)}%` }) }
  private updateMachineGuns(dt: number, time: number) {
    if (this.operationOpeningActive(time)) return
    const targetFor = (machineGun: MachineGun, team: Team) => {
      const targets: { position: THREE.Vector3; bot?: Bot; player?: boolean }[] = this.bots.filter(bot => bot.alive && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && bot.team !== team).map(bot => ({ position: bot.root.position, bot }))
      if (team === 'enemy' && !this.dead && !this.playerTank && !this.playerPlane) targets.push({ position: this.camera.position, player: true })
      return targets.filter(target => { const dx = target.position.x - machineGun.position.x, dz = target.position.z - machineGun.position.z, distance = Math.hypot(dx, dz), yaw = Math.atan2(dx, dz) + Math.PI, delta = Math.atan2(Math.sin(yaw - machineGun.root.rotation.y), Math.cos(yaw - machineGun.root.rotation.y)); return distance < 70 && Math.abs(delta) < 1.05 }).sort((a, b) => machineGun.position.distanceToSquared(a.position) - machineGun.position.distanceToSquared(b.position))[0]
    }
    for (const machineGun of this.machineGuns) {
      if (machineGun.occupied) continue
      machineGun.heat = Math.max(0, machineGun.heat - dt * .15)
      if (machineGun.operator && (!machineGun.operator.alive || machineGun.operator.machineGun !== machineGun || time >= machineGun.operatorUntil)) { machineGun.operator.machineGun = undefined; machineGun.operator = undefined }
      if (!machineGun.operator) {
        const candidates = this.bots.filter(bot => bot.alive && !bot.inSquad && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && !bot.emplacement && !bot.machineGun && !bot.mortarRig && bot.root.position.distanceToSquared(machineGun.position) < 14 ** 2).sort((a, b) => a.root.position.distanceToSquared(machineGun.position) - b.root.position.distanceToSquared(machineGun.position)), operator = candidates.find(bot => targetFor(machineGun, bot.team))
        if (operator) { machineGun.operator = operator; machineGun.operatorUntil = time + 14 + Math.random() * 10; operator.machineGun = machineGun; operator.coverTarget = undefined }
      }
      const operator = machineGun.operator; if (!operator || operator.root.position.distanceToSquared(machineGun.position) > 2 ** 2) continue
      const target = targetFor(machineGun, operator.team); if (!target) { operator.machineGun = undefined; machineGun.operator = undefined; continue }
      const dx = target.position.x - machineGun.position.x, dz = target.position.z - machineGun.position.z, distance = Math.hypot(dx, dz), worldYaw = Math.atan2(dx, dz) + Math.PI; machineGun.yaw.rotation.y = worldYaw - machineGun.root.rotation.y; machineGun.pitch.rotation.x = -THREE.MathUtils.clamp(Math.atan2(target.position.y + (target.bot ? 1.2 : 0) - machineGun.root.position.y, distance), -.3, .35); operator.root.rotation.y = worldYaw
      if (machineGun.heat >= 1 || time < machineGun.nextShot) continue
      machineGun.nextShot = time + .095; machineGun.heat = Math.min(1, machineGun.heat + .018)
      const start = machineGun.muzzle.getWorldPosition(new THREE.Vector3()), end = target.position.clone().setY(target.player ? this.camera.position.y : 1.3); end.x += (Math.random() - .5) * distance * .018; end.y += (Math.random() - .5) * distance * .012; const direction = end.clone().sub(start), shotDistance = direction.length(); this.ray.set(start, direction.normalize()); this.ray.far = shotDistance; const obstruction = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0]); this.ray.far = Infinity; const hit = !obstruction || obstruction.distance >= shotDistance - .4; if (obstruction && !hit) end.copy(obstruction.point); this.tracer(start, end, operator.team === 'ally' ? 0xffdf82 : 0xff8068); const sound = this.soundAt(start); this.audio.shot('auto', sound.volume, sound.pan); this.alertBots(operator.team, machineGun.position)
      if (!hit || Math.random() > THREE.MathUtils.clamp(.76 - distance * .009, .18, .68)) continue
      if (target.bot) { target.bot.hp -= 22; target.bot.suppression = Math.min(1.6, target.bot.suppression + .24); if (target.bot.hp <= 0) { operator.kills++; this.down(target.bot, undefined, false, operator) } } else if (target.player) { this.hurtPlayer(8 * this.enemyDamage, start, `${operator.name} · 运兵车车载机枪`); if (this.dead) operator.kills++ }
    }
  }
  private repairTank() {
    const time = performance.now() / 1000
    if (this.dead || this.playerTank || this.playerMG || this.selectedLoadout.id !== 'engineer' || time < this.repairAt) return
    const tank = this.tanks.filter(candidate => candidate.alive && candidate.team === 'ally' && (candidate.hp < candidate.maxHp || candidate.tracks < 100 || candidate.engine < 100 || candidate.turretHealth < 100) && candidate.root.position.distanceToSquared(this.camera.position) < 4.5 ** 2).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    if (!tank) return; tank.hp = Math.min(tank.maxHp, tank.hp + 90); tank.tracks = Math.min(100, tank.tracks + 45); tank.engine = Math.min(100, tank.engine + 35); tank.turretHealth = Math.min(100, tank.turretHealth + 30); this.repairAt = time + 3; this.status = `战车维修 · 车体 ${Math.ceil(tank.hp)}/${tank.maxHp} · 履带 ${Math.ceil(tank.tracks)}% · 发动机 ${Math.ceil(tank.engine)}%`; this.statusUntil = time + 2; this.audio.click(680, .1)
  }
  private startSupplyAction(kind: SupplyAction['kind'], time: number, medkit?: Medkit) {
    if (this.supplyAction || this.bandagingUntil || this.grenadeCooking || this.loading) return
    this.supplyAction = { kind, completeAt: time + .85, medkit }; this.firing = false; this.aiming = false; this.events.aim(false); this.weapon.visible = false
    const color = kind === 'ammo' ? 0x73552f : 0xd4cdb8, mesh = new THREE.Mesh(new THREE.BoxGeometry(.3, .18, .22), this.mat(color, .72)); mesh.position.set(.13, -.2, -.4); mesh.rotation.set(.2, -.2, .12); this.camera.add(mesh); this.heldSupply = mesh; this.status = kind === 'ammo' ? '正在取用弹药' : '正在取用绷带'; this.statusUntil = time + .85
  }
  private clearSupplyAction() {
    this.supplyAction = undefined; const mesh = this.heldSupply; this.heldSupply = undefined; if (mesh) { mesh.removeFromParent(); mesh.geometry.dispose(); (mesh.material as THREE.Material).dispose() }
    if (!this.dead && !this.bandagingUntil && !this.grenadeCooking && !this.playerTank && !this.playerPlane && !this.playerMortar && !this.playerEmplacement && !this.playerMG && (!this.playerTransport || this.playerTransportPassenger)) this.weapon.visible = true
  }
  private updateSupplyAction(time: number) {
    const action = this.supplyAction; if (!action) return
    const progress = THREE.MathUtils.clamp(1 - (action.completeAt - time) / .85, 0, 1); if (this.heldSupply) { this.heldSupply.position.y = -.2 + Math.sin(progress * Math.PI) * .14; this.heldSupply.rotation.y = progress * Math.PI }
    if (time < action.completeAt) return
    if (action.kind === 'medical') { if (action.medkit && this.medkits.includes(action.medkit) && action.medkit.uses > 0) { action.medkit.uses--; this.aid = this.selectedLoadout.aid; this.bandageResupplyAt = time + 4; this.status = `绷带已补充 · 医疗箱剩余 ${action.medkit.uses}` } }
    else { if (this.weaponSlot === 'primary') this.primaryAmmo = [this.mag, this.selectedLoadout.reserve]; else { this.sidearmAmmo = [this.mag, sidearm.reserve]; this.primaryAmmo[1] = this.selectedLoadout.reserve } this.sidearmAmmo[1] = sidearm.reserve; this.reserve = this.weaponSlot === 'primary' ? this.selectedLoadout.reserve : sidearm.reserve; this.grenades = this.selectedLoadout.grenades; this.smokeGrenades = 1; this.antiTankGrenades = this.selectedLoadout.antiTankGrenades ?? 0; this.events.grenadeMode(this.grenadeMode, this.antiTankGrenades); if (this.selectedLoadout.id === 'engineer') this.buildCharges = 6; if (this.selectedLoadout.id === 'mortar') { this.mortarAmmo = 16; if (this.mortar) this.mortar.ammo = 16 } this.resupplyAt = time + 6; this.status = '弹药与装备已补充' }
    this.statusUntil = time + 1.8; this.clearSupplyAction(); this.audio.click(900, .1); this.events.ammo(this.mag, this.reserve, false); this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), this.status)
  }
  private resupply() {
    const time = performance.now() / 1000, medkit = this.medkits.find(item => item.team === 'ally' && item.uses > 0 && item.root.position.distanceToSquared(this.camera.position) < 3.2 ** 2)
    if (this.dead || this.playerTank || this.playerPlane || this.playerMortar || this.playerEmplacement || this.playerMG || (this.playerTransport && !this.playerTransportPassenger)) return
    if (medkit && this.aid < this.selectedLoadout.aid && time >= this.bandageResupplyAt) { this.startSupplyAction('medical', time, medkit); return }
    if (time >= this.resupplyAt && this.ammoCrates.some(crate => crate.distanceToSquared(this.camera.position) < 3.2 ** 2)) this.startSupplyAction('ammo', time)
  }
  private interact() {
    if (this.dead || this.parachuting || this.buildAction || this.supplyAction || this.bandagingUntil || this.grenadeCooking) return
    if (this.playerPlane) return
    if (this.playerTransport) { this.leaveTransport(); return }
    if (this.playerTank) { this.leaveTank(); return }
    if (this.playerMortar) { this.leaveMortar(); return }
    if (this.playerEmplacement) { this.leaveEmplacement(); return }
    if (this.playerMG) { this.leaveMachineGun(); return }
    if (this.mortar && !this.mortar.occupied && this.camera.position.distanceToSquared(this.mortar.position) < 2.8 ** 2) { this.enterMortar(this.mortar); return }
    const machineGun = this.machineGuns.filter(candidate => !candidate.occupied && candidate.position.distanceToSquared(this.camera.position) < 2.8 ** 2).sort((a, b) => a.position.distanceToSquared(this.camera.position) - b.position.distanceToSquared(this.camera.position))[0]; if (machineGun) { this.enterMachineGun(machineGun); return }
    const emplacement = this.emplacements.filter(candidate => candidate.alive && candidate.team === 'ally' && !candidate.occupied).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    if (emplacement && emplacement.root.position.distanceToSquared(this.camera.position) < 3.6 ** 2) { this.enterEmplacement(emplacement); return }
    const plane = this.planes.filter(candidate => candidate.alive && candidate.team === 'ally' && !candidate.playerDriven && Math.abs(candidate.root.position.y - this.camera.position.y) < 3).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    if (plane && plane.root.position.distanceToSquared(this.camera.position) < 6 ** 2) { this.enterPlane(plane); return }
    const time = performance.now() / 1000, casualty = this.selectedLoadout.id === 'medic' ? this.bots.filter(bot => !bot.alive && bot.team === 'ally' && time >= bot.reviveAt && bot.root.position.distanceToSquared(this.camera.position) < 2.8 ** 2).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0] : undefined
    if (casualty) { this.reviveBot(casualty, time); return }
    const tank = this.tanks.filter(candidate => candidate.alive && candidate.team === 'ally' && !candidate.playerDriven).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    if (tank && tank.root.position.distanceToSquared(this.camera.position) < 4.5 ** 2) { this.enterTank(tank); return }
    const transport = this.transports.filter(candidate => candidate.alive && candidate.team === 'ally' && !candidate.playerDriven).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    if (transport && transport.root.position.distanceToSquared(this.camera.position) < 5 ** 2) { const riders = this.bots.filter(bot => bot.alive && bot.riding === transport).length; if (Math.abs(transport.root.position.z) < 43 && riders < 6) this.enterTransportPassenger(transport); else this.enterTransport(transport); return }
    this.resupply()
  }
  private reviveBot(bot: Bot, time: number) {
    this.corpses = this.corpses.filter(corpse => corpse.bot !== bot)
    bot.deathToken++; bot.alive = true; bot.hp = 60; bot.suppression = 0; bot.reviver = undefined; bot.pose = 'stand'; if (bot.squadTag) bot.squadTag.visible = true; bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z); bot.root.rotation.x = 0; bot.root.rotation.z = 0; bot.root.scale.set(1, 1, 1); bot.torso.position.y = 0; bot.torso.rotation.x = 0; bot.head.rotation.set(0, 0, 0); bot.legs.forEach(leg => leg.rotation.set(0, 0, 0)); bot.arms.forEach(arm => arm.rotation.set(-.9, 0, 0)); bot.weapon.position.set(0, 0, 0); bot.weapon.rotation.set(0, 0, 0); bot.nextShot = time + 1; bot.shotAt = -10; bot.respawnAt = 0; const ticketIndex = bot.team === 'ally' ? 0 : 1; if (Number.isFinite(this.tickets[ticketIndex])) this.tickets[ticketIndex] = Math.min(this.maxTickets, this.tickets[ticketIndex] + 1); this.audio.click(1100, .1)
  }
  private dismountTankDriver(tank: Tank, bailing = false, killed = false) {
    const driver = tank.driver; if (!driver) return; tank.driver = undefined; driver.drivingTank = undefined; driver.root.visible = true; driver.body.layers.enable(0); driver.head.layers.enable(0); const side = new THREE.Vector3(driver.strafe * 2.1, 0, 1.1).applyQuaternion(tank.root.quaternion); driver.root.position.copy(tank.root.position).add(side); driver.root.position.y = this.terrainHeight(driver.root.position.x, driver.root.position.z); driver.root.rotation.x = 0; driver.root.scale.set(1, 1, 1); driver.suppression = bailing ? .9 : driver.suppression; driver.nextShot = performance.now() / 1000 + .8
    if (killed) { driver.hp = 0; this.down(driver, driver.root.position.clone().sub(tank.root.position)) }
  }
  private tankDriverSeated(tank: Tank) { return Boolean(tank.driver?.alive && tank.driver.root.position.distanceToSquared(tank.root.position) < 2.2 ** 2) }
  private dismountTransportDriver(transport: Transport, killed = false) {
    const driver = transport.driver; if (!driver) return
    transport.driver = undefined; driver.drivingTransport = undefined; driver.root.visible = true; driver.body.layers.enable(0); driver.head.layers.enable(0)
    const side = new THREE.Vector3(driver.strafe * 1.8, 0, .8).applyQuaternion(transport.root.quaternion); driver.root.position.copy(transport.root.position).add(side); driver.root.position.y = this.terrainHeight(driver.root.position.x, driver.root.position.z); driver.root.rotation.x = 0; driver.root.scale.set(1, 1, 1); driver.nextShot = performance.now() / 1000 + .8
    if (killed) { driver.hp = 0; this.down(driver, driver.root.position.clone().sub(transport.root.position)) }
  }
  private evacuateTransport(transport: Transport) {
    const riders = this.bots.filter(bot => bot.alive && bot.riding === transport)
    riders.forEach((bot, index) => this.dismountTransportPassenger(transport, bot, index, true))
  }
  private dismountTransportPassenger(transport: Transport, bot: Bot, seat: number, bailing = false) { bot.riding = undefined; const side = seat % 2 ? 1 : -1, offset = new THREE.Vector3(side * 1.75, 0, -.8 + Math.floor(seat / 2) * .85).applyQuaternion(transport.root.quaternion); bot.root.position.copy(transport.root.position).add(offset); bot.pose = 'stand'; bot.root.scale.set(1, 1, 1); bot.torso.position.y = 0; bot.torso.rotation.x = 0; bot.root.rotation.x = 0; bot.legs.forEach(leg => leg.rotation.x = 0); bot.suppression = bailing ? Math.max(bot.suppression, .8) : bot.suppression; bot.nextShot = performance.now() / 1000 + .5 + Math.random() }
  private transportDriverSeated(transport: Transport) { return Boolean(transport.driver?.alive && transport.driver.root.position.distanceToSquared(transport.root.position) < 2.2 ** 2) }
  /** Hull forward for tanks (mesh gun points local -Z). */
  private tankForward(yaw: number, out = this.tmpV3A) { return out.set(-Math.sin(yaw), 0, -Math.cos(yaw)) }
  /** Hull forward for trucks (cab points local +Z). */
  private truckForward(yaw: number, out = this.tmpV3A) { return out.set(Math.sin(yaw), 0, Math.cos(yaw)) }
  private placeChaseCamera(anchor: THREE.Vector3, lookAt: THREE.Vector3, distance: number, height: number, minDistance: number, ignore?: THREE.Object3D) {
    // Orbit behind look direction (mouse free-look), not stuck to hull.
    this.chaseCamLook.copy(lookAt)
    this.chaseCamPos.set(anchor.x, anchor.y + height, anchor.z)
    const horizontal = Math.cos(this.pitch)
    const backX = Math.sin(this.yaw) * horizontal
    const backY = .28 - Math.sin(this.pitch) * .85
    const backZ = Math.cos(this.yaw) * horizontal
    const backLen = Math.hypot(backX, backY, backZ) || 1
    const back = this.tmpV3B.set(backX / backLen, backY / backLen, backZ / backLen)
    this.ray.set(this.chaseCamPos, back)
    this.ray.far = distance
    const hits = this.ray.intersectObjects(this.occlusionMeshes(), false)
    let closest: THREE.Intersection | undefined
    for (const hit of hits) {
      if (ignore) {
        let node: THREE.Object3D | null = hit.object
        let skip = false
        while (node) { if (node === ignore) { skip = true; break } node = node.parent }
        if (skip) continue
      }
      closest = hit
      break
    }
    const obstruction = this.withStaticCover(closest)
    const cameraDistance = obstruction ? Math.max(minDistance, obstruction.distance - .55) : distance
    this.ray.far = Infinity
    this.camera.position.copy(this.chaseCamPos).addScaledVector(back, cameraDistance)
    this.camera.lookAt(this.chaseCamLook)
  }
  private dismountBeside(root: THREE.Object3D, side = 2.4) {
    const offset = this.tmpV3A.set(side, 0, 0).applyQuaternion(root.quaternion)
    this.camera.position.copy(root.position).add(offset)
    this.groundLevel = this.terrainHeight(this.camera.position.x, this.camera.position.z)
    this.camera.position.y = this.groundLevel + 1.72
    this.vehicleThrottle = 0
    this.vehicleSteer = 0
    this.resetCameraView()
  }
  private enterTank(tank: Tank) {
    this.dismountTankDriver(tank)
    this.playerTank = tank
    tank.playerDriven = true
    this.tankMgFiring = false
    this.tankGunnerView = false
    this.vehicleThrottle = 0
    this.vehicleSteer = 0
    this.weapon.visible = false
    this.aiming = false
    // Align free-look with hull so W drives into view.
    this.yaw = tank.root.rotation.y
    this.pitch = -.06
    this.events.aim(false)
    this.events.vehicle(true, tank.hp, performance.now() >= this.tankShotAt, tank.name, '左键主炮 · 右键同轴机枪 · C 切换视角', tank.maxHp, 1)
  }
  private leaveTank() {
    const tank = this.playerTank
    if (!tank) return
    tank.playerDriven = false
    this.tankMgFiring = false
    this.tankGunnerView = false
    this.playerTank = undefined
    this.weapon.visible = true
    this.dismountBeside(tank.root, 2.5)
    this.events.vehicle(false, 0, false)
    this.events.tankSight(false, false, false)
    this.events.loadout(this.activeLoadout())
    this.events.ammo(this.mag, this.reserve, false)
  }
  private enterTransport(transport: Transport) {
    this.dismountTransportDriver(transport)
    this.playerTransport = transport
    this.playerTransportPassenger = false
    this.playerTransportSeat = -1
    transport.playerDriven = true
    this.vehicleThrottle = 0
    this.vehicleSteer = 0
    this.weapon.visible = false
    this.aiming = false
    // Truck forward is (sin,cos); camera look uses (-sin,-cos). Offset by π so W matches view.
    this.yaw = transport.root.rotation.y + Math.PI
    this.pitch = -.05
    this.resetCameraView(70)
    this.events.aim(false)
    this.events.vehicle(true, transport.hp, true, transport.name, 'WASD 驾驶 · 鼠标环视 · E 下车', transport.maxHp, 1)
  }
  private enterTransportPassenger(transport: Transport) {
    this.playerTransport = transport
    this.playerTransportPassenger = true
    this.playerTransportSeat = 5
    this.weapon.visible = true
    this.aiming = false
    this.yaw = transport.root.rotation.y + Math.PI
    this.pitch = -.04
    this.resetCameraView()
    this.events.aim(false)
    this.events.vehicle(false, 0, false)
    this.events.loadout({ ...this.activeLoadout(), weapon: `${this.activeLoadout().weapon} · 搭乘卡车` })
    this.events.ammo(this.mag, this.reserve, false)
  }
  private leaveTransport() {
    const transport = this.playerTransport
    if (!transport) return
    if (!this.playerTransportPassenger) transport.playerDriven = false
    this.playerTransport = undefined
    this.playerTransportPassenger = false
    this.playerTransportSeat = -1
    this.weapon.visible = true
    this.dismountBeside(transport.root, 2.3)
    this.events.vehicle(false, 0, false)
    this.events.loadout(this.activeLoadout())
    this.events.ammo(this.mag, this.reserve, false)
  }
  private updatePlayerTransport(dt: number) {
    const transport = this.playerTransport
    if (!transport) return
    if (!transport.alive) { this.leaveTransport(); this.hurtPlayer(35, transport.root.position, `${transport.name} · 载具损毁`); return }
    const throttleTarget = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0)
    const steerTarget = (this.keys.has('KeyA') ? 1 : 0) - (this.keys.has('KeyD') ? 1 : 0)
    this.vehicleThrottle = THREE.MathUtils.damp(this.vehicleThrottle, throttleTarget, 7, dt)
    this.vehicleSteer = THREE.MathUtils.damp(this.vehicleSteer, steerTarget, 9, dt)
    // Steer only while rolling; reverse inverts steer (car-like).
    if (Math.abs(this.vehicleThrottle) > .04) {
      transport.root.rotation.y -= this.vehicleSteer * dt * 1.15 * Math.sign(this.vehicleThrottle)
    }
    const forward = this.truckForward(transport.root.rotation.y, this.tmpV3C)
    const speed = this.vehicleThrottle * dt * (this.vehicleThrottle > 0 ? 10.5 : 4.8)
    this.moveTankWithCollision(transport.root.position, forward.x * speed, forward.z * speed)
    for (const wheel of transport.wheels) wheel.rotation.x -= speed * 1.9
    const anchor = this.tmpV3A.copy(transport.root.position)
    const look = this.tmpV3B.copy(transport.root.position).setY(transport.root.position.y + 1.15)
    this.placeChaseCamera(anchor, look, 9.2, 2.55, 3.2, transport.root)
    this.camera.fov = THREE.MathUtils.damp(this.camera.fov, 68, 10, dt)
    this.camera.updateProjectionMatrix()
    const riders = this.bots.filter(bot => bot.alive && bot.riding === transport).length
    const speedKmh = Math.round(Math.abs(this.vehicleThrottle) * (this.vehicleThrottle > 0 ? 64 : 30))
    this.events.vehicle(true, transport.hp, true, transport.name, `速度 ${speedKmh} km/h · 载员 ${riders}/6 · WASD 驾驶 · E 下车`, transport.maxHp, 1)
  }
  private updatePlayerTransportPassenger() {
    const transport = this.playerTransport
    if (!transport) return
    if (!transport.alive) { this.leaveTransport(); return }
    const side = this.playerTransportSeat % 2 ? .68 : -.68
    const row = Math.floor(this.playerTransportSeat / 2)
    const seat = this.tmpV3A.set(side, 1.78, -.2 - row * .72).applyQuaternion(transport.root.quaternion)
    this.camera.position.copy(transport.root.position).add(seat)
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ')
    if (this.camera.fov !== 72) this.resetCameraView()
    if (this.firing) this.fire()
    this.events.loadout({ ...this.activeLoadout(), weapon: `${this.activeLoadout().weapon} · 搭乘卡车` })
  }
  private seatPlanePilot(plane: Plane) {
    if (plane.pilot?.alive) return
    const pilot = this.bots.find(bot => bot.alive && bot.team === plane.team && !bot.inSquad && !bot.chuting && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.emplacement && !bot.machineGun && !bot.mortarRig)
    if (!pilot) return
    plane.pilot = pilot; pilot.piloting = plane; pilot.root.position.copy(plane.root.position); pilot.root.visible = false; pilot.body.layers.disable(0); pilot.head.layers.disable(0); pilot.weapon.visible = false
  }
  private releasePlanePilot(plane: Plane) {
    const pilot = plane.pilot; if (!pilot) return
    plane.pilot = undefined; pilot.piloting = undefined; pilot.root.visible = true; pilot.body.layers.enable(0); pilot.head.layers.enable(0); pilot.weapon.visible = true; const baseZ = this.mapBounds.halfDepth - 10; pilot.root.position.set((Math.random() - .5) * 8, 0, pilot.team === 'ally' ? baseZ : -baseZ); pilot.nextShot = performance.now() / 1000 + 1
  }
  private enterPlane(plane: Plane) {
    this.releasePlanePilot(plane)
    this.playerPlane = plane
    plane.playerDriven = true
    plane.speed = Math.max(plane.speed, 26)
    plane.throttle = Math.max(plane.throttle, .8)
    this.weapon.visible = false
    this.aiming = false
    this.yaw = plane.root.rotation.y
    this.pitch = plane.root.rotation.x
    this.planeStickPitch = this.pitch
    this.events.aim(false)
    // E is exit/parachute only — rudder is Q/C to avoid key conflict.
    this.events.vehicle(true, plane.hp, true, plane.name, `左键机枪 · 右键/B 炸弹 ×${plane.bombs} · Q/C 方向舵 · F 跳伞`, plane.maxHp, plane.bombs / plane.maxBombs)
  }
  private leavePlane() {
    const plane = this.playerPlane
    if (!plane) return
    plane.playerDriven = false
    plane.abandoned = true
    plane.nextAttack = performance.now() / 1000
    this.playerPlane = undefined
    this.parachuting = true
    this.weapon.visible = false
    this.camera.position.copy(plane.root.position).add(new THREE.Vector3(0, -.8, 0))
    this.events.vehicle(false, 0, false)
    this.deployParachute()
  }
  private deployParachute() { if (this.parachute) this.disposeGroup(this.parachute); const chute = new THREE.Group(), canopy = new THREE.Mesh(new THREE.SphereGeometry(1.8, 18, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xd8d1b8, roughness: .9, side: THREE.DoubleSide })); canopy.scale.y = .42; chute.add(canopy); const lineMaterial = new THREE.LineBasicMaterial({ color: 0x5d574c }); for (const angle of [0, Math.PI / 2, Math.PI, Math.PI * 1.5]) { const rim = new THREE.Vector3(Math.sin(angle) * 1.65, 0, Math.cos(angle) * 1.65), geometry = new THREE.BufferGeometry().setFromPoints([rim, new THREE.Vector3(0, -2.6, 0)]); chute.add(new THREE.Line(geometry, lineMaterial.clone())) } this.scene.add(chute); this.parachute = chute }
  private updateParachute(dt: number) { if (!this.parachuting) return; const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)), right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)), movement = new THREE.Vector3(); if (this.keys.has('KeyW')) movement.add(forward); if (this.keys.has('KeyS')) movement.sub(forward); if (this.keys.has('KeyD')) movement.add(right); if (this.keys.has('KeyA')) movement.sub(right); if (movement.lengthSq()) this.camera.position.addScaledVector(movement.normalize(), dt * 4.2); this.camera.position.y -= dt * 3.6; const width = this.battlefieldHalfWidth() - .5, depth = this.battlefieldHalfDepth(); this.camera.position.x = THREE.MathUtils.clamp(this.camera.position.x, -width, width); this.camera.position.z = THREE.MathUtils.clamp(this.camera.position.z, -depth, depth); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); if (this.parachute) this.parachute.position.copy(this.camera.position).add(new THREE.Vector3(0, 2.6, 0)); const ground = this.terrainHeight(this.camera.position.x, this.camera.position.z); if (this.camera.position.y > ground + 1.72) return; this.groundLevel = ground; this.camera.position.y = ground + 1.72; this.parachuting = false; if (this.parachute) { this.disposeGroup(this.parachute); this.parachute = undefined } this.weapon.visible = true; this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false) }
  private firePlayerPlane() {
    const plane = this.playerPlane, time = performance.now() / 1000; if (!plane || !plane.alive || time < plane.nextShot) return; plane.nextShot = time + .095; this.ray.setFromCamera(new THREE.Vector2((Math.random() - .5) * .008, (Math.random() - .5) * .008), this.camera)
    const hit = this.withStaticCover(this.ray.intersectObjects(this.hitTargetsAgainst('enemy'), false)[0]), targetPlane = hit?.object.userData.plane as Plane | undefined, bot = hit?.object.userData.bot as Bot | undefined, tank = hit?.object.userData.tank as Tank | undefined, transport = hit?.object.userData.transport as Transport | undefined, gun = hit?.object.userData.emplacement as Emplacement | undefined, start = plane.root.position.clone().add(new THREE.Vector3(0, 0, -2).applyEuler(plane.root.rotation)), end = hit?.point ?? this.ray.ray.at(180, new THREE.Vector3()); this.tracer(start, end, 0xffdf83); this.audio.shot('auto')
    if (targetPlane) this.damagePlane(targetPlane, 12, true); else if (bot) { const dealt = Math.min(bot.hp, 18); bot.hp -= 18; const killed = bot.hp <= 0; this.events.hit(killed, false, dealt); if (killed) this.kill(bot) } else if (tank) this.damageTank(tank, 3, true); else if (transport) this.damageTransport(transport, 5, true); else if (gun) this.damageEmplacement(gun, 6, true)
  }
  private dropPlaneBomb() {
    const plane = this.playerPlane, time = performance.now() / 1000
    if (!plane || !this.launchPlaneBomb(plane, true, time)) return
  }
  private launchPlaneBomb(plane: Plane, playerOwned: boolean, time: number) {
    if (!plane.alive || !plane.bombs || time < plane.nextBomb) return false
    plane.bombs--; plane.nextBomb = time + 1.4; if (!plane.bombRearmAt) plane.bombRearmAt = time + 28
    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(.18, .72, 5, 8), new THREE.MeshStandardMaterial({ color: 0x292d28, roughness: .65, metalness: .35 })); mesh.rotation.z = Math.PI / 2; mesh.position.copy(plane.root.position).add(new THREE.Vector3(0, -.7, 0).applyEuler(plane.root.rotation)); this.scene.add(mesh)
    const forward = new THREE.Vector3(0, 0, -1).applyEuler(plane.root.rotation).multiplyScalar(plane.speed * .85), velocity = forward.add(new THREE.Vector3(0, -4, 0))
    this.grenadesInWorld.push({ mesh, velocity, detonateAt: time + 6, team: plane.team, playerOwned, bomb: true })
    return true
  }
  private updatePlayerPlane(dt: number) {
    const plane = this.playerPlane
    if (!plane) return
    if (!plane.alive) {
      this.playerPlane = undefined
      this.weapon.visible = true
      this.events.vehicle(false, 0, false)
      this.parachuting = true
      this.deployParachute()
      return
    }
    const time = performance.now() / 1000
    const throttleInput = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0)
    const bankInput = (this.keys.has('KeyA') ? 1 : 0) - (this.keys.has('KeyD') ? 1 : 0)
    // Q left / C right rudder; F bails out.
    const rudderInput = (this.keys.has('KeyQ') ? 1 : 0) - (this.keys.has('KeyC') ? 1 : 0)
    const minimumSpeed = 24, maximumSpeed = 45
    plane.throttle = THREE.MathUtils.clamp(plane.throttle + throttleInput * .55 * dt, 0, 1.12)
    const dynamicPressure = THREE.MathUtils.clamp(plane.speed / minimumSpeed, .35, 1.4)
    const stall = THREE.MathUtils.clamp((plane.speed - minimumSpeed * .55) / (minimumSpeed * .4), .12, 1)
    const targetBank = bankInput * .95
    plane.root.rotation.z = THREE.MathUtils.damp(plane.root.rotation.z, targetBank, 4.5, dt)
    // Mouse drives stick pitch; aircraft pitch lags toward stick (arcade flight).
    const stick = THREE.MathUtils.clamp(this.planeStickPitch - this.pitch, -.55, .55)
    const pullRate = stick * (2.1 * dynamicPressure + .15) * stall
    this.pitch += pullRate * Math.cos(plane.root.rotation.z) * dt
    this.yaw += pullRate * Math.sin(plane.root.rotation.z) * 1.15 * dt
    this.yaw += rudderInput * .55 * dynamicPressure * dt
    this.pitch = THREE.MathUtils.clamp(this.pitch, -1.35, 1.2)
    if (stall < .85) {
      this.pitch = THREE.MathUtils.damp(this.pitch, -.55, (1 - stall) * 1.6, dt)
      if (stall < .5 && !plane.stallWarned) {
        plane.stallWarned = true
        this.status = '失速！推头俯冲恢复速度'
        this.statusUntil = time + 2.2
      }
    } else plane.stallWarned = false
    plane.root.rotation.set(this.pitch, this.yaw, plane.root.rotation.z, 'YXZ')
    const forward = this.tmpV3C.set(0, 0, -1).applyEuler(plane.root.rotation)
    const climb = forward.y
    const thrust = 13.5 * plane.throttle * (1 - dynamicPressure * .28)
    const gravityEnergy = -10.5 * climb
    const drag = -(2.2 + Math.abs(stick) * 5.5) * plane.speed ** 2 / maximumSpeed ** 2
    plane.speed = THREE.MathUtils.clamp(plane.speed + (thrust + gravityEnergy + drag) * dt, 6, 52)
    if (plane.prop) plane.prop.rotation.z += dt * (8 + plane.speed * .55)
    plane.root.position.addScaledVector(forward, plane.speed * dt)
    plane.root.position.y -= (1 - stall) * 9.5 * dt
    plane.root.position.x = THREE.MathUtils.clamp(plane.root.position.x, -105, 105)
    plane.root.position.z = THREE.MathUtils.clamp(plane.root.position.z, -105, 105)
    if (Math.abs(plane.root.position.x) >= 104 || Math.abs(plane.root.position.z) >= 104) this.yaw += Math.PI * dt * .55
    const cameraBack = this.tmpV3B.copy(forward).negate()
    cameraBack.y += .32
    cameraBack.normalize()
    const anchor = this.tmpV3A.copy(plane.root.position)
    const desiredDistance = 11.5
    this.ray.set(anchor, cameraBack)
    this.ray.far = desiredDistance
    const obstruction = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0])
    this.ray.far = Infinity
    this.camera.position.copy(anchor).addScaledVector(cameraBack, obstruction ? Math.max(3.5, obstruction.distance - .5) : desiredDistance)
    this.camera.lookAt(this.chaseCamLook.copy(anchor).addScaledVector(forward, 22))
    this.camera.fov = THREE.MathUtils.damp(this.camera.fov, 70 + plane.speed * .12, 6, dt)
    this.camera.updateProjectionMatrix()
    if (this.firing) this.firePlayerPlane()
    if (plane.root.position.y < 2.2) { this.damagePlane(plane, 999, false); return }
    if (plane.bombs < plane.maxBombs && time >= plane.bombRearmAt) {
      plane.bombs++
      plane.bombRearmAt = plane.bombs < plane.maxBombs ? time + 28 : 0
    }
    const stallText = stall < .5 ? ' · 失速！' : stall < .85 ? ' · 临界速度' : ''
    this.events.vehicle(true, plane.hp, time >= plane.nextShot, plane.name, `速度 ${Math.round(plane.speed * 7.2)} km/h · 高度 ${Math.max(0, Math.round(plane.root.position.y))}m · 油门 ${Math.round(plane.throttle * 100)}%${stallText} · 炸弹 ×${plane.bombs} · Q/C 方向舵 · F 跳伞`, plane.maxHp, plane.bombs / Math.max(1, plane.maxBombs))
  }
  private enterEmplacement(gun: Emplacement) { if (gun.operator) { gun.operator.emplacement = undefined; gun.operator = undefined } this.playerEmplacement = gun; gun.occupied = true; this.weapon.visible = false; this.aiming = false; this.yaw = gun.root.rotation.y + gun.yaw.rotation.y; this.pitch = gun.kind === 'aa' ? -.22 : -.03; this.events.aim(false); this.events.vehicle(true, gun.hp, performance.now() / 1000 >= gun.nextShot, gun.kind === 'aa' ? '二〇毫米防空炮' : '三七毫米反坦克炮', gun.kind === 'aa' ? '防空火力 · E 撤离' : '反装甲火力 · E 撤离') }
  private leaveEmplacement() { const gun = this.playerEmplacement; if (!gun) return; gun.occupied = false; this.playerEmplacement = undefined; this.events.emplacementLead(); this.weapon.visible = true; const side = new THREE.Vector3(1.8, 0, 0).applyQuaternion(gun.root.quaternion); this.camera.position.copy(gun.root.position).add(side).setY(1.72); this.events.vehicle(false, 0, false); this.events.loadout(this.activeLoadout()); this.events.ammo(this.mag, this.reserve, false) }
  private updatePlayerEmplacement() {
    const gun = this.playerEmplacement; if (!gun || !gun.alive) return
    const minPitch = gun.kind === 'aa' ? -.9 : -.25, maxPitch = gun.kind === 'aa' ? .42 : .18; this.pitch = THREE.MathUtils.clamp(this.pitch, minPitch, maxPitch)
    if (gun.kind === 'at') { const relative = Math.atan2(Math.sin(this.yaw - gun.root.rotation.y), Math.cos(this.yaw - gun.root.rotation.y)); this.yaw = gun.root.rotation.y + THREE.MathUtils.clamp(relative, -1, 1) }
    gun.yaw.rotation.y = this.yaw - gun.root.rotation.y; gun.yaw.rotation.x = -this.pitch * (gun.kind === 'aa' ? .65 : .25); const seat = new THREE.Vector3(0, gun.kind === 'aa' ? 1.55 : 1.35, .3).applyQuaternion(gun.root.quaternion); this.camera.position.copy(gun.root.position).add(seat); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); this.camera.updateMatrixWorld()
    if (gun.kind === 'aa') { const target = this.planes.filter(plane => plane.alive && plane.team !== gun.team).sort((a, b) => gun.root.position.distanceToSquared(a.root.position) - gun.root.position.distanceToSquared(b.root.position))[0]; if (target) { const distance = gun.root.position.distanceTo(target.root.position), velocity = new THREE.Vector3(0, 0, -1).applyQuaternion(target.root.quaternion).multiplyScalar(target.speed), lead = target.root.position.clone().addScaledVector(velocity, distance / 150).project(this.camera); this.events.emplacementLead(lead.z < 1 && Math.abs(lead.x) < 1.1 && Math.abs(lead.y) < 1.1 ? (lead.x * .5 + .5) * innerWidth : undefined, lead.z < 1 && Math.abs(lead.x) < 1.1 && Math.abs(lead.y) < 1.1 ? (1 - (lead.y * .5 + .5)) * innerHeight : undefined) } else this.events.emplacementLead() } else this.events.emplacementLead()
    if (this.firing && gun.kind === 'aa') this.fireEmplacement(); this.events.vehicle(true, gun.hp, performance.now() / 1000 >= gun.nextShot, gun.kind === 'aa' ? '二〇毫米防空炮' : '三七毫米反坦克炮', gun.kind === 'aa' ? '防空火力 · E 撤离' : '反装甲火力 · E 撤离')
  }
  private fireEmplacement() {
    const gun = this.playerEmplacement, time = performance.now() / 1000; if (!gun || !gun.alive || time < gun.nextShot) return; gun.nextShot = time + (gun.kind === 'aa' ? .22 : 3.7); this.ray.setFromCamera(new THREE.Vector2(), this.camera)
    if (gun.kind === 'at') { const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); this.launchCannonShell(gun.muzzle.getWorldPosition(new THREE.Vector3()), direction, gun.team, true, 220); this.audio.shot('bolt'); return }
    const hit = this.withStaticCover(this.ray.intersectObjects(this.hitTargetsAgainst('enemy'), false)[0]), bot = hit?.object.userData.bot as Bot | undefined, tank = hit?.object.userData.tank as Tank | undefined, transport = hit?.object.userData.transport as Transport | undefined, targetGun = hit?.object.userData.emplacement as Emplacement | undefined, plane = hit?.object.userData.plane as Plane | undefined, depot = hit?.object.userData.depot as Depot | undefined, structure = hit?.object.userData.structure as FieldStructure | undefined, end = hit?.point ?? this.ray.ray.at(150, new THREE.Vector3())
    this.tracer(gun.muzzle.getWorldPosition(new THREE.Vector3()), end, 0xffe39a); this.audio.shot('auto')
    if (plane) this.damagePlane(plane, 25, true); else if (tank) this.damageTank(tank, 8, true); else if (transport) this.damageTransport(transport, 12, true); else if (targetGun) this.damageEmplacement(targetGun, 14, true); else if (structure) this.damageStructure(structure, 8); else if (depot) this.damageDepot(depot, 12, true); else if (bot) { const dealt = Math.min(bot.hp, 24); bot.hp -= 24; const killed = bot.hp <= 0; this.events.hit(killed, hit?.object.userData.hitZone === 'head', dealt); if (killed) this.kill(bot, hit?.object.userData.hitZone === 'head') }
  }
  private launchCannonShell(origin: THREE.Vector3, direction: THREE.Vector3, team: Team, playerOwned: boolean, damage: number) {
    const firingTank = this.tanks.filter(tank => tank.alive && tank.team === team).sort((a, b) => a.muzzle.getWorldPosition(new THREE.Vector3()).distanceToSquared(origin) - b.muzzle.getWorldPosition(new THREE.Vector3()).distanceToSquared(origin))[0], fromTank = firingTank && firingTank.muzzle.getWorldPosition(new THREE.Vector3()).distanceToSquared(origin) < 1
    const penetration = fromTank ? firingTank.gunPen : 65
    if (fromTank) {
      damage = firingTank.gunDamage
      this.tankCannonFx(firingTank, origin, direction)
      if (!playerOwned && !this.crewAlive(firingTank, 'loader')) firingTank.nextShot += Math.max(0, firingTank.nextShot - performance.now() / 1000) * .6
      if (!playerOwned && !this.crewAlive(firingTank, 'commander')) direction = direction.clone().add(new THREE.Vector3((Math.random() - .5) * .035, (Math.random() - .5) * .018, (Math.random() - .5) * .035)).normalize()
    }
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(.085, 7, 5), new THREE.MeshBasicMaterial({ color: team === 'ally' ? 0xffe1a0 : 0xff7758 }))
    const sourceName = fromTank ? firingTank.name : '三七毫米反坦克炮'; mesh.position.copy(origin); this.scene.add(mesh); this.cannonShells.push({ mesh, velocity: direction.clone().normalize().multiplyScalar(82), life: 2.4, team, playerOwned, damage, penetration, sourceName, sourcePosition: origin.clone() })
  }
  private tankCannonFx(tank: Tank, origin: THREE.Vector3, direction: THREE.Vector3) {
    const flash = new THREE.Mesh(new THREE.SphereGeometry(.22, 9, 6), new THREE.MeshBasicMaterial({ color: 0xffc05a, transparent: true, opacity: .92 })); flash.position.copy(origin); flash.scale.set(1, 1, 2.5); this.scene.add(flash)
    const light = new THREE.PointLight(0xff9a35, 12, 11); light.position.copy(origin); this.scene.add(light)
    for (let index = 0; index < 9; index++) this.particle(origin.clone().addScaledVector(direction, .1 + Math.random() * .35), direction.clone().multiplyScalar(1.2 + Math.random() * 3).add(new THREE.Vector3((Math.random() - .5) * 1.8, .2 + Math.random() * 1.5, (Math.random() - .5) * 1.8)), index < 3 ? 0xff9b32 : 0x77766e, index < 3 ? .055 : .13 + Math.random() * .08, .3 + Math.random() * .45, -.15, .55, index < 3 ? .9 : .42)
    const token = ++tank.recoilToken, startedAt = performance.now(), baseBarrelZ = -2.15, cleanup = () => { this.scene.remove(flash, light); flash.geometry.dispose(); (flash.material as THREE.Material).dispose() }
    const animate = () => { if (token !== tank.recoilToken) { cleanup(); return } const t = Math.min((performance.now() - startedAt) / 420, 1), kick = Math.sin(Math.min(1, t * 1.6) * Math.PI) * (1 - t * .28); tank.barrel.position.z = baseBarrelZ + kick * .48; tank.turret.position.z = kick * .11; (flash.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 1 - t * 5); flash.scale.multiplyScalar(1 + .12 * (1 - t)); light.intensity = Math.max(0, 12 * (1 - t * 7)); if (t < 1) requestAnimationFrame(animate); else { tank.barrel.position.z = baseBarrelZ; tank.turret.position.z = 0; cleanup() } }; animate()
    if (this.playerTank === tank) { this.pitch = THREE.MathUtils.clamp(this.pitch - .035, -1.45, 1.45); this.yaw += (Math.random() - .5) * .012 }
  }
  private impactCannonShell(shell: CannonShell, position: THREE.Vector3, hit?: THREE.Intersection<THREE.Object3D>) {
    const bot = hit?.object.userData.bot as Bot | undefined, tank = hit?.object.userData.tank as Tank | undefined, transport = hit?.object.userData.transport as Transport | undefined, gun = hit?.object.userData.emplacement as Emplacement | undefined, depot = hit?.object.userData.depot as Depot | undefined, structure = hit?.object.userData.structure as FieldStructure | undefined, urbanBuilding = hit?.object.userData.urbanBuilding as UrbanBuilding | undefined
    if (bot && bot.team !== shell.team) { bot.hp -= shell.damage * .82; if (bot.hp <= 0) shell.playerOwned ? this.kill(bot, false, shell.velocity) : this.down(bot, shell.velocity) }
    if (tank && tank.team !== shell.team) this.damageTank(tank, shell.damage, shell.playerOwned, position, shell.penetration, shell.velocity, `${shell.sourceName} · 主炮炮弹`, shell.sourcePosition)
    if (transport && transport.team !== shell.team) this.damageTransport(transport, shell.damage * 1.08, shell.playerOwned)
    if (gun && gun.team !== shell.team) this.damageEmplacement(gun, shell.damage, shell.playerOwned)
    if (depot && shell.team === 'ally') this.damageDepot(depot, shell.damage, shell.playerOwned)
    if (structure) this.damageStructure(structure, shell.damage * 2.1)
    if (urbanBuilding) this.damageUrbanBuilding(urbanBuilding, shell.damage * 2.2)
    for (const target of this.bots) { if (!target.alive || target.team === shell.team || target === bot) continue; const distance = target.root.position.distanceTo(position); if (distance >= 3.4) continue; target.hp -= 90 * (1 - distance / 3.4); if (target.hp <= 0) shell.playerOwned ? this.kill(target, false, target.root.position.clone().sub(position)) : this.down(target, target.root.position.clone().sub(position)) }
    const armorHit = Boolean(tank || transport || gun), structureHit = Boolean(depot || structure || urbanBuilding), groundHit = !hit || position.y <= Math.max(.12, this.terrainHeight(position.x, position.z) + .12)
    this.cannonImpactFx(position, armorHit ? 'armor' : structureHit ? 'structure' : groundHit ? 'ground' : bot ? 'flesh' : 'hard', shell.damage)
    if (groundHit) this.crater(position, THREE.MathUtils.clamp(.72 + shell.damage / 260, 1.05, 1.75))
  }
  private cannonImpactFx(position: THREE.Vector3, kind: 'armor' | 'structure' | 'ground' | 'flesh' | 'hard', power: number) {
    const strength = THREE.MathUtils.clamp(power / 220, .65, 1.35), sound = this.soundAt(position); this.audio.explosion(sound.volume * (kind === 'armor' ? .48 : .72), sound.pan)
    this.particle(position.clone(), new THREE.Vector3(), kind === 'armor' ? 0xffd27a : 0xff9d3f, .072, .19, 0, 3.79 * strength, .85)
    const count = kind === 'armor' ? 12 : kind === 'structure' ? 16 : kind === 'ground' ? 14 : 7
    for (let index = 0; index < count; index++) {
      const spark = kind === 'armor' || kind === 'hard', color = spark ? (index % 3 ? 0xffb55c : 0x696b66) : kind === 'structure' ? (index % 3 ? 0x62584b : 0x383936) : kind === 'ground' ? (this.campaign.theme === 'loess' ? 0x8a6e4c : 0x55483a) : 0x6f1714
      this.particle(position.clone().add(new THREE.Vector3((Math.random() - .5) * .5, Math.random() * .35, (Math.random() - .5) * .5)), new THREE.Vector3((Math.random() - .5) * (spark ? 8 : 5) * strength, 1 + Math.random() * (spark ? 5 : 7) * strength, (Math.random() - .5) * (spark ? 8 : 5) * strength), color, spark ? .04 + Math.random() * .05 : .12 + Math.random() * .2, .35 + Math.random() * .55, spark ? 8 : 7)
    }
    for (let index = 0; index < (kind === 'armor' ? 3 : 6); index++) this.particle(position.clone().add(new THREE.Vector3((Math.random() - .5) * .6, .2 + Math.random() * .5, (Math.random() - .5) * .6)), new THREE.Vector3((Math.random() - .5), .8 + Math.random() * 1.7, (Math.random() - .5)), 0x393b37, .2 + Math.random() * .2, .8 + Math.random() * .7, -.1, .8, .46)
  }
  private updateCannonShells(dt: number) {
    for (let index = this.cannonShells.length - 1; index >= 0; index--) {
      const shell = this.cannonShells[index], start = shell.mesh.position.clone(), distance = shell.velocity.length() * dt, direction = shell.velocity.clone().normalize()
      const targets = this.hitTargetsAgainst(shell.team === 'ally' ? 'enemy' : 'ally')
      this.ray.set(start, direction); this.ray.far = distance; const hit = this.withStaticCover(this.ray.intersectObjects(targets, false)[0])
      let impact = hit?.point
      if (!impact && shell.team === 'enemy' && !this.dead) { const closest = new THREE.Line3(start, start.clone().addScaledVector(direction, distance)).closestPointToPoint(this.camera.position, true, new THREE.Vector3()); if (closest.distanceTo(this.camera.position) < .65) { impact = closest; this.hurtPlayer(65, start, `${shell.sourceName} · 主炮炮弹直击`) } }
      shell.mesh.position.addScaledVector(shell.velocity, dt); shell.velocity.y -= dt * 2.2; shell.life -= dt
      const floor = this.terrainHeight(shell.mesh.position.x, shell.mesh.position.z) + .08; if (!impact && shell.mesh.position.y <= floor) impact = shell.mesh.position.clone().setY(floor)
      if (!impact && shell.life > 0) { this.tracer(start, shell.mesh.position, shell.team === 'ally' ? 0xffe3a4 : 0xff7657); continue }
      this.cannonShells.splice(index, 1); this.scene.remove(shell.mesh); shell.mesh.geometry.dispose(); (shell.mesh.material as THREE.Material).dispose(); this.impactCannonShell(shell, impact ?? shell.mesh.position, hit)
    }
    this.ray.far = Infinity
  }
  private firePlayerTank() {
    const tank = this.playerTank, now = performance.now()
    if (!tank || !tank.alive || !tank.turretHealth || !this.crewAlive(tank, 'gunner') || now < this.tankShotAt) return
    const loaderPenalty = this.crewAlive(tank, 'loader') ? 1 : 1.6, damagePenalty = 1 + (1 - tank.turretHealth / 100) * 1.4
    this.tankShotAt = now + 4300 * loaderPenalty * damagePenalty
    const direction = new THREE.Vector3(0, 0, -1).applyQuaternion(tank.pitch.getWorldQuaternion(new THREE.Quaternion())).normalize(); this.launchCannonShell(tank.muzzle.getWorldPosition(new THREE.Vector3()), direction, tank.team, true, tank.gunDamage); this.audio.shot('bolt'); this.events.vehicle(true, tank.hp, false, tank.name, '主炮装填中 · 右键同轴机枪 · C 切换视角', tank.maxHp, 0)
  }
  private firePlayerTankMg() {
    const tank = this.playerTank, now = performance.now(); if (!tank || !tank.alive || !tank.turretHealth || !this.crewAlive(tank, 'gunner') || now < this.tankMgShotAt) return; this.tankMgShotAt = now + 105; this.ray.setFromCamera(new THREE.Vector2((Math.random() - .5) * .012, (Math.random() - .5) * .009), this.camera)
    const hit = this.withStaticCover(this.ray.intersectObjects(this.hitTargetsAgainst('enemy'), false)[0]), bot = hit?.object.userData.bot as Bot | undefined, transport = hit?.object.userData.transport as Transport | undefined, gun = hit?.object.userData.emplacement as Emplacement | undefined, start = tank.coaxMuzzle.getWorldPosition(new THREE.Vector3()), end = hit?.point ?? this.ray.ray.at(120, new THREE.Vector3()); this.tracer(start, end, 0xffdd83); this.audio.shot('auto', .58); this.suppressBots(start, end)
    if (bot) { const headshot = hit?.object.userData.hitZone === 'head', shotDamage = headshot ? 30 : 18, dealt = Math.min(bot.hp, shotDamage); bot.hp -= shotDamage; const killed = bot.hp <= 0; this.events.hit(killed, headshot, dealt); if (killed) this.kill(bot, headshot) } else if (transport) this.damageTransport(transport, 2, true); else if (gun) this.damageEmplacement(gun, 2, true)
  }
  private updatePlayerTank(dt: number) {
    const tank = this.playerTank
    if (!tank) return
    if (!tank.alive) { this.leaveTank(); this.hurtPlayer(40, tank.root.position, `${tank.name} · 载具损毁`); return }
    const mobility = tank.tracks <= 0 || tank.engine <= 0 || !this.crewAlive(tank, 'driver')
      ? 0
      : (.35 + tank.tracks / 100 * .65) * (.3 + tank.engine / 100 * .7) * (.55 + tank.crew * .1125)
    const throttleTarget = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0)
    const steerTarget = (this.keys.has('KeyA') ? 1 : 0) - (this.keys.has('KeyD') ? 1 : 0)
    this.vehicleThrottle = THREE.MathUtils.damp(this.vehicleThrottle, throttleTarget, 6, dt)
    this.vehicleSteer = THREE.MathUtils.damp(this.vehicleSteer, steerTarget, 8, dt)
    // A turns left (negative yaw with tankForward convention). Pivot slowly when stopped.
    const turnScale = Math.abs(this.vehicleThrottle) > .08 ? 1 : .45
    tank.root.rotation.y -= this.vehicleSteer * dt * .95 * mobility * turnScale
    const forward = this.tankForward(tank.root.rotation.y, this.tmpV3C)
    const speed = this.vehicleThrottle * dt * (this.vehicleThrottle > 0 ? 6.4 : 3.2) * mobility
    this.moveTankWithCollision(tank.root.position, forward.x * speed, forward.z * speed)
    const commanderRate = this.crewAlive(tank, 'commander') ? 1 : .72
    // Player turret tracks mouse without lag; commander injury only slows gun pitch.
    tank.turret.rotation.y = this.yaw - tank.root.rotation.y
    const gunPitch = THREE.MathUtils.clamp(this.pitch, -.2, .38)
    tank.pitch.rotation.x = THREE.MathUtils.damp(tank.pitch.rotation.x, gunPitch, (2.4 + tank.turretHealth / 28) * commanderRate, dt)
    if (this.tankGunnerView) {
      // The optic follows the physical gun axis, so the reticle and shell trajectory cannot diverge.
      const lens = tank.pitch.localToWorld(this.tmpV3A.set(.3, .16, -1.18))
      this.camera.position.copy(lens)
      this.camera.quaternion.copy(tank.pitch.getWorldQuaternion(new THREE.Quaternion()))
    } else {
      const look = this.tmpV3B.copy(tank.root.position).setY(tank.root.position.y + 1.35)
      this.placeChaseCamera(tank.root.position, look, 8.8, 2.7, 3.4, tank.root)
    }
    const fov = this.tankGunnerView ? 32 : 66
    this.camera.fov = THREE.MathUtils.damp(this.camera.fov, fov, 10, dt)
    this.camera.updateProjectionMatrix()
    this.camera.updateMatrixWorld()
    const cameraDirection = this.tmpV3C
    this.camera.getWorldDirection(cameraDirection)
    this.ray.set(this.camera.position, cameraDirection)
    this.ray.far = 160
    const rangeHit = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0])
    const range = rangeHit?.distance ?? 160
    this.ray.far = Infinity
    if (this.tankMgFiring) this.firePlayerTankMg()
    const ready = performance.now() >= this.tankShotAt && tank.turretHealth > 0 && this.crewAlive(tank, 'gunner')
    const muzzle = tank.muzzle.getWorldPosition(this.tmpV3A)
    const barrelDirection = this.tmpV3B.set(0, 0, -1).applyQuaternion(tank.pitch.getWorldQuaternion(new THREE.Quaternion()))
    const projected = this.chaseCamLook.copy(muzzle).addScaledVector(barrelDirection, 80).project(this.camera)
    const pipVisible = projected.z < 1 && Math.abs(projected.x) <= 1.15 && Math.abs(projected.y) <= 1.15
    this.events.tankSight(true, this.tankGunnerView, ready, !this.tankGunnerView && pipVisible ? (projected.x * .5 + .5) * innerWidth : undefined, !this.tankGunnerView && pipVisible ? (1 - (projected.y * .5 + .5)) * innerHeight : undefined)
    const failedRoles = tank.crewMen.filter(crew => !crew.alive).map(crew => crew.role === 'driver' ? '驾驶员' : crew.role === 'gunner' ? '炮手' : crew.role === 'loader' ? '装填手' : '车长').join('、')
    // gunnerView true = optic seat; label must match.
    this.events.vehicle(true, tank.hp, ready, tank.name, `左键主炮 · 右键同轴 · C 切换至${this.tankGunnerView ? '车长外视' : '炮手瞄具'} · 距离 ${Math.round(range)}m · ${failedRoles ? `${failedRoles}阵亡` : `乘员 ${tank.crew}/${tank.crewCapacity}`}`, tank.maxHp, ready ? 1 : Math.max(0, 1 - (this.tankShotAt - performance.now()) / 4300))
  }
  private updateBrace() {
    const support = this.weaponSlot === 'primary' && this.selectedLoadout.id === 'support'
    const directionYaw = this.braced ? this.braceYaw : this.yaw, direction = new THREE.Vector3(-Math.sin(directionYaw), 0, -Math.cos(directionYaw)), supportPoint = this.camera.position.clone().addScaledVector(direction, .9)
    this.canBrace = support && !this.jumpHeight && (this.stance === 'prone' || this.colliders.some(box => supportPoint.x > box.minX - .2 && supportPoint.x < box.maxX + .2 && supportPoint.z > box.minZ - .2 && supportPoint.z < box.maxZ + .2))
    if (this.braced && !this.canBrace) this.braced = false
    if (this.braced) { const delta = Math.atan2(Math.sin(this.yaw - this.braceYaw), Math.cos(this.yaw - this.braceYaw)); this.yaw = this.braceYaw + THREE.MathUtils.clamp(delta, -.72, .72) }
    this.events.brace(this.canBrace, this.braced)
  }
  private toggleBrace() {
    if (this.dead || this.playerTank || this.playerTransport || this.playerPlane || this.playerMortar || this.playerEmplacement || this.playerMG) return
    if (this.braced) { this.braced = false; this.status = '轻机枪已收起'; this.statusUntil = performance.now() / 1000 + 1; this.audio.click(540, .07); return }
    if (!this.canBrace) { if (this.selectedLoadout.id === 'support' && this.weaponSlot === 'primary') { this.status = '卧倒或靠近齐腰掩体才能架枪'; this.statusUntil = performance.now() / 1000 + 1.5 } return }
    this.braced = true; this.braceYaw = this.yaw; this.aiming = true; this.events.aim(true); this.status = 'ZB-26 已架设'; this.statusUntil = performance.now() / 1000 + 1.4; this.audio.click(760, .08)
  }
  private platformLevel(position: THREE.Vector3) { return this.platforms.reduce((level, platform) => position.y > platform.y + .2 && position.x > platform.minX && position.x < platform.maxX && position.z > platform.minZ && position.z < platform.maxZ ? Math.max(level, platform.y) : level, 0) }
  private tryLadder() {
    if (this.playerLadder || (!this.keys.has('KeyW') && !this.keys.has('KeyS')) || this.jumpHeight || this.jumpVelocity || this.stance === 'prone') return
    const ladder = this.ladders.find(candidate => Math.hypot(candidate.x - this.camera.position.x, candidate.z - this.camera.position.z) < 1.05 && this.camera.position.y > candidate.y0 - .6 && this.camera.position.y < candidate.y1 + 1)
    if (!ladder) return
    this.playerLadder = ladder; this.braced = false; this.stance = 'stand'; this.jumpHeight = 0; this.jumpVelocity = 0; this.camera.position.x = ladder.x; this.camera.position.y = Math.min(this.camera.position.y, ladder.y1); this.camera.position.z = ladder.z; this.status = '正在攀爬 · W/S 上下 · Space 跳离'; this.statusUntil = performance.now() / 1000 + 1.8
  }
  private updateLadder(dt: number) {
    const ladder = this.playerLadder; if (!ladder) return false
    const direction = (this.keys.has('KeyW') ? 1 : 0) - (this.keys.has('KeyS') ? 1 : 0); this.camera.position.set(ladder.x, THREE.MathUtils.clamp(this.camera.position.y + direction * dt * 3.1, ladder.y0, ladder.y1), ladder.z); this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); this.weapon.position.y = -.31 + Math.sin(performance.now() * .012) * .025; this.events.movement(this.stamina, 'stand')
    if (this.camera.position.y >= ladder.y1 && direction > 0) { this.playerLadder = undefined; const forward = new THREE.Vector3(Math.sin(ladder.face), 0, Math.cos(ladder.face)); this.camera.position.addScaledVector(forward, .72); this.groundLevel = this.platformLevel(this.camera.position); this.camera.position.y = this.groundLevel + 1.72; this.status = '已登上瞭望台'; this.statusUntil = performance.now() / 1000 + 1.3 }
    else if (this.camera.position.y <= ladder.y0 && direction < 0) { this.playerLadder = undefined; this.groundLevel = this.terrainHeight(this.camera.position.x, this.camera.position.z); this.camera.position.y = this.groundLevel + 1.72 }
    return true
  }
  private jump() {
    if (this.playerLadder) { const ladder = this.playerLadder; this.playerLadder = undefined; this.camera.position.x -= Math.sin(ladder.face) * .75; this.camera.position.z -= Math.cos(ladder.face) * .75; this.jumpVelocity = 3.6; this.groundLevel = this.terrainHeight(this.camera.position.x, this.camera.position.z); return }
    if (this.dead || this.buildAction || this.braced || this.jumpHeight || this.jumpVelocity || this.stance !== 'stand' || this.playerTank || this.playerTransport || this.playerPlane || this.playerMortar || this.playerEmplacement || this.playerMG || this.parachuting) return
    this.jumpVelocity = 5.7
    this.stamina = Math.max(0, this.stamina - .08)
    this.staminaRegenAt = performance.now() / 1000 + 1
    this.audio.click(180, .045)
  }
  private updatePlayer(dt: number, time: number) {
    this.tryLadder(); if (this.updateLadder(dt)) return
    if (time - this.lastDamageAt > 6 && this.hp < 70) { this.hp = Math.min(70, this.hp + dt * 4); this.events.health(this.hp, false) }
    const entangled = this.fortifications.some(fortification => fortification.kind === 'wire' && fortification.team !== 'ally' && fortification.center.distanceToSquared(this.camera.position) < 2.3 ** 2)
    if (entangled && time >= this.nextWireDamage) { this.nextWireDamage = time + .8; this.hurtPlayer(4, this.camera.position, '铁丝网割伤'); if (this.dead) return }
    this.updateBrace()
    if (this.braced && (this.keys.has('KeyW') || this.keys.has('KeyA') || this.keys.has('KeyS') || this.keys.has('KeyD') || this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'))) this.braced = false
    const activeWeapon = this.activeLoadout(), scoped = activeWeapon.id === 'scout' && this.aiming, exhausted = time < this.breathExhaustedUntil; this.holdingBreath = scoped && !exhausted && this.stamina > .02 && (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')); this.breathPhase += dt * (exhausted ? 4.4 : 1.65); const breathStrength = scoped ? this.holdingBreath ? .00028 : exhausted ? .008 : .0032 : 0, breathPitch = Math.sin(this.breathPhase) * breathStrength, breathYaw = Math.sin(this.breathPhase * .73 + .8) * breathStrength * .72, leanTarget = !this.braced && this.stance !== 'prone' && !this.keys.has('ShiftLeft') ? (this.keys.has('KeyQ') ? -1 : 0) + (this.keys.has('KeyE') ? 1 : 0) : 0; this.lean = THREE.MathUtils.damp(this.lean, leanTarget, 10, dt); if (this.firing && activeWeapon.kind === 'auto') this.fire(); this.camera.rotation.set(this.pitch + this.recoil + breathPitch, this.yaw + breathYaw, -this.lean * .075, 'YXZ'); this.recoil = THREE.MathUtils.lerp(this.recoil, 0, 1 - Math.exp(-dt * 12)); this.weapon.visible = !scoped; this.playerMuzzle.visible = !scoped && time - this.shotAt < .045; this.events.breath(scoped, this.holdingBreath, exhausted)
    const targetFov = this.aiming ? (activeWeapon.id === 'scout' ? 24 : 52) : 72; this.camera.fov = THREE.MathUtils.damp(this.camera.fov, targetFov, 14, dt); this.camera.updateProjectionMatrix()
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)), right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw)), movement = new THREE.Vector3(); if (this.keys.has('KeyW')) movement.add(forward); if (this.keys.has('KeyS')) movement.sub(forward); if (this.keys.has('KeyD')) movement.add(right); if (this.keys.has('KeyA')) movement.sub(right)
    const moving = movement.lengthSq() > 0, wantsSprint = !this.bandagingUntil && (this.keys.has('ShiftLeft') || this.keys.has('ShiftRight')) && this.keys.has('KeyW') && this.stance === 'stand' && !this.aiming, sprinting = moving && wantsSprint && this.stamina > .01
    if (sprinting) { this.stamina = Math.max(0, this.stamina - dt * .23); this.staminaRegenAt = time + 1.15 } else if (this.holdingBreath) { this.stamina = Math.max(0, this.stamina - dt * .3); this.staminaRegenAt = time + 1.35; if (this.stamina <= .02) { this.holdingBreath = false; this.breathExhaustedUntil = time + 2.5 } } else if (time >= this.staminaRegenAt) this.stamina = Math.min(1, this.stamina + dt * .16)
    const stanceSpeed = this.stance === 'prone' ? 1.45 : this.stance === 'crouch' ? 3.05 : 4.8, speed = (sprinting ? 7.5 : stanceSpeed) * (this.aiming ? .68 : 1) * (this.bandagingUntil ? .45 : this.supplyAction ? .6 : 1) * (entangled ? .32 : 1); if (moving) { movement.normalize().multiplyScalar(dt * speed * (this.jumpHeight ? .58 : 1)); this.moveWithCollision(this.camera.position, movement.x, movement.z, .28); this.movePhase += dt * speed * (sprinting ? 1.35 : 1); if (!this.jumpHeight && time >= this.nextFootstepAt) { this.audio.footstep(sprinting, this.stance === 'prone' ? .28 : this.stance === 'crouch' ? .58 : 1); this.nextFootstepAt = time + (this.stance === 'prone' ? .62 : sprinting ? .29 : this.stance === 'crouch' ? .48 : .4) } }
    if (this.jumpHeight || this.jumpVelocity) { const impactSpeed = this.jumpVelocity; this.jumpVelocity -= 15.5 * dt; this.jumpHeight += this.jumpVelocity * dt; if (this.jumpHeight <= 0) { this.jumpHeight = 0; this.jumpVelocity = 0; this.landingKick = THREE.MathUtils.clamp(Math.abs(impactSpeed) * .018, .055, .11); this.audio.click(115, .075) } }
    this.landingKick = THREE.MathUtils.damp(this.landingKick, 0, 11, dt)
    this.groundLevel = Math.max(this.terrainHeight(this.camera.position.x, this.camera.position.z), this.platformLevel(this.camera.position)); const eyeHeight = this.stance === 'prone' ? .63 : this.stance === 'crouch' ? 1.18 : 1.72; this.camera.position.y = THREE.MathUtils.damp(this.camera.position.y, this.groundLevel + eyeHeight + this.jumpHeight - this.landingKick, this.jumpHeight ? 28 : 14, dt)
    if (!this.loading) { const bob = moving && !this.aiming ? Math.sin(this.movePhase * 2) * .012 : 0, sway = moving && !this.aiming ? Math.cos(this.movePhase) * .009 : 0, meleeAge = time - this.meleeAt, thrust = meleeAge >= 0 && meleeAge < .5 ? Math.sin(meleeAge / .5 * Math.PI) : 0; this.weapon.position.x = THREE.MathUtils.damp(this.weapon.position.x, (this.aiming ? 0 : .32) + sway + this.lean * .08, 18, dt); this.weapon.position.y = THREE.MathUtils.damp(this.weapon.position.y, (this.braced ? -.2 : this.aiming ? -.22 : -.27) + bob + thrust * .08, 18, dt); this.weapon.position.z = THREE.MathUtils.damp(this.weapon.position.z, (this.braced ? -.62 : this.aiming ? -.58 : -.65) - thrust * .72, 22, dt); this.weapon.rotation.x = THREE.MathUtils.damp(this.weapon.rotation.x, -thrust * .18, 18, dt); this.weapon.rotation.z = THREE.MathUtils.damp(this.weapon.rotation.z, this.lean * -.06 + thrust * .12, 18, dt) }
    this.events.movement(this.stamina, this.stance)
  }
  private scheduleArtillery(time: number, forcedTeam?: Team, forcedCount?: number) {
    const team: Team = forcedTeam ?? (Math.random() < .52 ? 'enemy' : 'ally')
    const assaultObjectives = this.activeAssaultObjectives(), activeObjective = this.campaign.rule === 'assault' ? assaultObjectives[Math.floor(Math.random() * assaultObjectives.length)] : this.objectives[Math.floor(Math.random() * this.objectives.length)]
    if (!activeObjective) return
    const count = forcedCount ?? 4 + Math.floor(Math.random() * 3)
    for (let index = 0; index < count; index++) {
      const angle = Math.random() * Math.PI * 2, distance = Math.sqrt(Math.random()) * (activeObjective.radius + 5), position = activeObjective.position.clone().add(new THREE.Vector3(Math.cos(angle) * distance, .12, Math.sin(angle) * distance))
      const marker = new THREE.Mesh(new THREE.RingGeometry(.55, .72, 20), new THREE.MeshBasicMaterial({ color: team === 'enemy' ? 0xe2644f : 0x72a9d3, transparent: true, opacity: .58, side: THREE.DoubleSide, depthTest: false }))
      marker.rotation.x = -Math.PI / 2; marker.position.copy(position).setY(.04); marker.renderOrder = 5; this.scene.add(marker)
      this.artilleryShells.push({ position, team, impactAt: time + 2.2 + index * .48 + Math.random() * .28, marker })
    }
    if (team === 'enemy') { this.status = `敌军炮击预警 · ${activeObjective.id} 点`; this.statusUntil = time + 2.4 }
  }
  private updateArtillery(time: number) {
    if (this.operationOpeningActive(time) && !this.operationOpeningBarrage) return
    if (!this.nextArtilleryAt) this.nextArtilleryAt = time + 12 + Math.random() * 6
    if (time >= this.nextArtilleryAt) { this.scheduleArtillery(time); this.nextArtilleryAt = time + 22 + Math.random() * 14 }
    for (let index = this.artilleryShells.length - 1; index >= 0; index--) {
      const shell = this.artilleryShells[index], remaining = shell.impactAt - time
      shell.marker.scale.setScalar(1 + Math.sin(time * 9 + index) * .18); (shell.marker.material as THREE.MeshBasicMaterial).opacity = THREE.MathUtils.clamp(.25 + (2.2 - remaining) * .2, .25, .8)
      if (remaining > 0) continue
      this.artilleryShells.splice(index, 1); this.scene.remove(shell.marker); shell.marker.geometry.dispose(); (shell.marker.material as THREE.Material).dispose()
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(.08, 6, 4), new THREE.MeshBasicMaterial({ color: 0x2c302b })); mesh.position.copy(shell.position); this.scene.add(mesh)
      this.tracer(shell.position.clone().setY(30), shell.position, shell.team === 'enemy' ? 0xff8060 : 0xffdda0)
      this.explode({ mesh, velocity: new THREE.Vector3(), detonateAt: time, team: shell.team, playerOwned: false })
    }
  }
  private explode(grenade: Grenade) {
    const center = grenade.mesh.position.clone(), antiTank = Boolean(grenade.antiTank), bomb = Boolean(grenade.bomb), mortar = Boolean(grenade.mortar), infantryRadius = bomb ? 11 : mortar ? 8 : antiTank ? 4.5 : 7, vehicleRadius = bomb ? 9 : mortar ? 6.5 : antiTank ? 5 : 6; this.scene.remove(grenade.mesh); grenade.mesh.geometry.dispose(); (grenade.mesh.material as THREE.Material).dispose()
    for (const bot of this.bots) { if (!bot.alive || bot.team === grenade.team) continue; const distance = bot.root.position.distanceTo(center); if (distance >= infantryRadius) continue; bot.hp -= (bomb ? 240 : mortar ? 165 : antiTank ? 95 : 135) * (1 - distance / infantryRadius); if (bot.hp <= 0) { const impulse = bot.root.position.clone().sub(center).setY(0).multiplyScalar((bomb ? 2.5 : mortar ? 1.6 : 1.15) * (1 - distance / infantryRadius)); if (grenade.playerOwned && bot.team === 'enemy') this.kill(bot, false, impulse); else { grenade.owner && grenade.owner.kills++; this.down(bot, impulse, false, grenade.owner) } } }
    for (const tank of this.tanks) { if (!tank.alive || tank.team === grenade.team) continue; const distance = tank.root.position.distanceTo(center); if (distance < vehicleRadius) { const wasAlive = tank.alive, cause = grenade.crash ? `${grenade.sourceName ?? '飞机'} · 坠毁撞击爆炸` : bomb ? '航空炸弹' : mortar ? '迫击炮弹' : antiTank ? `${grenade.owner?.name ?? '敌军'} · 反坦克手雷` : `${grenade.owner?.name ?? '敌军'} · 手榴弹`; this.damageTank(tank, (bomb ? 260 : mortar ? 85 : antiTank ? 390 : 48) * (1 - distance / vehicleRadius), grenade.playerOwned, center, undefined, undefined, cause, center); if (wasAlive && !tank.alive && grenade.owner) { grenade.owner.kills++; this.events.combatKill(grenade.owner.name, grenade.owner.team, tank.name, tank.team) } } }
    for (const transport of this.transports) { if (!transport.alive || transport.team === grenade.team) continue; const distance = transport.root.position.distanceTo(center); if (distance < vehicleRadius) this.damageTransport(transport, (bomb ? 360 : mortar ? 155 : antiTank ? 430 : 105) * (1 - distance / vehicleRadius), grenade.playerOwned) }
    for (const gun of this.emplacements) { if (!gun.alive || gun.team === grenade.team) continue; const distance = gun.root.position.distanceTo(center); if (distance < vehicleRadius) this.damageEmplacement(gun, (bomb ? 330 : mortar ? 180 : antiTank ? 380 : 130) * (1 - distance / vehicleRadius), grenade.playerOwned) }
    for (const structure of this.fieldStructures) { if (structure.destroyed) continue; const distance = structure.root.position.distanceTo(center); const radius = bomb ? 12 : 7; if (distance < radius) this.damageStructure(structure, (bomb ? 650 : antiTank ? 430 : 175) * (1 - distance / radius)) }
    for (const building of this.urbanBuildings) { if (building.destroyed) continue; const distance = building.root.position.distanceTo(center); const radius = bomb ? 15 : 12; if (distance < radius) this.damageUrbanBuilding(building, (bomb ? 520 : 130) * (1 - distance / radius)) }
    if (grenade.team === 'ally') for (const depot of this.depots) { if (depot.destroyed) continue; const distance = depot.position.distanceTo(center); const radius = bomb ? 10 : 7; if (distance < radius) this.damageDepot(depot, (bomb ? 460 : antiTank ? 340 : 145) * (1 - distance / radius), grenade.playerOwned) }
    const playerRadius = bomb ? 11 : mortar ? 8 : antiTank ? 5 : 7, playerDistance = this.camera.position.distanceTo(center); if (!this.dead && playerDistance < playerRadius && (grenade.team === 'enemy' || grenade.playerOwned)) { this.hurtPlayer((bomb ? 190 : mortar ? 145 : antiTank ? 105 : 120) * (1 - playerDistance / playerRadius), center, grenade.crash ? `${grenade.sourceName ?? '飞机'} · 坠毁撞击爆炸` : bomb ? '航空炸弹爆炸' : mortar ? '迫击炮弹爆炸' : antiTank ? '反坦克手雷爆炸' : '破片手雷爆炸'); if (this.dead) grenade.owner && grenade.owner.kills++ }
    this.blastCorpses(center, infantryRadius * 1.2, bomb ? 7 : mortar ? 4.8 : antiTank ? 3.8 : 4.2); this.explosionFx(center); this.crater(center, bomb ? 2.1 : mortar ? 1.45 : antiTank ? 1.4 : 1.15)
  }
  private explosionFx(center: THREE.Vector3) {
    const sound = this.soundAt(center); this.audio.explosion(sound.volume, sound.pan); for (let i = 0; i < 12; i++) this.particle(center.clone().add(new THREE.Vector3((Math.random() - .5) * 1.5, Math.random(), (Math.random() - .5) * 1.5)), new THREE.Vector3((Math.random() - .5) * 5, 2 + Math.random() * 7, (Math.random() - .5) * 5), i < 5 ? 0xffa13f : 0x55483a, .08 + Math.random() * .16, .7 + Math.random() * .65, 8); for (let i = 0; i < 7; i++) this.particle(center.clone().setY(center.y + .5 + Math.random()), new THREE.Vector3((Math.random() - .5) * 1.3, 1.2 + Math.random() * 1.8, (Math.random() - .5) * 1.3), 0x343633, .28 + Math.random() * .25, 2 + Math.random() * 1.3, -.2, 1.2, .48); this.particle(center.clone(), new THREE.Vector3(), 0xffa33b, .25, .36, 0, 13.9, .85); const light = new THREE.PointLight(0xff7b24, 18, 18); light.position.copy(center); this.scene.add(light); const at = performance.now(), animate = () => { const t = Math.min((performance.now() - at) / 360, 1); light.intensity = (1 - t) * 18; if (t < 1) requestAnimationFrame(animate); else this.scene.remove(light) }; animate()
  }
  private crater(position: THREE.Vector3, radius = 1.25) {
    if (position.y > 2.2) return
    const geometry = new THREE.CircleGeometry(radius * (.82 + Math.random() * .32), 18)
    const material = new THREE.MeshBasicMaterial({ color: Math.random() < .35 ? 0x211d18 : 0x302820, transparent: true, opacity: .72, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 })
    const crater = new THREE.Mesh(geometry, material)
    crater.position.set(position.x, .022, position.z)
    crater.rotation.set(-Math.PI / 2, 0, Math.random() * Math.PI)
    this.scene.add(crater)
    this.craters.push(crater)
    if (this.craters.length <= 42) return
    const oldest = this.craters.shift()!
    this.scene.remove(oldest)
    oldest.geometry.dispose()
    ;(oldest.material as THREE.Material).dispose()
  }
  private updateGrenades(dt: number, time: number) {
    let danger = false
    for (let index = this.grenadesInWorld.length - 1; index >= 0; index--) {
      const grenade = this.grenadesInWorld[index]
      if (time >= grenade.detonateAt) { this.grenadesInWorld.splice(index, 1); if (grenade.smoke) this.deploySmoke(grenade.mesh.position.clone(), time); else this.explode(grenade); if (grenade.smoke) { this.scene.remove(grenade.mesh); grenade.mesh.geometry.dispose(); (grenade.mesh.material as THREE.Material).dispose() } continue }
      grenade.velocity.y -= 9.8 * dt; grenade.mesh.position.addScaledVector(grenade.velocity, dt); const floor = this.terrainHeight(grenade.mesh.position.x, grenade.mesh.position.z) + .13
      if (grenade.mesh.position.y < floor) { const impactSpeed = Math.abs(grenade.velocity.y); grenade.mesh.position.y = floor; if (grenade.bomb || grenade.mortar) grenade.detonateAt = time; else { grenade.velocity.y = impactSpeed * .34; grenade.velocity.x *= .68; grenade.velocity.z *= .68; if (impactSpeed > 1.1 && time >= (grenade.lastBounceAt ?? 0)) { grenade.lastBounceAt = time + .12; const sound = this.soundAt(grenade.mesh.position); this.audio.click(560 + Math.random() * 120, sound.volume * .16) } } }
      grenade.mesh.rotation.x += dt * (grenade.bomb ? 2.5 : 7); grenade.mesh.rotation.z += dt * (grenade.bomb ? 1.4 : 4); if (!grenade.smoke && grenade.team === 'enemy' && !this.dead && grenade.mesh.position.distanceToSquared(this.camera.position) < (grenade.mortar ? 12 : 8) ** 2) danger = true
    }
    this.events.grenadeWarning(danger)
  }
  private deploySmoke(position: THREE.Vector3, time: number) {
    position.y = .6; const root = new THREE.Group(); root.position.copy(position); this.scene.add(root)
    for (let i = 0; i < 18; i++) { const puff = new THREE.Mesh(new THREE.IcosahedronGeometry(.7 + Math.random() * .65, 1), new THREE.MeshBasicMaterial({ color: i % 3 ? 0xa6aaa3 : 0x858b84, transparent: true, opacity: .34, depthWrite: false })); const angle = Math.random() * Math.PI * 2, radius = Math.random() * 3.8; puff.position.set(Math.cos(angle) * radius, Math.random() * 2.8, Math.sin(angle) * radius); puff.scale.set(.2, .2, .2); root.add(puff) }
    this.smokeClouds.push({ root, position, bornAt: time, expiresAt: time + 17 })
  }
  private updateSmoke(dt: number, time: number) {
    for (let i = this.smokeClouds.length - 1; i >= 0; i--) { const cloud = this.smokeClouds[i], age = time - cloud.bornAt, remaining = cloud.expiresAt - time; if (remaining <= 0) { this.smokeClouds.splice(i, 1); this.disposeGroup(cloud.root); continue } const density = Math.min(1, age / 2.2) * Math.min(1, remaining / 2.5); cloud.root.children.forEach((child, index) => { child.scale.lerp(new THREE.Vector3(1 + index % 3 * .16, .8 + index % 2 * .25, 1.1), dt * 2.2); child.position.y += dt * (.035 + index % 4 * .008); const material = (child as THREE.Mesh).material as THREE.MeshBasicMaterial; material.opacity = density * .36 }); cloud.root.position.x += dt * .08 }
  }
  private smokeBlocks(start: THREE.Vector3, end: THREE.Vector3) { const line = new THREE.Line3(start, end), closest = new THREE.Vector3(); return this.smokeClouds.some(cloud => { line.closestPointToPoint(cloud.position, true, closest); return closest.distanceToSquared(cloud.position) < 4.8 ** 2 }) }
  private nearMiss(start: THREE.Vector3, end: THREE.Vector3) {
    if (this.dead) return; const closest = new THREE.Line3(start, end).closestPointToPoint(this.camera.position, true, new THREE.Vector3()), distance = closest.distanceTo(this.camera.position); if (distance > 3.2) return; this.suppression = Math.min(1, this.suppression + (3.2 - distance) * .09 + .08); this.events.suppression(this.suppression)
    const time = performance.now() / 1000; if (distance >= 2 || time < this.nextWhizzAt) return; const offset = closest.clone().sub(this.camera.position), right = new THREE.Vector3(1, 0, 0).applyQuaternion(this.camera.quaternion), pan = offset.lengthSq() ? THREE.MathUtils.clamp(right.dot(offset.normalize()), -1, 1) : 0; this.nextWhizzAt = time + .18; this.audio.whizz(pan)
  }
  private suppressBots(start: THREE.Vector3, end: THREE.Vector3) { const line = new THREE.Line3(start, end), closest = new THREE.Vector3(); for (const bot of this.bots) { if (!bot.alive || bot.team !== 'enemy') continue; const chest = bot.root.position.clone().add(new THREE.Vector3(0, 1.3, 0)); line.closestPointToPoint(chest, true, closest); const distance = closest.distanceTo(chest); if (distance < 3.2) bot.suppression = Math.min(1.6, bot.suppression + .18 + (3.2 - distance) * .06) } }
  private updateSuppression(dt: number) { if (!this.suppression) return; this.suppression = Math.max(0, this.suppression - dt * .16); this.events.suppression(this.suppression) }
  private updateMedkits(time: number) {
    for (let index = this.medkits.length - 1; index >= 0; index--) { const medkit = this.medkits[index]; if (time >= medkit.expiresAt) { this.medkits.splice(index, 1); this.scene.remove(medkit.root); medkit.root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }); continue } if (time < medkit.nextHeal) continue; medkit.nextHeal = time + 1; for (const bot of this.bots) if (bot.alive && bot.team === medkit.team && bot.hp < 100 && bot.root.position.distanceToSquared(medkit.root.position) < 5 ** 2) bot.hp = Math.min(100, bot.hp + 12); if (medkit.team === 'ally' && !this.dead && !this.playerTank && this.hp < 100 && this.camera.position.distanceToSquared(medkit.root.position) < 5 ** 2) { this.hp = Math.min(100, this.hp + 8); this.events.health(this.hp, false) } }
  }
  private updateEquipment(time: number) {
    if (this.parachuting || this.playerPlane || this.playerTransport) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), ''); return }
    if (this.playerLadder) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), 'W/S 上下攀爬 · Space 跳离'); return }
    const nearbyLadder = !this.dead && this.ladders.some(ladder => Math.hypot(ladder.x - this.camera.position.x, ladder.z - this.camera.position.z) < 1.25 && this.camera.position.y > ladder.y0 - .6 && this.camera.position.y < ladder.y1 + 1)
    if (nearbyLadder) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), '靠近梯子并按 W/S 攀爬'); return }
    const availablePlane = !this.dead && this.camera.position.z > 40 ? this.planes.find(plane => plane.alive && plane.team === 'ally' && !plane.playerDriven) : undefined; if (availablePlane) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), `按 E 从机场驾驶${availablePlane.name}`); return }
    if (this.playerEmplacement) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), ''); return }
    const nearbyTransport = this.transports.find(transport => transport.alive && transport.team === 'ally' && !transport.playerDriven && transport.root.position.distanceToSquared(this.camera.position) < 5 ** 2); if (nearbyTransport) { const fieldTransport = Math.abs(nearbyTransport.root.position.z) < 43, seatsAvailable = this.bots.filter(bot => bot.alive && bot.riding === nearbyTransport).length < 6; this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), fieldTransport && seatsAvailable ? '按 E 搭乘运兵车 · 车斗内可射击' : '按 E 驾驶友军运兵车'); return }
    const nearbyEmplacement = this.emplacements.find(gun => gun.alive && gun.team === 'ally' && !gun.occupied && gun.root.position.distanceToSquared(this.camera.position) < 3.6 ** 2); if (nearbyEmplacement) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), `按 E 操作友军${nearbyEmplacement.kind === 'aa' ? '防空炮' : '反坦克炮'}`); return }
    const damagedSubsystem = this.selectedLoadout.id === 'engineer' && this.tanks.some(tank => tank.alive && tank.team === 'ally' && (tank.tracks < 100 || tank.engine < 100 || tank.turretHealth < 100) && tank.root.position.distanceToSquared(this.camera.position) < 4.5 ** 2); if (damagedSubsystem) { this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), time < this.repairAt ? '维修工具冷却中' : '按 F 维修坦克受损部件'); return }
    const nearSupply = !this.dead && this.ammoCrates.some(crate => crate.distanceToSquared(this.camera.position) < 3.2 ** 2), nearMedical = !this.dead && this.aid < this.selectedLoadout.aid && this.medkits.some(item => item.team === 'ally' && item.uses > 0 && item.root.position.distanceToSquared(this.camera.position) < 3.2 ** 2), nearMortar = !this.dead && !this.playerMortar && Boolean(this.mortar && !this.mortar.occupied && this.camera.position.distanceToSquared(this.mortar.position) < 2.8 ** 2), nearMG = !this.dead && !this.playerMG && this.machineGuns.some(machineGun => !machineGun.occupied && machineGun.position.distanceToSquared(this.camera.position) < 2.8 ** 2), nearTank = !this.dead && !this.playerTank && this.tanks.some(tank => tank.alive && tank.team === 'ally' && !tank.playerDriven && tank.root.position.distanceToSquared(this.camera.position) < 4.5 ** 2), nearDamagedTank = !this.dead && !this.playerTank && this.selectedLoadout.id === 'engineer' && this.tanks.some(tank => tank.alive && tank.team === 'ally' && tank.hp < 520 && tank.root.position.distanceToSquared(this.camera.position) < 4.5 ** 2), nearCasualty = !this.dead && !this.playerTank && this.selectedLoadout.id === 'medic' && this.bots.some(bot => !bot.alive && bot.team === 'ally' && time >= bot.reviveAt && bot.root.position.distanceToSquared(this.camera.position) < 2.8 ** 2), prompt = this.playerTank ? '按 E 离开坦克' : this.playerMortar ? '左键发射 · 鼠标调整落点 · E 离开' : this.playerMG ? '左键持续射击 · E 离开重机枪' : time < this.statusUntil ? this.status : nearCasualty ? '按 E 救起友军' : nearDamagedTank ? (time < this.repairAt ? '维修工具冷却中' : '按 F 维修友军坦克') : nearMortar ? '按 E 操作迫击炮' : nearMG ? '按 E 操作重机枪' : nearTank ? '按 E 进入友军坦克' : nearMedical ? (time < this.bandageResupplyAt ? '医疗箱整理中' : '按 E 补充绷带') : nearSupply ? (time < this.resupplyAt ? '补给整理中' : '按 E 补充弹药') : this.hp < 100 && this.aid ? '按 H 使用绷带' : ''
    this.events.equipment(this.grenades, this.aid, this.medkitAvailable, this.buildCharges, this.buildLabel(), this.mortarAmmo, Boolean(this.mortar), prompt)
  }
  private updateTactical(time: number) {
    if (time < this.tacticalAt) return
    this.tacticalAt = time + .15
    const position = this.playerTank?.root.position ?? this.playerTransport?.root.position ?? this.playerEmplacement?.root.position ?? this.camera.position
    const mapX = (x: number) => this.mapTacticalX(x)
    const vehicles: [number, number, Team][] = []
    for (const tank of this.tanks) if (tank.alive) vehicles.push([mapX(tank.root.position.x), tank.root.position.z, tank.team])
    for (const transport of this.transports) if (transport.alive) vehicles.push([mapX(transport.root.position.x), transport.root.position.z, transport.team])
    for (const gun of this.emplacements) if (gun.alive) vehicles.push([mapX(gun.root.position.x), gun.root.position.z, gun.team])
    for (const plane of this.planes) if (plane.alive) vehicles.push([mapX(plane.root.position.x), plane.root.position.z, plane.team])
    const infantry: [number, number, Team][] = []
    for (const bot of this.bots) if (bot.alive && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting) infantry.push([mapX(bot.root.position.x), bot.root.position.z, bot.team])
    this.events.tactical({
      player: [mapX(position.x), position.z, this.yaw],
      infantry,
      tanks: vehicles,
      flags: this.objectives.map((point, index) => [point.id, mapX(point.position.x), point.position.z, point.owner, this.campaign.rule !== 'assault' || this.activeAssaultIndices().includes(index)]),
      depots: this.depots.map(depot => [depot.id, mapX(depot.position.x), depot.position.z, depot.destroyed]),
    })
    if (time < this.scoreboardAt) return
    this.scoreboardAt = time + .45
    const roleName = (id: string) => this.battleLoadouts.find(item => item.id === id)?.name ?? '步枪兵'
    const rows = (team: Team): ScoreRow[] => {
      const list: ScoreRow[] = []
      for (const bot of this.bots) if (bot.team === team) list.push({ name: bot.name, role: roleName(bot.role), kills: bot.kills, deaths: bot.deaths, score: bot.kills * 100 + bot.objectiveScore, alive: bot.alive })
      list.sort((a, b) => b.score - a.score || a.deaths - b.deaths)
      return list
    }
    this.events.scoreboard([{ name: '札克利', role: this.selectedLoadout.name, kills: this.kills, deaths: this.deaths, score: this.kills * 100 + this.objectiveScore, player: true, alive: !this.dead }, ...rows('ally')], rows('enemy'))
  }
  private orderSquadMove() {
    if (this.dead) return; const direction = new THREE.Vector3(); this.camera.getWorldDirection(direction); const distance = direction.y < -.05 ? Math.min(80, this.camera.position.y / -direction.y) : 55, width = this.battlefieldHalfWidth() - .7, depth = this.battlefieldHalfDepth(); this.squadTarget.copy(this.camera.position).addScaledVector(direction, distance); this.squadTarget.set(THREE.MathUtils.clamp(this.squadTarget.x, -width, width), 0, THREE.MathUtils.clamp(this.squadTarget.z, -depth, depth)); this.squadMode = 'move'; this.squadMarker.position.copy(this.squadTarget).setY(2.8); this.squadMarker.visible = true; this.status = '小队：向标记位置进攻'; this.statusUntil = performance.now() / 1000 + 1.8
  }
  private orderSquadFollow() {
    if (this.dead) return; this.squadMode = 'autonomous'; this.squadMarker.visible = false; this.status = '小队：恢复自主作战'; this.statusUntil = performance.now() / 1000 + 1.8
  }
  private playerDeathScene() {
    const token = ++this.deathSceneToken, startedAt = performance.now(), origin = this.camera.position.clone(), startRotation = this.camera.quaternion.clone(), source = this.lastDamageSource?.clone(), roll = (Math.random() < .5 ? -1 : 1) * (.42 + Math.random() * .28)
    this.downedFreeLook = false; this.weapon.visible = false; this.events.downed(this.kills, this.deaths, this.lastDamageCause, this.lastDamageAmount)
    const animate = () => {
      if (token !== this.deathSceneToken || !this.dead || this.matchOver) return
      const t = Math.min((performance.now() - startedAt) / 4200, 1), fall = THREE.MathUtils.smoothstep(t, 0, .28); this.camera.position.copy(origin); this.camera.position.y = THREE.MathUtils.lerp(origin.y, this.terrainHeight(origin.x, origin.z) + .34, fall)
      if (this.downedFreeLook) this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ')
      else { this.camera.quaternion.copy(startRotation); if (source && t > .3) { const replay = THREE.MathUtils.smoothstep(t, .3, .58), targetRotation = new THREE.Quaternion(); this.camera.lookAt(source.clone().setY(Math.max(source.y, 1))); targetRotation.copy(this.camera.quaternion); this.camera.quaternion.copy(startRotation).slerp(targetRotation, replay); this.camera.rotation.z += roll * (1 - replay) } else this.camera.rotation.z += roll * fall }
      if (t < 1) requestAnimationFrame(animate)
    }
    animate()
  }
  private noteDeath(position: THREE.Vector3, team: Team) {
    const now = performance.now() / 1000; this.deathHeat.push({ position: position.clone().setY(0), team, at: now }); this.deathHeat = this.deathHeat.filter(item => now - item.at < 25).slice(-50)
  }
  private hurtPlayer(amount: number, source?: THREE.Vector3, cause = '枪弹伤害') {
    if (this.dead) return
    if (this.playerTank) { const tank = this.playerTank, direction = source ? tank.root.position.clone().sub(source).normalize() : new THREE.Vector3(0, 0, -1).applyQuaternion(tank.root.quaternion), impact = tank.root.position.clone().addScaledVector(direction, -1.15).setY(tank.root.position.y + 1.05), penetration = cause.includes('主炮') || cause.includes('坦克炮') ? 65 : cause.includes('反坦克') ? 48 : undefined; this.logCombat('crew_protected', { vehicle: tank.name, cause, incomingDamage: Math.round(amount), result: penetration ? '装甲穿透计算' : amount < 60 ? '装甲阻挡' : '爆炸冲击车体' }); this.damageTank(tank, amount, false, impact, penetration, direction, cause, source); return }
    const dealt = Math.min(this.hp, Math.max(0, Math.round(amount))), distance = source ? Math.round(source.distanceTo(this.camera.position)) : 0
    if (source && cause === '枪弹伤害') { const vehicles = [...this.planes.filter(item => item.alive && item.team === 'enemy'), ...this.tanks.filter(item => item.alive && item.team === 'enemy'), ...this.transports.filter(item => item.alive && item.team === 'enemy')], attacker = vehicles.sort((a, b) => a.root.position.distanceToSquared(source) - b.root.position.distanceToSquared(source))[0]; if (attacker && attacker.root.position.distanceToSquared(source) < 8 ** 2) cause = `${attacker.name} · ${'speed' in attacker ? '航空机枪扫射' : '同轴/车载机枪'}` }
    this.logCombat('player_damage', { cause, damage: dealt, hpBefore: this.hp, distance, vehicle: this.playerTransport?.name ?? this.playerPlane?.name ?? null, source: source ? [Number(source.x.toFixed(2)), Number(source.y.toFixed(2)), Number(source.z.toFixed(2))] : null })
    this.lastDamageCause = `${cause}${source ? ` · ${distance} 米` : ''}`; this.lastDamageAmount = dealt; this.lastDamageSource = source?.clone(); this.interruptBandage(); this.clearBuildAction('建造被打断'); this.lastDamageAt = performance.now() / 1000; this.hp = Math.max(0, this.hp - dealt); this.events.health(this.hp); this.audio.hurt(THREE.MathUtils.clamp(amount / 55, .35, 1))
    if (source) { const sourceAngle = Math.atan2(source.x - this.camera.position.x, source.z - this.camera.position.z), forwardAngle = this.yaw + Math.PI, relative = Math.atan2(Math.sin(sourceAngle - forwardAngle), Math.cos(sourceAngle - forwardAngle)); this.events.damageDirection(-relative, THREE.MathUtils.clamp(.42 + amount / 90, .5, 1)) }
    if (!this.hp && this.playerTransport) { if (!this.playerTransportPassenger) this.playerTransport.playerDriven = false; this.playerTransport = undefined; this.playerTransportPassenger = false; this.playerTransportSeat = -1; this.weapon.visible = true; this.events.vehicle(false, 0, false) }
    if (!this.hp && this.playerPlane) { this.playerPlane.playerDriven = false; this.playerPlane = undefined; this.weapon.visible = true; this.events.vehicle(false, 0, false) }
    if (!this.hp && this.parachuting) { this.parachuting = false; if (this.parachute) { this.disposeGroup(this.parachute); this.parachute = undefined } }
    if (!this.hp && this.playerEmplacement) { this.playerEmplacement.occupied = false; this.playerEmplacement = undefined; this.weapon.visible = true; this.events.vehicle(false, 0, false) }
    if (!this.hp) { this.reloadToken++; this.loading = false; this.noteDeath(this.camera.position, 'ally'); this.clearGrenadeCook(); this.clearSupplyAction(); if (this.playerMortar) { this.playerMortar.occupied = false; this.playerMortar = undefined; this.mortarMarker.visible = false } if (this.playerMG) { this.playerMG.occupied = false; this.playerMG = undefined } this.dead = true; this.playerReviver = undefined; this.playerReviveStartedAt = 0; this.giveUpStartedAt = 0; this.playerDeathScene() }
  }
  private updatePlayerDowned(time: number) {
    if (!this.dead) return
    if (this.giveUpStartedAt === Infinity) return
    const givingUp = this.keys.has('Space'); if (givingUp && !this.giveUpStartedAt) this.giveUpStartedAt = time; if (!givingUp) this.giveUpStartedAt = 0
    if (!this.playerReviver?.alive) this.playerReviver = this.bots.filter(bot => bot.alive && bot.team === 'ally' && bot.role === 'medic' && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting).sort((a, b) => a.root.position.distanceToSquared(this.camera.position) - b.root.position.distanceToSquared(this.camera.position))[0]
    const medic = this.playerReviver, close = Boolean(medic && medic.root.position.distanceToSquared(this.camera.position) < 1.7 ** 2)
    if (close && !this.playerReviveStartedAt) this.playerReviveStartedAt = time; if (!close) this.playerReviveStartedAt = 0
    const reviveProgress = this.playerReviveStartedAt ? THREE.MathUtils.clamp((time - this.playerReviveStartedAt) / 2.6, 0, 1) : 0, giveUpProgress = this.giveUpStartedAt ? THREE.MathUtils.clamp((time - this.giveUpStartedAt) / 1.8, 0, 1) : 0
    this.events.downedState(medic ? `${medic.name}${close ? '正在救治' : '正在赶来'}` : '附近没有医疗兵', reviveProgress, giveUpProgress)
    if (reviveProgress >= 1) { this.dead = false; this.hp = 55; this.deathSceneToken++; this.playerReviver = undefined; this.playerReviveStartedAt = 0; this.giveUpStartedAt = 0; this.camera.position.y = this.terrainHeight(this.camera.position.x, this.camera.position.z) + 1.72; this.pitch = -.08; this.resetCameraView(); this.weapon.visible = true; this.events.health(this.hp, false); this.events.revived(); return }
    if (giveUpProgress < 1) return
    this.deaths++; this.tickets[0] = Math.max(0, this.tickets[0] - 1); this.playerReviver = undefined; this.giveUpStartedAt = Infinity; this.events.death(this.kills, this.deaths, this.lastDamageCause, this.lastDamageAmount)
  }
  private soundAt(position: THREE.Vector3) { const distance = position.distanceTo(this.camera.position); return { volume: THREE.MathUtils.clamp(1 - distance / 85, .08, .85), pan: THREE.MathUtils.clamp((position.x - this.camera.position.x) / 24, -1, 1) } }
  private particle(position: THREE.Vector3, velocity: THREE.Vector3, color: number, size: number, life: number, gravity = 0, grow = 0, opacity = 1) {
    if (this.particles.length >= this.fxPool.maxParticles) {
      const oldest = this.particles.shift()!
      if (oldest.pooled) this.fxPool.releaseParticle(this.scene, oldest as never)
      else { this.scene.remove(oldest.mesh); (oldest.mesh as THREE.Mesh).geometry.dispose(); this.disposeMaterial(oldest.mesh.material as THREE.Material) }
    }
    const item = this.fxPool.acquireParticle(this.scene, position, velocity, color, size, life, gravity, grow, opacity)
    this.particles.push(item)
  }
  private impactFx(position: THREE.Vector3, blood = false) {
    if (blood) {
      for (let i = 0; i < 6; i++) this.particle(position, new THREE.Vector3((Math.random() - .5) * 3, Math.random() * 2.2, (Math.random() - .5) * 3), 0x6f1714, .07 + Math.random() * .08, .45 + Math.random() * .25, 5)
      const decal = new THREE.Mesh(new THREE.CircleGeometry(.24 + Math.random() * .2, 10), new THREE.MeshBasicMaterial({ color: 0x491311, transparent: true, opacity: .72, depthWrite: false })); decal.rotation.x = -Math.PI / 2; decal.rotation.z = Math.random() * Math.PI; decal.position.set(position.x, .025, position.z); this.scene.add(decal); this.particles.push({ mesh: decal, velocity: new THREE.Vector3(), age: 0, life: 18, gravity: 0, grow: .006, baseOpacity: .72, pooled: false }); return
    }
    for (let i = 0; i < 4; i++) this.particle(position, new THREE.Vector3((Math.random() - .5) * 2.2, .8 + Math.random() * 2.3, (Math.random() - .5) * 2.2), i < 2 ? 0xffc56d : 0x625744, i < 2 ? .035 : .07, .28 + Math.random() * .35, 5)
  }
  private ejectCasing() {
    const isSidearm = this.activeLoadout().id === 'sidearm' || this.activeLoadout().weapon.includes('快慢机')
    if (this.casings.length >= this.fxPool.maxCasings) {
      const old = this.casings.shift()!
      if (old.pooled) this.fxPool.releaseCasing(this.scene, old as never)
      else { this.scene.remove(old.mesh); old.mesh.geometry.dispose(); this.disposeMaterial(old.mesh.material as THREE.Material) }
    }
    const casing = this.fxPool.acquireCasing(this.scene, isSidearm)
    const right = this.tmpV3A.set(1, 0, 0).applyQuaternion(this.camera.quaternion), up = this.tmpV3B.set(0, 1, 0), forward = this.tmpV3C; this.camera.getWorldDirection(forward)
    casing.mesh.position.copy(this.camera.position).addScaledVector(right, .28).addScaledVector(up, -.08).addScaledVector(forward, .25)
    casing.mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
    casing.velocity.set(right.x, right.y, right.z).multiplyScalar(1 + Math.random() * 1.4).addScaledVector(up, 1.6 + Math.random()).addScaledVector(forward, (Math.random() - .5) * .5)
    casing.angular.set((Math.random() - .5) * 24, (Math.random() - .5) * 24, (Math.random() - .5) * 24)
    this.casings.push(casing)
  }
  private updateCasings(dt: number) {
    for (let i = this.casings.length - 1; i >= 0; i--) {
      const casing = this.casings[i]; casing.age += dt
      if (casing.age >= 4) {
        this.casings.splice(i, 1)
        if (casing.pooled) this.fxPool.releaseCasing(this.scene, casing as never)
        else { this.scene.remove(casing.mesh); casing.mesh.geometry.dispose(); this.disposeMaterial(casing.mesh.material as THREE.Material) }
        continue
      }
      casing.velocity.y -= 9.8 * dt; casing.mesh.position.addScaledVector(casing.velocity, dt); casing.mesh.rotation.x += casing.angular.x * dt; casing.mesh.rotation.y += casing.angular.y * dt; casing.mesh.rotation.z += casing.angular.z * dt
      if (casing.mesh.position.y > .035) continue
      casing.mesh.position.y = .035
      if (!casing.bounced) { casing.bounced = true; casing.velocity.y = Math.abs(casing.velocity.y) * .28; casing.velocity.x *= .55; casing.velocity.z *= .55; casing.angular.multiplyScalar(.55); continue }
      casing.velocity.y = 0; const drag = Math.exp(-8 * dt); casing.velocity.x *= drag; casing.velocity.z *= drag; casing.angular.multiplyScalar(drag)
    }
  }
  private blastCorpses(center: THREE.Vector3, radius: number, power: number) { for (const corpse of this.corpses) { const offset = corpse.bot.root.position.clone().sub(center), distance = offset.length(); if (distance >= radius) continue; offset.y = Math.max(.25, offset.y + .5); offset.normalize(); const force = power * (1 - distance / radius); corpse.velocity.addScaledVector(offset, force); corpse.velocity.y += force * .55; corpse.angular.add(new THREE.Vector3((Math.random() - .5) * force * 2, (Math.random() - .5) * force, (Math.random() - .5) * force * 2)); corpse.settled = false } }
  private updateCorpses(dt: number) {
    for (let index = this.corpses.length - 1; index >= 0; index--) {
      const corpse = this.corpses[index], bot = corpse.bot
      if (bot.alive || !bot.root.visible) { this.corpses.splice(index, 1); continue }
      if (corpse.settled) continue
      corpse.velocity.y -= 9.8 * dt; this.moveWithCollision(bot.root.position, corpse.velocity.x * dt, corpse.velocity.z * dt, .3); bot.root.position.y += corpse.velocity.y * dt; bot.root.rotation.x += corpse.angular.x * dt; bot.root.rotation.y += corpse.angular.y * dt; bot.root.rotation.z += corpse.angular.z * dt
      const drag = Math.exp(-1.8 * dt); corpse.velocity.x *= drag; corpse.velocity.z *= drag; corpse.angular.multiplyScalar(Math.exp(-2.8 * dt))
      if (bot.root.position.y > corpse.floor) continue
      bot.root.position.y = corpse.floor; if (corpse.velocity.y < -1.4) { corpse.velocity.y *= -.2; corpse.velocity.x *= .72; corpse.velocity.z *= .72; corpse.angular.multiplyScalar(.68); for (let dust = 0; dust < 2; dust++) this.particle(bot.root.position.clone().setY(.06), new THREE.Vector3((Math.random() - .5) * .8, .25 + Math.random() * .45, (Math.random() - .5) * .8), 0x665b48, .05, .35, 1.4) } else corpse.velocity.y = 0
      if (corpse.velocity.lengthSq() < .025 && corpse.angular.lengthSq() < .035) corpse.settled = true
    }
  }
  private updateParticles(dt: number) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i]
      particle.age += dt
      if (particle.age >= particle.life) {
        this.particles.splice(i, 1)
        if (particle.pooled) this.fxPool.releaseParticle(this.scene, particle as never)
        else { this.scene.remove(particle.mesh); (particle.mesh as THREE.Mesh).geometry.dispose(); this.disposeMaterial(particle.mesh.material as THREE.Material) }
        continue
      }
      particle.velocity.y -= particle.gravity * dt
      particle.mesh.position.addScaledVector(particle.velocity, dt)
      if (particle.grow) particle.mesh.scale.addScalar(particle.grow * dt)
      const material = particle.mesh.material as THREE.MeshBasicMaterial
      material.opacity = Math.max(0, (1 - particle.age / particle.life) * (particle.baseOpacity ?? 1))
    }
  }
  private tracer(start: THREE.Vector3, end: THREE.Vector3, color: number) {
    this.fxPool.spawnTracer(this.scene, start, end, color)
  }
  private coverHit(start: THREE.Vector3, end: THREE.Vector3) {
    const direction = this.tmpV3A.copy(end).sub(start), distance = direction.length()
    if (!distance) return undefined
    this.ray.set(start, direction.multiplyScalar(1 / distance)); this.ray.far = distance
    const hit = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0])
    this.ray.far = Infinity
    return hit && hit.distance < distance - .08 ? hit : undefined
  }
  private cycleBolt() { const at = performance.now(), token = this.reloadToken, run = () => { if (token !== this.reloadToken) return; const t = Math.min((performance.now() - at) / 430, 1), lift = THREE.MathUtils.smoothstep(t, .02, .24) * (1 - THREE.MathUtils.smoothstep(t, .72, .96)), pull = THREE.MathUtils.smoothstep(t, .18, .46) * (1 - THREE.MathUtils.smoothstep(t, .56, .86)); this.bolt.position.z = -.4 + pull * .25; this.bolt.rotation.z = lift * 1.05; if (t < 1) requestAnimationFrame(run); else this.audio.click(1050, .06) }; run() }
  private reload() {
    const weapon = this.activeLoadout(), size = weapon.magazine
    if (this.buildAction || this.bandagingUntil || this.supplyAction || this.playerTank || this.playerMortar || this.playerMG || this.loading || this.mag === size || !this.reserve) return
    this.loading = true; const token = ++this.reloadToken, at = performance.now(), duration = weapon.reload * 1000, magazine = this.weaponMagazine, magazinePosition = magazine?.position.clone(), magazineRotation = magazine?.rotation.clone(), boltAction = weapon.kind === 'bolt' && !magazine; let beat = -1
    this.audio.click(520, .07); this.events.ammo(this.mag, this.reserve, true)
    const run = () => {
      if (token !== this.reloadToken) return
      const t = Math.min((performance.now() - at) / duration, 1), arc = Math.sin(t * Math.PI), tilt = boltAction ? .42 : magazine ? .24 : .18
      this.weapon.position.set(.32, -.27 - arc * (boltAction ? .3 : .46), -.65); this.weapon.rotation.set(arc * (boltAction ? -.08 : .12), 0, -arc * tilt)
      if (boltAction) { const open = THREE.MathUtils.smoothstep(t, .04, .18) * (1 - THREE.MathUtils.smoothstep(t, .8, .96)); this.bolt.rotation.z = open * 1.05; this.bolt.position.z = -.4 + open * .24; const rounds = Math.max(1, Math.min(size - this.mag, this.reserve)), nextBeat = Math.min(rounds - 1, Math.floor(THREE.MathUtils.clamp((t - .2) / .52, 0, .999) * rounds)); if (t > .2 && t < .75 && nextBeat !== beat) { beat = nextBeat; this.audio.click(720 + beat * 45, .035) } }
      if (magazine && magazinePosition && magazineRotation) { const out = THREE.MathUtils.smoothstep(t, .1, .32), incoming = THREE.MathUtils.smoothstep(t, .48, .72), direction = weapon.id === 'support' ? 1 : -1; magazine.position.copy(magazinePosition); magazine.position.y += direction * (.3 * out - .3 * incoming); magazine.position.x += (out - incoming) * .08; magazine.rotation.copy(magazineRotation); magazine.rotation.z += direction * (out - incoming) * .22; magazine.visible = !(t > .34 && t < .48); if (t > .72) this.bolt.position.z = -.4 + Math.sin((t - .72) / .28 * Math.PI) * .18 }
      if (t < 1) { requestAnimationFrame(run); return }
      const count = Math.min(size - this.mag, this.reserve); this.mag += count; this.reserve -= count; this.loading = false; this.weapon.position.set(.32, -.27, -.65); this.weapon.rotation.set(0, 0, 0); this.bolt.position.set(.1, .1, -.4); this.bolt.rotation.set(0, 0, 0); if (magazine && magazinePosition && magazineRotation) { magazine.position.copy(magazinePosition); magazine.rotation.copy(magazineRotation); magazine.visible = true } this.audio.click(820, .08); this.events.ammo(this.mag, this.reserve, false)
    }
    run()
  }
  private notePlayerKill() { const now = performance.now() / 1000; this.multiKills = now - this.lastPlayerKillAt <= 6 ? this.multiKills + 1 : 1; this.lastPlayerKillAt = now; const label = this.multiKills === 2 ? '双杀' : this.multiKills === 3 ? '三杀' : this.multiKills === 4 ? '四杀' : this.multiKills >= 5 ? '灭队' : ''; if (label) this.events.achievement(label, this.multiKills) }
  private kill(bot: Bot, headshot = false, impulse?: THREE.Vector3) { this.down(bot, impulse, headshot); this.events.kill(++this.kills, '日军步兵', headshot); this.notePlayerKill(); this.events.combatKill('你', 'ally', bot.name, bot.team, headshot) }
  private down(bot: Bot, impulse = new THREE.Vector3(), headshot = false, killer?: Bot) {
    bot.riding = undefined
    if (!bot.alive) return
    if (bot.drivingTank) this.dismountTankDriver(bot.drivingTank)
    if (bot.drivingTransport) this.dismountTransportDriver(bot.drivingTransport)
    if (bot.piloting) { bot.piloting.pilot = undefined; bot.piloting.abandoned = true; bot.piloting = undefined; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); bot.weapon.visible = true }
    if (bot.chuting) { const index = this.bailedPilots.findIndex(pilot => pilot.bot === bot); if (index >= 0) { const pilot = this.bailedPilots[index]; pilot.chute.removeFromParent(); this.disposeGroup(pilot.chute); this.bailedPilots.splice(index, 1) } bot.chuting = false }
    if (bot.emplacement) { bot.emplacement.operator = undefined; bot.emplacement = undefined }
    if (bot.machineGun) { bot.machineGun.operator = undefined; bot.machineGun = undefined }
    if (bot.mortarRig) { this.disposeGroup(bot.mortarRig.root); bot.mortarRig = undefined; bot.mortarRigUntil = 0 }
    const time = performance.now() / 1000, side = Math.random() < .5 ? -1 : 1, fallForward = Math.random() < .56
    if (bot.reviveTarget) { bot.reviveTarget.reviver = undefined; bot.reviveTarget.respawnAt = Math.min(bot.reviveTarget.respawnAt, time + 1.5); bot.reviveTarget = undefined; bot.reviveUntil = 0 }
    const push = impulse.clone(); push.y = 0; const force = THREE.MathUtils.clamp(push.length(), .8, headshot ? 5.5 : 4.2); if (push.lengthSq() < .01) push.set((Math.random() - .5) * .35, 0, bot.team === 'ally' ? -.35 : .35); push.normalize()
    bot.deathToken++; bot.alive = false; this.noteDeath(bot.root.position, bot.team); if (bot.squadTag) bot.squadTag.visible = false; bot.deaths++; this.tickets[bot.team === 'ally' ? 0 : 1] = Math.max(0, this.tickets[bot.team === 'ally' ? 0 : 1] - 1); bot.reviveAt = time + .8; bot.respawnAt = time + 1.5; this.impactFx(bot.root.position.clone().add(new THREE.Vector3(0, headshot ? 2.12 : 1.45, 0)), true); if (killer) this.events.combatKill(killer.name, killer.team, bot.name, bot.team, headshot)
    bot.pose = 'stand'; bot.root.scale.set(1, 1, 1); bot.torso.position.y = 0; bot.torso.rotation.x = 0; bot.root.rotation.x = fallForward ? side * .18 : side * .9; bot.root.rotation.z = fallForward ? side * .82 : side * .28; bot.head.rotation.set(headshot ? 1.15 : .55, side * .28, side * .5); bot.arms[0].rotation.set(.28, 0, -side * .85); bot.arms[1].rotation.set(-1.7, 0, side * .7); bot.legs[0].rotation.x = .8; bot.legs[1].rotation.x = -.58; bot.weapon.rotation.set(.85, side * .28, side * .5); bot.weapon.position.set(side * .28, -.3, .2)
    this.corpses = this.corpses.filter(corpse => corpse.bot !== bot); this.corpses.push({ bot, velocity: push.multiplyScalar(force * (headshot ? 1.25 : 1)).setY(.75 + force * .35 + (headshot ? 1.1 : 0)), angular: new THREE.Vector3((Math.random() - .5) * 4.5, side * (1.2 + Math.random() * 2.8), (Math.random() - .5) * 4.5), floor: this.terrainHeight(bot.root.position.x, bot.root.position.z) - .27, settled: false })
  }
  private wreckVehicle(root: THREE.Group, halfX: number, halfZ: number) {
    const material = new THREE.MeshStandardMaterial({ color: 0x1e1c18, roughness: .92, metalness: .12 })
    root.userData.wreckMaterial = material; root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.userData.liveMaterial = child.material; child.material = material })
    const collider = { minX: root.position.x - halfX, maxX: root.position.x + halfX, minZ: root.position.z - halfZ, maxZ: root.position.z + halfZ }; this.colliders.push(collider); this.vehicleColliders.push(collider); return collider
  }
  private restoreVehicle(root: THREE.Group, collider?: Collider) {
    if (collider) { const worldIndex = this.colliders.indexOf(collider); if (worldIndex >= 0) this.colliders.splice(worldIndex, 1); const vehicleIndex = this.vehicleColliders.indexOf(collider); if (vehicleIndex >= 0) this.vehicleColliders.splice(vehicleIndex, 1) }
    root.traverse(child => { if (!(child instanceof THREE.Mesh) || !child.userData.liveMaterial) return; child.material = child.userData.liveMaterial as THREE.Material | THREE.Material[]; delete child.userData.liveMaterial }); (root.userData.wreckMaterial as THREE.Material | undefined)?.dispose(); delete root.userData.wreckMaterial
  }
  private updateVehicleWreck(root: THREE.Group, time: number, nextSmoke: number) { if (time < nextSmoke) return nextSmoke; const origin = root.position.clone().add(new THREE.Vector3((Math.random() - .5) * .8, 1.2 + Math.random() * .8, (Math.random() - .5) * 1.4)); this.particle(origin, new THREE.Vector3((Math.random() - .5) * .35, .65 + Math.random() * .65, (Math.random() - .5) * .35), Math.random() < .18 ? 0xb24b24 : 0x252724, .22 + Math.random() * .22, 1.4 + Math.random(), -.08, 1.1, .42); return time + .12 }
  private damageTank(tank: Tank, damage: number, playerOwned: boolean, impact?: THREE.Vector3, shellPen?: number, shotDirection?: THREE.Vector3, cause?: string, source?: THREE.Vector3) {
    if (!tank.alive) return
    if (cause) { tank.lastDamageCause = cause; tank.lastDamageSource = source?.clone() }
    tank.lastDamageAt = performance.now() / 1000
    const armorPen = shellPen, reportArmor = playerOwned || this.playerTank === tank
    let zone = '侧面装甲', multiplier = 1, armor = tank.armor.side, normal = new THREE.Vector3(1, 0, 0)
    if (impact) {
      const local = tank.root.worldToLocal(impact.clone()), horizontal = Math.abs(local.x) > Math.abs(local.z), height = impact.y - tank.root.position.y
      if (height > 1.65) { zone = '炮塔'; armor = tank.armor.turret; normal.set(horizontal ? Math.sign(local.x) : 0, 0, horizontal ? 0 : Math.sign(local.z)); multiplier = 1.18 }
      else if (horizontal && height < .82) { zone = '履带'; armor = tank.armor.side; normal.set(Math.sign(local.x), 0, 0); multiplier = .82 }
      else if (horizontal) { zone = '侧面装甲'; armor = tank.armor.side; normal.set(Math.sign(local.x), 0, 0) }
      else if (local.z < 0) { zone = '正面装甲'; armor = tank.armor.front; normal.set(0, 0, -1); multiplier = .74 }
      else { zone = '发动机舱'; armor = tank.armor.rear; normal.set(0, 0, 1); multiplier = 1.42 }
      if (armorPen) {
        const localDirection = (shotDirection ?? this.ray.ray.direction).clone().normalize().transformDirection(tank.root.matrixWorld.clone().invert()), incidence = Math.max(.34, Math.abs(localDirection.dot(normal))), effective = Math.round(armor / incidence), penetrated = armorPen * (.88 + Math.random() * .24) > effective
        if (!penetrated) { if (shellPen) tank.hp -= damage * .05; if (reportArmor) { this.status = `${zone} · 未穿透（等效 ${effective}mm）`; this.statusUntil = performance.now() / 1000 + 1.8 } if (playerOwned) this.events.hit(false); const sound = this.soundAt(impact); this.audio.ricochet(sound.volume, sound.pan); for (let index = 0; index < 8; index++) this.particle(impact, new THREE.Vector3((Math.random() - .5) * 5, 1 + Math.random() * 4, (Math.random() - .5) * 5), 0xffb45d, .045, .22, 6); return }
        multiplier = shellPen ? .8 + Math.random() * .45 : 1; if (reportArmor) { this.status = `${zone} · 穿透（等效 ${effective}mm）`; this.statusUntil = performance.now() / 1000 + 1.8 }
        const moduleRoll = Math.random(); if (shellPen && moduleRoll < .38) this.damageRandomTankCrew(tank, playerOwned); else if (shellPen && moduleRoll < .56 && (zone === '侧面装甲' || zone === '发动机舱')) { tank.engine = 0; if (reportArmor) this.status += ' · 发动机损毁' } else if (shellPen && moduleRoll < .68 && zone !== '正面装甲') { damage += 280; if (reportArmor) this.status += ' · 弹药殉爆'; if (Math.random() < .3) damage += tank.hp } else if (!shellPen && Math.random() < .3) this.damageRandomTankCrew(tank, playerOwned)
      }
      if (!armorPen && damage < 60) {
        if (playerOwned) { this.status = `${zone} · 跳弹（轻武器无法击穿 ${armor}mm 装甲）`; this.statusUntil = performance.now() / 1000 + 1.8; this.events.hit(false) }
        const sound = this.soundAt(impact); this.audio.ricochet(sound.volume, sound.pan); for (let index = 0; index < 5; index++) this.particle(impact, new THREE.Vector3((Math.random() - .5) * 3, .6 + Math.random() * 2.4, (Math.random() - .5) * 3), 0xffb45d, .035, .2, 5)
        return
      }
      if (zone === '履带') tank.tracks = Math.max(0, tank.tracks - damage * .55)
      if (zone === '发动机舱') tank.engine = Math.max(0, tank.engine - damage * .5)
      if (zone === '炮塔') tank.turretHealth = Math.max(0, tank.turretHealth - damage * .42)
      if (!armorPen && damage > 120 && (zone === '侧面装甲' || zone === '炮塔') && Math.random() < .3) this.damageRandomTankCrew(tank, playerOwned)
    }
    if (!armorPen && damage < 60) return
    tank.hp -= damage * multiplier
    if (this.playerTank === tank) this.logCombat('vehicle_damage', { vehicle: tank.name, cause: cause ?? tank.lastDamageCause ?? '未知攻击', damage: Math.round(damage * multiplier), hp: Math.max(0, Math.round(tank.hp)), zone })
    if (playerOwned && impact) { const disabled = zone === '履带' && !tank.tracks ? ' · 履带摧毁' : zone === '发动机舱' && !tank.engine ? ' · 发动机熄火' : zone === '炮塔' && !tank.turretHealth ? ' · 炮塔瘫痪' : tank.crew < tank.crewCapacity ? ` · 乘员 ${tank.crew}/${tank.crewCapacity}` : ''; if (!armorPen) this.status = `${zone} · ${multiplier < .8 ? '未完全击穿' : multiplier > 1.2 ? '弱点击穿' : '有效命中'}`; this.status += disabled; this.statusUntil = performance.now() / 1000 + 1.8 }
    const killed = tank.hp <= 0; if (playerOwned) this.events.hit(killed, false, Math.min(damage * multiplier, Math.max(0, tank.hp + damage * multiplier))); if (!killed) return; this.dismountTankDriver(tank, false, true); tank.alive = false; tank.respawnAt = performance.now() / 1000 + 20; this.tickets[tank.team === 'ally' ? 0 : 1] = Math.max(0, this.tickets[tank.team === 'ally' ? 0 : 1] - 5); tank.root.rotation.x += (Math.random() - .5) * .15; tank.root.rotation.z = tank.team === 'ally' ? .14 : -.14; tank.wreckCollider = this.wreckVehicle(tank.root, 1.45, 2.35); this.explosionFx(tank.root.position.clone().setY(1)); if (playerOwned && tank.team === 'enemy') { this.events.kill(++this.kills, tank.name); this.notePlayerKill() } if (this.playerTank === tank) { tank.playerDriven = false; this.playerTank = undefined; this.weapon.visible = true; this.events.vehicle(false, 0, false); this.hurtPlayer(999, tank.lastDamageSource ?? tank.root.position, tank.lastDamageCause ?? `${tank.name} · 车体爆炸`) }
  }
  private damageTransport(transport: Transport, damage: number, playerOwned: boolean) {
    if (!transport.alive) return; transport.lastDamageAt = performance.now() / 1000; const armoredDamage = damage < 40 ? Math.max(1, damage * .45) : damage * .85, dealt = Math.min(transport.hp, armoredDamage); transport.hp -= armoredDamage; const killed = transport.hp <= 0; if (playerOwned) this.events.hit(killed, false, dealt); if (!killed) return
    this.dismountTransportDriver(transport, true); transport.alive = false; transport.respawnAt = performance.now() / 1000 + 28; this.tickets[transport.team === 'ally' ? 0 : 1] = Math.max(0, this.tickets[transport.team === 'ally' ? 0 : 1] - 3); transport.root.rotation.x += (Math.random() - .5) * .12; transport.root.rotation.z = transport.team === 'ally' ? .22 : -.22; transport.wreckCollider = this.wreckVehicle(transport.root, 1.3, 2.55); this.explosionFx(transport.root.position.clone().setY(1)); if (playerOwned && transport.team === 'enemy') { this.events.kill(++this.kills, '日军运兵车'); this.notePlayerKill() } if (this.playerTransport === transport) { const passenger = this.playerTransportPassenger; transport.playerDriven = false; this.playerTransport = undefined; this.playerTransportPassenger = false; this.playerTransportSeat = -1; this.weapon.visible = true; this.events.vehicle(false, 0, false); this.events.loadout(this.activeLoadout()); this.camera.position.copy(transport.root.position).add(new THREE.Vector3(2.2, 1.72, 0).applyQuaternion(transport.root.quaternion)); this.hurtPlayer(passenger ? 85 : 999, transport.root.position) }
  }
  private damageEmplacement(emplacement: Emplacement, damage: number, playerOwned: boolean) {
    if (!emplacement.alive) return; const dealt = Math.min(emplacement.hp, damage); emplacement.hp -= damage; const killed = emplacement.hp <= 0; if (playerOwned) this.events.hit(killed, false, dealt); if (!killed) return; if (emplacement.operator) { emplacement.operator.emplacement = undefined; emplacement.operator = undefined } emplacement.alive = false; emplacement.occupied = false; emplacement.respawnAt = performance.now() / 1000 + 24; emplacement.root.rotation.z = emplacement.team === 'ally' ? .55 : -.55; this.explosionFx(emplacement.root.position.clone().setY(.8)); if (playerOwned && emplacement.team === 'enemy') { this.events.kill(++this.kills, emplacement.kind === 'aa' ? '日军防空炮' : '日军反坦克炮'); this.notePlayerKill() } if (this.playerEmplacement === emplacement) { this.playerEmplacement = undefined; this.events.emplacementLead(); this.weapon.visible = true; this.events.vehicle(false, 0, false); this.hurtPlayer(999) }
  }
  private createPlaneWreck(plane: Plane, playerOwned: boolean) {
    const copyVisual = (source: THREE.Object3D): THREE.Object3D => {
      const target = source instanceof THREE.Mesh
        ? new THREE.Mesh(source.geometry.clone(), Array.isArray(source.material) ? source.material.map(material => material.clone()) : source.material.clone())
        : new THREE.Group()
      target.position.copy(source.position); target.quaternion.copy(source.quaternion); target.scale.copy(source.scale); target.visible = source.visible; target.castShadow = source.castShadow; target.receiveShadow = source.receiveShadow; target.renderOrder = source.renderOrder; target.layers.mask = source.layers.mask
      source.children.forEach(child => target.add(copyVisual(child)))
      return target
    }
    const root = copyVisual(plane.root) as THREE.Group
    root.visible = true; this.scene.add(root)
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(plane.root.quaternion).multiplyScalar(plane.speed * .6); forward.y = Math.min(forward.y, 2)
    this.planeWrecks.push({ root, velocity: forward, rollVelocity: (Math.random() < .5 ? -1 : 1) * (1.6 + Math.random() * 2.5), state: 'fall', smokeAt: 0, restUntil: 0, team: plane.team, playerOwned, name: plane.name })
  }
  private disposeWreck(wreck: PlaneWreck) { this.scene.remove(wreck.root); wreck.root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; child.geometry.dispose(); const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)) }) }
  private updatePlaneWrecks(dt: number, time: number) {
    for (let index = this.planeWrecks.length - 1; index >= 0; index--) {
      const wreck = this.planeWrecks[index]
      if (wreck.state === 'fall') {
        wreck.velocity.y -= 8.5 * dt; wreck.root.position.addScaledVector(wreck.velocity, dt); wreck.root.rotation.x = THREE.MathUtils.damp(wreck.root.rotation.x, .9, .6, dt); wreck.root.rotation.z += wreck.rollVelocity * dt; wreck.root.rotation.y += wreck.rollVelocity * .06 * dt
        if (time >= wreck.smokeAt) { wreck.smokeAt = time + .055; this.particle(wreck.root.position.clone(), new THREE.Vector3((Math.random() - .5), .5 + Math.random(), (Math.random() - .5)), Math.random() < .28 ? 0xff7a28 : 0x292b28, .24 + Math.random() * .35, 1 + Math.random() * .7, -.05, .8, .34) }
        if (wreck.root.position.y > .55) continue
        wreck.state = 'rest'; wreck.root.position.y = .45; wreck.root.rotation.set((Math.random() - .5) * .3, wreck.root.rotation.y, (Math.random() - .5) * .8); wreck.restUntil = time + 24; wreck.smokeAt = time
        wreck.root.traverse(child => { if (!(child instanceof THREE.Mesh)) return; const materials = Array.isArray(child.material) ? child.material : [child.material]; materials.forEach(material => this.disposeMaterial(material)); child.material = this.mat(0x1d1c19, .95) })
        const center = wreck.root.position.clone().setY(.6), blast = new THREE.Mesh(new THREE.SphereGeometry(.08, 6, 4), this.mat(0x22231f)); blast.position.copy(center); this.scene.add(blast); this.explode({ mesh: blast, velocity: new THREE.Vector3(), detonateAt: time, team: wreck.team, playerOwned: wreck.playerOwned, bomb: true, crash: true, sourceName: wreck.name }); wreck.collider = { minX: center.x - 2.2, maxX: center.x + 2.2, minZ: center.z - 2.2, maxZ: center.z + 2.2 }; this.vehicleColliders.push(wreck.collider)
      } else {
        if (time >= wreck.smokeAt && time < wreck.restUntil - 6) { wreck.smokeAt = time + .16; this.particle(wreck.root.position.clone().add(new THREE.Vector3((Math.random() - .5) * 2, .7, (Math.random() - .5) * 2)), new THREE.Vector3((Math.random() - .5) * .4, .7 + Math.random() * .8, (Math.random() - .5) * .4), 0x30322f, .3 + Math.random() * .25, 1.3 + Math.random(), -.08, .7, .4) }
        if (time < wreck.restUntil) continue; if (wreck.collider) { const colliderIndex = this.vehicleColliders.indexOf(wreck.collider); if (colliderIndex >= 0) this.vehicleColliders.splice(colliderIndex, 1) } this.disposeWreck(wreck); this.planeWrecks.splice(index, 1)
      }
    }
  }
  private bailOutPilot(plane: Plane) {
    if (!plane.alive || plane.playerDriven || plane.abandoned) return
    plane.abandoned = true; plane.nextAttack = performance.now() / 1000
    const bot = plane.pilot, root = bot?.root ?? new THREE.Group(); root.position.copy(plane.root.position).add(new THREE.Vector3(0, -1.2, 0)); if (!bot) { this.scene.add(root); this.box([.38, .72, .28], [0, 0, 0], plane.team === 'ally' ? 0x4f6658 : 0x817447, root); const head = new THREE.Mesh(new THREE.SphereGeometry(.18, 10, 7), this.mat(0xb88968)); head.position.y = .53; head.castShadow = true; root.add(head) }
    if (bot) { plane.pilot = undefined; bot.piloting = undefined; bot.chuting = true; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); bot.weapon.visible = false; bot.suppression = Math.max(bot.suppression, .7) }
    const chute = new THREE.Group(), canopy = new THREE.Mesh(new THREE.SphereGeometry(1.35, 16, 7, 0, Math.PI * 2, 0, Math.PI / 2), this.mat(plane.team === 'ally' ? 0xd8d1b8 : 0xc8c2a8, .96)); canopy.scale.y = .38; canopy.position.y = 2.4; canopy.castShadow = true; chute.add(canopy)
    for (const x of [-.78, .78]) for (const z of [-.5, .5]) { const line = this.box([.018, 2.05, .018], [x * .5, 1.28, z * .5], 0x716958, chute); line.rotation.z = -x * .25; line.rotation.x = z * .22 }
    root.add(chute)
    const velocity = new THREE.Vector3(0, 0, -1).applyQuaternion(plane.root.quaternion).multiplyScalar(plane.speed * .18); velocity.y = -2
    this.bailedPilots.push({ root, chute, team: plane.team, velocity, landedAt: 0, bot })
  }
  private updateBailedPilots(dt: number, time: number) {
    for (let index = this.bailedPilots.length - 1; index >= 0; index--) {
      const pilot = this.bailedPilots[index]
      if (!pilot.landedAt) {
        pilot.velocity.x = THREE.MathUtils.damp(pilot.velocity.x, 0, .7, dt); pilot.velocity.z = THREE.MathUtils.damp(pilot.velocity.z, 0, .7, dt); pilot.velocity.y = THREE.MathUtils.damp(pilot.velocity.y, -3.4, 1.5, dt); pilot.root.position.addScaledVector(pilot.velocity, dt)
        pilot.root.position.x = THREE.MathUtils.clamp(pilot.root.position.x, -72, 72); pilot.root.position.z = THREE.MathUtils.clamp(pilot.root.position.z, -62, 62); pilot.chute.rotation.z = Math.sin(time * 2.4 + index) * .08; pilot.chute.rotation.x = Math.cos(time * 1.8 + index) * .045
        if (pilot.root.position.y > .65) continue
        pilot.root.position.y = pilot.bot ? 0 : .65; pilot.landedAt = time; if (pilot.bot) { pilot.chute.removeFromParent(); this.disposeGroup(pilot.chute); pilot.bot.chuting = false; pilot.bot.weapon.visible = true; pilot.bot.root.scale.set(1, 1, 1); pilot.bot.nextShot = time + 1.2 } else pilot.chute.visible = false
      }
      if (pilot.bot) { this.bailedPilots.splice(index, 1); continue }
      if (time - pilot.landedAt < 10) continue
      this.disposeGroup(pilot.root); this.bailedPilots.splice(index, 1)
    }
  }
  private damagePlane(plane: Plane, damage: number, playerOwned: boolean, cause?: string, source?: THREE.Vector3) {
    if (!cause && this.playerPlane === plane && !playerOwned) { const aircraft = this.planes.filter(item => item.alive && item.team === 'enemy' && item !== plane).sort((a, b) => a.root.position.distanceToSquared(plane.root.position) - b.root.position.distanceToSquared(plane.root.position))[0], gun = this.emplacements.filter(item => item.alive && item.team === 'enemy' && item.kind === 'aa').sort((a, b) => a.root.position.distanceToSquared(plane.root.position) - b.root.position.distanceToSquared(plane.root.position))[0], aircraftDistance = aircraft?.root.position.distanceToSquared(plane.root.position) ?? Infinity, gunDistance = gun?.root.position.distanceToSquared(plane.root.position) ?? Infinity; if (aircraftDistance < gunDistance) { cause = `${aircraft.name} · 航空机枪`; source = aircraft.root.position } else if (gun) { cause = '日军二〇毫米防空炮 · 高射炮弹'; source = gun.root.position } }
    if (!plane.alive) return; if (cause) { plane.lastDamageCause = cause; plane.lastDamageSource = source?.clone() } const dealt = Math.min(plane.hp, damage); plane.hp -= damage; if (plane.hp > 0 && plane.hp < plane.maxHp * .32) this.bailOutPilot(plane); const killed = plane.hp <= 0; if (playerOwned) this.events.hit(killed, false, dealt); if (!killed) return; if (plane.pilot) { const pilot = plane.pilot; plane.pilot = undefined; pilot.piloting = undefined; pilot.root.visible = true; pilot.body.layers.enable(0); pilot.head.layers.enable(0); pilot.weapon.visible = true; this.down(pilot) } this.createPlaneWreck(plane, playerOwned); plane.alive = false; plane.playerDriven = false; plane.root.visible = false; plane.respawnAt = performance.now() / 1000 + 30; this.tickets[plane.team === 'ally' ? 0 : 1] = Math.max(0, this.tickets[plane.team === 'ally' ? 0 : 1] - 4); this.explosionFx(plane.root.position.clone()); if (playerOwned && plane.team === 'enemy') { this.events.kill(++this.kills, plane.name); this.notePlayerKill() } if (this.playerPlane === plane) { this.playerPlane = undefined; this.weapon.visible = true; this.events.vehicle(false, 0, false); this.hurtPlayer(999, plane.lastDamageSource ?? plane.root.position, plane.lastDamageCause ?? `${plane.name} · 机体被摧毁`) }
  }
  private damageStructure(structure: FieldStructure, damage: number) {
    if (structure.destroyed) return
    structure.hp -= damage
    const stage = structure.hp <= 120 ? 2 : structure.hp <= 240 ? 1 : 0
    if (stage > structure.damageStage) { structure.damageStage = stage; structure.roof.rotation.z = stage * .075; structure.roof.position.y = 3.25 - stage * .12; const center = structure.root.position.clone().add(new THREE.Vector3(0, 1.7, 0)); for (let index = 0; index < 5 + stage * 2; index++) this.particle(center.clone().add(new THREE.Vector3((Math.random() - .5) * 3.5, Math.random() * 1.6, (Math.random() - .5) * 3.5)), new THREE.Vector3((Math.random() - .5) * 1.8, .4 + Math.random() * 1.8, (Math.random() - .5) * 1.8), 0x71634f, .08 + Math.random() * .12, .7 + Math.random() * .5, 3.5) }
    if (structure.hp > 0) return
    structure.destroyed = true
    const remove = <T>(items: T[], item: T) => { const index = items.indexOf(item); if (index >= 0) items.splice(index, 1) }
    remove(this.colliders, structure.collider)
    remove(this.vehicleColliders, structure.collider)
    remove(this.coverMeshes, structure.roof)
    structure.root.children.forEach(child => { if (child !== structure.body && child !== structure.roof) child.visible = false })
    structure.body.position.y = .32
    structure.body.scale.y = .24
    structure.roof.position.set(.55, .78, .2)
    structure.roof.rotation.set(.22, Math.PI / 4, .82)
    structure.roof.scale.set(1, .3, 1.15)
    for (let index = 0; index < 6; index++) { const rubble = this.box([.45 + Math.random() * .85, .22 + Math.random() * .38, .45 + Math.random() * .9], [(Math.random() - .5) * 3.6, .12 + Math.random() * .18, (Math.random() - .5) * 4], index % 3 ? 0x655a48 : 0x3f3a31, structure.root); rubble.rotation.set(Math.random() * .25, Math.random() * Math.PI, Math.random() * .25); structure.rubble.push(rubble); this.coverMeshes.push(rubble) }
    const center = structure.root.position.clone().add(new THREE.Vector3(0, 1.1, 0))
    for (let index = 0; index < 14; index++) {
      const debris = new THREE.Mesh(new THREE.BoxGeometry(.18 + Math.random() * .42, .12 + Math.random() * .25, .2 + Math.random() * .5), this.mat(index % 3 ? 0x6d624f : 0x403b31))
      debris.position.copy(center)
      debris.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      this.scene.add(debris)
      this.particles.push({ mesh: debris, velocity: new THREE.Vector3((Math.random() - .5) * 7, 2 + Math.random() * 6, (Math.random() - .5) * 7), age: 0, life: 3 + Math.random() * 2, gravity: 8, grow: 0 })
    }
    this.explosionFx(center)
  }
  private damageUrbanBuilding(building: UrbanBuilding, damage: number) {
    if (building.destroyed) return
    building.hp -= damage
    const stage = building.hp <= 300 ? 2 : building.hp <= 600 ? 1 : 0
    if (stage > building.damageStage) { building.damageStage = stage; building.body.rotation.z = (building.root.position.x < 0 ? -1 : 1) * stage * .006; building.details.forEach((detail, index) => { if (index % (stage === 1 ? 4 : 2) === 0) detail.visible = false }); const center = building.root.position.clone().setY(building.height * .55); for (let index = 0; index < 8 + stage * 3; index++) this.particle(center.clone().add(new THREE.Vector3((Math.random() - .5) * 5, (Math.random() - .5) * building.height * .7, (Math.random() - .5) * 7)), new THREE.Vector3((Math.random() - .5) * 2.5, .5 + Math.random() * 2, (Math.random() - .5) * 2.5), 0x62594d, .1 + Math.random() * .16, .9 + Math.random() * .7, 4) }
    if (building.hp > 0) return
    building.destroyed = true
    const bounds = building.colliders.reduce((area, collider) => ({ minX: Math.min(area.minX, collider.minX), maxX: Math.max(area.maxX, collider.maxX), minZ: Math.min(area.minZ, collider.minZ), maxZ: Math.max(area.maxZ, collider.maxZ) }), { minX: Infinity, maxX: -Infinity, minZ: Infinity, maxZ: -Infinity })
    for (const collider of building.colliders) { const infantryIndex = this.colliders.indexOf(collider); if (infantryIndex >= 0) this.colliders.splice(infantryIndex, 1); const vehicleIndex = this.vehicleColliders.indexOf(collider); if (vehicleIndex >= 0) this.vehicleColliders.splice(vehicleIndex, 1) }
    if (building.ladder) { const index = this.ladders.indexOf(building.ladder); if (index >= 0) this.ladders.splice(index, 1); if (this.playerLadder === building.ladder) this.playerLadder = undefined }
    if (building.platform) { const index = this.platforms.indexOf(building.platform); if (index >= 0) this.platforms.splice(index, 1) }
    building.details.forEach((detail, index) => { const remains = index % 5 === 1 || index % 7 === 0; detail.visible = remains; if (detail instanceof THREE.Mesh && !remains) { const coverIndex = this.coverMeshes.indexOf(detail); if (coverIndex >= 0) this.coverMeshes.splice(coverIndex, 1) } })
    building.body.position.y = Math.max(1.25, building.height * .2); building.body.scale.y = .34; building.body.rotation.z = (Math.random() < .5 ? -1 : 1) * .075
    for (let index = 0; index < 18; index++) { const edge = index % 3 ? 1 : .45, rubble = this.box([.65 + Math.random() * 1.8, .3 + Math.random() * .75, .65 + Math.random() * 1.8], [(Math.random() - .5) * 8 * edge, .18 + Math.random() * .42, (Math.random() - .5) * 9 * edge], index % 4 ? 0x5d554b : 0x373632, building.root); rubble.rotation.set(Math.random() * .35, Math.random() * Math.PI, Math.random() * .35); building.rubble.push(rubble); this.coverMeshes.push(rubble) }
    if (Number.isFinite(bounds.minX)) { const centerX = (bounds.minX + bounds.maxX) / 2, centerZ = (bounds.minZ + bounds.maxZ) / 2, halfX = (bounds.maxX - bounds.minX) * .28, halfZ = (bounds.maxZ - bounds.minZ) * .3, ruinCollider = { minX: centerX - halfX, maxX: centerX + halfX, minZ: centerZ - halfZ, maxZ: centerZ + halfZ }; this.colliders.push(ruinCollider); this.vehicleColliders.push(ruinCollider); building.colliders = [ruinCollider] }
    this.markCollidersDirty()
    const center = building.root.position.clone().setY(2)
    for (let index = 0; index < 24; index++) { const debris = new THREE.Mesh(new THREE.BoxGeometry(.25 + Math.random() * .8, .18 + Math.random() * .5, .25 + Math.random() * .8), this.mat(index % 4 ? 0x60584d : 0x393734)); debris.position.copy(center).add(new THREE.Vector3((Math.random() - .5) * 5, Math.random() * 4, (Math.random() - .5) * 7)); debris.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI); this.scene.add(debris); this.particles.push({ mesh: debris, velocity: new THREE.Vector3((Math.random() - .5) * 6, 2 + Math.random() * 7, (Math.random() - .5) * 6), age: 0, life: 4 + Math.random() * 2, gravity: 8, grow: 0 }) }
    this.explosionFx(center)
  }
  private damageDepot(depot: Depot, damage: number, playerOwned: boolean) { if (depot.destroyed) return; depot.hp -= damage; if (playerOwned) this.events.hit(depot.hp <= 0); if (depot.hp > 0) return; depot.destroyed = true; depot.root.rotation.z = .12; (depot.hitbox.material as THREE.MeshStandardMaterial).color.setHex(0x302e29); this.explosionFx(depot.position.clone().setY(1)); const attacker = this.campaign.attacker ?? 'ally', ticketIndex = attacker === 'ally' ? 0 : 1; this.tickets[ticketIndex] = Math.min(999, this.tickets[ticketIndex] + 35); this.status = `补给库 ${depot.id} 已摧毁`; this.statusUntil = performance.now() / 1000 + 2.2; if (this.depots.every(item => item.destroyed)) this.finish(attacker) }
  private finish(winner: Team) { if (this.matchOver) return; this.matchOver = true; this.active = false; document.exitPointerLock(); this.events.end(winner === 'ally', this.kills, this.deaths, this.kills * 100 + this.objectiveScore) }
  private reinforceTank(tank: Tank, time: number) {
    this.dismountTankDriver(tank); this.restoreVehicle(tank.root, tank.wreckCollider); tank.wreckCollider = undefined; const index = this.tanks.filter(candidate => candidate.team === tank.team).indexOf(tank), laneX = (index - 1) * 3.6; tank.nextSmoke = time; tank.lastDamageAt = -99; tank.ramSlowUntil = 0; tank.stalledFor = 0; tank.reverseUntil = 0
    const spawnInset = this.isSonghuOperation() ? 22 : 8, spawnZ = (tank.team === 'ally' ? 1 : -1) * (this.mapBounds.halfDepth - spawnInset); tank.alive = true; tank.playerDriven = false; tank.hp = tank.maxHp; tank.tracks = 100; tank.engine = 100; tank.turretHealth = 100; tank.crew = tank.crewCapacity; tank.nextShot = time + 3 + Math.random() * 3; tank.nextMg = time + 1; tank.mgBurst = 0; tank.mgPauseUntil = 0; tank.root.visible = true; tank.root.rotation.set(0, tank.team === 'ally' ? 0 : Math.PI, 0); tank.recoilToken++; tank.barrel.position.z = -2.15; tank.turret.position.z = 0; tank.turret.rotation.set(0, 0, 0); tank.pitch.rotation.set(0, 0, 0); tank.root.position.set(laneX, this.terrainHeight(laneX, spawnZ), spawnZ); this.vehicleNavigation.delete(tank.root)
    for (const crew of tank.crewMen) { crew.alive = true; crew.hp = 65; crew.respawnAt = 0; if (crew.mesh) crew.mesh.visible = true }
  }
  private reinforceTransport(transport: Transport, time: number) {
    this.dismountTransportDriver(transport); this.restoreVehicle(transport.root, transport.wreckCollider); transport.wreckCollider = undefined; transport.mission = 'pickup'; transport.waitUntil = time + 10; transport.nextDrop = time; transport.stalledFor = 0; transport.reverseUntil = 0; transport.nextSmoke = time; transport.lastDamageAt = -99
    const spawnX = transport.team === 'ally' ? 5 : -5, spawnZ = (transport.team === 'ally' ? 1 : -1) * (this.mapBounds.halfDepth - 4); transport.alive = true; transport.playerDriven = false; transport.hp = transport.maxHp; transport.root.visible = true; transport.root.rotation.set(0, transport.team === 'ally' ? Math.PI : 0, 0); transport.root.position.set(spawnX, this.terrainHeight(spawnX, spawnZ), spawnZ)
  }
  private reinforcePlane(plane: Plane, time: number) { const index = this.planes.filter(candidate => candidate.team === plane.team).indexOf(plane); plane.alive = true; plane.playerDriven = false; plane.abandoned = false; plane.hp = plane.maxHp; plane.speed = 30; plane.throttle = .8; plane.stallWarned = false; plane.bombs = plane.maxBombs; plane.nextBomb = time; plane.bombRearmAt = 0; plane.root.visible = true; plane.angle = (plane.team === 'ally' ? 0 : Math.PI / 2) + index * Math.PI; plane.nextAttack = time + 5 + Math.random() * 5; plane.nextShot = time; plane.root.rotation.set(0, 0, 0); this.seatPlanePilot(plane) }
  private spawnIsSafe(position: THREE.Vector3, team: Team) {
    const now = performance.now() / 1000, enemiesClose = this.bots.some(bot => bot.alive && !bot.piloting && !bot.chuting && bot.team !== team && bot.root.position.distanceToSquared(position) < 16 ** 2), recentDeaths = this.deathHeat.filter(item => item.team === team && now - item.at < 25 && item.position.distanceToSquared(position) < 24 ** 2).length
    return !enemiesClose && recentDeaths < 3
  }
  private objectiveDeployable(objective: Objective, team: Team) {
    if (objective.owner !== team || objective.capturing || !this.spawnIsSafe(objective.position, team)) return false
    if (this.bots.some(bot => bot.alive && !bot.piloting && !bot.chuting && bot.team !== team && bot.root.position.distanceToSquared(objective.position) < objective.radius ** 2)) return false
    return !this.tanks.some(tank => tank.alive && tank.team !== team && tank.root.position.distanceToSquared(objective.position) < objective.radius ** 2) && !this.transports.some(transport => transport.alive && transport.team !== team && transport.root.position.distanceToSquared(objective.position) < objective.radius ** 2)
  }
  private randomDeploymentPosition(center: THREE.Vector3, radius: number) {
    for (let attempt = 0; attempt < 8; attempt++) {
      const angle = Math.random() * Math.PI * 2, distance = Math.sqrt(Math.random()) * Math.max(1.5, radius * .78), candidate = this.openPlacement(center.x + Math.cos(angle) * distance, center.z + Math.sin(angle) * distance, .42)
      if (this.spawnIsSafe(candidate, 'ally')) return candidate
    }
    return this.openPlacement(center.x, center.z, .42)
  }
  private vehicleDeployable(root: THREE.Object3D, team: Team, lastDamageAt: number) {
    const now = performance.now() / 1000
    if (now - lastDamageAt < 8) return false
    if (this.bots.some(bot => bot.alive && bot.team !== team && !bot.piloting && !bot.chuting && bot.root.position.distanceToSquared(root.position) < 24 ** 2)) return false
    return !this.tanks.some(tank => tank.alive && tank.team !== team && tank.root.position.distanceToSquared(root.position) < 32 ** 2) && !this.transports.some(transport => transport.alive && transport.team !== team && transport.root.position.distanceToSquared(root.position) < 28 ** 2)
  }
  private reinforcementSpawn(team: Team, index: number) {
    const enemies = this.bots.filter(bot => bot.alive && bot.team !== team), now = performance.now() / 1000
    const baseZ = this.mapBounds.halfDepth - 10, base = new THREE.Vector3(0, 0, team === 'ally' ? baseZ : -baseZ), frontline = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives().sort((a, b) => base.distanceToSquared(a.position) - base.distanceToSquared(b.position))[0]?.position : this.objectives.filter(point => point.owner !== team).sort((a, b) => base.distanceToSquared(a.position) - base.distanceToSquared(b.position))[0]?.position
    const candidates = [base, ...this.objectives.filter(point => point.owner === team).map(point => point.position)].map(position => {
      const enemyDistances = enemies.map(enemy => enemy.root.position.distanceTo(position)), nearest = Math.min(...enemyDistances, 999), nearby = enemyDistances.filter(distance => distance < 45).length, heat = this.deathHeat.filter(item => item.team === team && now - item.at < 25 && item.position.distanceTo(position) < 24).length
      return { position, score: Math.random() * 25 - (frontline?.distanceTo(position) ?? 0) * .85 - nearby * 16 - heat * 32 - (nearest < 16 ? 280 : nearest < 30 ? 100 : 0) + (position === base ? 14 : 0) }
    })
    const safe = candidates.sort((a, b) => b.score - a.score)[0]?.position
    const lane = index % 6, row = Math.floor(index / 6), direction = team === 'ally' ? 1 : -1
    if (safe) return new THREE.Vector3(safe.x + (lane - 2.5) * 1.15, 0, safe.z + direction * (3 + row * 1.8))
    return new THREE.Vector3(-5.5 + lane * 2.2, 0, direction * (baseZ + row * 2.4))
  }
  private reinforce(bot: Bot, time: number) {
    this.corpses = this.corpses.filter(corpse => corpse.bot !== bot)
    this.botMotion.delete(bot)
    bot.deathToken++
    bot.nextRocket = time + 5 + Math.random() * 7
    bot.nextMortar = time + 4 + Math.random() * 5
    if (bot.reviveTarget) bot.reviveTarget.reviver = undefined
    if (bot.drivingTank) { bot.drivingTank.driver = undefined; bot.drivingTank = undefined }
    if (bot.drivingTransport) { bot.drivingTransport.driver = undefined; bot.drivingTransport = undefined }
    if (bot.piloting) { bot.piloting.pilot = undefined; bot.piloting = undefined }
    if (bot.emplacement) { bot.emplacement.operator = undefined; bot.emplacement = undefined }
    if (bot.machineGun) { bot.machineGun.operator = undefined; bot.machineGun = undefined }
    if (bot.mortarRig) { this.disposeGroup(bot.mortarRig.root); bot.mortarRig = undefined; bot.mortarRigUntil = 0 }
    const botLoadout = (bot.team === 'ally' ? this.battleLoadouts : loadouts).find(item => item.id === bot.role)
    bot.alive = true; bot.hp = 100; bot.chuting = false; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); if (bot.squadTag) bot.squadTag.visible = true; bot.mag = this.botWeapon(bot.role, bot.team).magazine; bot.reloadUntil = 0; bot.bandages = 1; bot.bandageUntil = 0; bot.coverTarget = undefined; bot.coverUntil = 0; bot.nextCoverAt = time + 2; bot.reviveTarget = undefined; bot.reviveUntil = 0; bot.reviver = undefined; bot.lastSeen = undefined; bot.lastSeenUntil = 0; bot.shotAt = -10; bot.meleeAt = -10; bot.nextMelee = time + 1; bot.throwAt = -10; bot.grenades = 1; bot.antiTankGrenades = bot.role === 'support' ? 2 : botLoadout?.antiTankGrenades ?? 0; bot.smokes = 1; bot.suppression = 0; bot.nextWireDamage = 0; bot.smokeAt = time + 12 + Math.random() * 10; bot.nextAidAt = time + 7 + Math.random() * 5; bot.reviveAt = 0; bot.respawnAt = 0; bot.nextGrenade = time + 7 + Math.random() * 10; bot.nextShot = time + 1 + Math.random() * 2; bot.strafe *= -1
    bot.stuckFor = 0; bot.navPath = undefined; bot.navTarget = undefined; bot.navRefreshAt = 0; bot.vaultFrom = undefined; bot.vaultTo = undefined; bot.vaultStartedAt = undefined; bot.vaultUntil = undefined
    bot.pose = 'stand'; bot.root.rotation.set(0, bot.team === 'ally' ? Math.PI : 0, 0); bot.root.scale.set(1, 1, 1); bot.torso.position.y = 0; bot.torso.rotation.x = 0; bot.head.rotation.set(0, 0, 0); bot.body.rotation.set(0, 0, 0); bot.legs.forEach(leg => leg.rotation.set(0, 0, 0)); bot.arms.forEach(arm => arm.rotation.set(-.9, 0, 0))
    const index = this.bots.filter(candidate => candidate.team === bot.team).indexOf(bot), lane = index % 6, transport = this.transports.find(candidate => candidate.team === bot.team && candidate.alive && this.vehicleDeployable(candidate.root, candidate.team, candidate.lastDamageAt)), spawn = this.reinforcementSpawn(bot.team, index)
    bot.riding = transport && Math.abs(transport.root.position.z) >= 43 && !(this.playerTransport === transport && this.playerTransportPassenger) && this.bots.filter(candidate => candidate.riding === transport).length < 6 ? transport : undefined
    if (transport && Math.abs(transport.root.position.z) < 43) { const x = transport.root.position.x + (lane % 3 - 1) * .8, z = transport.root.position.z + (bot.team === 'ally' ? 2.8 : -2.8) + Math.floor(lane / 3) * (bot.team === 'ally' ? .8 : -.8); bot.root.position.set(x, this.terrainHeight(x, z), z) }
    else { bot.root.position.copy(spawn); bot.root.position.y = this.terrainHeight(spawn.x, spawn.z) }
    bot.weapon.position.set(0, 0, 0); bot.weapon.rotation.set(0, 0, 0); bot.muzzle.visible = false
  }
  private deployNpcMortar(bot: Bot, target: THREE.Vector3, time: number) {
    const direction = target.clone().sub(bot.root.position).setY(0).normalize()
    const mesh = buildMortar({ box: (s, p, c, parent) => this.box(s, p, c, parent), mat: (c, r) => this.mat(c, r) })
    mesh.root.position.copy(bot.root.position).addScaledVector(direction, .8)
    mesh.root.rotation.y = Math.atan2(direction.x, direction.z) + Math.PI
    this.scene.add(mesh.root)
    bot.mortarRig = { root: mesh.root, tube: mesh.tube }; bot.mortarRigUntil = time + 14 + Math.random() * 10
  }
  private fireNpcMortar(bot: Bot, time: number) {
    if (bot.role !== 'mortar' || bot.riding || bot.suppression > 1.05 || time < bot.nextMortar) return false
    const candidates = [...this.bots.filter(target => target.alive && !target.drivingTank && !target.drivingTransport && !target.piloting && !target.chuting && target.team !== bot.team).map(target => target.root.position), ...(bot.team === 'enemy' && !this.dead && !this.playerPlane && !this.parachuting ? [this.camera.position] : [])]
      .filter(position => { const distance = bot.root.position.distanceTo(position); return distance >= 24 && distance <= 78 })
    let target = candidates.sort((a, b) => {
      const density = (position: THREE.Vector3) => this.bots.filter(unit => unit.alive && unit.team !== bot.team && unit.root.position.distanceToSquared(position) < 9 ** 2).length
      return density(b) - density(a) || bot.root.position.distanceToSquared(a) - bot.root.position.distanceToSquared(b)
    })[0]
    if (!target) { const point = this.objectives.filter(objective => objective.owner !== bot.team && bot.root.position.distanceTo(objective.position) >= 24 && bot.root.position.distanceTo(objective.position) <= 78).sort((a, b) => bot.root.position.distanceToSquared(a.position) - bot.root.position.distanceToSquared(b.position))[0]; target = point?.position }
    if (!target || this.bots.some(ally => ally.alive && ally.team === bot.team && ally.root.position.distanceToSquared(target) < 10 ** 2)) { bot.nextMortar = time + 1.5; return false }
    if (!bot.mortarRig) this.deployNpcMortar(bot, target, time)
    const impact = target.clone().add(new THREE.Vector3((Math.random() - .5) * 8, 0, (Math.random() - .5) * 8)); impact.y = this.terrainHeight(impact.x, impact.z); const origin = bot.mortarRig!.root.position.clone().add(new THREE.Vector3(0, .78, 0)), distance = origin.distanceTo(impact), flight = THREE.MathUtils.clamp(distance / 19, 1.8, 3.5), velocity = impact.clone().sub(origin).divideScalar(flight); velocity.y = 4.9 * flight
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.05, .065, .28, 8), this.mat(0x303731, .35)); mesh.position.copy(origin); mesh.castShadow = true; this.scene.add(mesh); this.grenadesInWorld.push({ mesh, velocity, detonateAt: time + flight + 1, team: bot.team, playerOwned: false, owner: bot, mortar: true })
    bot.nextMortar = time + 4.2 + Math.random() * 2.3; bot.throwAt = time; bot.nextShot = Math.max(bot.nextShot, time + 1); bot.root.rotation.y = Math.atan2(impact.x - origin.x, impact.z - origin.z) + Math.PI; bot.mortarRig!.tube.rotation.x = .46; setTimeout(() => { if (bot.mortarRig) bot.mortarRig.tube.rotation.x = .62 }, 180); this.audio.shot('bolt', .28); return true
  }
  private fireNpcTransportPassenger(bot: Bot, transport: Transport, weapon: ReturnType<Game['botWeapon']>, time: number) {
    if (bot.reloadUntil) { if (time < bot.reloadUntil) { const phase = 1 - (bot.reloadUntil - time) / weapon.reload, motion = Math.sin(THREE.MathUtils.clamp(phase, 0, 1) * Math.PI); bot.weapon.position.y = -.3 * motion; bot.weapon.rotation.z = -.38 * motion; bot.muzzle.visible = false; return } bot.mag = weapon.magazine; bot.reloadUntil = 0; bot.weapon.position.y = 0; bot.weapon.rotation.z = 0 }
    if (!bot.mag) { bot.reloadUntil = time + weapon.reload * (.95 + Math.random() * .15); return }
    const shotAge = time - bot.shotAt, recoil = shotAge < .18 ? Math.sin(shotAge / .18 * Math.PI) : 0; bot.weapon.position.z = recoil * .12; bot.weapon.rotation.x = recoil * .08; bot.muzzle.visible = shotAge < .055
    const enemies = this.bots.filter(target => target.alive && !target.drivingTank && !target.drivingTransport && !target.piloting && !target.chuting && target.team !== bot.team), playerTarget = bot.team === 'enemy' && !this.dead, targetBot = enemies.sort((a, b) => bot.root.position.distanceToSquared(a.root.position) - bot.root.position.distanceToSquared(b.root.position))[0], botDistance = targetBot ? bot.root.position.distanceToSquared(targetBot.root.position) : Infinity, playerDistance = playerTarget ? bot.root.position.distanceToSquared(this.camera.position) : Infinity, targetingPlayer = playerDistance < botDistance, target = targetingPlayer ? this.camera.position : targetBot?.root.position
    if (!target) return; const distance = bot.root.position.distanceTo(target); if (distance > weapon.range) return; bot.root.rotation.y = Math.atan2(target.x - bot.root.position.x, target.z - bot.root.position.z) + Math.PI; if (time < bot.nextShot) return
    bot.nextShot = time + THREE.MathUtils.lerp(weapon.interval[0], weapon.interval[1], Math.random()) * 1.35; bot.shotAt = time; bot.mag--; const start = bot.muzzle.getWorldPosition(new THREE.Vector3()), end = target.clone().setY(targetingPlayer ? this.camera.position.y : 1.35), accuracy = THREE.MathUtils.clamp((.58 - distance * .011) * weapon.accuracy * (1 - Math.min(.6, bot.suppression * .35)), .06, .62); let hit = Math.random() < accuracy; if (!hit) { end.x += (Math.random() - .5) * 4.5; end.y += (Math.random() - .5) * 2.8 } const shotDistance = start.distanceTo(end); this.ray.set(start, end.clone().sub(start).normalize()); this.ray.far = shotDistance; const obstruction = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0]); this.ray.far = Infinity; if (obstruction) { end.copy(obstruction.point); hit = false } if (this.smokeBlocks(start, end)) hit = false; this.tracer(start, end, bot.team === 'ally' ? 0xffdd83 : 0xff8b68); const sound = this.soundAt(transport.root.position); this.audio.shot(weapon.kind, sound.volume, sound.pan); this.alertBots(bot.team, transport.root.position)
    if (targetBot) targetBot.suppression = Math.min(1.6, targetBot.suppression + weapon.suppression); if (!hit) return; const damage = THREE.MathUtils.lerp(weapon.damage[0], weapon.damage[1], Math.random()) * .85; if (targetingPlayer) { this.hurtPlayer(damage * .36 * this.enemyDamage, start, `${bot.name}的${weapon.kind === 'auto' ? '自动武器' : weapon.kind === 'semi' ? '半自动步枪' : '步枪'}`); if (this.dead) bot.kills++ } else if (targetBot) { targetBot.hp -= damage; if (targetBot.hp <= 0) { bot.kills++; this.down(targetBot, undefined, false, bot) } }
  }
  private botWeapon(role: string, team?: Team) {
    const profiles: Record<string, { range: number; distance: number; interval: [number, number]; damage: [number, number]; accuracy: number; suppression: number; kind: 'bolt' | 'semi' | 'auto'; magazine: number; reload: number }> = {
      rifleman: { range: 38, distance: 20, interval: [1.15, 1.85], damage: [28, 40], accuracy: 1, suppression: .16, kind: 'bolt', magazine: 5, reload: 3.2 },
      assault: { range: 24, distance: 12, interval: [.2, .38], damage: [9, 15], accuracy: .72, suppression: .2, kind: 'auto', magazine: 32, reload: 2.8 },
      support: { range: 36, distance: 22, interval: [.17, .3], damage: [11, 17], accuracy: .82, suppression: .3, kind: 'auto', magazine: 20, reload: 3.2 },
      scout: { range: 54, distance: 34, interval: [1.7, 2.45], damage: [58, 78], accuracy: 1.3, suppression: .12, kind: 'bolt', magazine: 5, reload: 3.4 },
      medic: { range: 34, distance: 18, interval: [1.3, 2], damage: [25, 36], accuracy: .92, suppression: .14, kind: 'bolt', magazine: 5, reload: 3.3 },
      'anti-tank': { range: 23, distance: 14, interval: [.72, 1.12], damage: [17, 25], accuracy: .82, suppression: .13, kind: 'semi', magazine: 10, reload: 2.2 },
      engineer: { range: 31, distance: 18, interval: [1.45, 2.2], damage: [27, 38], accuracy: .9, suppression: .14, kind: 'bolt', magazine: 5, reload: 3.5 },
      mortar: { range: 31, distance: 19, interval: [1.4, 2.15], damage: [27, 38], accuracy: .9, suppression: .14, kind: 'bolt', magazine: 5, reload: 3.5 },
    }
    const profile = profiles[role] ?? { range: 34, distance: 18, interval: [1.2, 1.8] as [number, number], damage: [26, 38] as [number, number], accuracy: 1, suppression: .15, kind: 'bolt' as const, magazine: 5, reload: 3.2 }
    if (team === 'enemy') {
      const japanese = {
        rifleman: { ...profile, interval: [1.1, 1.75] as [number, number], damage: [27, 39] as [number, number], magazine: 5, reload: 3.1 },
        assault: { ...profile, interval: [.21, .4] as [number, number], damage: [8, 14] as [number, number], magazine: 30, reload: 2.6 },
        support: { ...profile, interval: [.18, .31] as [number, number], damage: [10, 16] as [number, number], magazine: 30, reload: 3.2 },
        scout: { ...profile, interval: [1.7, 2.4] as [number, number], damage: [56, 75] as [number, number], magazine: 5, reload: 3.4 },
        medic: { ...profile, interval: [1.2, 1.9] as [number, number], damage: [26, 37] as [number, number], magazine: 5, reload: 3.1 },
        'anti-tank': { ...profile, range: 36, distance: 23, interval: [.95, 1.45] as [number, number], damage: [38, 56] as [number, number], accuracy: 1.05, suppression: .24, kind: 'semi' as const, magazine: 7, reload: 4.2 },
        engineer: { ...profile, interval: [1.35, 2.05] as [number, number], damage: [24, 35] as [number, number], magazine: 5, reload: 3.3 },
        mortar: { ...profile, interval: [1.35, 2.05] as [number, number], damage: [24, 35] as [number, number], magazine: 5, reload: 3.3 },
      }[role]
      if (japanese) return japanese
    }
    if (team !== 'ally' || this.campaign.id !== 'baituan') return profile
    const loadout = this.battleLoadouts.find(item => item.id === role); if (!loadout) return profile
    const cadence = 60 / loadout.rpm; return { ...profile, interval: [cadence * 1.05, cadence * 1.55] as [number, number], damage: [loadout.damage * .38, loadout.damage * .52] as [number, number], kind: loadout.kind, magazine: loadout.magazine, reload: loadout.reload }
  }
  private botThreat(bot: Bot) {
    const positions = this.bots.filter(candidate => candidate.alive && !candidate.drivingTank && !candidate.drivingTransport && !candidate.piloting && !candidate.chuting && candidate.team !== bot.team).map(candidate => candidate.root.position)
    if (bot.team === 'enemy' && !this.dead && !this.playerPlane && !this.parachuting) positions.push(this.camera.position)
    return positions.sort((a, b) => bot.root.position.distanceToSquared(a) - bot.root.position.distanceToSquared(b))[0]
  }
  private botCanSee(bot: Bot, position: THREE.Vector3) {
    return this.positionCanSee(bot.root.position, position)
  }
  private positionCanSee(observer: THREE.Vector3, position: THREE.Vector3) {
    const start = this.tmpV3A.set(observer.x, observer.y + 1.58, observer.z)
    const direction = this.tmpV3B.set(position.x - start.x, position.y - start.y, position.z - start.z)
    const distance = direction.length()
    if (distance < .1 || this.smokeBlocks(start, position)) return false
    direction.multiplyScalar(1 / distance)
    this.ray.set(start, direction); this.ray.far = distance
    const obstruction = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0])
    this.ray.far = Infinity
    return !obstruction || obstruction.distance >= distance - .45
  }
  private alertBots(shooterTeam: Team, position: THREE.Vector3) {
    const time = performance.now() / 1000
    for (const bot of this.bots) { if (!bot.alive || bot.team === shooterTeam || bot.root.position.distanceToSquared(position) > 65 ** 2) continue; bot.lastSeen = position.clone().setY(0); bot.lastSeenUntil = Math.max(bot.lastSeenUntil, time + 3.5) }
  }
  private findBotCover(bot: Bot, threat: THREE.Vector3) {
    let best: THREE.Vector3 | undefined, bestScore = Infinity
    for (const box of this.colliders) {
      const center = new THREE.Vector2((box.minX + box.maxX) / 2, (box.minZ + box.maxZ) / 2), fromThreat = center.clone().sub(new THREE.Vector2(threat.x, threat.z)); if (fromThreat.lengthSq() < .01) continue; fromThreat.normalize()
      const halfX = (box.maxX - box.minX) / 2, halfZ = (box.maxZ - box.minZ) / 2, clearance = Math.abs(fromThreat.x) * halfX + Math.abs(fromThreat.y) * halfZ + .58, tangent = new THREE.Vector2(-fromThreat.y, fromThreat.x), shoulder = Math.min(1.15, Math.max(halfX, halfZ) * .58)
      for (const side of [-1, 0, 1]) {
        const candidate = new THREE.Vector3(center.x + fromThreat.x * clearance + tangent.x * shoulder * side, 0, center.y + fromThreat.y * clearance + tangent.y * shoulder * side), travel = bot.root.position.distanceTo(candidate)
        if (travel < 1.1 || travel > 21 || Math.abs(candidate.x) > this.battlefieldHalfWidth() - .5 || Math.abs(candidate.z) > this.battlefieldHalfDepth() - 1) continue
        if (bot.inSquad && !this.dead && candidate.distanceToSquared(this.camera.position) > 12 ** 2) continue
        if (this.colliders.some(other => other !== box && candidate.x > other.minX - .3 && candidate.x < other.maxX + .3 && candidate.z > other.minZ - .3 && candidate.z < other.maxZ + .3)) continue
        if (this.bots.some(other => other !== bot && other.alive && other.team === bot.team && (other.coverTarget?.distanceToSquared(candidate) ?? other.root.position.distanceToSquared(candidate)) < 2.2 ** 2)) continue
        candidate.y = this.terrainHeight(candidate.x, candidate.z); const firingLane = side && this.positionCanSee(candidate, threat) ? -1.1 : 0, score = travel - Math.min(threat.distanceTo(candidate), 24) * .08 + Math.abs(side) * -.35 + firingLane
        if (score < bestScore) { bestScore = score; best = candidate }
      }
    }
    return best
  }
  private updateMedicRescue(bot: Bot, dt: number, time: number) {
    if (bot.role !== 'medic') return false
    let target = bot.reviveTarget
    if (target && (target.alive || target.team !== bot.team || target.reviver !== bot)) { target = undefined; bot.reviveTarget = undefined; bot.reviveUntil = 0 }
    if (!target && bot.suppression < 1.05) {
      target = this.bots.filter(candidate => !candidate.alive && candidate.team === bot.team && time >= candidate.reviveAt && !candidate.reviver && candidate.root.position.distanceToSquared(bot.root.position) < 22 ** 2).sort((a, b) => a.root.position.distanceToSquared(bot.root.position) - b.root.position.distanceToSquared(bot.root.position))[0]
      if (target) { bot.reviveTarget = target; target.reviver = bot; target.respawnAt = Math.max(target.respawnAt, time + 11); bot.reviveUntil = 0 }
    }
    if (!target) return false
    const dx = target.root.position.x - bot.root.position.x, dz = target.root.position.z - bot.root.position.z, distance = Math.hypot(dx, dz); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; bot.muzzle.visible = false
    if (distance > 1.35) { if (bot.smokes && bot.suppression > .65 && time >= bot.smokeAt) this.throwNpcSmoke(bot, target.root.position, time); this.moveBot(bot, dx, dz, 5.45 * (1 - Math.min(.4, bot.suppression * .22)), dt); this.poseBot(bot, 'stand', dt, Math.sin(time * 11.5 + bot.phase) * .68); bot.weapon.rotation.z = .35; return true }
    if (!bot.reviveUntil) bot.reviveUntil = time + 1.65
    const progress = 1 - (bot.reviveUntil - time) / 1.65, motion = Math.sin(THREE.MathUtils.clamp(progress, 0, 1) * Math.PI * 4); this.poseBot(bot, 'crouch', dt); bot.weapon.position.set(-.2, -.38, .08); bot.weapon.rotation.z = -.7; bot.arms[0].rotation.x = -.3 + motion * .18; bot.arms[1].rotation.x = -.45 - motion * .18
    if (time < bot.reviveUntil) return true
    this.reviveBot(target, time); bot.reviveTarget = undefined; bot.reviveUntil = 0; bot.nextAidAt = Math.max(bot.nextAidAt, time + 5); bot.nextShot = time + .7
    return true
  }
  private updateBots(dt: number, time: number) {
    this.recastNavigation.update(dt)
    for (const team of ['ally', 'enemy'] as const) {
      if (!this.reinforcementWaveAt[team]) this.reinforcementWaveAt[team] = time + 6
      if (time < this.reinforcementWaveAt[team]) continue
      const ticketIndex = team === 'ally' ? 0 : 1
      if (this.tickets[ticketIndex] > 0) for (const bot of this.bots) if (bot.team === team && !bot.alive && time >= bot.respawnAt) this.reinforce(bot, time)
      this.reinforcementWaveAt[team] = time + 6
    }
    const player = this.camera.position
    this.aliveEnemies.length = 0
    this.aliveAllies.length = 0
    for (const b of this.bots) {
      if (!b.alive || b.drivingTank || b.drivingTransport || b.piloting || b.chuting) continue
      if (b.team === 'enemy') this.aliveEnemies.push(b)
      else this.aliveAllies.push(b)
    }
    const enemies = this.aliveEnemies, allies = this.aliveAllies
    for (const bot of this.bots) {
      if (!bot.alive) continue
      if (bot.chuting) continue
      if (this.operationOpeningActive(time)) { bot.nextShot = Math.max(bot.nextShot, this.operationOpeningUntil); bot.nextGrenade = Math.max(bot.nextGrenade, this.operationOpeningUntil); if (bot.team === 'enemy') { this.poseBot(bot, 'stand', dt); continue } }
      if (this.dead && bot === this.playerReviver) { const dx = this.camera.position.x - bot.root.position.x, dz = this.camera.position.z - bot.root.position.z, distance = Math.hypot(dx, dz); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; if (distance > 1.45) { this.moveBot(bot, dx, dz, 4.7, dt); this.poseBot(bot, 'stand', dt, Math.sin(time * 10.5 + bot.phase) * .7) } else { this.poseBot(bot, 'crouch', dt); bot.weapon.position.y = -.35; bot.weapon.rotation.z = -.65 } continue }
      if (this.updateBotVault(bot, time)) continue
      const weapon = this.botWeapon(bot.role, bot.team)
      if (bot.piloting) {
        const plane = bot.piloting
        if (!plane.alive || plane.playerDriven || plane.pilot !== bot) { if (plane.pilot === bot) plane.pilot = undefined; bot.piloting = undefined; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); bot.weapon.visible = true }
        else { bot.root.position.copy(plane.root.position); bot.root.visible = false; bot.body.layers.disable(0); bot.head.layers.disable(0); bot.weapon.visible = false; continue }
      }
      if (bot.drivingTank) {
        const tank = bot.drivingTank
        if (!tank.alive || tank.playerDriven || tank.driver !== bot) { if (tank.driver === bot) tank.driver = undefined; bot.drivingTank = undefined; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0) }
        else { const dx = tank.root.position.x - bot.root.position.x, dz = tank.root.position.z - bot.root.position.z, distance = Math.hypot(dx, dz); if (distance > 1.45) { bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); this.moveBot(bot, dx, dz, 4.3, dt); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; this.poseBot(bot, 'stand', dt, Math.sin(time * 10.5 + bot.phase) * .72); bot.weapon.visible = true } else { bot.root.position.copy(tank.root.position); bot.root.visible = false; bot.body.layers.disable(0); bot.head.layers.disable(0) } continue }
      }
      if (bot.drivingTransport) {
        const transport = bot.drivingTransport
        if (!transport.alive || transport.playerDriven || transport.driver !== bot) { if (transport.driver === bot) transport.driver = undefined; bot.drivingTransport = undefined; bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0) }
        else { const dx = transport.root.position.x - bot.root.position.x, dz = transport.root.position.z - bot.root.position.z, distance = Math.hypot(dx, dz); if (distance > 1.4) { bot.root.visible = true; bot.body.layers.enable(0); bot.head.layers.enable(0); this.moveBot(bot, dx, dz, 4.3, dt); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; this.poseBot(bot, 'stand', dt, Math.sin(time * 10.5 + bot.phase) * .72); bot.weapon.visible = true } else { bot.root.position.copy(transport.root.position); bot.root.visible = false; bot.body.layers.disable(0); bot.head.layers.disable(0) } continue }
      }
      if (bot.emplacement) {
        const gun = bot.emplacement
        if (!gun.alive || gun.occupied || gun.operator !== bot) { if (gun.operator === bot) gun.operator = undefined; bot.emplacement = undefined }
        else {
          const seat = gun.root.position.clone().add(new THREE.Vector3(gun.kind === 'aa' ? .72 : .62, 0, gun.kind === 'aa' ? .45 : .72).applyQuaternion(gun.root.quaternion)), dx = seat.x - bot.root.position.x, dz = seat.z - bot.root.position.z, distance = Math.hypot(dx, dz)
          bot.suppression = Math.max(0, bot.suppression - dt * .35)
          if (distance > .8) { this.moveBot(bot, dx, dz, 2.8, dt); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; this.poseBot(bot, 'stand', dt, Math.sin(time * 8 + bot.phase) * .65); bot.weapon.visible = true; continue }
          bot.root.position.copy(seat); bot.root.rotation.y = gun.root.rotation.y + gun.yaw.rotation.y + Math.PI; this.poseBot(bot, 'crouch', dt); bot.legs[0].rotation.x = -.75; bot.legs[1].rotation.x = -.75; bot.weapon.visible = false; continue
        }
      }
      if (bot.machineGun) {
        const machineGun = bot.machineGun
        if (machineGun.occupied || machineGun.operator !== bot) { if (machineGun.operator === bot) machineGun.operator = undefined; bot.machineGun = undefined }
        else {
          const seat = machineGun.position.clone().add(new THREE.Vector3(0, 0, .78).applyQuaternion(machineGun.root.quaternion)), dx = seat.x - bot.root.position.x, dz = seat.z - bot.root.position.z, distance = Math.hypot(dx, dz)
          if (distance > .7) { this.moveBot(bot, dx, dz, 2.7, dt); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; this.poseBot(bot, 'stand', dt, Math.sin(time * 8 + bot.phase) * .62); bot.weapon.visible = true; continue }
          bot.root.position.copy(seat); bot.root.rotation.y = machineGun.root.rotation.y + machineGun.yaw.rotation.y + Math.PI; this.poseBot(bot, 'crouch', dt); bot.legs[0].rotation.x = -.72; bot.legs[1].rotation.x = -.72; bot.weapon.visible = false; continue
        }
      }
      if (bot.mortarRig) {
        const closeThreat = (bot.team === 'ally' ? enemies : allies).some(enemy => enemy.root.position.distanceToSquared(bot.root.position) < 14 ** 2) || (bot.team === 'enemy' && !this.dead && this.camera.position.distanceToSquared(bot.root.position) < 14 ** 2)
        if (time >= bot.mortarRigUntil || closeThreat || bot.suppression > 1.2) { this.disposeGroup(bot.mortarRig.root); bot.mortarRig = undefined; bot.mortarRigUntil = 0; bot.nextMortar = Math.max(bot.nextMortar, time + 8) }
        else { const seat = bot.mortarRig.root.position.clone().add(new THREE.Vector3(0, 0, .75).applyQuaternion(bot.mortarRig.root.quaternion)); bot.root.position.copy(seat); bot.root.rotation.y = bot.mortarRig.root.rotation.y; this.poseBot(bot, 'crouch', dt); bot.legs[0].rotation.x = -.85; bot.legs[1].rotation.x = -.85; bot.weapon.visible = false; bot.suppression = Math.max(0, bot.suppression - dt * .22); this.fireNpcMortar(bot, time); continue }
      }
      bot.weapon.visible = true
      if (bot.riding) {
        const transport = bot.riding, riders = this.bots.filter(candidate => candidate.alive && candidate.riding === transport), seatIndex = riders.indexOf(bot)
        if (!transport.alive) { bot.riding = undefined; bot.hp -= 90; bot.root.position.copy(transport.root.position).add(new THREE.Vector3((seatIndex % 2 ? 1 : -1) * 1.2, 0, -1)); if (bot.hp <= 0) { this.down(bot); continue } }
        else { const reservedSeat = this.playerTransport === transport && this.playerTransportPassenger && seatIndex >= this.playerTransportSeat ? seatIndex + 1 : seatIndex, seat = new THREE.Vector3((reservedSeat % 2 ? .62 : -.62), 1.72, -.25 - Math.floor(reservedSeat / 2) * .72).applyQuaternion(transport.root.quaternion); bot.root.position.copy(transport.root.position).add(seat); bot.root.rotation.y = transport.root.rotation.y; this.poseBot(bot, 'stand', dt); bot.legs.forEach(leg => leg.rotation.x = -.9); bot.suppression = Math.max(0, bot.suppression - dt * .4); this.fireNpcTransportPassenger(bot, transport, weapon, time); continue }
      }
      bot.suppression = Math.max(0, bot.suppression - dt * .28)
      if (this.updateMedicRescue(bot, dt, time)) continue
      const threat = this.botThreat(bot), nearestAssaultObjective = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives().sort((a, b) => bot.root.position.distanceToSquared(a.position) - bot.root.position.distanceToSquared(b.position))[0] : undefined, nearObjective = !nearestAssaultObjective || bot.root.position.distanceToSquared(nearestAssaultObjective.position) < (nearestAssaultObjective.radius + 7) ** 2, engagementRange = nearObjective ? Math.min(weapon.range, 46) : 11, engaged = Boolean(threat && bot.root.position.distanceToSquared(threat) < engagementRange ** 2), assaultSlot = Math.max(0, (bot.team === 'ally' ? allies : enemies).indexOf(bot)), mustAdvance = Boolean(nearestAssaultObjective && bot.team === this.assaultAttacker() && assaultSlot % 3 !== 2 && bot.root.position.distanceToSquared(nearestAssaultObjective.position) > (nearestAssaultObjective.radius * .82) ** 2), needsCover = !mustAdvance && (engaged || bot.suppression > .5 || bot.hp < 68 || bot.mag <= Math.ceil(weapon.magazine * .35) || Boolean(bot.reloadUntil))
      if (mustAdvance && bot.coverTarget) { bot.coverTarget = undefined; bot.coverUntil = 0 }
      if (!bot.coverTarget && threat && needsCover && time >= bot.nextCoverAt) { bot.coverTarget = this.findBotCover(bot, threat); bot.coverUntil = bot.coverTarget ? time + 3 + Math.random() * 2.5 : 0; bot.nextCoverAt = time + 3.5 + Math.random() * 2 }
      if (bot.coverTarget && time >= bot.coverUntil) bot.coverTarget = undefined
      let holdingCover = false
      if (bot.coverTarget) {
        const dx = bot.coverTarget.x - bot.root.position.x, dz = bot.coverTarget.z - bot.root.position.z, distance = Math.hypot(dx, dz)
        if (distance > .72) { this.moveBot(bot, dx, dz, 5.75 * (1 - Math.min(.35, bot.suppression * .18)), dt); bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI; const step = Math.sin(time * 12 + bot.phase) * .72; this.poseBot(bot, 'stand', dt, step); bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z) + Math.abs(step) * .035; bot.weapon.rotation.z = .18; bot.muzzle.visible = false; continue }
        holdingCover = true; bot.root.position.y = this.terrainHeight(bot.root.position.x, bot.root.position.z); if (!bot.reloadUntil && bot.mag <= Math.ceil(weapon.magazine * .35)) { bot.mag = 0; bot.reloadUntil = time + weapon.reload * (.95 + Math.random() * .15) }
      }
      if (bot.bandageUntil) {
        if (time >= bot.bandageUntil) { bot.bandageUntil = 0; bot.bandages--; bot.hp = Math.min(100, bot.hp + 45); bot.weapon.position.set(0, 0, 0); bot.weapon.rotation.set(0, 0, 0); bot.nextShot = time + .45 }
        else { const progress = 1 - (bot.bandageUntil - time) / 2.2, motion = Math.sin(THREE.MathUtils.clamp(progress, 0, 1) * Math.PI * 5); this.poseBot(bot, 'crouch', dt); bot.weapon.position.set(-.18, -.42 + motion * .05, .12); bot.weapon.rotation.set(.35, 0, -.65); bot.arms[0].rotation.x = -.25 + motion * .2; bot.arms[1].rotation.x = -.35 - motion * .2; bot.muzzle.visible = false; continue }
      }
      const nearbyThreat = (bot.team === 'ally' ? enemies : allies).some(candidate => candidate.root.position.distanceToSquared(bot.root.position) < 12 ** 2) || (bot.team === 'enemy' && !this.dead && this.camera.position.distanceToSquared(bot.root.position) < 12 ** 2)
      if (bot.hp < 50 && bot.bandages && bot.suppression < .8 && (!nearbyThreat || holdingCover)) { bot.bandageUntil = time + 2.2; bot.nextShot = Math.max(bot.nextShot, bot.bandageUntil + .35); continue }
      if (bot.role === 'medic' && time >= bot.nextAidAt && this.bots.some(candidate => candidate.alive && candidate.team === bot.team && candidate.hp < 72 && candidate.root.position.distanceToSquared(bot.root.position) < 13 ** 2)) { this.placeMedkit(bot.root.position.clone().add(new THREE.Vector3((Math.random() - .5) * .8, 0, (Math.random() - .5) * .8)), bot.team, time); bot.nextAidAt = time + 30; bot.throwAt = time; bot.nextShot = Math.max(bot.nextShot, time + .8) }
      if (this.fireNpcMortar(bot, time)) continue
      if (this.updateBotAntiTankGrenade(bot, dt, time)) continue
      const entangled = this.fortifications.some(fortification => fortification.kind === 'wire' && fortification.team !== bot.team && fortification.center.distanceToSquared(bot.root.position) < 2.3 ** 2)
      if (entangled && time >= bot.nextWireDamage) { bot.nextWireDamage = time + .8; bot.hp -= 4; if (bot.hp <= 0) { this.kill(bot); continue } }
      const opponents = bot.team === 'ally' ? enemies : allies
      const playerVisible = bot.team === 'enemy' && !this.dead && !this.playerPlane && !this.parachuting && this.botCanSee(bot, player)
      let targetBot: Bot | undefined, targetTransport: Transport | undefined, targetDepot: Depot | undefined, targetPos = playerVisible ? player : bot.root.position, targetingPlayer = playerVisible, best = targetingPlayer ? bot.root.position.distanceToSquared(player) : Infinity
      {
        // Only evaluate LOS for the nearest few candidates — full N×M raycasts dominate CPU.
        let nearCount = 0
        const nearBots: Bot[] = []
        const nearDist: number[] = []
        for (const candidate of opponents) {
          const d = bot.root.position.distanceToSquared(candidate.root.position)
          if (nearCount < 5) { nearBots[nearCount] = candidate; nearDist[nearCount] = d; nearCount++; continue }
          let worst = 0
          for (let i = 1; i < 5; i++) if (nearDist[i] > nearDist[worst]) worst = i
          if (d < nearDist[worst]) { nearBots[worst] = candidate; nearDist[worst] = d }
        }
        for (let i = 0; i < nearCount; i++) {
          const candidate = nearBots[i], d = nearDist[i]
          if (d >= best) continue
          const aim = this.tmpV3C.set(candidate.root.position.x, candidate.root.position.y + 1.35, candidate.root.position.z)
          if (this.botCanSee(bot, aim)) { best = d; targetBot = candidate; targetPos = candidate.root.position; targetingPlayer = false }
        }
        for (const candidate of this.transports) {
          if (!candidate.alive || candidate.team === bot.team) continue
          const d = bot.root.position.distanceToSquared(candidate.root.position)
          if (d >= best) continue
          const aim = this.tmpV3C.set(candidate.root.position.x, 1, candidate.root.position.z)
          if (this.botCanSee(bot, aim)) { best = d; targetBot = undefined; targetTransport = candidate; targetPos = candidate.root.position; targetingPlayer = false }
        }
      }
      const assaultObjectives = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives() : []
      const teamRoster = bot.team === 'ally' ? allies : enemies, teamSlot = Math.max(0, teamRoster.indexOf(bot))
      const assignedObjective = assaultObjectives.length ? assaultObjectives[teamSlot % assaultObjectives.length] : undefined
      let objectiveAdvance = false
      if (!bot.inSquad && assignedObjective && best > 11 ** 2) {
        const formationSlot = Math.floor(teamSlot / assaultObjectives.length), ring = Math.floor(formationSlot / 8), attacker = bot.team === this.assaultAttacker(), angle = formationSlot % 8 / 8 * Math.PI * 2 + (attacker ? 0 : Math.PI / 8), radiusScale = attacker ? ring % 2 ? .72 : .42 : ring % 2 ? .88 : .64, anchorRadius = Math.max(2.4, assignedObjective.radius * radiusScale), approachDistance = bot.root.position.distanceTo(assignedObjective.position)
        const anchor = assignedObjective.position.clone().add(new THREE.Vector3(Math.cos(angle) * anchorRadius, 0, Math.sin(angle) * anchorRadius))
        if (this.isSonghuOperation() && approachDistance > 22) anchor.copy(this.songhuTacticalAnchor(bot, assignedObjective, formationSlot, anchor))
        targetBot = undefined; targetTransport = undefined; targetingPlayer = false; targetPos = anchor; objectiveAdvance = true
      }
      if (targetBot || targetTransport || targetingPlayer) { bot.lastSeen = targetPos.clone(); bot.lastSeenUntil = time + 4.2 }
      let desiredDistance = objectiveAdvance ? .75 : weapon.distance
      if (!targetBot && !targetTransport && !targetingPlayer && !objectiveAdvance) {
        if (bot.inSquad && this.squadMode === 'move') { targetBot = undefined; targetTransport = undefined; targetingPlayer = false; targetPos = this.squadTarget; desiredDistance = 6 }
        else if (bot.lastSeen && time < bot.lastSeenUntil) { targetPos = bot.lastSeen; desiredDistance = 1.2 }
        else { bot.lastSeen = undefined; targetDepot = this.campaign.rule === 'demolition' && bot.team === this.campaign.attacker ? this.depots.filter(depot => !depot.destroyed).sort((a, b) => bot.root.position.distanceToSquared(a.position) - bot.root.position.distanceToSquared(b.position))[0] : undefined; const strategic = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives().sort((a, b) => bot.root.position.distanceToSquared(a.position) - bot.root.position.distanceToSquared(b.position))[0] : this.objectives.filter(o => o.owner !== bot.team).sort((a, b) => bot.root.position.distanceToSquared(a.position) - bot.root.position.distanceToSquared(b.position))[0]; if (targetDepot) { targetBot = undefined; targetTransport = undefined; targetPos = targetDepot.position; targetingPlayer = false } else if (strategic) { targetBot = undefined; targetTransport = undefined; targetPos = strategic.position; targetingPlayer = false } }
      }
      const hasCombatTarget = Boolean(targetBot || targetTransport || targetingPlayer || targetDepot)
      const supportMate = !bot.inSquad && hasCombatTarget ? teamRoster.filter(candidate => candidate !== bot).sort((a, b) => bot.root.position.distanceToSquared(a.root.position) - bot.root.position.distanceToSquared(b.root.position))[0] : undefined, isolated = Boolean(supportMate && bot.root.position.distanceToSquared(supportMate.root.position) > 12 ** 2)
      const moveTarget = isolated ? supportMate!.root.position : targetPos, moveStop = isolated ? 7.5 : hasCombatTarget ? desiredDistance * .72 : desiredDistance
      const dx = targetPos.x - bot.root.position.x, dz = targetPos.z - bot.root.position.z, distance = Math.hypot(dx, dz), moveDx = moveTarget.x - bot.root.position.x, moveDz = moveTarget.z - bot.root.position.z, moveDistance = Math.hypot(moveDx, moveDz), moving = !holdingCover && moveDistance > moveStop, prone = bot.suppression > 1.28 && !bot.coverTarget && !bot.riding
      const pose: BotPose = prone ? 'prone' : holdingCover || bot.suppression > .65 ? 'crouch' : 'stand'
      bot.root.rotation.y = Math.atan2(dx, dz) + Math.PI
      if (bot.smokes && bot.suppression > 1 && time >= bot.smokeAt && distance > 5 && distance < 34) this.throwNpcSmoke(bot, targetPos, time)
      if ((targetBot || targetTransport || targetingPlayer || targetDepot) && bot.grenades && distance > 10 && distance < 28 && time >= bot.nextGrenade) this.throwNpcGrenade(bot, targetPos, time)
      if (moving) {
        const speed = (bot.team === 'ally' ? 5.25 : 5.05) * (entangled ? .32 : 1) * (1 - Math.min(.55, bot.suppression * .32)) * (prone ? .28 : pose === 'crouch' ? .72 : 1)
        this.moveBot(bot, moveDx, moveDz, speed, dt)
      } else if (distance > 8) {
        this.moveWithCollision(bot.root.position, Math.cos(bot.root.rotation.y) * bot.strafe * .9 * dt, -Math.sin(bot.root.rotation.y) * bot.strafe * .9 * dt, .34)
      }
      bot.root.position.x = THREE.MathUtils.clamp(bot.root.position.x, -this.battlefieldHalfWidth(), this.battlefieldHalfWidth())
      const step = moving && pose === 'stand' ? Math.sin(time * 10.5 + bot.phase) * .55 : moving && pose === 'crouch' ? Math.sin(time * 8.5 + bot.phase) * .28 : 0
      const terrainY = this.terrainHeight(bot.root.position.x, bot.root.position.z)
      bot.root.position.y = terrainY + (pose === 'prone' ? .08 : moving ? Math.abs(Math.sin(time * 7 + bot.phase)) * .025 : 0)
      this.poseBot(bot, pose, dt, step)
      const shotAge = time - bot.shotAt, recoil = shotAge < .18 ? Math.sin(shotAge / .18 * Math.PI) : 0, throwAge = time - bot.throwAt, throwMotion = throwAge < .65 ? Math.sin(throwAge / .65 * Math.PI) : 0, meleeAge = time - bot.meleeAt, meleeMotion = meleeAge < .48 ? Math.sin(meleeAge / .48 * Math.PI) : 0; bot.weapon.position.z = recoil * .12 - meleeMotion * .62; bot.weapon.position.y = meleeMotion * .08; bot.weapon.rotation.x = recoil * .08 - meleeMotion * .52; bot.weapon.rotation.z = throwMotion * -.75
      if (meleeMotion > 0) { bot.arms[0].rotation.x = -.9 - meleeMotion * .72; bot.arms[1].rotation.x = -.9 - meleeMotion * .72 }
      bot.muzzle.visible = shotAge < .055
      const meleeTarget = distance < 2.6 && (targetBot || (targetingPlayer && !this.playerTank && !this.playerPlane && !this.playerEmplacement && !this.playerMortar && !this.playerMG))
      if (meleeTarget) {
        if (time >= bot.nextMelee) { bot.nextMelee = time + 1.05; bot.meleeAt = time; bot.nextShot = Math.max(bot.nextShot, time + .7); this.audio.click(980, this.soundAt(bot.root.position).volume * .12); if (targetBot) { targetBot.hp -= 68; if (targetBot.hp <= 0) { bot.kills++; this.down(targetBot, targetBot.root.position.clone().sub(bot.root.position), false, bot) } } else { this.hurtPlayer(42 * this.enemyDamage, bot.root.position, `${bot.name}的刺刀`); if (this.dead) bot.kills++ } }
        continue
      }
      if (bot.reloadUntil) {
        if (time < bot.reloadUntil) { const phase = 1 - (bot.reloadUntil - time) / weapon.reload, motion = Math.sin(THREE.MathUtils.clamp(phase, 0, 1) * Math.PI); bot.weapon.position.y = -.32 * motion; bot.weapon.position.x = -.12 * motion; bot.weapon.rotation.z = -.42 * motion; bot.arms[0].rotation.x = -.9 + motion * .62; bot.muzzle.visible = false; continue }
        bot.mag = weapon.magazine; bot.reloadUntil = 0; bot.weapon.position.set(0, 0, 0); bot.weapon.rotation.set(0, 0, 0); bot.nextShot = Math.max(bot.nextShot, time + .22)
      }
      if (holdingCover && !engaged && bot.suppression < .35 && bot.hp >= 50 && bot.mag > Math.ceil(weapon.magazine * .35)) { bot.coverTarget = undefined; bot.coverUntil = 0; holdingCover = false }
      if (!bot.mag) { bot.reloadUntil = time + weapon.reload * (.95 + Math.random() * .15); bot.muzzle.visible = false; continue }
      if (prone && bot.suppression > 1.42) { bot.muzzle.visible = false; continue }
      if (distance > weapon.range || time < bot.nextShot) continue
      if (!targetBot && !targetTransport && !targetingPlayer && !targetDepot) continue
      bot.nextShot = time + THREE.MathUtils.lerp(weapon.interval[0], weapon.interval[1], Math.random()) * (bot.team === 'enemy' ? this.enemyFireRate : 1)
      bot.shotAt = time; bot.mag--
      const accuracy = THREE.MathUtils.clamp((.72 - distance * .012) * weapon.accuracy * (1 - Math.min(.65, bot.suppression * .42)) * (bot.team === 'enemy' ? this.enemyAccuracy : 1), .05, .82)
      let hitShot = Math.random() <= accuracy; const start = bot.muzzle.getWorldPosition(new THREE.Vector3()), end = targetBot ? targetBot.root.position.clone().add(new THREE.Vector3(0, 1.35, 0)) : targetTransport ? targetTransport.root.position.clone().add(new THREE.Vector3(0, 1, 0)) : targetDepot ? targetDepot.position.clone().add(new THREE.Vector3(0, 1, 0)) : this.camera.position.clone(); if (!hitShot) { end.x += (Math.random() - .5) * 3.5; end.y += (Math.random() - .5) * 2.5 } const shotDirection = end.clone().sub(start), shotDistance = shotDirection.length(); this.ray.set(start, shotDirection.normalize()); this.ray.far = shotDistance; const obstruction = this.withStaticCover(this.ray.intersectObjects(this.occlusionMeshes(), false)[0]); this.ray.far = Infinity; if (obstruction && obstruction.distance < shotDistance) { end.copy(obstruction.point); hitShot = false }
      if (this.smokeBlocks(start, end)) hitShot = false; if (bot.team === 'enemy') this.nearMiss(start, end)
      this.tracer(start, end, bot.team === 'ally' ? 0xffdd83 : 0xff8b68); const sound = this.soundAt(bot.root.position); this.audio.shot(weapon.kind, sound.volume, sound.pan); this.alertBots(bot.team, bot.root.position)
      if (targetBot) targetBot.suppression = Math.min(1.6, targetBot.suppression + weapon.suppression)
      if (!hitShot) continue
      const damage = THREE.MathUtils.lerp(weapon.damage[0], weapon.damage[1], Math.random())
      if (targetBot) { targetBot.hp -= damage; if (targetBot.hp <= 0) { bot.kills++; this.down(targetBot, undefined, false, bot) } continue } if (targetTransport) { this.damageTransport(targetTransport, damage * .28, false); continue } if (targetDepot) { this.damageDepot(targetDepot, damage * .55, false); continue }
      this.hurtPlayer(damage * .36 * this.enemyDamage, bot.root.position, `${bot.name}的${weapon.kind === 'auto' ? '自动武器' : weapon.kind === 'semi' ? '半自动步枪' : '步枪'}`); if (this.dead) { bot.kills++; return }
    }
  }
  private updateVehicleDamage(dt: number, time: number) {
    for (const tank of this.tanks) {
      if (!tank.alive) continue
      const damaged = tank.hp < tank.maxHp * .7 || tank.engine < 65
      if (damaged && time >= tank.nextSmoke) { tank.nextSmoke = time + .28 + Math.random() * .18; const severity = Math.max(1 - tank.hp / tank.maxHp, 1 - tank.engine / 100); this.particle(tank.root.position.clone().add(new THREE.Vector3(0, 1.35, 0)), new THREE.Vector3((Math.random() - .5) * .35, .7 + Math.random() * .5, (Math.random() - .5) * .35), severity > .62 ? 0x262824 : 0x4d5049, .18 + severity * .22, 1.8 + severity, -.08, .8, .35 + severity * .35) }
      if (tank.hp < tank.maxHp * .32 && Math.random() < dt * 4.5) { const exhaust = tank.root.position.clone().add(new THREE.Vector3((Math.random() - .5) * 1.4, .8 + Math.random() * .8, (Math.random() - .5) * 1.8)); this.particle(exhaust, new THREE.Vector3((Math.random() - .5) * 2.2, 1.2 + Math.random() * 2.5, (Math.random() - .5) * 2.2), Math.random() < .58 ? 0xff7b28 : 0x3b3b36, .055 + Math.random() * .09, .35 + Math.random() * .45, 5) }
      if (!tank.playerDriven && time - tank.lastDamageAt > 10 && tank.hp > 0 && (tank.hp < tank.maxHp || tank.tracks < 100 || tank.engine < 100 || tank.turretHealth < 100)) { tank.hp = Math.min(tank.maxHp, tank.hp + dt * 3); tank.tracks = Math.min(100, tank.tracks + dt * 1.5); tank.engine = Math.min(100, tank.engine + dt * 1.2); tank.turretHealth = Math.min(100, tank.turretHealth + dt) }
    }
    for (const transport of this.transports) { if (!transport.alive || transport.hp >= transport.maxHp * .57 || time < transport.nextSmoke) continue; transport.nextSmoke = time + .32 + Math.random() * .2; const severity = 1 - transport.hp / transport.maxHp; this.particle(transport.root.position.clone().add(new THREE.Vector3(0, 1.25, 0)), new THREE.Vector3((Math.random() - .5) * .3, .65 + Math.random() * .45, (Math.random() - .5) * .3), severity > .65 ? 0x292a27 : 0x555750, .18 + severity * .18, 1.7 + severity, -.06, .7, .32 + severity * .4) }
  }
  private updateBotAntiTank(time: number) {
    if (this.operationOpeningActive(time)) return
    for (const bot of this.bots) {
      if (!bot.alive || !bot.antiTank || bot.riding || time < bot.nextRocket || time - bot.throwAt < 1.4) continue
      const target = this.tanks.filter(tank => tank.alive && tank.team !== bot.team).sort((a, b) => bot.root.position.distanceToSquared(a.root.position) - bot.root.position.distanceToSquared(b.root.position))[0]
      if (!target) continue; const distance = bot.root.position.distanceTo(target.root.position); if (distance < 12 || distance > 52) continue
      const origin = bot.root.position.clone().add(new THREE.Vector3(0, 1.55, 0)), aim = target.root.position.clone().add(new THREE.Vector3(0, 1, 0)).sub(origin); aim.x += (Math.random() - .5) * distance * .022; aim.y += (Math.random() - .5) * distance * .012; aim.z += (Math.random() - .5) * distance * .022; const direction = aim.normalize(); this.ray.set(origin, direction); this.ray.far = distance + 4; const hit = this.withStaticCover(this.ray.intersectObjects([...this.occlusionMeshes(), target.hitbox], false)[0]); this.ray.far = Infinity; const end = hit?.point ?? origin.clone().addScaledVector(direction, distance + 4); this.tracer(origin.clone().addScaledVector(direction, .65), end, bot.team === 'ally' ? 0xffdf83 : 0xff8b68); if (hit?.object === target.hitbox) { const wasAlive = target.alive; this.impactFx(hit.point); this.damageTank(target, 125, false, hit.point, 48, direction, `${bot.name} · 反坦克武器`, origin); if (wasAlive && !target.alive) { bot.kills++; this.events.combatKill(bot.name, bot.team, target.name, target.team) } } else if (hit) this.impactFx(hit.point); bot.nextRocket = time + 4.5 + Math.random() * 3; bot.shotAt = time; bot.root.rotation.y = Math.atan2(direction.x, direction.z) + Math.PI; const sound = this.soundAt(bot.root.position); this.audio.shot('bolt', sound.volume, sound.pan); this.alertBots(bot.team, bot.root.position)
    }
  }
  private updateTanks(dt: number, time: number) {
    this.updateVehicleDamage(dt, time)
    this.updateBotAntiTank(time)
    for (const tank of this.tanks) {
      this.updateTankCrew(tank, time)
      if (tank.playerDriven) continue
      if (!tank.alive) { tank.nextSmoke = this.updateVehicleWreck(tank.root, time, tank.nextSmoke); if (time >= tank.respawnAt && this.tickets[tank.team === 'ally' ? 0 : 1] > 0) this.reinforceTank(tank, time); continue }
      if (this.operationOpeningActive(time)) { tank.nextShot = Math.max(tank.nextShot, this.operationOpeningUntil); tank.mgPauseUntil = Math.max(tank.mgPauseUntil, this.operationOpeningUntil); if (tank.team === 'enemy') continue }
      if (tank.driver && (!tank.driver.alive || tank.driver.drivingTank !== tank)) tank.driver = undefined
      if (tank.driver && tank.hp < tank.maxHp * .25) { this.dismountTankDriver(tank, true); continue }
      if (!tank.driver && tank.hp >= tank.maxHp * .4) { const driver = this.bots.filter(bot => bot.alive && bot.team === tank.team && !bot.inSquad && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && !bot.emplacement && !bot.machineGun && !bot.mortarRig && bot.root.position.distanceToSquared(tank.root.position) < 22 ** 2).sort((a, b) => a.root.position.distanceToSquared(tank.root.position) - b.root.position.distanceToSquared(tank.root.position))[0]; if (driver) { tank.driver = driver; driver.drivingTank = tank; driver.coverTarget = undefined } }
      if (!this.tankDriverSeated(tank)) continue
      let targetBot: Bot | undefined, targetTank: Tank | undefined, targetTransport: Transport | undefined, targetingPlayer = false, targetPos: THREE.Vector3 | undefined, best = Infinity
      for (const candidate of this.bots) { if (!candidate.alive || candidate.drivingTank || candidate.drivingTransport || candidate.team === tank.team) continue; const distance = tank.root.position.distanceToSquared(candidate.root.position); if (distance < best) { best = distance; targetBot = candidate; targetTank = undefined; targetTransport = undefined; targetingPlayer = false; targetPos = candidate.root.position } }
      for (const candidate of this.tanks) { if (!candidate.alive || candidate.team === tank.team) continue; const distance = tank.root.position.distanceToSquared(candidate.root.position); if (distance < best) { best = distance; targetBot = undefined; targetTank = candidate; targetTransport = undefined; targetingPlayer = false; targetPos = candidate.root.position } }
      for (const candidate of this.transports) { if (!candidate.alive || candidate.team === tank.team) continue; const distance = tank.root.position.distanceToSquared(candidate.root.position); if (distance < best) { best = distance; targetBot = undefined; targetTank = undefined; targetTransport = candidate; targetingPlayer = false; targetPos = candidate.root.position } }
      if (tank.team === 'enemy' && !this.dead) { const distance = tank.root.position.distanceToSquared(this.camera.position); if (distance < best) { best = distance; targetBot = undefined; targetTank = undefined; targetTransport = undefined; targetingPlayer = true; targetPos = this.camera.position } }
      if (this.campaign.rule === 'demolition' && tank.team === this.campaign.attacker) { const depot = this.depots.filter(item => !item.destroyed).sort((a, b) => tank.root.position.distanceToSquared(a.position) - tank.root.position.distanceToSquared(b.position))[0], distance = depot ? tank.root.position.distanceToSquared(depot.position) : Infinity; if (depot && distance < best) { best = distance; targetBot = undefined; targetTank = undefined; targetTransport = undefined; targetingPlayer = false; targetPos = depot.position } }
      const objective = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives().sort((a, b) => tank.root.position.distanceToSquared(a.position) - tank.root.position.distanceToSquared(b.position))[0] : this.objectives.filter(point => point.owner !== tank.team).sort((a, b) => tank.root.position.distanceToSquared(a.position) - tank.root.position.distanceToSquared(b.position))[0]
      let combatTarget = Boolean(targetPos && best < 58 ** 2)
      if (this.campaign.rule === 'assault' && objective && tank.root.position.distanceToSquared(objective.position) > (objective.radius + 9) ** 2) { targetBot = undefined; targetTank = undefined; targetTransport = undefined; targetingPlayer = false; targetPos = objective.position; combatTarget = false }
      else if (!combatTarget) targetPos = objective?.position
      if (!targetPos) continue
      const dx = targetPos.x - tank.root.position.x, dz = targetPos.z - tank.root.position.z, distance = Math.hypot(dx, dz), worldYaw = Math.atan2(dx, dz) + Math.PI, stop = combatTarget ? 34 : 3.5
      const mobility = tank.tracks <= 0 || tank.engine <= 0 || !this.crewAlive(tank, 'driver') ? 0 : (.35 + tank.tracks / 100 * .65) * (.3 + tank.engine / 100 * .7) * (.55 + tank.crew * .1125)
      if (time < tank.reverseUntil && mobility > 0) { tank.root.rotation.y += tank.reverseTurn * dt * .9; const forward = new THREE.Vector3(-Math.sin(tank.root.rotation.y), 0, -Math.cos(tank.root.rotation.y)), reversed = this.moveTankWithCollision(tank.root.position, -forward.x * dt * 1.8 * mobility, -forward.z * dt * 1.8 * mobility); tank.stalledFor = reversed ? 0 : tank.stalledFor + dt; if (!reversed && tank.stalledFor > .4) { const side = new THREE.Vector3(-forward.z * tank.reverseTurn, 0, forward.x * tank.reverseTurn); if (this.moveTankWithCollision(tank.root.position, side.x * dt * 2.4, side.z * dt * 2.4)) tank.stalledFor = 0 } continue }
      if (distance > stop && mobility > 0) { const beforeX = tank.root.position.x, beforeZ = tank.root.position.z; tank.root.rotation.y = worldYaw; const moved = this.moveVehicleToward(tank.root.position, targetPos, dt * 3.1 * mobility, tank.reverseTurn), movedX = tank.root.position.x - beforeX, movedZ = tank.root.position.z - beforeZ; if (moved && Math.hypot(movedX, movedZ) > .001) tank.root.rotation.y = Math.atan2(movedX, movedZ) + Math.PI; tank.stalledFor = moved ? Math.max(0, tank.stalledFor - dt) : tank.stalledFor + dt; if (tank.stalledFor > .55) { tank.stalledFor = 0; tank.reverseUntil = time + 1.6 + Math.random() * .6; tank.reverseTurn *= -1 } }
      else tank.stalledFor = 0
      if (!tank.turretHealth || !this.crewAlive(tank, 'gunner')) continue
      if (combatTarget) { tank.turret.rotation.y = worldYaw - tank.root.rotation.y; const targetHeight = targetingPlayer ? this.camera.position.y : targetTank || targetTransport ? targetPos.y + 1 : targetPos.y + 1.2, gunHeight = tank.root.position.y + 1.56; tank.pitch.rotation.x = THREE.MathUtils.damp(tank.pitch.rotation.x, THREE.MathUtils.clamp(Math.atan2(targetHeight - gunHeight, Math.max(1, distance)), -.18, .35), 4, dt); if ((targetBot || targetingPlayer) && distance < 52 && time >= tank.nextMg && time >= tank.mgPauseUntil) { if (!tank.mgBurst) tank.mgBurst = 5 + Math.floor(Math.random() * 5); tank.nextMg = time + .115; const start = tank.coaxMuzzle.getWorldPosition(new THREE.Vector3()), end = targetPos.clone().setY(targetingPlayer ? this.camera.position.y : 1.3); end.x += (Math.random() - .5) * distance * .022; end.y += (Math.random() - .5) * distance * .014; const obstruction = this.coverHit(start, end), blocked = Boolean(obstruction); if (obstruction) end.copy(obstruction.point); this.tracer(start, end, tank.team === 'ally' ? 0xffdd83 : 0xff8068); const sound = this.soundAt(tank.root.position); this.audio.shot('auto', sound.volume * .7, sound.pan); if (!blocked && Math.random() < THREE.MathUtils.clamp(.78 - distance * .012, .18, .66)) { if (targetBot) { targetBot.hp -= 16; if (targetBot.hp <= 0) this.down(targetBot) } else this.hurtPlayer(7 * this.enemyDamage, start) } if (!--tank.mgBurst) tank.mgPauseUntil = time + .6 + Math.random() * .6 } if (distance < 58 && time >= tank.nextShot) { tank.nextShot = time + 4.3 + Math.random() * 1.8; const origin = tank.muzzle.getWorldPosition(new THREE.Vector3()), end = targetPos.clone().setY(targetHeight), accuracy = THREE.MathUtils.clamp(.85 - distance * .008, .42, .78); if (Math.random() > accuracy) { end.x += (Math.random() - .5) * 6; end.z += (Math.random() - .5) * 5 } this.launchCannonShell(origin, end.sub(origin).normalize(), tank.team, false, 175); const sound = this.soundAt(tank.root.position); this.audio.shot('bolt', sound.volume, sound.pan) } }
    }
  }
  private updateTransports(dt: number, time: number) {
    for (const transport of this.transports) {
      if (transport.playerDriven) continue
      if (!transport.alive) { transport.nextSmoke = this.updateVehicleWreck(transport.root, time, transport.nextSmoke); if (time >= transport.respawnAt && this.tickets[transport.team === 'ally' ? 0 : 1] > 0) this.reinforceTransport(transport, time); continue }
      if (this.operationOpeningActive(time) && transport.team === 'enemy') continue
      if (transport.driver && (!transport.driver.alive || transport.driver.drivingTransport !== transport)) transport.driver = undefined
      if (transport.driver && transport.hp < transport.maxHp * .3) { this.dismountTransportDriver(transport); this.evacuateTransport(transport); continue }
      if (!transport.driver && transport.hp >= transport.maxHp * .4) { const driver = this.bots.filter(bot => bot.alive && bot.team === transport.team && !bot.inSquad && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && !bot.emplacement && !bot.machineGun && !bot.mortarRig && bot.root.position.distanceToSquared(transport.root.position) < 22 ** 2).sort((a, b) => a.root.position.distanceToSquared(transport.root.position) - b.root.position.distanceToSquared(transport.root.position))[0]; if (driver) { transport.driver = driver; driver.drivingTransport = transport; driver.coverTarget = undefined } }
      if (!this.transportDriverSeated(transport)) continue
      const riders = this.bots.filter(bot => bot.alive && bot.riding === transport)
      const strategic = this.campaign.rule === 'assault' ? this.pendingAssaultObjectives().sort((a, b) => transport.root.position.distanceToSquared(a.position) - transport.root.position.distanceToSquared(b.position))[0] : this.objectives.filter(point => point.owner !== transport.team).sort((a, b) => transport.root.position.distanceToSquared(a.position) - transport.root.position.distanceToSquared(b.position))[0]
      if (!strategic) { if (riders.length) this.evacuateTransport(transport); transport.mission = 'hold'; continue }
      const baseZ = this.mapBounds.halfDepth - 10, base = new THREE.Vector3(transport.team === 'ally' ? 5 : -5, 0, transport.team === 'ally' ? baseZ : -baseZ), drop = strategic.position.clone()
      if (transport.mission === 'pickup' && transport.root.position.distanceToSquared(base) < 8 ** 2) {
        const free = Math.max(0, 6 - riders.length), recruits = this.bots.filter(bot => bot.alive && bot.team === transport.team && !bot.inSquad && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && !bot.emplacement && !bot.machineGun && !bot.mortarRig && bot.root.position.distanceToSquared(transport.root.position) < 9 ** 2).sort((a, b) => a.root.position.distanceToSquared(transport.root.position) - b.root.position.distanceToSquared(transport.root.position)).slice(0, free)
        recruits.forEach(bot => { bot.riding = transport; bot.coverTarget = undefined; bot.bandageUntil = 0 })
        const loaded = riders.length + recruits.length
        if (loaded >= 4 || loaded && time >= transport.waitUntil) { transport.mission = 'transit'; transport.waitUntil = 0 }
        else { if (time >= transport.waitUntil) transport.waitUntil = time + 5; continue }
      }
      const enemyClose = this.bots.some(bot => bot.alive && bot.team !== transport.team && !bot.piloting && !bot.chuting && bot.root.position.distanceToSquared(transport.root.position) < 22 ** 2) || transport.team === 'enemy' && !this.dead && this.camera.position.distanceToSquared(transport.root.position) < 22 ** 2
      const shouldDismount = riders.length && (transport.root.position.distanceToSquared(drop) < (strategic.radius + 6) ** 2 || time - transport.lastDamageAt < 6 || enemyClose || transport.stalledFor > .42)
      if (transport.mission === 'transit' && shouldDismount) { transport.mission = 'unload'; transport.waitUntil = time + 8; transport.nextDrop = time }
      if (transport.mission === 'unload') {
        if (riders.length && time >= transport.nextDrop) { this.dismountTransportPassenger(transport, riders[riders.length - 1], riders.length - 1); transport.nextDrop = time + .4 }
        if (!riders.length || time >= transport.waitUntil) { this.evacuateTransport(transport); transport.mission = 'hold' }
        continue
      }
      const target = transport.mission === 'pickup' ? base : drop, dx = target.x - transport.root.position.x, dz = target.z - transport.root.position.z, distance = Math.hypot(dx, dz)
      if (distance < 1.2) continue
      if (time < transport.reverseUntil) { transport.root.rotation.y += transport.reverseTurn * dt * 1.05; const forward = new THREE.Vector3(Math.sin(transport.root.rotation.y), 0, Math.cos(transport.root.rotation.y)), speed = dt * 4.4, reversed = this.moveTankWithCollision(transport.root.position, -forward.x * speed, -forward.z * speed); transport.stalledFor = reversed ? 0 : transport.stalledFor + dt; if (!reversed && transport.stalledFor > .35) { const side = new THREE.Vector3(-forward.z * transport.reverseTurn, 0, forward.x * transport.reverseTurn); if (this.moveTankWithCollision(transport.root.position, side.x * dt * 3, side.z * dt * 3)) transport.stalledFor = 0 } for (const wheel of transport.wheels) wheel.rotation.x += speed * 2.5; continue }
      const beforeX = transport.root.position.x, beforeZ = transport.root.position.z; transport.root.rotation.y = Math.atan2(dx, dz); const speed = dt * (transport.mission === 'pickup' ? 6.2 : 8.2), moved = this.moveVehicleToward(transport.root.position, target, speed, transport.reverseTurn), movedX = transport.root.position.x - beforeX, movedZ = transport.root.position.z - beforeZ; if (moved && Math.hypot(movedX, movedZ) > .001) transport.root.rotation.y = Math.atan2(movedX, movedZ); transport.stalledFor = moved ? Math.max(0, transport.stalledFor - dt) : transport.stalledFor + dt; if (transport.stalledFor > .5) { transport.stalledFor = 0; transport.reverseUntil = time + 1.8 + Math.random() * .7; transport.reverseTurn *= -1 } for (const wheel of transport.wheels) wheel.rotation.x -= speed * 2.5
    }
  }
  private updateEmplacements(time: number) {
    const opening = this.operationOpeningActive(time)
    for (const gun of this.emplacements) {
      if (!gun.alive) { if (time >= gun.respawnAt && this.tickets[gun.team === 'ally' ? 0 : 1] > 0) { gun.alive = true; gun.occupied = false; gun.operator = undefined; gun.operatorUntil = 0; gun.hp = gun.kind === 'aa' ? 180 : 240; gun.root.rotation.z = 0 } else continue }
      if (gun.occupied) continue
      if (opening) { gun.nextShot = Math.max(gun.nextShot, this.operationOpeningUntil); continue }
      if (gun.operator && (!gun.operator.alive || gun.operator.emplacement !== gun)) gun.operator = undefined
      if (gun.operator && time >= gun.operatorUntil) { gun.operator.emplacement = undefined; gun.operator = undefined }
      const threat = gun.kind === 'aa' ? this.planes.some(plane => plane.alive && !plane.abandoned && plane.team !== gun.team && plane.root.position.distanceToSquared(gun.root.position) < 95 ** 2) : this.tanks.some(tank => tank.alive && tank.team !== gun.team && tank.root.position.distanceToSquared(gun.root.position) < 70 ** 2) || this.transports.some(transport => transport.alive && transport.team !== gun.team && transport.root.position.distanceToSquared(gun.root.position) < 65 ** 2)
      if (!threat) { if (gun.operator) { gun.operator.emplacement = undefined; gun.operator = undefined } continue }
      if (!gun.operator) {
        const operator = this.bots.filter(bot => bot.alive && bot.team === gun.team && !bot.inSquad && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && !bot.emplacement && !bot.machineGun && !bot.mortarRig && bot.root.position.distanceToSquared(gun.root.position) < 18 ** 2).sort((a, b) => a.root.position.distanceToSquared(gun.root.position) - b.root.position.distanceToSquared(gun.root.position))[0]
        if (operator) { gun.operator = operator; gun.operatorUntil = time + 14 + Math.random() * 10; operator.emplacement = gun; operator.coverTarget = undefined; operator.bandageUntil = 0 }
      }
      if (!gun.operator || gun.operator.root.position.distanceToSquared(gun.root.position) > 2.2 ** 2) continue
      if (time < gun.nextShot) continue
      if (gun.kind === 'aa') {
        const target = this.planes.filter(plane => plane.alive && plane.team !== gun.team).sort((a, b) => gun.root.position.distanceToSquared(a.root.position) - gun.root.position.distanceToSquared(b.root.position))[0]; if (!target || gun.root.position.distanceToSquared(target.root.position) > 95 ** 2) continue
        const delta = target.root.position.clone().sub(gun.root.position), distance = delta.length(); gun.yaw.rotation.y = Math.atan2(delta.x, delta.z) + Math.PI - gun.root.rotation.y; gun.nextShot = time + .34; const end = target.root.position.clone().add(new THREE.Vector3((Math.random() - .5) * 3, (Math.random() - .5) * 2, (Math.random() - .5) * 3)); this.tracer(gun.muzzle.getWorldPosition(new THREE.Vector3()), end, gun.team === 'ally' ? 0xffdf83 : 0xff8b68); const sound = this.soundAt(gun.root.position); this.audio.shot('auto', sound.volume, sound.pan); if (Math.random() < THREE.MathUtils.clamp(1 - distance / 130, .22, .68)) this.damagePlane(target, 18, false)
      } else {
        const targets: { position: THREE.Vector3; tank?: Tank; transport?: Transport }[] = [...this.tanks.filter(target => target.alive && target.team !== gun.team).map(target => ({ position: target.root.position, tank: target })), ...this.transports.filter(target => target.alive && target.team !== gun.team).map(target => ({ position: target.root.position, transport: target }))]; targets.sort((a, b) => gun.root.position.distanceToSquared(a.position) - gun.root.position.distanceToSquared(b.position)); const target = targets[0]; if (!target || gun.root.position.distanceToSquared(target.position) > 65 ** 2) continue
        const delta = target.position.clone().sub(gun.root.position), distance = delta.length(); gun.yaw.rotation.y = Math.atan2(delta.x, delta.z) + Math.PI - gun.root.rotation.y; gun.nextShot = time + 4 + Math.random() * 1.5; const origin = gun.muzzle.getWorldPosition(new THREE.Vector3()), end = target.position.clone().setY(1), accuracy = THREE.MathUtils.clamp(.88 - distance * .009, .35, .8); if (Math.random() > accuracy) { end.x += (Math.random() - .5) * 5; end.z += (Math.random() - .5) * 5 } this.launchCannonShell(origin, end.sub(origin).normalize(), gun.team, false, 205); const sound = this.soundAt(gun.root.position); this.audio.shot('bolt', sound.volume, sound.pan)
      }
    }
  }
  private updatePlanes(dt: number, time: number) {
    for (const plane of this.planes) {
      if (plane.bombs < plane.maxBombs && time >= plane.bombRearmAt) { plane.bombs++; plane.bombRearmAt = plane.bombs < plane.maxBombs ? time + 28 : 0 }
      if (!plane.alive) { if (time >= plane.respawnAt && this.tickets[plane.team === 'ally' ? 0 : 1] > 0) this.reinforcePlane(plane, time); continue }
      if (plane.playerDriven) continue
      if (!plane.pilot && !plane.abandoned) { this.seatPlanePilot(plane); if (!plane.pilot) continue }
      if (plane.abandoned) {
        const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(plane.root.quaternion); plane.speed = Math.max(12, plane.speed - dt * 4); plane.root.position.addScaledVector(forward, plane.speed * dt * .45); plane.root.position.y -= dt * (4.5 + (1 - plane.hp / plane.maxHp) * 4); plane.root.rotation.x = THREE.MathUtils.damp(plane.root.rotation.x, .48, 1.1, dt); plane.root.rotation.z += dt * (plane.team === 'ally' ? .76 : -.76)
        if (time >= plane.nextAttack) { plane.nextAttack = time + .08; this.particle(plane.root.position.clone(), new THREE.Vector3((Math.random() - .5) * .5, .4 + Math.random() * .6, (Math.random() - .5) * .5), Math.random() < .2 ? 0xff6b28 : 0x292b28, .22 + Math.random() * .25, .8 + Math.random() * .5, -.04, .65, .3) }
        if (plane.root.position.y <= this.terrainHeight(plane.root.position.x, plane.root.position.z) + .7) this.damagePlane(plane, 999, false)
        continue
      }
      plane.angle += dt * (plane.team === 'ally' ? .16 : -.16); const radius = 54, x = Math.sin(plane.angle) * radius, z = Math.cos(plane.angle) * radius, y = 17 + Math.sin(plane.angle * 2) * 2, tangentYaw = plane.angle + (plane.team === 'ally' ? -Math.PI / 2 : Math.PI / 2); plane.root.position.set(x, y, z); plane.root.rotation.y = tangentYaw; plane.root.rotation.z = plane.team === 'ally' ? -.12 : .12; if (plane.prop) plane.prop.rotation.z += dt * 22
      const airTarget = this.planes.filter(target => target.alive && target.team !== plane.team).sort((a, b) => plane.root.position.distanceToSquared(a.root.position) - plane.root.position.distanceToSquared(b.root.position))[0]
      if (airTarget && time >= plane.nextShot) { const distance = plane.root.position.distanceTo(airTarget.root.position), forward = new THREE.Vector3(0, 0, -1).applyEuler(plane.root.rotation), targetForward = new THREE.Vector3(0, 0, -1).applyEuler(airTarget.root.rotation), lead = airTarget.root.position.clone().addScaledVector(targetForward, THREE.MathUtils.clamp(distance / 140, 0, .85) * airTarget.speed), aim = lead.clone().sub(plane.root.position).normalize(), alignment = forward.dot(aim); if (distance < 105 && alignment > .42) { plane.nextShot = time + .42; const start = plane.root.position.clone().addScaledVector(forward, 2), end = lead.clone().add(new THREE.Vector3((Math.random() - .5) * 2.5, (Math.random() - .5) * 1.5, (Math.random() - .5) * 2.5)); for (let burst = 0; burst < 3; burst++) this.tracer(start.clone().addScaledVector(forward, burst * .22), end.clone().add(new THREE.Vector3((Math.random() - .5) * 1.4, (Math.random() - .5), (Math.random() - .5) * 1.4)), plane.team === 'ally' ? 0xffdf83 : 0xff8068); const sound = this.soundAt(start); this.audio.shot('auto', sound.volume, sound.pan); const accuracy = THREE.MathUtils.clamp(.74 - distance * .006, .18, .62) * (plane.team === 'enemy' ? this.enemyAccuracy : 1); if (Math.random() < accuracy) { const wasAlive = airTarget.alive; this.damagePlane(airTarget, 25, false); if (wasAlive && !airTarget.alive) this.events.combatKill(plane.team === 'ally' ? '中国空军' : '日本陆航', plane.team, airTarget.team === 'ally' ? '霍克三型战斗机' : '日军战斗机', airTarget.team) } } }
      if (plane.bombs && time >= plane.nextBomb) {
        const fallTime = 1.55, projected = plane.root.position.clone().add(new THREE.Vector3(0, 0, -1).applyEuler(plane.root.rotation).multiplyScalar(plane.speed * .85 * fallTime)).setY(0)
        const targets = [...this.tanks.filter(target => target.alive && target.team !== plane.team).map(target => target.root.position), ...this.transports.filter(target => target.alive && target.team !== plane.team).map(target => target.root.position), ...this.emplacements.filter(target => target.alive && target.team !== plane.team).map(target => target.root.position), ...this.bots.filter(target => target.alive && !target.drivingTank && !target.drivingTransport && !target.piloting && !target.chuting && target.team !== plane.team).map(target => target.root.position), ...(plane.team === 'enemy' && !this.dead && !this.playerPlane ? [this.camera.position] : [])]
        const target = targets.sort((a, b) => projected.distanceToSquared(a) - projected.distanceToSquared(b))[0]
        if (target && projected.distanceToSquared(target) < 13 ** 2) { this.launchPlaneBomb(plane, false, time); plane.nextBomb = time + 12 + Math.random() * 8 }
      }
      if (time < plane.nextAttack) continue; plane.nextAttack = time + 5 + Math.random() * 4
      const enemyBots = this.bots.filter(bot => bot.alive && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && bot.team !== plane.team), targetBot = enemyBots[Math.floor(Math.random() * enemyBots.length)], targetPlayer = plane.team === 'enemy' && !this.dead && !this.playerPlane && !this.parachuting && (!targetBot || Math.random() < .45), target = targetPlayer ? this.camera.position.clone() : targetBot?.root.position.clone().add(new THREE.Vector3(0, 1.2, 0)); if (!target) continue
      const start = plane.root.position.clone(); let hit = Math.random() < .48; if (!hit) { target.x += (Math.random() - .5) * 7; target.z += (Math.random() - .5) * 7 } const obstruction = this.coverHit(start, target); if (obstruction) { target.copy(obstruction.point); hit = false } for (let i = 0; i < 4; i++) setTimeout(() => this.tracer(start.clone().add(new THREE.Vector3(0, 0, -i * .35)), target.clone().add(new THREE.Vector3((Math.random() - .5) * 2, 0, (Math.random() - .5) * 2)), plane.team === 'ally' ? 0xffdf83 : 0xff8068), i * 70); const sound = this.soundAt(start); this.audio.shot('auto', sound.volume, sound.pan); if (!hit) continue; if (targetPlayer) this.hurtPlayer(22, start); else if (targetBot) { targetBot.hp -= 55; if (targetBot.hp <= 0) this.down(targetBot) }
    }
  }
  private awardCapture(point: Objective, team: Team) {
    for (const bot of this.bots) if (bot.alive && bot.team === team && bot.root.position.distanceToSquared(point.position) < point.radius ** 2) bot.objectiveScore += 150
    if (team !== 'ally' || this.dead) return
    const position = this.playerTank?.root.position ?? this.playerTransport?.root.position ?? this.playerEmplacement?.root.position ?? this.camera.position
    if (position.distanceToSquared(point.position) >= point.radius ** 2) return
    this.objectiveScore += 150; this.events.objectiveScore(150, `占领 ${point.id} 点`, this.kills * 100 + this.objectiveScore)
  }
  private advanceSonghuOperation(now: number) {
    if (this.operationPhase >= 2) { this.finish('ally'); return }
    this.operationPhase++
    this.operationTransitionUntil = now + 8
    this.firing = false; this.tankMgFiring = false
    for (const bot of this.bots) bot.nextShot = Math.max(bot.nextShot, this.operationTransitionUntil)
    for (const tank of this.tanks) { tank.nextShot = Math.max(tank.nextShot, this.operationTransitionUntil); tank.mgPauseUntil = Math.max(tank.mgPauseUntil, this.operationTransitionUntil) }
    for (const plane of this.planes) { plane.nextShot = Math.max(plane.nextShot, this.operationTransitionUntil); plane.nextAttack = Math.max(plane.nextAttack, this.operationTransitionUntil) }
    const attacker = this.assaultAttacker(), defender: Team = attacker === 'ally' ? 'enemy' : 'ally'
    for (const point of this.activeAssaultObjectives()) { point.owner = defender; point.capturing = null; point.progress = 0 }
    if (this.operationPhase === 2) this.tickets = [70, Infinity]
    else this.tickets[1] = Math.min(this.maxTickets, this.tickets[1] + 35)
    this.deploySonghuReinforcements(now)
    this.status = this.operationPhase === 1 ? '外围阵地失守 · 撤向八字桥' : '守住了八字桥 · 中国军队开始反击'
    this.statusUntil = now + 8
    this.logCombat('operation_phase', { phase: this.operationPhase + 1, label: this.operationLabel(), attacker })
  }
  private updateObjectives(dt: number) {
    const now = performance.now() / 1000
    if (this.isSonghuOperation() && this.operationOpeningUntil && now >= this.operationOpeningUntil && !this.operationOpeningBarrage) {
      this.operationOpeningBarrage = true; this.operationOpeningUntil = now + 3.2; this.nextArtilleryAt = now + 30; this.scheduleArtillery(now, 'enemy', 9); this.status = '日军准备炮击！坚守阵地！'; this.statusUntil = now + 5
    }
    const opening = this.operationOpeningActive(now), activeIndices = this.activeAssaultIndices(), attacker = this.assaultAttacker(), transitioning = opening || this.isSonghuOperation() && now < this.operationTransitionUntil
    if (!opening) this.matchTime = Math.max(0, this.matchTime - dt)
    let ownedAllies = 0, ownedEnemies = 0, playerCapture = this.isSonghuOperation() ? opening ? this.operationOpeningBarrage ? '日军准备炮击 · 就地隐蔽' : `守军部署 · ${Math.ceil(this.operationOpeningUntil - now)}秒` : now < this.operationTransitionUntil ? `战线转移 · ${Math.ceil(this.operationTransitionUntil - now)}秒` : `第 ${this.operationPhase + 1}/3 阶段 · ${this.operationLabel()}` : '', objectiveAlerts: string[] = []
    for (let pointIndex = 0; pointIndex < this.objectives.length; pointIndex++) {
      const point = this.objectives[pointIndex], captureAllowed = !transitioning && (this.campaign.rule !== 'assault' || activeIndices.includes(pointIndex))
      let allies = 0, enemies = 0
      for (const bot of this.bots) if (bot.alive && !bot.riding && !bot.drivingTank && !bot.drivingTransport && !bot.piloting && !bot.chuting && bot.root.position.distanceToSquared(point.position) < point.radius ** 2) bot.team === 'ally' ? allies++ : enemies++
      for (const tank of this.tanks) if (tank.alive && tank.root.position.distanceToSquared(point.position) < point.radius ** 2) tank.team === 'ally' ? allies++ : enemies++
      if (!this.dead && !this.playerTank && this.camera.position.distanceToSquared(point.position) < point.radius ** 2) allies++
      let team: Team | null = allies && !enemies ? 'ally' : enemies && !allies ? 'enemy' : null
      if (this.campaign.rule === 'assault' && team !== attacker) team = null
      if (captureAllowed && team && team !== point.owner) {
        if (point.capturing !== team) { point.progress = Math.max(0, point.progress - dt * .8); if (!point.progress) point.capturing = team }
        else point.progress = Math.min(1, point.progress + dt * (.12 + Math.min(3, team === 'ally' ? allies : enemies) * .045))
        if (point.progress >= 1) { point.owner = team; point.capturing = null; point.progress = 0; this.awardCapture(point, team); if (this.campaign.rule === 'assault') { if (this.isSonghuOperation()) { if (this.activeAssaultObjectives().every(objective => objective.owner === attacker)) { this.advanceSonghuOperation(now); if (this.matchOver) return } } else { this.assaultIndex++; const ticketIndex = attacker === 'ally' ? 0 : 1; this.tickets[ticketIndex] = Math.min(999, this.tickets[ticketIndex] + 40); if (this.assaultIndex >= this.objectives.length) { this.finish(attacker); return } this.status = `下一目标：${this.objectives[this.assaultIndex].id} 点`; this.statusUntil = now + 2.2 } } }
      } else { point.progress = Math.max(0, point.progress - dt * .06); if (!point.progress) point.capturing = null }
      const locked = this.campaign.rule === 'assault' && !activeIndices.includes(pointIndex), color = locked ? 0x4c504b : point.owner === 'ally' ? 0x557ea8 : point.owner === 'enemy' ? 0xa54c3e : 0xd4cdb8
      ;(point.ring.material as THREE.MeshBasicMaterial).color.setHex(color); (point.flag.material as THREE.MeshBasicMaterial).color.setHex(color)
      point.flag.position.y = 4.15 - point.progress * 1.2
      if (point.owner === 'ally') ownedAllies++; if (point.owner === 'enemy') ownedEnemies++
      if (captureAllowed && allies && enemies) objectiveAlerts.push(`⚔ ${point.id} 点争夺中`)
      else if (captureAllowed && point.capturing && point.progress > 0) { const percent = Math.round(point.progress * 100); objectiveAlerts.push(point.capturing === 'enemy' ? `⚠ ${point.id} 点遭到攻击 · ${percent}%` : `◆ 正在占领 ${point.id} 点 · ${percent}%`) }
      if (!this.dead && captureAllowed && this.camera.position.distanceToSquared(point.position) < point.radius ** 2) playerCapture = attacker === 'enemy' ? `防守 ${point.id} 点` : point.owner !== 'ally' ? `反攻 ${point.id}点 ${Math.round(point.progress * 100)}%` : `守住 ${point.id} 点`
    }
    if (objectiveAlerts.length) playerCapture = objectiveAlerts.join('　')
    const balance = ownedAllies - ownedEnemies
    if (this.campaign.rule === 'conquest') { if (balance > 0) this.tickets[1] = Math.max(0, this.tickets[1] - dt * balance * .12); if (balance < 0) this.tickets[0] = Math.max(0, this.tickets[0] + dt * balance * .12) }
    if (this.campaign.rule === 'demolition' && !playerCapture) playerCapture = `补给库剩余 ${this.depots.filter(depot => !depot.destroyed).length} / ${this.depots.length}`
    const flags = this.objectives.map((o, index) => `${this.campaign.rule === 'assault' && !activeIndices.includes(index) ? '×' : o.owner === 'ally' ? '◆' : o.owner === 'enemy' ? '◇' : '○'}${o.id}`).join('　')
    const deploymentSpawns = this.objectives.filter((o, index) => this.objectiveDeployable(o, 'ally') && (this.campaign.rule !== 'assault' || activeIndices.includes(index))).map(o => o.id)
    if (this.tanks.some(item => item.team === 'ally' && item.alive && !item.playerDriven && this.vehicleDeployable(item.root, item.team, item.lastDamageAt))) deploymentSpawns.push('vehicle-tank')
    if (this.transports.some(item => item.team === 'ally' && item.alive && !item.playerDriven && this.vehicleDeployable(item.root, item.team, item.lastDamageAt))) deploymentSpawns.push('vehicle-transport')
    if (this.planes.some(item => item.team === 'ally' && item.alive && !item.playerDriven)) deploymentSpawns.push('vehicle-plane')
    this.events.battle([Math.ceil(this.tickets[0]), Math.ceil(this.tickets[1])], flags, playerCapture, deploymentSpawns, Math.ceil(this.matchTime))
    if (!this.matchOver && (this.tickets[0] <= 0 || this.tickets[1] <= 0)) this.finish(this.tickets[0] > 0 ? 'ally' : 'enemy')
    if (!this.matchOver && this.matchTime <= 0) {
      if (this.campaign.rule === 'assault' || this.campaign.rule === 'demolition') { const currentAttacker = this.campaign.rule === 'assault' ? this.assaultAttacker() : this.campaign.attacker ?? 'ally'; this.finish(currentAttacker === 'ally' ? 'enemy' : 'ally'); return }
      if (this.tickets[0] !== this.tickets[1]) { this.finish(this.tickets[0] > this.tickets[1] ? 'ally' : 'enemy'); return }
      this.finish(ownedAllies >= ownedEnemies ? 'ally' : 'enemy')
    }
  }
  private update(dt: number, time: number) {
    this.fxPool.updateTracers(this.scene)
    if (!this.active || this.matchOver || this.paused) { this.audio.stopEngine(); if (this.combatLogBuffer.length) this.flushCombatLog(false); return }
    this.refreshCombatTargets()
    this.updateSun()
    if (this.playerTank) { const load = this.keys.has('KeyW') || this.keys.has('KeyS') ? 1 : this.keys.has('KeyA') || this.keys.has('KeyD') ? .65 : .18, damage = Math.max(1 - this.playerTank.engine / 100, 1 - this.playerTank.hp / this.playerTank.maxHp); this.audio.engine(load, damage) } else this.audio.stopEngine()
    if ((this.parachuting || this.playerTransportPassenger || this.playerMortar || this.playerEmplacement || this.playerMG) && this.camera.fov !== 72) this.resetCameraView()
    this.updateGrenadeCook(dt, time); this.updateConstructionRisers(time); if (!this.dead) { this.updateBandage(time); this.updateSupplyAction(time); this.updateBuildAction(time) }
    if (!this.dead) { if (this.parachuting) this.updateParachute(dt); else if (this.playerPlane) { const plane = this.playerPlane; if (plane.root.position.y < 2.25) this.hurtPlayer(999, plane.root.position, `${plane.name} · 驾驶失事坠毁`); if (!this.dead) this.updatePlayerPlane(dt) } else if (this.playerTank) this.updatePlayerTank(dt); else if (this.playerTransportPassenger) this.updatePlayerTransportPassenger(); else if (this.playerTransport) this.updatePlayerTransport(dt); else if (this.playerMortar) this.updatePlayerMortar(dt); else if (this.playerEmplacement) this.updatePlayerEmplacement(); else if (this.playerMG) this.updatePlayerMachineGun(dt); else this.updatePlayer(dt, time) } else this.updatePlayerDowned(time)
    this.updateBots(dt, time); if (this.matchOver) return; this.updateTanks(dt, time); this.updateTransports(dt, time); this.updateEmplacements(time); this.updateMachineGuns(dt, time); this.updatePlanes(dt, time); this.updatePlaneWrecks(dt, time); this.updateBailedPilots(dt, time); if (this.matchOver) return; this.updateObjectives(dt); if (this.matchOver) return; this.updateGrenades(dt, time); this.updateCannonShells(dt); this.updateArtillery(time); this.updateSmoke(dt, time); this.updateSuppression(dt); this.updateMedkits(time); this.updateEquipment(time); this.updateTactical(time); this.updateWeather(dt, time); this.sky.update(dt, this.camera.position); this.updateCorpses(dt); this.updateParticles(dt); this.updateCasings(dt); if (this.squadMarker.visible) { this.squadMarker.rotation.y += dt * 2.2; this.squadMarker.position.y = 2.8 + Math.sin(time * 3) * .22 } const squad = this.bots.filter(bot => bot.inSquad); this.events.squad(squad.filter(bot => bot.alive).length, squad.length, this.squadMode === 'move' ? '执行进攻指令' : '自主作战')
  }
  private resetCameraView(fov = 72) { this.camera.fov = fov; this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ'); this.camera.updateProjectionMatrix() }
  private resize() { this.camera.aspect = innerWidth / innerHeight; this.camera.updateProjectionMatrix(); this.renderer.setSize(innerWidth, innerHeight, false) }
  private loop = () => { requestAnimationFrame(this.loop); const dt = Math.min(this.clock.getDelta(), .05); this.update(dt, performance.now() / 1000); this.renderer.render(this.scene, this.camera) }
}
