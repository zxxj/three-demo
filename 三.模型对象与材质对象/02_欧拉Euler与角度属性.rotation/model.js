import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
});

const mesh = new THREE.Mesh(geometry, material);

// 创建一个欧拉对象，表示绕着xyz轴分别旋转45度，0度，90度
// const Euler = new THREE.Euler(Math.PI / 4, 0, Math.PI / 2);

// 通过属性设置欧拉对象的三个分量值
// Euler.x = Math.PI / 4;
// Euler.y = Math.PI / 2;
// Euler.z = Math.PI / 4;

//绕y轴的角度设置为60度
// mesh.rotation.y += Math.PI / 3;
//绕y轴的角度增加60度
// mesh.rotation.y += Math.PI / 3;
//绕y轴的角度减去60度
// mesh.rotation.y -= Math.PI / 3;

// mesh.rotateX(Math.PI / 4); //绕x轴旋转π/4

// 绕着Y轴旋转
// mesh.rotateY(Math.PI / 4);
//控制台查看：旋转方法，改变了rotation属性
// console.log(mesh.rotation);

const axis = new THREE.Vector3(0, 1, 0); //向量axis
mesh.rotateOnAxis(axis, Math.PI / 8); //绕axis轴旋转π/8
export default mesh;
