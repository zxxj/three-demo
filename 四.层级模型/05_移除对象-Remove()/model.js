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

// 删除父对象group的子对象网格模型mesh1
group.remove(mesh1);
group.remove(mesh1, mesh2);
export default group;
