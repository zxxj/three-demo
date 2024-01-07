import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
  color: 0xffff00,
});

const mesh = new THREE.Mesh(geometry, material);

// 创建了一个三维向量对象
// const v3 = new THREE.Vector3(100, 100, 100);
// console.log(v3); // x:100, y: 100, z: 100

// v3.x = 100; // 访问x、y或z属性改变某个分量的值

console.log('模型位置属性.position的值', mesh.position);
// mesh.position.y = 80;
// mesh.position.set(80, 50, 30);

// 等价于mesh.position = mesh.position + 100;
// mesh.translateX(100); //沿着x轴正方向平移距离100
// mesh.translateZ(-50);

// mesh.scale.x = 2.0;

// mesh.scale.set(0.5, 1.5, 2);

//向量Vector3对象表示方向
const axis = new THREE.Vector3(1, 1, 1);
axis.normalize(); //向量归一化
//沿着axis轴表示方向平移100
mesh.translateOnAxis(axis, 100);
export default mesh;
