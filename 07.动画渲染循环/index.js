import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position);

const pointLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(pointLight);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

new OrbitControls(camera, renderer.domElement);

const clock = new THREE.Clock();

const render = () => {
  const spt = clock.getDelta() * 1000; // 毫秒
  console.log('两帧渲染的时间间隔:', spt);
  console.log('帧率FPS:', 1000 / spt);
  mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
  renderer.render(scene, camera); //执行渲染操作
};

render();

document.body.appendChild(renderer.domElement);
