import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshBasicMaterial({
  color: 0xff00ff,
});

//把mesh1型插入到组group中，mesh1作为group的子对象
const mesh1 = new THREE.Mesh(geometry, material);

//把mesh2型插入到组group中，mesh2作为group的子对象
const mesh2 = new THREE.Mesh(geometry, material);
const mesh3 = new THREE.Mesh(geometry, material);
mesh2.translateX(50);
mesh3.translateX(100);

// const group = new THREE.Group();
// 受threejs历史影响，你会在很多别的代码中看到Object3D作为Group来使用
const group = new THREE.Object3D();

// group.add(mesh1);
// group.add(mesh2);

// .add()方法可以单独插入一个对象，也可以同时插入多个子对象
group.add(mesh1, mesh2, mesh3);
// group.translateY(100);
// group.scale.set(2, 2, 2);
// group.rotateY(Math.PI / 4);

// mesh也能添加mesh子对象
// group.add(mesh1);
// mesh1.add(mesh2);

console.log('查看group的子对象:', group.children);

export default group;
