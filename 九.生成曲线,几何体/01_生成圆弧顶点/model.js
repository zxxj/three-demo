import * as THREE from 'three';

const geometry = new THREE.BufferGeometry(); // 创建一个几何体对象

const R = 100; // 圆弧半径
const N = 50; // 分段数量
const sp = (2 * Math.PI) / N; // 两个相邻点的间隔弧度

const arr = [];
// 批量生成圆弧上的顶点数据
for (let i = 0; i < N + 1; i++) {
  const angle = sp * i; // 当前点的弧度

  // 以坐标原点为中心,在XOY平面上生成圆弧上的顶点数据
  const x = R * Math.cos(angle);
  const y = R * Math.sin(angle);

  arr.push(x, y, 0);
}

// 通过类型数据创建几何体顶点数据
const vertices = new Float32Array(arr);

// 创建属性缓冲区对象
const attribute = new THREE.BufferAttribute(vertices, 3); // 3个为一组,表示一个顶点的xyz坐标

// 设置几何体的attribute属性的位置属性
geometry.attributes.position = attribute;

const material = new THREE.LineBasicMaterial();

const line = new THREE.Line(geometry, material);

export default line;
