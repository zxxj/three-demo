import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Model from './model.js';

const scene = new THREE.Scene();

//把group插入到场景中作为场景子对象
scene.add(Model);

console.log('查看Scene的子对象:', scene.children);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
camera.position.set(200, 200, 200);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  Model.rotateY(0.01);
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

new OrbitControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
