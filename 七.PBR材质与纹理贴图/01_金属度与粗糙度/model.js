import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader(); // 创建GLTF加载器

const group = new THREE.Group(); // 声明一个组对象,用来添加加载成功的三维场景

loader.load('../金属.glb', (gltf) => {
  // 递归遍历所有模型节点并批量修改材质
  gltf.scene.traverse((item) => {
    if (item.isMesh) {
      console.log(item.material);
      // 重新设置材质的金属度和粗糙度属性
      item.material.metalness = 1.0; //金属度
      item.material.roughness = 0.3; //表面粗糙度
    }
  });

  group.add(gltf.scene);
});

export default group;
