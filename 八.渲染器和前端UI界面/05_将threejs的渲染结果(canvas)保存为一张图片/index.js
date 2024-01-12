import * as THREE from 'three';
import Model from './model.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth - 200;
const height = window.innerHeight - 100;

const scene = new THREE.Scene();
scene.add(Model);

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
camera.position.set(300, 300, 300);

const renderer = new THREE.WebGLRenderer({
  //想把canvas画布上内容下载到本地，需要设置为true
  preserveDrawingBuffer: true,
});
renderer.setSize(width, height);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

new OrbitControls(camera, renderer.domElement);

document.getElementById('three').appendChild(renderer.domElement);
document.getElementById('red').addEventListener('click', () => {
  Model.material.color.set(0xff0000);
});
document.getElementById('green').addEventListener('click', () => {
  Model.material.color.set(0x00ff00);
});

// 鼠标单击id为download的HTML元素，threejs渲染结果以图片形式下载到本地
document.getElementById('downloadBtn').addEventListener('click', () => {
  const canvas = renderer.domElement;
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'threejs.png';
  link.click();
});

window.onresize = () => {
  const width = window.innerWidth - 200;
  const height = window.innerHeight - 100;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
};
