import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();

// 1.实例化一个加载器
const loader = new GLTFLoader();

// 2.加载gltf模型
loader.load('../工厂.glb', (gltf) => {
  console.log(gltf);
  // 返回的场景对象gltf.scene插入到threejs场景中
  group.add(gltf.scene);
});

export default group;
