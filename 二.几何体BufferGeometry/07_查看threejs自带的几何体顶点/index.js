import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import PointsModel from './model.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();
scene.add(PointsModel);

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
camera.position.set(200, 200, 200);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

const axesHelper = new THREE.AxesHelper(10);
scene.add(axesHelper);

new OrbitControls(camera, renderer.domElement);

const gui = new GUI();
gui.add(PointsModel.position, 'x', 0, 100);
gui.add(PointsModel.position, 'y', 0, 100);
gui.add(PointsModel.position, 'z', 0, 100);
console.log(PointsModel);
document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
