import "./style.css";
import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
	width: 800,
	height: 600,
};

const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
scene.add(camera);

const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
	canvas,
});
renderer.setSize(sizes.width, sizes.height);
camera.lookAt(mesh.position);

// Animations
// let time = Date.now();
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const clock = new THREE.Clock();
const tick = () => {
	const elapsedTime = clock.getElapsedTime();
	// const currentTime = Date.now();
	// const deltaTime = currentTime - time;
	// time = currentTime;
	// Update objects
	// mesh.rotation.z += -0.003 * deltaTime;
	// mesh.rotation.x += -0.03;
	// camera.position.x = Math.sin(elapsedTime);
	// mesh.position.y = Math.cos(elapsedTime);
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};

tick();
