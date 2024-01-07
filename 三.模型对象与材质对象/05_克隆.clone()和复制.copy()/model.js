import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0xff00ff,
});

const mesh = new THREE.Mesh(geometry, material);

// clone
const v1 = new THREE.Vector3(1, 2, 3);
console.log('v1', v1);
//v2是一个新的Vector3对象，和v1的.x、.y、.z属性值一样
const v2 = v1.clone();
console.log('v2', v2);

const v1c = new THREE.Vector3(1, 2, 3);
const v3 = new THREE.Vector3(4, 5, 6);
//读取v1.x、v1.y、v1.z的赋值给v3.x、v3.y、v3.z
v3.copy(v1c);
console.log('v3:', v3);

// Mesh克隆.clone()
const mesh2 = mesh.clone();
mesh2.position.x = 100;

// 改变材质颜色，或者说改变mesh2颜色，mesh和mesh2颜色都会改变
// material.color.set(0xffff00);
mesh2.material.color.set(0xffff00);

// 几何体和材质克隆.clone()
// 克隆几何体和材质，重新设置mesh2的材质和几何体属性
mesh2.geometry = mesh.geometry.clone();
mesh2.material = mesh.material.clone();
// 改变mesh2颜色，不会改变mesh的颜色
mesh2.material.color.set(0xff0000);
export { mesh, mesh2 };
