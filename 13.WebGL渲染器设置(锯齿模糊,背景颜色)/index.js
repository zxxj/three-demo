import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(50, 50, 50);
const material = new THREE.MeshPhongMaterial({
  color: 0xff0000,
  shininess: 80,
  specular: 0xffffff,
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);

directionalLight.position.set(100, 20, 30);
directionalLight.target = mesh;
scene.add(directionalLight);

const renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.setSize(width, height);
// 获取你屏幕对应的设备像素比,devicePixelRatio告诉threejs,以免渲染模糊问题
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x444444, 1); //设置背景颜色

const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

const controls = new OrbitControls(camera, renderer.domElement);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

document.body.appendChild(renderer.domElement);

// 不同硬件设备的屏幕的设备像素比window.devicePixelRatio值可能不同
console.log('查看当前屏幕设备像素比', window.devicePixelRatio);
