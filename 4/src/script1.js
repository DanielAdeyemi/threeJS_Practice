import "./style.css";
import * as THREE from "three";

const scene = new THREE.Scene();

// Create object(s)
// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = -1;
mesh.position.set(0.7, 0.6, -1);
mesh.scale.set(1.5, 0.5, 1);
mesh.rotation.y = Math.PI * 0.2;
mesh.rotation.x = 2;

scene.add(mesh);
// Sizes
const sizes = {
	width: 800,
	height: 600,
};

//  Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 3;
// camera.position.y = 1;
// camera.position.x = -0.7;
camera.position.set(-0.7, 1, 3);
scene.add(camera);
camera.lookAt(mesh.position);
// console.log(mesh.position.distanceTo(camera.position));

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
