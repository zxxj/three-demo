import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Mesh from './model.js';

const scene = new THREE.Scene();
scene.add(Mesh);

const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200;

const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 8000);
// const camera = new THREE.PerspectiveCamera(30, width / height, 1, 1000);
camera.position.set(200, 200, 200);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);
