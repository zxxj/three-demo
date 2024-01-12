import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(70, 70);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
  side: THREE.DoubleSide,
});

const mesh = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.PlaneGeometry(50, 50);
const material2 = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  side: THREE.DoubleSide,
});
const mesh2 = new THREE.Mesh(geometry2, material2);
mesh2.position.set(0, 0, 0.001);

export { mesh, mesh2 };
