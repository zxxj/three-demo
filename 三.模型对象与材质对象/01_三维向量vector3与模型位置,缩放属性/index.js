import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Mesh from './model.js';

const scene = new THREE.Scene();

scene.add(Mesh);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(200, 200, 200);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
new OrbitControls(camera, renderer.domElement);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);
document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
