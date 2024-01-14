import * as THREE from 'three';

const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
