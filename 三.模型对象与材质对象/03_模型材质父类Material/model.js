import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
});
material.transparent = true; //开启透明
material.opacity = 0.5; //设置透明度
// material.side = THREE.BackSide; //背面可以看到
material.side = THREE.DoubleSide; //双面  可见

const mesh = new THREE.Mesh(geometry, material);
export default mesh;
