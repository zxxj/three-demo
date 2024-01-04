import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//引入性能监视器stats.js
import Stats from 'three/addons/libs/stats.module.js';

const width = window.innerWidth;
const height = window.innerHeight;

const scene = new THREE.Scene();

// 性能测试, 创建1000个物体
for (let i = 0; i < 1000; i++) {
  const geometry = new THREE.BoxGeometry(5, 5, 5);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const mesh = new THREE.Mesh(geometry, material);
  const x = (Math.random() - 0.5) * 200;
  const y = (Math.random() - 0.5) * 200;
  const z = (Math.random() - 0.5) * 200;
  mesh.position.set(x, y, z);
  scene.add(mesh);
}

const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(35, width / height, 1, 3000);
camera.position.set(200, 200, 200);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

//创建stats对象
const stats = new Stats();

// 设置stats.domElement模式
stats.setMode(0); // 渲染帧率,刷新频率,一秒渲染次数
// stats.setMode(1); // 渲染周期,渲染一帧多长时间(单位：毫秒ms)

// stats.domElement: web页面上输出计算结果,是一个div元素
document.body.appendChild(stats.domElement);

const render = () => {
  //requestAnimationFrame循环调用的函数中调用方法update(),来刷新时间
  stats.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(render);
};

render();

new OrbitControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
