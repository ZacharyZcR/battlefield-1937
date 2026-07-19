extends SceneTree

func _initialize() -> void:
	var scene := load("res://assets/third_party/ww2_soldier/source/LowpolySoldier/LowpolySoldier.fbx") as PackedScene
	var root := scene.instantiate()
	print_tree(root)
	var skeleton := root.get_node("Skeleton3D") as Skeleton3D
	for mesh_node in skeleton.get_children():
		if mesh_node is MeshInstance3D:
			print(mesh_node.name, " aabb=", mesh_node.get_aabb(), " scale=", mesh_node.scale)
	for index in range(skeleton.get_bone_count()):
		print(index, ": ", skeleton.get_bone_name(index))
	root.free()
	quit()

func print_tree(node: Node, indent := "") -> void:
	print(indent, node.name, " [", node.get_class(), "]")
	for child in node.get_children():
		print_tree(child, indent + "  ")
