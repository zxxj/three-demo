import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0xff00ff,
});

const mesh = new THREE.Mesh(geometry, material);

// 浏览器控制台打印模型的几何体属性.geometry和材质属性.material
console.log('mesh.geometry', mesh.geometry);
console.log('mesh.material', mesh.material);

// 访问模型材质,并设置材质的颜色属性
mesh.material.color.set(0xffff00);

// 访问模型几何体,并平移几何体顶点数据
// mesh.geometry.translate(0, 100, 0);

const mesh2 = new THREE.Mesh(geometry, material);
mesh2.position.x = 100;
// 两个mesh共享一个材质，改变一个mesh的颜色，另一个mesh2的颜色也会跟着改变
// mesh.material和mesh2.material都指向同一个material
// 三者等价：mesh.material、mesh2.material、material
mesh2.material.color.set(0x00ffff);
// 三者等价：mesh.geometry、mesh2.geometry、geometry
mesh2.geometry.translate(100, 0, 0);
export { mesh, mesh2 };
