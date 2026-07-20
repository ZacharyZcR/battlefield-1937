export type CampaignTheme = 'delta' | 'ruin' | 'canal' | 'green' | 'loess' | 'jungle' | 'alpine'

export type Campaign = {
  id: string
  year: number
  name: string
  location: string
  battlefield: string
  date: string
  objective: string
  mode: string
  rule: 'conquest' | 'assault' | 'demolition'
  attacker?: 'ally' | 'enemy'
  theme: CampaignTheme
  weather: string
  tickets: number
  allies: number
  enemies: number
  flags: readonly { id: string; x: number; z: number; radius: number }[]
  /** Optional playable extents. Defaults: halfWidth 28, halfDepth 58. */
  bounds?: { halfWidth?: number; halfDepth?: number }
  /** Optional layout flavor. Defaults: road 'straight', blocks by theme ('street' urban), density 1. */
  layout?: {
    road?: 'straight' | 's-curve' | 'rail-side'
    blocks?: 'street' | 'village' | 'forest' | 'terraces'
    density?: number
  }
}

export const campaigns: readonly Campaign[] = [
  { id: 'songhu', year: 1937, name: '淞沪会战', location: '上海', battlefield: '八字桥防线', date: '1937年8月13日', objective: '逐次守卫八字桥街区', mode: '攻防 · 日军进攻', rule: 'assault', attacker: 'enemy', theme: 'delta', weather: '阴雨', tickets: 120, allies: 5, enemies: 12, flags: [{ id: 'A', x: -2, z: -30, radius: 5 }, { id: 'B', x: 2, z: 2, radius: 5 }, { id: 'C', x: -1, z: 32, radius: 5 }], layout: { road: 'straight', blocks: 'street' } },
  { id: 'nanjing', year: 1937, name: '南京保卫战', location: '南京', battlefield: '中华门阵地', date: '1937年12月9日', objective: '逐次守住中华门外防线', mode: '攻防 · 孤城坚守', rule: 'assault', attacker: 'enemy', theme: 'ruin', weather: '阴霾', tickets: 110, allies: 6, enemies: 14, flags: [{ id: 'A', x: 2, z: -38, radius: 5 }, { id: 'B', x: -2, z: -14, radius: 5 }, { id: 'C', x: 2, z: 12, radius: 5 }, { id: 'D', x: -1, z: 38, radius: 5 }], layout: { road: 'straight', blocks: 'street' } },
  { id: 'taierzhuang', year: 1938, name: '台儿庄战役', location: '台儿庄', battlefield: '运河街垒', date: '1938年3月24日', objective: '沿运河逐次夺回城镇据点', mode: '攻防 · 国军反攻', rule: 'assault', attacker: 'ally', theme: 'canal', weather: '多云', tickets: 140, allies: 7, enemies: 13, flags: [{ id: 'A', x: 2, z: 40, radius: 5 }, { id: 'B', x: -2, z: 14, radius: 5 }, { id: 'C', x: 2, z: -13, radius: 5 }, { id: 'D', x: -2, z: -39, radius: 5 }], layout: { road: 'rail-side', blocks: 'street' } },
  { id: 'wuhan', year: 1938, name: '武汉会战', location: '武汉', battlefield: '长江北岸', date: '1938年6月11日', objective: '控制长江沿岸五处要点', mode: '征服 · 五点争夺', rule: 'conquest', theme: 'green', weather: '阵雨', tickets: 160, allies: 8, enemies: 15, flags: [{ id: 'A', x: -14, z: -44, radius: 6 }, { id: 'B', x: 12, z: -23, radius: 6 }, { id: 'C', x: 0, z: 0, radius: 6.5 }, { id: 'D', x: -12, z: 23, radius: 6 }, { id: 'E', x: 14, z: 44, radius: 6 }], bounds: { halfWidth: 30 }, layout: { road: 's-curve', blocks: 'village', density: 1.1 } },
  { id: 'baituan', year: 1940, name: '百团大战', location: '华北', battlefield: '正太铁路', date: '1940年8月20日', objective: '摧毁铁路沿线三座日军补给库', mode: '破袭 · 铁路交通线', rule: 'demolition', attacker: 'ally', theme: 'loess', weather: '晴朗', tickets: 130, allies: 8, enemies: 13, flags: [{ id: 'A', x: 13, z: -34, radius: 6 }, { id: 'B', x: -14, z: 0, radius: 6 }, { id: 'C', x: 12, z: 35, radius: 6 }], layout: { road: 'rail-side', blocks: 'terraces' } },
  { id: 'changsha', year: 1941, name: '长沙会战', location: '长沙', battlefield: '捞刀河防线', date: '1941年9月17日', objective: '逐次守卫湘北纵深阵地', mode: '攻防 · 焦土御敌', rule: 'assault', attacker: 'enemy', theme: 'green', weather: '雷雨', tickets: 145, allies: 7, enemies: 15, flags: [{ id: 'A', x: -13, z: -40, radius: 6 }, { id: 'B', x: 11, z: -14, radius: 6 }, { id: 'C', x: -12, z: 14, radius: 6 }, { id: 'D', x: 13, z: 40, radius: 6 }], layout: { road: 's-curve', blocks: 'village' } },
  { id: 'burma', year: 1942, name: '中国远征军', location: '滇缅', battlefield: '滇缅公路', date: '1942年3月8日', objective: '控制密林中的运输生命线', mode: '征服 · 丛林争夺', rule: 'conquest', theme: 'jungle', weather: '暴雨', tickets: 150, allies: 7, enemies: 14, flags: [{ id: 'A', x: 15, z: -38, radius: 6 }, { id: 'B', x: -14, z: -12, radius: 6 }, { id: 'C', x: 13, z: 15, radius: 6 }, { id: 'D', x: -15, z: 40, radius: 6 }], layout: { road: 's-curve', blocks: 'forest', density: 1.3 } },
  { id: 'changde', year: 1943, name: '常德会战', location: '常德', battlefield: '常德城防', date: '1943年11月18日', objective: '逐次固守孤城核心阵地', mode: '攻防 · 孤城死守', rule: 'assault', attacker: 'enemy', theme: 'ruin', weather: '阴霾', tickets: 105, allies: 6, enemies: 16, flags: [{ id: 'A', x: -2, z: -40, radius: 5 }, { id: 'B', x: 2, z: -14, radius: 5 }, { id: 'C', x: -2, z: 14, radius: 5 }, { id: 'D', x: 2, z: 40, radius: 5 }], bounds: { halfWidth: 24 }, layout: { road: 'straight', blocks: 'street' } },
  { id: 'xiangxi', year: 1945, name: '湘西会战', location: '雪峰山', battlefield: '芷江防线', date: '1945年4月9日', objective: '逐次夺取山地据点发动反攻', mode: '攻防 · 国军反攻', rule: 'assault', attacker: 'ally', theme: 'alpine', weather: '山雨', tickets: 170, allies: 9, enemies: 14, flags: [{ id: 'A', x: -14, z: 41, radius: 6 }, { id: 'B', x: 13, z: 15, radius: 6 }, { id: 'C', x: -12, z: -14, radius: 6 }, { id: 'D', x: 14, z: -40, radius: 6 }], bounds: { halfWidth: 32 }, layout: { road: 's-curve', blocks: 'terraces' } },
]
