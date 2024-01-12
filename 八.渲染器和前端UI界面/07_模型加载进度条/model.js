import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const group = new THREE.Group();
const loader = new GLTFLoader();

loader.load(
  './工厂.gltf',
  (gltf) => {
    group.add(gltf.scene);
    document.getElementById('loader-container').style.display = 'none';
  },
  (xhr) => {
    // .total: 总字节数
    // .loaded: 已加载的字节数
    const percent = xhr.loaded / xhr.total;
    const loaderDiv = document.getElementById('loader');

    loaderDiv.style.width = percent * 400 + 'px';
    loaderDiv.style.textIndent = percent * 400 + 5 + 'px'; //缩进元素中的首行文本
    loaderDiv.innerHTML = Math.floor(percent * 100) + '%';
  }
);

export { group };
