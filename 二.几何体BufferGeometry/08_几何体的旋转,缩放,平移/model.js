import * as THREE from 'three';

// 创建一个空的几何对象
const geometry = new THREE.BoxGeometry(50, 50, 50);

console.log('几何体', geometry);
console.log('顶点位置数据', geometry.attributes.position);
console.log('顶点索引数据', geometry.index);
// 几何体xyz三个方向都放大2倍
// geometry.scale(2, 2, 2);

// 几何体沿着x轴平移50
geometry.translate(50, 0, 0);

// 居中：已经偏移的几何体居中，执行.center()，你可以看到几何体重新与坐标原点重合
geometry.center();

// 几何体绕着x轴旋转45度
geometry.rotateX(Math.PI / 4);

// 几何体旋转、缩放或平移之后，查看几何体顶点位置坐标的变化
// BufferGeometry的旋转、缩放、平移等方法本质上就是改变顶点的位置坐标
console.log('顶点位置数据', geometry.attributes.position);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
});
material.size = 30;
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
