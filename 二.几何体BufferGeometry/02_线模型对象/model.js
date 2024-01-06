import * as THREE from 'three';

// 创建一个空的几何对象
const geometry = new THREE.BufferGeometry();

// 定义类型化数组用于创建顶点
const vertices = new Float32Array([
  0,
  0,
  0, //顶点1坐标
  50,
  0,
  0, //顶点2坐标
  0,
  30,
  0, //顶点3坐标
  0,
  0,
  30, //顶点4坐标
  0,
  0,
  50, //顶点5坐标
  10,
  30,
  30, //顶点6坐标
]);

// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3); // 3个为一组,表示一个顶点的xyz坐标

// 设置几何顶点
geometry.attributes.position = attribue;

// 点渲染模式
const material = new THREE.LineBasicMaterial({ color: 0xffff00 });
material.size = 30;

// const line = new THREE.Line(geometry, material);
// const line = new THREE.LineLoop(geometry, material);
const line = new THREE.LineSegments(geometry, material);

export default line;
