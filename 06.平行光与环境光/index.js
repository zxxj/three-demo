import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0x00ff00,
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
scene.add(camera);

// 添加点光源
const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.position.set(100, 50, 30);
pointLight.decay = 0.0;
// scene.add(pointLight);

// 添加点光源辅助观察对象
const pointLightHelper = new THREE.PointLightHelper(pointLight, 10, 0xff0000);
// scene.add(pointLightHelper);

// 添加环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// scene.add(ambientLight);

// 添加平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(50, 100, 20);
directionalLight.target = mesh;
scene.add(directionalLight);

// 添加平行光辅助观察对象
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  10,
  0x0000ff
);
scene.add(directionalLightHelper);

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.addEventListener('change', () => renderer.render(scene, camera));

document.body.appendChild(renderer.domElement);
