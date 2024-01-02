import * as THREE from 'three';

// 创建场景
const scene = new THREE.Scene();

// 创建一个几何体
const geometry = new THREE.BoxGeometry(10, 10, 10); // 长宽高都是100

// 为物体添加材质
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});

// 根据几何体与材质创建一个网格模型
const mesh = new THREE.Mesh(geometry, material);
mesh.position(0, 20, 0);

// 将物体添加到场景中
scene.add(mesh);

// 创建相机
const width = 800;
const height = 500;
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);

// 设置相机的位置
camera.position.set(200, 200, 200);

// 设置相机的视线, 参数是观察目标点的坐标
// camera.lookAt(0, 0, 0); // 坐标原点
// camera.lookAt(0, 20, 0); // y轴上一点
camera.lookAt(mesh.position); // 指向网格模型

// 创建一个WebGL渲染器
const renderer = new THREE.WebGLRenderer();

// 设置canvas画布的宽度和高度
renderer.setSize(width, height);

// 执行渲染
renderer.render(scene, camera);

// 将渲染后得到的canvas添加到网页中
// document.body.appendChild(renderer.domElement);
document.querySelector('.box').appendChild(renderer.domElement);
