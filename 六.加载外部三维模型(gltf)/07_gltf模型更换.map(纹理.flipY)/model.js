import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();

// 1.实例化一个加载器
const loader = new GLTFLoader();

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./黑色.png');
texture.flipY = false; //是否翻转纹理贴图

// 2.加载gltf模型
loader.load('./手机模型.glb', (gltf) => {
  group.add(gltf.scene);

  gltf.scene.children[0].material.map = texture;
  console.log(gltf);
});

export default group;
