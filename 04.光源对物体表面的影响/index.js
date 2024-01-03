import * as THREE from 'three';

const width = 800;
const height = 500;
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 20, 0);
scene.add(mesh);

const pointLight = new THREE.PointLight(0xffffff); //点光源:两个参数分别表示光源颜色和光照强度
pointLight.decay = 0.0; //设置光源不随距离衰减
pointLight.intensity = 1.0; //光照强度
pointLight.position.set(300, 700, 100); // 设置光源的位置的位置
scene.add(pointLight); // 将灯光添加到场景中

const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
camera.position.set(300, 300, 300);
camera.lookAt(mesh.position);
scene.add(camera);

const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.render(scene, camera);
document.querySelector('.box').appendChild(renderer.domElement);
