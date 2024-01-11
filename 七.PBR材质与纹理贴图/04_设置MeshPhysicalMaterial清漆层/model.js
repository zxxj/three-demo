import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import gui from './gui.js';

const matFolder = gui.addFolder('车外壳');
const matFolder2 = gui.addFolder('车前玻璃');

const loader = new GLTFLoader(); // 创建GLTF加载器
const group = new THREE.Group(); // 声明一个组对象,用来添加加载成功的三维场景
const cubeTextureLoader = new THREE.CubeTextureLoader()
  .setPath('../环境贴图/环境贴图1/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

cubeTextureLoader.outputColorSpace = THREE.SRGBColorSpace;

loader.load('../轿车.glb', (gltf) => {
  // 获取到车外壳
  console.log(gltf.scene);
  const mesh = gltf.scene.getObjectByName('外壳01');
  mesh.material = new THREE.MeshPhysicalMaterial({
    color: mesh.material.color,
    metalness: 1.0, // 车外壳金属度
    roughness: 1.0, // 车外壳粗糙度
    clearcoat: 1, // 清漆层
    clearcoatRoughness: 0.01, // 清漆层粗糙度
    envMap: cubeTextureLoader, // 环境贴图
    envMapIntensity: 2.5, // 环境贴图对Mesh表面影响程度
  });

  const mesh2 = gltf.scene.getObjectByName('玻璃01');
  mesh2.material = new THREE.MeshPhysicalMaterial({
    transmission: 1,
    // color: mesh2.material.color,
    metalness: 0, // 玻璃金属度
    roughness: 0, // 玻璃粗糙度
    clearcoat: 0, // 玻璃清漆层
    clearcoatRoughness: 0.01, // 清漆层粗糙度
    envMap: cubeTextureLoader, // 环境贴图
    envMapIntensity: 0, // 环境贴图对Mesh表面影响程度
    ior: 1.5, //折射率
  });

  // 范围可以参考文档
  matFolder.add(mesh.material, 'metalness', 0, 1).name('金属度');
  matFolder.add(mesh.material, 'roughness', 0, 1).name('粗糙度');
  matFolder.add(mesh.material, 'clearcoat', 0, 1).name('清漆层');
  matFolder.add(mesh.material, 'clearcoatRoughness', 0, 1).name('清漆层粗糙度');
  matFolder
    .add(mesh.material, 'envMapIntensity', 0, 10)
    .name('环境贴图对mesh表面影响度');

  matFolder2.add(mesh2.material, 'transmission', 0, 2).name('transmission');
  matFolder2.add(mesh2.material, 'ior', 0, 2).name('ior');
  matFolder2.add(mesh2.material, 'metalness', 0, 1).name('金属度');
  matFolder2.add(mesh2.material, 'roughness', 0, 1).name('粗糙度');
  matFolder2.add(mesh2.material, 'clearcoat', 0, 1).name('清漆层');
  matFolder2
    .add(mesh2.material, 'clearcoatRoughness', 0, 1)
    .name('清漆层粗糙度');
  matFolder2
    .add(mesh2.material, 'envMapIntensity', 0, 10)
    .name('环境贴图对mesh表面影响度');

  group.add(gltf.scene);
});

export default group;
