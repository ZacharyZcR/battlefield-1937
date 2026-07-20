# 战地 1937 / Battlefield 1937

[中文](#中文) · [English](#english)

## 中文

《战地 1937》是一款以中国人民抗日战争为背景的单机第一人称战场游戏原型。项目并非表现一段孤立的战斗，而是计划通过连续战役呈现 1937—1945 年间的整体战争进程。

当前主版本使用 TypeScript、Three.js 与 Vite 开发，可直接在现代桌面浏览器中运行。仓库内另有 Godot 迁移实验，后续开发以 `web/` 为准。

### 当前内容

- 多场战役与战争进度档案
- 步兵移动、瞄准、射击、换弹、近战与多兵种装备
- 双方步兵 AI、增援、战术目标、掩体与基础寻路
- 坦克、运兵车、飞机与固定火炮
- 装甲分区、穿深、乘员和载具部件损伤
- 建筑破坏、废墟、弹道遮挡与战场工事
- 占领、进攻和爆破等战斗规则
- 命中伤害、击杀反馈、连杀提示与战场记分板
- 倒地救治、医疗兵救援、放弃治疗与死亡回放
- 持久化战斗日志，用于复盘伤害来源和载具销毁问题

### 本地运行

需要 Node.js 和 npm。

```bash
cd web
npm install
npm run dev
```

生产构建：

```bash
cd web
npm run build
npm run preview
```

### 操作

| 按键 | 操作 |
| --- | --- |
| `WASD` | 移动或驾驶 |
| 鼠标 | 观察与瞄准 |
| 左键 | 射击或载具主武器 |
| 右键 | 瞄准或载具副武器 |
| `R` | 换弹 |
| `1` / `2` | 切换武器 |
| `G` / `X` | 手雷 / 烟雾弹 |
| `H` / `V` | 使用绷带 / 刺刀近战 |
| `C` / `Z` | 蹲伏 / 卧倒 |
| `E` | 互动、进入或离开载具 |
| `T` / `Y` | 小队进攻 / 跟随命令 |
| `Tab` | 战场记分板 |
| 倒地时长按 `Space` | 放弃治疗并重新部署 |

### 战斗日志

战斗日志保存在浏览器 `localStorage` 的 `battlefield1937_combat_log` 中，最多保留最近 400 条记录。可在浏览器控制台执行以下命令导出 JSON：

```js
exportBattlefield1937Log()
```

### GitHub Pages

推送到 `main` 后，GitHub Actions 会构建 `web/` 并发布到 GitHub Pages。首次使用时，在仓库的 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。

## English

Battlefield 1937 is a single-player first-person battlefield prototype set during China's War of Resistance against Japanese Aggression. Rather than depicting one isolated engagement, the project aims to portray the wider 1937–1945 war through a connected campaign.

The active version is built with TypeScript, Three.js, and Vite for modern desktop browsers. A Godot migration experiment also remains in the repository, while continued development targets `web/`.

### Current Features

- Multiple battles and persistent war progression
- Infantry movement, aiming, shooting, reloading, melee, and class equipment
- Friendly and enemy AI, reinforcements, objectives, cover, and basic pathfinding
- Tanks, troop transports, aircraft, and stationary weapons
- Armor zones, penetration, crew damage, and vehicle component damage
- Destructible buildings, rubble, projectile obstruction, and fortifications
- Conquest, assault, and demolition combat rules
- Hit damage, kill feedback, multikill awards, and scoreboard
- Downed state, medic revival, giving up, and death replay
- Persistent combat logs for damage and vehicle-destruction diagnosis

### Local Development

Node.js and npm are required.

```bash
cd web
npm install
npm run dev
```

Production build:

```bash
cd web
npm run build
npm run preview
```

### Controls

| Input | Action |
| --- | --- |
| `WASD` | Move or drive |
| Mouse | Look and aim |
| Left mouse button | Fire or use the vehicle's primary weapon |
| Right mouse button | Aim or use the vehicle's secondary weapon |
| `R` | Reload |
| `1` / `2` | Switch weapons |
| `G` / `X` | Grenade / smoke grenade |
| `H` / `V` | Bandage / bayonet melee |
| `C` / `Z` | Crouch / prone |
| `E` | Interact, enter, or leave a vehicle |
| `T` / `Y` | Order squad to attack / follow |
| `Tab` | Scoreboard |
| Hold `Space` while downed | Give up and redeploy |

### Combat Logs

Up to 400 recent events are stored in browser `localStorage` under `battlefield1937_combat_log`. Run the following command in the browser console to export them as JSON:

```js
exportBattlefield1937Log()
```

### GitHub Pages

Every push to `main` triggers a GitHub Actions build of `web/` and deploys it to GitHub Pages. For the first deployment, select **GitHub Actions** under **Settings → Pages → Build and deployment** in the repository.

## Repository Layout

```text
web/      Active Three.js + Vite version
godot/    Godot migration experiment
_dev/     Development screenshots
```

## Status and Historical Context

This project is currently a playable prototype. Art, animation, AI navigation, map design, vehicle physics, performance, and campaign content remain in active development.

The project addresses a historical war and the resistance of the Chinese people against Japanese invasion. Its units, equipment, and battlefield systems are still prototype representations and should not be treated as a strictly accurate historical reconstruction.

## License / 许可证

项目代码以 [MIT License](LICENSE) 开源。第三方素材遵循各自目录内标注的许可证。

Project source code is released under the [MIT License](LICENSE). Third-party assets remain subject to the licenses documented in their respective directories.
