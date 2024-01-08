import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const mesh1 = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometry, material);

mesh2.position.z = 50;

const group = new THREE.Group();
group.add(mesh1, mesh2);

// 隐藏一个网格模型，visible的默认值是true
mesh1.visible = false;
// mesh2.visible = false;

// 使网格模型mesh处于显示状态
mesh1.visible = true;

// 隐藏一个包含多个模型的组对象group
// group.visible = false;

// 隐藏网格模型mesh，visible的默认值是true
// mesh1.material.visible = false; // 如果这样操作, 那么mesh1和mesh2的材质都会更改为不可见,为了不影响mesh2,mesh1的材质需要克隆材质
mesh1.material = material.clone();

// 如果多个模型引用了同一个材质,如果该材质.visible设置为false,意味着隐藏绑定该材质的所有模型
// material.visible = false;
export default group;
