import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader(); // 创建GLTF加载器
const group = new THREE.Group(); // 声明一个组对象,用来添加加载成功的三维场景
const cubeTextureLoader = new THREE.CubeTextureLoader()
  .setPath('../环境贴图/环境贴图2/')
  .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

cubeTextureLoader.outputColorSpace = THREE.SRGBColorSpace;

loader.load('./工厂.gltf', (gltf) => {
  // 递归遍历所有模型节点并批量修改材质
  gltf.scene.traverse((item) => {
    if (item.isMesh) {
      console.log(item.material);
      // item.material.envMap = cubeTextureLoader; // 设置pbr材质环境贴图
    }

    group.add(gltf.scene);
  });
});

export { group, cubeTextureLoader };
