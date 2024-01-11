import * as THREE from 'three';
import Model from './model.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import gui from './gui.js';

const scene = new THREE.Scene();
scene.add(Model);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(400, 200, 300);
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

// gui
const ambientLightFolder = gui.addFolder('环境光');
ambientLightFolder
  .add(ambientLight, 'intensity', 0, 2)
  .step(0.01)
  .name('环境光的光照强度');

const directionalLightFolder = gui.addFolder('平行光');
directionalLightFolder
  .add(directionalLight, 'intensity', 0, 10)
  .name('平行光的光照强度');
directionalLightFolder
  .add(directionalLight.position, 'x', 0, 10)
  .name('平行光的x轴');
directionalLightFolder
  .add(directionalLight.position, 'y', 0, 10)
  .step(0.01)
  .name('平行光的y轴');
directionalLightFolder
  .add(directionalLight.position, 'z', 0, 10)
  .step(0.01)
  .name('平行光的z轴');
