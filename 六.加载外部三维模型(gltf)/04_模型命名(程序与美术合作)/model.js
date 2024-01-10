import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();

// 1.实例化一个加载器
const loader = new GLTFLoader();

// 2.加载gltf模型
loader.load('./简易小区.glb', (gltf) => {
  console.log(gltf);
  group.add(gltf.scene);

  const nodeName = gltf.scene.getObjectByName('1号楼');
  nodeName.material.color.set(0xff0000);

  const groupNode = gltf.scene.getObjectByName('洋房');
  console.log(groupNode);
  groupNode.children.forEach((item) => item.material.color.set(0x00ff00));
});

export default group;
