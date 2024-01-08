import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(50, 0, 0);

const group = new THREE.Group();
group.add(mesh);
group.position.set(50, 0, 0);

// 声明一个三维向量用来表示某个坐标
const worldPosition = new THREE.Vector3();
// 获取mesh的世界坐标，你会发现mesh的世界坐标受到父对象group的.position影响
mesh.getWorldPosition(worldPosition);
console.log(worldPosition); // x: 100, y: 0, z: 0
console.log('世界坐标', worldPosition); // x: 100, y: 0, z: 0
console.log('本地坐标', mesh.position); // x: 50, y: 0, z: 0

export default group;
