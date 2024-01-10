import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Mesh from './model.js';

// 场景
const scene = new THREE.Scene();
scene.add(Mesh);

// 相机
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  1,
  3000
);
camera.position.set(150, 150, 150);

camera.lookAt(0, 0, 0);

// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(200, 400, 50);
scene.add(directionalLight);

// 环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// 渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// 轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

//解决加载gltf格式模型纹理贴图和原图不一样问题
renderer.outputEncoding = THREE.sRGBEncoding;

// 坐标轴辅助器
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

document.body.appendChild(renderer.domElement);

// 自适应宽高
window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
