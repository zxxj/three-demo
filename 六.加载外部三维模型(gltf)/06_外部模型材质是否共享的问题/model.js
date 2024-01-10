import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();

// 1.实例化一个加载器
const loader = new GLTFLoader();

// 2.加载gltf模型
loader.load('./简易小区-共享材质.glb', (gltf) => {
  console.log(gltf);
  // const mesh1 = gltf.scene.getObjectByName('1号楼');
  // mesh1.material.name = '1号楼材质';

  // const mesh2 = gltf.scene.getObjectByName('2号楼');

  // 1.改变1号楼Mesh材质颜色, 其他楼颜色也全部会变红
  // mesh1.material.color.set(0xff0000);

  //2.通过name相同，可以判断mesh1.material和mesh2.material共享了同一个材质对象
  // console.log('mesh1', mesh1.material.name); // 1号楼材质
  // console.log('mesh2', mesh2.material.name); // 1号楼材质
  group.add(gltf.scene);

  // 用代码方式解决mesh共享材质问题
  gltf.scene.getObjectByName('小区房子').traverse((obj) => {
    if (obj.isMesh) {
      console.log(obj);
      obj.material = obj.material.clone();
    }
  });

  gltf.scene.getObjectByName('1号楼').material.color.set(0xffffff);
  gltf.scene.getObjectByName('2号楼').material.color.set(0x0000ff);
});

export default group;
