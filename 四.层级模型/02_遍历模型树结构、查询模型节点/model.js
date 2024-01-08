import * as THREE from 'three';

const group1 = new THREE.Group();
group1.name = '高层';

for (let i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(20, 50, 20);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 30;
  group1.add(mesh);
  mesh.name = i + 1 + '号楼';
}

const group2 = new THREE.Group();
group2.name = '洋房';
group2.translateZ(50);

for (let i = 0; i < 5; i++) {
  const geometry = new THREE.BoxGeometry(20, 30, 20);
  const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = i * 30;

  group2.add(mesh);
  mesh.name = i + 1 + '单元';
}

const model = new THREE.Group();
model.name = '开元豪庭';
model.add(group1, group2);

// 递归遍历model包含所有的模型节点
model.traverse((obj) => {
  // console.log('所有模型节点的名称:', obj.name);

  // obj.isMesh：if判断模型对象obj是不是网格模型'Mesh'
  if (obj.isMesh) {
    //判断条件也可以是obj.type === 'Mesh'
    console.log(obj.name);
  }
});

const obj = model.getObjectByName('3单元');
obj.material.color.set(0xff0000);

export default model;
