import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();

// 1.实例化一个加载器
const loader = new GLTFLoader();

// 2.加载gltf模型
loader.load('../工厂.glb', (gltf) => {
  gltf.scene.traverse((obj) => {
    if (obj.isMesh) {
      // 重新设置材质
      obj.material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
      });
    }
  });

  group.add(gltf.scene);
});

export default group;
