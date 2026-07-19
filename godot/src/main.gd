extends Node3D

const CHAPTERS := [
	["1937", "淞沪会战", "血战上海 · 保卫国土"],
	["1937", "南京保卫战", "金陵危城 · 浴血坚守"],
	["1938", "台儿庄战役", "运河决战 · 正面反攻"],
	["1938", "武汉会战", "长江防线 · 举国鏖兵"],
	["1940", "百团大战", "破袭交通 · 深入敌后"],
	["1941", "长沙会战", "焦土御敌 · 湘北鏖战"],
	["1942", "滇缅远征", "十万青年 · 血战异域"],
	["1944", "常德会战", "孤城喋血 · 虎贲死守"],
	["1945", "湘西会战", "雪峰山下 · 最后反攻"],
]
const SOLDIER_SCENE := preload("res://assets/third_party/ww2_soldier/source/LowpolySoldier/LowpolySoldier.fbx")

var player: CharacterBody3D
var camera: Camera3D
var weapon: Node3D
var menu: Control
var hud: Control
var playing := false
var yaw := 0.0
var pitch := -0.08
var recoil := 0.0
var ammo := 5
var reserve := 40
var shot_flash: ColorRect
var ammo_label: Label
var objective_label: Label
var hit_marker: Label
var kill_feed: Label
var damage_overlay: ColorRect
var death_screen: Control
var bolt: Node3D
var clip_node: Node3D
var player_health := 100
var kills := 0
var reloading := false
var reload_token := 0
var game_over := false
var rng := RandomNumberGenerator.new()
var allies: Array[CharacterBody3D] = []
var enemies: Array[CharacterBody3D] = []

const UI_INK := Color("121813")
const UI_PANEL := Color("18201b")
const UI_PANEL_SOFT := Color("212b24")
const UI_PAPER := Color("ded0a8")
const UI_MUTED := Color("918d79")
const UI_GREEN := Color("526b4f")
const UI_GREEN_BRIGHT := Color("78906d")
const UI_GOLD := Color("c99a49")
const UI_RED := Color("9e3f32")

func _ready() -> void:
	rng.seed = 1937
	build_environment()
	build_battlefield()
	build_player()
	build_interface()

func material(color: Color, roughness := 0.85) -> StandardMaterial3D:
	var mat := StandardMaterial3D.new()
	mat.albedo_color = color
	mat.roughness = roughness
	return mat

func mesh_box(parent: Node3D, size: Vector3, pos: Vector3, color: Color, collision := false) -> MeshInstance3D:
	var node := MeshInstance3D.new()
	var shape := BoxMesh.new()
	shape.size = size
	node.mesh = shape
	node.position = pos
	node.material_override = material(color)
	parent.add_child(node)
	if collision:
		var body := StaticBody3D.new()
		var collider := CollisionShape3D.new()
		var box := BoxShape3D.new()
		box.size = size
		collider.shape = box
		body.add_child(collider)
		node.add_child(body)
	return node

func mesh_cylinder(parent: Node3D, radius: float, height: float, pos: Vector3, color: Color) -> MeshInstance3D:
	var node := MeshInstance3D.new()
	var shape := CylinderMesh.new()
	shape.top_radius = radius
	shape.bottom_radius = radius * 1.04
	shape.height = height
	shape.radial_segments = 10
	node.mesh = shape
	node.position = pos
	node.material_override = material(color)
	parent.add_child(node)
	return node

func build_environment() -> void:
	var world_env := WorldEnvironment.new()
	var env := Environment.new()
	env.background_mode = Environment.BG_COLOR
	env.background_color = Color("758086")
	env.ambient_light_source = Environment.AMBIENT_SOURCE_COLOR
	env.ambient_light_color = Color("aeb5ad")
	env.ambient_light_energy = 0.58
	env.fog_enabled = true
	env.fog_light_color = Color("a3a59c")
	env.fog_density = 0.012
	env.fog_height = 1.0
	env.fog_height_density = 0.08
	env.tonemap_mode = Environment.TONE_MAPPER_FILMIC
	world_env.environment = env
	add_child(world_env)

	var sun := DirectionalLight3D.new()
	sun.rotation_degrees = Vector3(-48, -32, 0)
	sun.light_color = Color("d8c49d")
	sun.light_energy = 1.15
	sun.shadow_enabled = true
	add_child(sun)

func build_battlefield() -> void:
	mesh_box(self, Vector3(120, 0.4, 120), Vector3(0, -0.2, 0), Color("4d5145"), true)
	mesh_box(self, Vector3(14, 0.06, 120), Vector3(0, 0.04, 0), Color("3a3b38"))
	mesh_box(self, Vector3(120, 0.08, 9), Vector3(0, 0.05, -19), Color("3a3b38"))
	# 上海街区骨架：人行道、石库门店面、双轨和十字路口。
	for side in [-1, 1]:
		mesh_box(self, Vector3(3.8, 0.24, 120), Vector3(side * 8.9, 0.12, 0), Color("77756b"), true)
		mesh_box(self, Vector3(120, 0.25, 2.2), Vector3(0, 0.13, -24.2 if side < 0 else -13.8), Color("77756b"), true)
	for rail_x in [-2.25, 2.25]:
		mesh_box(self, Vector3(0.09, 0.05, 120), Vector3(rail_x, 0.1, 0), Color("737973"))
		for tie_z in range(-56, 57, 3):
			mesh_box(self, Vector3(1.35, 0.05, 0.16), Vector3(rail_x, 0.08, tie_z), Color("49382b"))

	for side: int in [-1, 1]:
		for row in range(8):
			var z := -49.0 + row * 14.0
			var width := rng.randf_range(8.0, 13.0)
			var height := rng.randf_range(7.0, 15.0)
			var x: float = side * rng.randf_range(12.0, 19.0)
			var house := Node3D.new()
			house.position = Vector3(x, 0, z)
			add_child(house)
			var brick := Color("71645a") if row % 3 else Color("665d54")
			mesh_box(house, Vector3(width, height, 10), Vector3(0, height / 2.0, 0), brick, true)
			build_shopfront(house, -side * (width / 2.0 + 0.04), side, width, row)
			for floor_idx in range(int(height / 3.0)):
				for col in [-1.0, 1.0]:
					var wx: float = -side * (width / 2.0 + 0.012)
					var window := mesh_box(house, Vector3(0.06, 1.15, 1.05), Vector3(wx, 2.1 + floor_idx * 2.7, col * 2.3), Color("242b2b"))
					window.rotation.y = 0

	for z in [-31.0, 8.0, 34.0]:
		build_barricade(Vector3(rng.randf_range(-2.0, 2.0), 0, z))
	for pole_z in range(-50, 51, 16):
		build_utility_pole(Vector3(-10.3, 0, pole_z))
	# 被击毁的电车成为中段主掩体和视觉焦点。
	var tram := Node3D.new()
	tram.position = Vector3(2.0, 0.1, -7.0)
	tram.rotation.y = 0.1
	add_child(tram)
	mesh_box(tram, Vector3(3.0, 2.8, 7.8), Vector3(0, 1.5, 0), Color("4f594b"), true)
	mesh_box(tram, Vector3(3.1, 0.18, 8.0), Vector3(0, 3.0, 0), Color("2d332e"))
	for window_z in [-2.4, -0.8, 0.8, 2.4]:
		for side in [-1, 1]:
			mesh_box(tram, Vector3(0.05, 0.85, 1.0), Vector3(side * 1.52, 2.0, window_z), Color("242d2c"))
	for i in range(14):
		var p := Vector3(rng.randf_range(-7.0, 7.0), 0, rng.randf_range(-52.0, 52.0))
		mesh_box(self, Vector3(rng.randf_range(0.3, 1.3), rng.randf_range(0.2, 0.8), rng.randf_range(0.4, 1.5)), p, Color("554b40"))

	# 双方步兵必须从出生点就进入玩家视野，不能只是地图远处的摆件。
	for i in range(5):
		var ally := build_soldier(Vector3(-4.5 + i * 2.2, 0.0, 40.0 - abs(i - 2) * 1.8), false, "二排 %d号" % (i + 1))
		allies.append(ally)
	for i in range(10):
		var enemy := build_soldier(Vector3(-7.0 + (i % 5) * 3.5, 0.0, 10.0 - (i / 5) * 8.0), true, "日军步兵")
		enemies.append(enemy)

func build_barricade(pos: Vector3) -> void:
	var root := Node3D.new()
	root.position = pos
	add_child(root)
	for i in range(7):
		mesh_box(root, Vector3(1.45, 0.45, 0.52), Vector3((i - 3) * 1.1, 0.28, 0), Color("76684e"), true)
	for i in range(5):
		mesh_box(root, Vector3(1.45, 0.45, 0.52), Vector3((i - 2) * 1.1, 0.73, 0), Color("6b5e49"), true)

func build_shopfront(house: Node3D, face_x: float, side: int, width: float, variant: int) -> void:
	var frame_color := Color("353a34")
	mesh_box(house, Vector3(0.09, 2.5, width * 0.48), Vector3(face_x, 1.25, 0), frame_color)
	for panel_z in [-2.4, 0.0, 2.4]:
		mesh_box(house, Vector3(0.1, 1.45, 1.65), Vector3(face_x - side * 0.015, 1.45, panel_z), Color("293333"))
	var sign := mesh_box(house, Vector3(0.12, 0.72, 4.8), Vector3(face_x - side * 0.03, 3.15, 0), Color("6f5937") if variant % 2 else Color("5d352f"))
	sign.set_meta("shop_sign", true)

func build_utility_pole(pos: Vector3) -> void:
	var pole := Node3D.new()
	pole.position = pos
	add_child(pole)
	mesh_cylinder(pole, 0.11, 6.8, Vector3(0, 3.4, 0), Color("44372b"))
	mesh_box(pole, Vector3(2.2, 0.1, 0.12), Vector3(0, 6.2, 0), Color("493b2e"))
	for wire_x in [-0.85, 0.0, 0.85]:
		mesh_cylinder(pole, 0.07, 0.13, Vector3(wire_x, 6.05, 0), Color("292c29"))

func build_soldier(pos: Vector3, enemy: bool, display_name: String) -> CharacterBody3D:
	var root := CharacterBody3D.new()
	root.position = pos
	root.set_meta("enemy", enemy)
	root.set_meta("health", 100)
	root.set_meta("base_x", pos.x)
	root.set_meta("phase", rng.randf_range(0.0, TAU))
	add_child(root)
	var collider := CollisionShape3D.new()
	var capsule := CapsuleShape3D.new()
	capsule.radius = 0.38
	capsule.height = 2.15
	collider.shape = capsule
	collider.position.y = 1.08
	root.add_child(collider)
	var visual := SOLDIER_SCENE.instantiate() as Node3D
	visual.name = "SoldierVisual"
	visual.position.y = 1.19
	visual.rotation.y = PI
	visual.scale = Vector3.ONE * 1.08
	root.add_child(visual)
	root.set_meta("skeleton", visual.get_node("Skeleton3D"))
	var tint := Color("b0a36d") if enemy else Color("657f72")
	for child in visual.get_node("Skeleton3D").get_children():
		if child is MeshInstance3D:
			var mesh_instance := child as MeshInstance3D
			for surface in range(mesh_instance.mesh.get_surface_count()):
				var source_mat := mesh_instance.get_active_material(surface)
				if source_mat is StandardMaterial3D:
					var soldier_mat := source_mat.duplicate() as StandardMaterial3D
					soldier_mat.albedo_color *= tint
					mesh_instance.set_surface_override_material(surface, soldier_mat)
	# 原资产是标准T Pose；骨骼下压双臂成为持枪/行军姿态。
	var skeleton := visual.get_node("Skeleton3D") as Skeleton3D
	skeleton.set_bone_pose_rotation(skeleton.find_bone("LeftArm"), Quaternion(Vector3.FORWARD, deg_to_rad(62.0)))
	skeleton.set_bone_pose_rotation(skeleton.find_bone("RightArm"), Quaternion(Vector3.FORWARD, deg_to_rad(-62.0)))
	skeleton.set_bone_pose_rotation(skeleton.find_bone("LeftForeArm"), Quaternion(Vector3.RIGHT, deg_to_rad(-35.0)))
	skeleton.set_bone_pose_rotation(skeleton.find_bone("RightForeArm"), Quaternion(Vector3.RIGHT, deg_to_rad(-48.0)))
	var rifle := Node3D.new()
	rifle.position = Vector3(0.26, 1.15, -0.28)
	rifle.rotation = Vector3(-0.15, 0, 0.12)
	root.add_child(rifle)
	mesh_box(rifle, Vector3(0.11, 0.13, 1.08), Vector3(0, 0, 0), Color("5b3a22"))
	var soldier_barrel := mesh_cylinder(rifle, 0.026, 0.92, Vector3(0, 0.02, -0.95), Color("242727"))
	soldier_barrel.rotation.x = PI / 2.0
	var marker := Label3D.new()
	marker.text = ("敌军  " if enemy else "友军  ") + display_name
	marker.position = Vector3(0, 2.85, 0)
	marker.font_size = 24
	marker.modulate = Color("d58b72") if enemy else Color("8fc6a0")
	marker.outline_size = 5
	marker.outline_modulate = Color(0.02, 0.025, 0.02, 0.9)
	marker.billboard = BaseMaterial3D.BILLBOARD_ENABLED
	marker.no_depth_test = true
	root.add_child(marker)
	return root

func build_player() -> void:
	player = CharacterBody3D.new()
	player.position = Vector3(0, 1.05, 48)
	add_child(player)
	var collider := CollisionShape3D.new()
	var capsule := CapsuleShape3D.new()
	capsule.radius = 0.38
	capsule.height = 1.8
	collider.shape = capsule
	player.add_child(collider)
	camera = Camera3D.new()
	camera.position = Vector3(0, 0.72, 0)
	camera.current = true
	player.add_child(camera)
	build_rifle()

func build_rifle() -> void:
	weapon = Node3D.new()
	weapon.position = Vector3(0.31, -0.27, -0.62)
	camera.add_child(weapon)
	var stock := mesh_box(weapon, Vector3(0.19, 0.2, 0.86), Vector3(0, -0.04, 0.18), Color("714824"))
	stock.rotation.x = -0.08
	mesh_box(weapon, Vector3(0.15, 0.16, 0.72), Vector3(0, 0.0, -0.58), Color("78502b"))
	mesh_box(weapon, Vector3(0.115, 0.13, 0.92), Vector3(0, 0.035, -0.75), Color("2c3030"))
	var barrel := mesh_cylinder(weapon, 0.027, 0.92, Vector3(0, 0.04, -1.45), Color("1f2222"))
	barrel.rotation.x = PI / 2.0
	mesh_box(weapon, Vector3(0.035, 0.12, 0.04), Vector3(0, 0.13, -1.88), Color("191a19"))
	mesh_box(weapon, Vector3(0.045, 0.12, 0.035), Vector3(0, 0.14, -0.54), Color("171918"))
	# 可动枪栓与弹夹，供射击/换弹动画使用。
	bolt = Node3D.new()
	bolt.position = Vector3(0.095, 0.09, -0.37)
	weapon.add_child(bolt)
	var bolt_body := mesh_cylinder(bolt, 0.035, 0.29, Vector3.ZERO, Color("555a57"))
	bolt_body.rotation.x = PI / 2.0
	var bolt_handle := mesh_cylinder(bolt, 0.018, 0.16, Vector3(0.07, -0.07, 0), Color("4a4f4d"))
	bolt_handle.rotation.z = PI / 2.0
	clip_node = Node3D.new()
	clip_node.position = Vector3(0, 0.18, -0.48)
	weapon.add_child(clip_node)
	for round_index in range(5):
		mesh_cylinder(clip_node, 0.012, 0.085, Vector3((round_index - 2) * 0.026, 0, 0), Color("b58a3c"))
	# 第一人称双手，避免枪械悬空。
	var left_hand := mesh_cylinder(weapon, 0.075, 0.35, Vector3(-0.12, -0.18, -0.72), Color("b28766"))
	left_hand.rotation.x = PI / 2.0
	left_hand.rotation.z = -0.22
	var right_hand := mesh_cylinder(weapon, 0.075, 0.34, Vector3(0.14, -0.18, -0.18), Color("b28766"))
	right_hand.rotation.x = PI / 2.0
	right_hand.rotation.z = 0.25

func build_interface() -> void:
	hud = Control.new()
	hud.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	hud.mouse_filter = Control.MOUSE_FILTER_IGNORE
	add_child(hud)

	# 任务简报：左上，分层而非裸文字。
	var mission := PanelContainer.new()
	mission.position = Vector2(34, 32)
	mission.size = Vector2(390, 104)
	mission.add_theme_stylebox_override("panel", panel_style(UI_PANEL, UI_GOLD, 1, 4))
	hud.add_child(mission)
	var mission_box := VBoxContainer.new()
	mission_box.add_theme_constant_override("separation", 3)
	mission_box.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	mission.add_child(mission_box)
	var mission_kicker := ui_label("当前任务  /  OBJECTIVE", 12, UI_GOLD)
	mission_box.add_child(mission_kicker)
	objective_label = Label.new()
	objective_label.text = "前往八字桥防线"
	objective_label.add_theme_font_size_override("font_size", 22)
	objective_label.add_theme_color_override("font_color", UI_PAPER)
	mission_box.add_child(objective_label)
	mission_box.add_child(ui_label("淞沪会战 · 上海 · 1937年8月13日", 13, UI_MUTED))

	# 顶部方位标尺。
	var compass := PanelContainer.new()
	compass.position = Vector2(590, 28)
	compass.size = Vector2(420, 54)
	compass.add_theme_stylebox_override("panel", panel_style(Color(0.05, 0.07, 0.055, 0.78), Color(1, 1, 1, 0.12), 1, 2))
	hud.add_child(compass)
	var compass_text := ui_label("西     285      西北     330      北      015", 13, UI_PAPER)
	compass_text.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	compass_text.vertical_alignment = VERTICAL_ALIGNMENT_CENTER
	compass.add_child(compass_text)

	# 小队状态。
	var squad := PanelContainer.new()
	squad.position = Vector2(34, 665)
	squad.size = Vector2(335, 170)
	squad.add_theme_stylebox_override("panel", panel_style(Color(0.05, 0.07, 0.055, 0.82), Color(1, 1, 1, 0.1), 1, 3))
	hud.add_child(squad)
	var squad_box := VBoxContainer.new()
	squad_box.add_theme_constant_override("separation", 5)
	squad.add_child(squad_box)
	squad_box.add_child(ui_label("二排一班   /   4人", 13, UI_GOLD))
	for soldier_name in ["王大山   步枪兵", "陈国栋   机枪手", "刘   志   医护兵"]:
		var line := ui_label("■  " + soldier_name, 14, UI_PAPER)
		squad_box.add_child(line)
	var health := ProgressBar.new()
	health.value = 82
	health.show_percentage = false
	health.custom_minimum_size = Vector2(300, 8)
	health.add_theme_stylebox_override("background", panel_style(Color("2a302b"), Color.TRANSPARENT, 0, 0))
	health.add_theme_stylebox_override("fill", panel_style(UI_GREEN_BRIGHT, Color.TRANSPARENT, 0, 0))
	squad_box.add_child(health)
	squad_box.add_child(ui_label("生命状态   82", 11, UI_MUTED))

	# 右下武器与弹药区域。
	var ammo_panel := PanelContainer.new()
	ammo_panel.position = Vector2(1240, 690)
	ammo_panel.size = Vector2(320, 150)
	ammo_panel.add_theme_stylebox_override("panel", panel_style(Color(0.05, 0.07, 0.055, 0.88), UI_GOLD, 1, 3))
	hud.add_child(ammo_panel)
	var ammo_box := VBoxContainer.new()
	ammo_box.alignment = BoxContainer.ALIGNMENT_CENTER
	ammo_panel.add_child(ammo_box)
	var weapon_name := ui_label("中正式步骑枪", 15, UI_GOLD)
	weapon_name.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	ammo_box.add_child(weapon_name)
	ammo_label = Label.new()
	ammo_label.add_theme_font_size_override("font_size", 40)
	ammo_label.add_theme_color_override("font_color", UI_PAPER)
	ammo_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	ammo_box.add_child(ammo_label)
	var fire_mode := ui_label("栓动   7.92×57mm", 12, UI_MUTED)
	fire_mode.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	ammo_box.add_child(fire_mode)

	var cross := Label.new()
	cross.text = "+"
	cross.position = Vector2(795, 437)
	cross.add_theme_font_size_override("font_size", 18)
	cross.add_theme_color_override("font_color", Color(0.88, 0.84, 0.72, 0.72))
	hud.add_child(cross)
	shot_flash = ColorRect.new()
	shot_flash.color = Color(1, 0.82, 0.45, 0)
	shot_flash.position = Vector2(794, 441)
	shot_flash.size = Vector2(14, 14)
	shot_flash.mouse_filter = Control.MOUSE_FILTER_IGNORE
	hud.add_child(shot_flash)
	hit_marker = Label.new()
	hit_marker.text = "×"
	hit_marker.position = Vector2(789, 429)
	hit_marker.add_theme_font_size_override("font_size", 28)
	hit_marker.add_theme_color_override("font_color", Color(1, 1, 1, 0))
	hud.add_child(hit_marker)
	kill_feed = ui_label("", 15, UI_PAPER)
	kill_feed.position = Vector2(1230, 160)
	kill_feed.size = Vector2(320, 150)
	kill_feed.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	hud.add_child(kill_feed)
	damage_overlay = ColorRect.new()
	damage_overlay.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	damage_overlay.color = Color(0.45, 0.02, 0.01, 0)
	damage_overlay.mouse_filter = Control.MOUSE_FILTER_IGNORE
	hud.add_child(damage_overlay)
	update_ammo()
	hud.hide()
	build_menu()
	build_death_screen()

func build_death_screen() -> void:
	death_screen = Control.new()
	death_screen.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	add_child(death_screen)
	var scrim := ColorRect.new()
	scrim.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	scrim.color = Color(0.08, 0.015, 0.01, 0.88)
	death_screen.add_child(scrim)
	var report := PanelContainer.new()
	report.position = Vector2(500, 250)
	report.size = Vector2(600, 380)
	report.add_theme_stylebox_override("panel", panel_style(UI_PANEL, UI_RED, 2, 4))
	death_screen.add_child(report)
	var report_box := VBoxContainer.new()
	report_box.alignment = BoxContainer.ALIGNMENT_CENTER
	report_box.add_theme_constant_override("separation", 16)
	report.add_child(report_box)
	var fallen := ui_label("阵 亡", 52, UI_PAPER)
	fallen.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	report_box.add_child(fallen)
	var quote := ui_label("身后是家国，脚下即阵地。", 18, UI_GOLD)
	quote.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	report_box.add_child(quote)
	var stats := ui_label("淞沪会战 · 八字桥防线\n本次作战击杀：0\n按 Enter 重新部署", 15, UI_MUTED)
	stats.name = "Stats"
	stats.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	report_box.add_child(stats)
	death_screen.hide()

func build_menu() -> void:
	menu = Control.new()
	menu.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	add_child(menu)
	var shade := ColorRect.new()
	shade.color = Color(0.035, 0.045, 0.037, 0.91)
	shade.set_anchors_and_offsets_preset(Control.PRESET_FULL_RECT)
	shade.mouse_filter = Control.MOUSE_FILTER_IGNORE
	menu.add_child(shade)
	var rule := ColorRect.new()
	rule.color = UI_GOLD
	rule.position = Vector2(72, 145)
	rule.size = Vector2(1450, 2)
	rule.mouse_filter = Control.MOUSE_FILTER_IGNORE
	menu.add_child(rule)
	var eyebrow := ui_label("中国人民抗日战争 · 1937—1945", 13, UI_GOLD)
	eyebrow.position = Vector2(76, 40)
	menu.add_child(eyebrow)
	var title := Label.new()
	title.text = "战 地 1937"
	title.position = Vector2(72, 60)
	title.add_theme_font_size_override("font_size", 62)
	title.add_theme_color_override("font_color", UI_PAPER)
	menu.add_child(title)
	var sub := Label.new()
	sub.text = "BATTLEFIELD 1937   /   单人战争史诗"
	sub.position = Vector2(1080, 91)
	sub.add_theme_font_size_override("font_size", 14)
	sub.add_theme_color_override("font_color", UI_MUTED)
	menu.add_child(sub)

	# 左侧主导航：焦点少且明确。
	var nav := VBoxContainer.new()
	nav.position = Vector2(72, 210)
	nav.size = Vector2(390, 470)
	nav.add_theme_constant_override("separation", 12)
	menu.add_child(nav)
	var start := menu_button("继续战争", "01", true)
	start.pressed.connect(start_game)
	nav.add_child(start)
	for pending_button in [menu_button("选择战役", "02"), menu_button("战争档案", "03"), menu_button("游戏设置", "04")]:
		pending_button.disabled = true
		pending_button.tooltip_text = "后续版本开放"
		nav.add_child(pending_button)
	var spacer := Control.new()
	spacer.custom_minimum_size.y = 52
	nav.add_child(spacer)
	nav.add_child(ui_label("当前进度", 11, UI_MUTED))
	var progress := ProgressBar.new()
	progress.value = 6
	progress.show_percentage = false
	progress.custom_minimum_size = Vector2(390, 6)
	progress.add_theme_stylebox_override("background", panel_style(Color("30362f"), Color.TRANSPARENT, 0, 0))
	progress.add_theme_stylebox_override("fill", panel_style(UI_GOLD, Color.TRANSPARENT, 0, 0))
	nav.add_child(progress)
	nav.add_child(ui_label("第一章 · 淞沪会战 · 06%", 13, UI_PAPER))

	# 右侧战役档案卡。
	var dossier := PanelContainer.new()
	dossier.position = Vector2(535, 190)
	dossier.size = Vector2(990, 610)
	dossier.add_theme_stylebox_override("panel", panel_style(Color(0.07, 0.09, 0.075, 0.96), Color(1, 1, 1, 0.12), 1, 6))
	menu.add_child(dossier)
	var dossier_margin := MarginContainer.new()
	dossier_margin.add_theme_constant_override("margin_left", 32)
	dossier_margin.add_theme_constant_override("margin_right", 32)
	dossier_margin.add_theme_constant_override("margin_top", 26)
	dossier_margin.add_theme_constant_override("margin_bottom", 24)
	dossier.add_child(dossier_margin)
	var dossier_box := VBoxContainer.new()
	dossier_box.add_theme_constant_override("separation", 10)
	dossier_margin.add_child(dossier_box)
	dossier_box.add_child(ui_label("战争全景  /  CAMPAIGN CHRONICLE", 12, UI_GOLD))
	var dossier_title := ui_label("从淞沪烽火，到湘西反攻", 28, UI_PAPER)
	dossier_box.add_child(dossier_title)
	dossier_box.add_child(ui_label("九个历史章节将构成完整的1937—1945单人战争线。每一章保留独立战场、部队与任务节奏。", 14, UI_MUTED))
	var separator := HSeparator.new()
	separator.add_theme_constant_override("separation", 10)
	dossier_box.add_child(separator)
	var timeline := GridContainer.new()
	timeline.columns = 3
	timeline.add_theme_constant_override("h_separation", 10)
	timeline.add_theme_constant_override("v_separation", 10)
	dossier_box.add_child(timeline)
	for i in range(CHAPTERS.size()):
		var chapter: Array = CHAPTERS[i]
		var card := PanelContainer.new()
		card.custom_minimum_size = Vector2(292, 112)
		card.add_theme_stylebox_override("panel", panel_style(UI_PANEL_SOFT if i == 0 else Color("181e19"), UI_GOLD if i == 0 else Color(1, 1, 1, 0.08), 1, 3))
		var box := VBoxContainer.new()
		box.add_theme_constant_override("separation", 2)
		card.add_child(box)
		box.add_child(ui_label("%02d   %s" % [i + 1, chapter[0]], 11, UI_GOLD if i == 0 else UI_MUTED))
		box.add_child(ui_label(chapter[1], 18, UI_PAPER if i == 0 else Color("a5a493")))
		box.add_child(ui_label(chapter[2], 11, UI_MUTED))
		box.add_child(ui_label("可进入" if i == 0 else "开发中", 10, UI_GREEN_BRIGHT if i == 0 else Color("62675f")))
		timeline.add_child(card)
	var note := Label.new()
	note.text = "开发版本 0.2 UI LAYER   ·   WASD 移动   鼠标瞄准   左键射击   R 装填   ESC 释放鼠标"
	note.position = Vector2(74, 848)
	note.add_theme_font_size_override("font_size", 12)
	note.add_theme_color_override("font_color", UI_MUTED)
	menu.add_child(note)

func panel_style(bg: Color, border: Color, width: int, radius: int) -> StyleBoxFlat:
	var style := StyleBoxFlat.new()
	style.bg_color = bg
	style.border_color = border
	style.set_border_width_all(width)
	style.set_corner_radius_all(radius)
	style.content_margin_left = 16
	style.content_margin_right = 16
	style.content_margin_top = 12
	style.content_margin_bottom = 12
	return style

func ui_label(text_value: String, size_value: int, color_value: Color) -> Label:
	var label := Label.new()
	label.text = text_value
	label.add_theme_font_size_override("font_size", size_value)
	label.add_theme_color_override("font_color", color_value)
	label.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	return label

func menu_button(text_value: String, index_value: String, primary := false) -> Button:
	var button := Button.new()
	button.text = index_value + "     " + text_value
	button.alignment = HORIZONTAL_ALIGNMENT_LEFT
	button.custom_minimum_size = Vector2(390, 58)
	button.mouse_default_cursor_shape = Control.CURSOR_POINTING_HAND
	button.add_theme_font_size_override("font_size", 18)
	button.add_theme_color_override("font_color", UI_INK if primary else UI_PAPER)
	button.add_theme_color_override("font_hover_color", UI_INK if primary else UI_PAPER)
	button.add_theme_color_override("font_disabled_color", Color("60665e"))
	button.add_theme_stylebox_override("normal", panel_style(UI_GOLD if primary else UI_PANEL, UI_GOLD if primary else Color(1, 1, 1, 0.12), 1, 3))
	button.add_theme_stylebox_override("hover", panel_style(Color("deb765") if primary else UI_PANEL_SOFT, UI_GOLD, 1, 3))
	button.add_theme_stylebox_override("pressed", panel_style(Color("b58438") if primary else UI_GREEN, UI_GOLD, 1, 3))
	button.add_theme_stylebox_override("focus", panel_style(UI_GOLD if primary else UI_PANEL_SOFT, UI_PAPER, 2, 3))
	button.add_theme_stylebox_override("disabled", panel_style(Color("151a16"), Color(1, 1, 1, 0.05), 1, 3))
	return button

func start_game() -> void:
	playing = true
	menu.hide()
	hud.show()
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _input(event: InputEvent) -> void:
	if game_over and event is InputEventKey and event.pressed and event.keycode == KEY_ENTER:
		get_tree().reload_current_scene()
		return
	if event is InputEventKey and event.pressed and event.keycode == KEY_ESCAPE:
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	if not playing:
		return
	if event is InputEventMouseMotion and Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
		yaw -= event.relative.x * 0.0022
		pitch = clamp(pitch - event.relative.y * 0.0022, -1.35, 1.35)
	if event is InputEventMouseButton and event.pressed and event.button_index == MOUSE_BUTTON_LEFT:
		if Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
		else:
			fire()
	if event is InputEventKey and event.pressed and event.keycode == KEY_R:
		reload()

func _physics_process(delta: float) -> void:
	if not playing:
		return
	if game_over:
		return
	player.rotation.y = yaw
	camera.rotation.x = pitch + recoil
	recoil = lerp(recoil, 0.0, min(delta * 11.0, 1.0))
	weapon.position = weapon.position.lerp(Vector3(0.31, -0.27, -0.62), min(delta * 12.0, 1.0))
	var input := Vector2(
		float(Input.is_key_pressed(KEY_D)) - float(Input.is_key_pressed(KEY_A)),
		float(Input.is_key_pressed(KEY_S)) - float(Input.is_key_pressed(KEY_W))
	).normalized()
	var direction := (player.transform.basis * Vector3(input.x, 0, input.y)).normalized()
	player.velocity.x = direction.x * 5.2
	player.velocity.z = direction.z * 5.2
	if not player.is_on_floor():
		player.velocity.y -= 18.0 * delta
	player.move_and_slide()
	update_combatants(delta)

func update_combatants(delta: float) -> void:
	var time := Time.get_ticks_msec() * 0.001
	for ally in allies:
		if not is_instance_valid(ally):
			continue
		var ally_target := Vector3(ally.get_meta("base_x"), 0.0, 31.0)
		var ally_delta := ally_target - ally.position
		var ally_move := Vector3(ally_delta.x, 0, ally_delta.z).normalized() * minf(2.0, ally_delta.length())
		ally.velocity.x = ally_move.x
		ally.velocity.z = ally_move.z
		if not ally.is_on_floor():
			ally.velocity.y -= 18.0 * delta
		else:
			ally.velocity.y = 0.0
		ally.rotation.y = PI
		ally.move_and_slide()
	for enemy in enemies:
		if not is_instance_valid(enemy):
			continue
		var stop_z := 18.0 + fmod(float(enemy.get_instance_id()), 5.0) * 1.7
		var advance := 1.15 if enemy.position.z < stop_z else 0.0
		var strafe := sin(time * 0.9 + float(enemy.get_meta("phase"))) * 0.35
		enemy.velocity.x = strafe
		enemy.velocity.z = advance
		if not enemy.is_on_floor():
			enemy.velocity.y -= 18.0 * delta
		else:
			enemy.velocity.y = 0.0
		enemy.rotation.y = 0
		enemy.move_and_slide()
		var next_shot := float(enemy.get_meta("next_shot", time + rng.randf_range(0.6, 2.0)))
		if time >= next_shot and enemy.position.distance_to(player.position) < 38.0:
			enemy.set_meta("next_shot", time + rng.randf_range(1.4, 3.2))
			if rng.randf() < 0.34:
				apply_player_damage(rng.randi_range(7, 15))

func fire() -> void:
	if ammo <= 0 or reloading or game_over:
		return
	ammo -= 1
	recoil = 0.075
	weapon.position.z += 0.12
	shot_flash.color.a = 0.85
	var tween := create_tween()
	tween.tween_property(shot_flash, "color:a", 0.0, 0.08)
	animate_bolt()
	update_ammo()
	var from := camera.global_position
	var to := from + -camera.global_transform.basis.z * 300.0
	var query := PhysicsRayQueryParameters3D.create(from, to)
	query.exclude = [player.get_rid()]
	var hit := get_world_3d().direct_space_state.intersect_ray(query)
	if hit.is_empty():
		return
	var collider := hit.get("collider") as CollisionObject3D
	if collider and collider.has_meta("enemy") and bool(collider.get_meta("enemy")):
		var health: int = int(collider.get_meta("health")) - 55
		collider.set_meta("health", health)
		show_hit_feedback(health <= 0)
		if health <= 0:
			kill_enemy(collider as CharacterBody3D)

func reload() -> void:
	if reloading or ammo >= 5 or reserve <= 0 or game_over:
		return
	reloading = true
	reload_token += 1
	var token := reload_token
	objective_label.text = "装填中……"
	var down := create_tween().set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_OUT)
	down.tween_property(weapon, "position", Vector3(0.08, -0.66, -0.38), 0.28)
	down.parallel().tween_property(weapon, "rotation", Vector3(-0.55, 0.15, -0.22), 0.28)
	await get_tree().create_timer(0.32).timeout
	if token != reload_token:
		return
	clip_node.visible = true
	var insert := create_tween().set_trans(Tween.TRANS_BACK).set_ease(Tween.EASE_OUT)
	clip_node.position.y = 0.42
	insert.tween_property(clip_node, "position:y", 0.18, 0.38)
	await get_tree().create_timer(0.5).timeout
	var needed := 5 - ammo
	var loaded: int = mini(needed, reserve)
	ammo += loaded
	reserve -= loaded
	update_ammo()
	clip_node.visible = false
	var up := create_tween().set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_IN_OUT)
	up.tween_property(weapon, "position", Vector3(0.31, -0.27, -0.62), 0.32)
	up.parallel().tween_property(weapon, "rotation", Vector3.ZERO, 0.32)
	await get_tree().create_timer(0.34).timeout
	reloading = false
	objective_label.text = "守住八字桥防线"

func animate_bolt() -> void:
	var cycle := create_tween().set_trans(Tween.TRANS_QUAD)
	cycle.tween_property(bolt, "rotation:z", deg_to_rad(72.0), 0.07)
	cycle.tween_property(bolt, "position:z", -0.12, 0.09)
	cycle.tween_property(bolt, "position:z", -0.37, 0.1)
	cycle.tween_property(bolt, "rotation:z", 0.0, 0.07)

func show_hit_feedback(killed: bool) -> void:
	hit_marker.text = "✕" if killed else "×"
	hit_marker.add_theme_color_override("font_color", UI_RED if killed else Color.WHITE)
	var marker_tween := create_tween()
	marker_tween.tween_property(hit_marker, "modulate:a", 0.0, 0.24)
	marker_tween.tween_callback(func(): hit_marker.modulate.a = 1.0; hit_marker.add_theme_color_override("font_color", Color(1, 1, 1, 0)))

func kill_enemy(enemy: CharacterBody3D) -> void:
	enemies.erase(enemy)
	kills += 1
	kill_feed.text = "击杀  日军步兵    +100\n" + kill_feed.text
	objective_label.text = "守住八字桥防线 · 已歼敌 %d" % kills
	var collision := enemy.get_node_or_null("CollisionShape3D") as CollisionShape3D
	if collision:
		collision.disabled = true
	var fall_side := -1.0 if rng.randf() < 0.5 else 1.0
	var fall := create_tween().set_parallel(true).set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_IN)
	fall.tween_property(enemy, "rotation:z", fall_side * 1.45, 0.48)
	fall.tween_property(enemy, "position:y", -0.42, 0.55)
	fall.chain().tween_interval(2.4)
	fall.chain().tween_callback(enemy.queue_free)

func apply_player_damage(amount: int) -> void:
	if game_over:
		return
	player_health = maxi(0, player_health - amount)
	damage_overlay.color.a = 0.28
	var hurt := create_tween()
	hurt.tween_property(damage_overlay, "color:a", 0.0, 0.42)
	objective_label.text = "遭到火力压制 · 生命 %d" % player_health
	if player_health <= 0:
		player_die()

func player_die() -> void:
	game_over = true
	reloading = false
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE
	var collapse := create_tween().set_trans(Tween.TRANS_QUAD).set_ease(Tween.EASE_IN)
	collapse.tween_property(camera, "position", Vector3(0.45, -0.65, 0.2), 0.7)
	collapse.parallel().tween_property(camera, "rotation:z", 1.15, 0.7)
	await get_tree().create_timer(0.85).timeout
	hud.hide()
	var stats := death_screen.find_child("Stats", true, false) as Label
	stats.text = "淞沪会战 · 八字桥防线\n本次作战击杀：%d\n按 Enter 重新部署" % kills
	death_screen.show()

func update_ammo() -> void:
	if ammo_label:
		ammo_label.text = "%02d  /  %02d" % [ammo, reserve]
