export type WeaponKind = 'bolt' | 'semi' | 'auto'

export type Loadout = {
  id: string
  name: string
  role: string
  weapon: string
  mode: string
  kind: WeaponKind
  damage: number
  headMultiplier: number
  rpm: number
  magazine: number
  reserve: number
  reload: number
  recoil: number
  spreadHip: number
  spreadAds: number
  vehicleDamage?: number
  armorPen?: number
  antiTankGrenades?: number
  grenades: number
  aid: number
}

export const loadouts: readonly Loadout[] = [
  { id: 'rifleman', name: '步枪兵', role: '中远距离主力', weapon: '中正式步骑枪', mode: '栓动', kind: 'bolt', damage: 86, headMultiplier: 2.5, rpm: 52, magazine: 5, reserve: 50, reload: 3.2, recoil: .075, spreadHip: 4.5, spreadAds: .08, grenades: 2, aid: 2 },
  { id: 'assault', name: '冲锋枪手', role: '近距离突击', weapon: '花机关 MP18', mode: '全自动', kind: 'auto', damage: 20, headMultiplier: 1.8, rpm: 500, magazine: 32, reserve: 160, reload: 2.9, recoil: .035, spreadHip: 3.2, spreadAds: .85, grenades: 3, aid: 2 },
  { id: 'support', name: '机枪手', role: '持续火力压制', weapon: '捷克式 ZB-26', mode: '全自动', kind: 'auto', damage: 31, headMultiplier: 1.9, rpm: 500, magazine: 20, reserve: 120, reload: 3.1, recoil: .052, spreadHip: 3.8, spreadAds: .5, grenades: 2, aid: 2 },
  { id: 'scout', name: '狙击手', role: '精确远程射击', weapon: '中正式狙击型', mode: '栓动 · 4x', kind: 'bolt', damage: 94, headMultiplier: 2.5, rpm: 50, magazine: 5, reserve: 40, reload: 3.4, recoil: .085, spreadHip: 5, spreadAds: .02, grenades: 1, aid: 2 },
  { id: 'medic', name: '医护兵', role: '救护与自卫', weapon: '汉阳造八八式', mode: '栓动', kind: 'bolt', damage: 78, headMultiplier: 2.4, rpm: 50, magazine: 5, reserve: 45, reload: 3.4, recoil: .07, spreadHip: 5, spreadAds: .12, grenades: 2, aid: 2 },
  { id: 'anti-tank', name: '反坦克兵', role: '摧毁装甲与工事', weapon: '博伊斯反坦克枪', mode: '栓动 · 13.9mm', kind: 'bolt', damage: 92, headMultiplier: 1.6, rpm: 24, magazine: 5, reserve: 20, reload: 3.8, recoil: .21, spreadHip: 6, spreadAds: .06, vehicleDamage: 125, armorPen: 48, antiTankGrenades: 3, grenades: 1, aid: 2 },
  { id: 'engineer', name: '工程兵', role: '构筑掩体与维修载具', weapon: '老套筒步枪', mode: '栓动', kind: 'bolt', damage: 54, headMultiplier: 2.1, rpm: 44, magazine: 5, reserve: 30, reload: 3.7, recoil: .075, spreadHip: 5.8, spreadAds: .3, grenades: 1, aid: 2 },
  { id: 'mortar', name: '迫击炮兵', role: '架设曲射火力支援', weapon: '汉阳造 / 轻型迫击炮', mode: '栓动 · 曲射支援', kind: 'bolt', damage: 68, headMultiplier: 2.2, rpm: 46, magazine: 5, reserve: 35, reload: 3.5, recoil: .075, spreadHip: 5.4, spreadAds: .24, grenades: 1, aid: 2 },
] as const

export const sidearm: Loadout = { id: 'sidearm', name: '副武器', role: '近距离应急', weapon: '毛瑟 C96 手枪', mode: '半自动', kind: 'semi', damage: 34, headMultiplier: 2, rpm: 300, magazine: 10, reserve: 40, reload: 2.35, recoil: .042, spreadHip: 2.7, spreadAds: .5, grenades: 0, aid: 0 }

const cpcOverrides: Partial<Record<string, Partial<Loadout>>> = {
  rifleman: { weapon: '汉阳造八八式', damage: 78, headMultiplier: 2.4, rpm: 50, magazine: 5, reserve: 45, reload: 3.4, recoil: .07, spreadHip: 5, spreadAds: .12 },
  assault: { weapon: '快慢机（盒子炮）', mode: '全自动', damage: 21, headMultiplier: 1.9, rpm: 620, magazine: 20, reserve: 120, reload: 2.4, recoil: .05, spreadHip: 3.8, spreadAds: .95 },
  support: { weapon: '歪把子（缴获）', damage: 27, headMultiplier: 1.9, rpm: 480, magazine: 30, reserve: 120, reload: 3.8, recoil: .055, spreadHip: 4.2, spreadAds: .6 },
  medic: { weapon: '汉阳造八八式', damage: 78, headMultiplier: 2.4, rpm: 50, magazine: 5, reserve: 45, reload: 3.4, recoil: .07, spreadHip: 5, spreadAds: .12 },
  'anti-tank': { weapon: '汉阳造八八式', mode: '栓动 · 反坦克手雷', damage: 78, headMultiplier: 2.4, rpm: 50, magazine: 5, reserve: 45, reload: 3.4, recoil: .07, spreadHip: 5, spreadAds: .12, vehicleDamage: undefined, armorPen: undefined, antiTankGrenades: 4 },
  mortar: { weapon: '老套筒 / 轻型迫击炮', damage: 54, headMultiplier: 2.1, rpm: 44, magazine: 5, reserve: 30, reload: 3.7, recoil: .075, spreadHip: 5.8, spreadAds: .3 },
}

export const loadoutsForCampaign = (campaignId: string): readonly Loadout[] => campaignId === 'baituan' ? loadouts.map(loadout => ({ ...loadout, ...cpcOverrides[loadout.id] })) : loadouts
