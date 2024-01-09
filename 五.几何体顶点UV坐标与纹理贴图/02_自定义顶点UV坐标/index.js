import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

// 1.创建纹理加载器对象
const textureLoader = new THREE.TextureLoader();

// 2.使用load方法加载图片, 会返回一个纹理对象
const texture = textureLoader.load('./earth.jpg');

// const geometry = new THREE.BoxGeometry(50, 50, 50);
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  0,
  0,
  0, // 顶点1的坐标

  160,
  0,
  0, // 顶点2的坐标

  160,
  80,
  0, // 顶点3的坐标

  0,
  80,
  0, // 顶点4的坐标
]);
const attribue = new THREE.BufferAttribute(vertices, 3);
const indexes = new Uint16Array([0, 1, 2, 0, 2, 3]);

geometry.index = new THREE.BufferAttribute(indexes, 1);
geometry.attributes.position = attribue;

const uvs = new Float32Array([
  0,
  0, //  顶点1的UV坐标
  1,
  0, //  顶点2的UV坐标
  1,
  1, //  顶点3的UV坐标
  0,
  1, //  顶点4的UV坐标
]);
geometry.attributes.uv = new THREE.BufferAttribute(uvs, 2);

const material = new THREE.MeshBasicMaterial({
  // color: 0xff0000, // 纹理贴图最好不要搭配color一起设置, 会影响
  map: texture, // 3.设置材质的颜色贴图, 将纹理对象(图片)作为mesh材质的贴图
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(500, 500, 500);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const render = () => {
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
