/* 
Filename: complexCode.js

This code demonstrates a complex implementation of a 3D graphics engine using WebGL and Three.js library.
It creates a rotating cube with red color and applies lighting effects using Phong shading.

Note: To run this code, make sure you have the Three.js library included in your HTML file.

*/

// Initialize the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create the cube geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({color: 0xff0000});

// Create the cube mesh and add it to the scene
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set up lighting
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(1, 1, 1);
scene.add(directionalLight);

// Set initial camera position
camera.position.z = 5;

// Function to animate the scene
function animate() {
  requestAnimationFrame(animate);
  
  // Rotate the cube in each frame
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}

// Start the animation
animate();