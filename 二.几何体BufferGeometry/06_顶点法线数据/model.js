import * as THREE from 'three';

// 创建一个空的几何对象
const geometry = new THREE.BufferGeometry();

// 定义类型化数组用于创建顶点
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  80,
  0,
  0, //顶点2坐标
  80,
  80,
  0, //顶点3坐标

  0,
  80,
  0, //顶点6坐标
]);

// 创建属性缓冲区对象
// const attribue = new THREE.BufferAttribute(vertices, 3); // 3个为一组,表示一个顶点的xyz坐标
const attribue = new THREE.BufferAttribute(vertices, 3); // 1个为一组,表示一个顶点的xyz坐标

// 设置几何顶点
geometry.attributes.position = attribue;
const indexes = new Uint16Array([0, 1, 2, 0, 2, 3]);
geometry.index = new THREE.BufferAttribute(indexes, 1);

const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
material.size = 30;
const mesh = new THREE.Mesh(geometry, material);

const normals = new Float32Array([
  0,
  0,
  1, //顶点1法线( 法向量 )
  0,
  0,
  1, //顶点2法线
  0,
  0,
  1, //顶点3法线
  0,
  0,
  1, //顶点4法线
  0,
  0,
  1, //顶点5法线
  0,
  0,
  1, //顶点6法线
]);
// 设置几何体的顶点法线属性.attributes.normal
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3);

export default mesh;
