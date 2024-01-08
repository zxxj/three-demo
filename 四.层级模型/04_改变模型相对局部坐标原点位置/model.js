import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(20, 20, 20);

geometry.translate(20 / 2, 0, 0);
const material = new THREE.MeshBasicMaterial({
  color: 0x0000ff,
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
