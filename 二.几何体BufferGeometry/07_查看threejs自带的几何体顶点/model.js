import * as THREE from 'three';

// 创建一个空的几何对象
const geometry = new THREE.PlaneGeometry(100, 100);

console.log('几何体', geometry);
console.log('顶点位置数据', geometry.attributes.position);
console.log('顶点索引数据', geometry.index);

const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
  wireframe: true,
});
// material.size = 30;
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
