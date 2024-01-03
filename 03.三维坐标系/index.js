import * as THREE from 'three';

const scene = new THREE.Scene();

// 设置模型在坐标系中的位置或尺寸
// 设置几何体长宽高，也就是x、y、z三个方向的尺寸
// 对比三个参数分别对应xyz轴哪个方向
// const geometry = new THREE.BoxGeometry(50, 50, 50);
const geometry = new THREE.BoxGeometry(10, 10, 10);

const material = new THREE.MeshBasicMaterial({
  color: 0xff0000, //设置材质颜色
  transparent: true, //开启透明
  opacity: 0.5, //设置透明度
});

const mesh = new THREE.Mesh(geometry, material);

// 设置模型mesh的xyz坐标
mesh.position.set(300, 0, 0);
scene.add(mesh);

const width = 800;
const height = 500;

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);

// 相机放在x轴的负半轴, 目标观察点是坐标原点, 这样相当于相机的视线是沿着x轴正方向, 只能看到长方体的一个矩形平面
// camera.position.set(300, 0, 0);
// camera.lookAt(0, 0, 0);

// 相机视线沿着x轴的负半轴, mesh目前位于相机后面, 自然看不到
camera.position.set(-1000, 0, 0);
camera.lookAt(-2000, 0, 0);

// AxesHelper: 辅助观察的坐标系
// AxesHelper的xyz轴: threejs中的坐标轴颜色红R,绿G,蓝B, 分别对应坐标系的x,y,z, threejs的3D坐标系默认Y轴朝上
const axesHelper = new THREE.AxesHelper(500);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);

document.querySelector('.box').appendChild(renderer.domElement);
