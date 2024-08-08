// Import necessary Three.js modules
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// Create room
const roomGeometry = new THREE.BoxGeometry(20, 5, 20);
const wallTexture = new THREE.TextureLoader().load('texture/wall_side.jpg');
const floorTexture = new THREE.TextureLoader().load('texture/floor2.jpg');
const wallTexture2 = new THREE.TextureLoader().load('texture/wall2.avif');
const roomMaterials = [
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Right face - red color
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Left face - green color
    new THREE.MeshBasicMaterial({ color: 0xefe6e6, side: THREE.BackSide }), // Top face - blue color
    new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.BackSide }), // Bottom face - yellow color
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Front face - magenta color
    new THREE.MeshBasicMaterial({ map: wallTexture2, side: THREE.BackSide })  // Back face - cyan color
];
const room = new THREE.Mesh(roomGeometry, roomMaterials);
room.position.set(0, 1, 0);
scene.add(room);

// Load textures
const textureLoader = new THREE.TextureLoader();
const seatTexture = textureLoader.load('texture/tabletop.avif');
const backrestTexture = textureLoader.load('texture/tabletop.avif');
const armrestTexture = textureLoader.load('texture/table_leg.jpg');
const legTexture = textureLoader.load('texture/table_leg.jpg');

// Create chair seat
const seatGeometry = new THREE.BoxGeometry(2.7, 0.6, 3);
const seatMaterial = new THREE.MeshBasicMaterial({ map: seatTexture });
const seat = new THREE.Mesh(seatGeometry, seatMaterial);
seat.position.set(0, 2, 0);
scene.add(seat);

// Create chair backrest
const backrestGeometry = new THREE.BoxGeometry(2.7, 3.6, 0.5);
const backrestMaterial = new THREE.MeshBasicMaterial({ map: backrestTexture });
const backrest = new THREE.Mesh(backrestGeometry, backrestMaterial);
backrest.position.set(0, 4.1, -1.25);
scene.add(backrest);

// Create armrests
const armrestGeometry = new THREE.BoxGeometry(0.5, 0.3, 3);
const armrestMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const leftArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
leftArmrest.position.set(-1.6, 3, 0);
scene.add(leftArmrest);

const rightArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
rightArmrest.position.set(1.6, 3, 0);
scene.add(rightArmrest);

// Function to create chair legs
function createLegl(x, y, z) {
    const leglGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.2);
    const leglMaterial = new THREE.MeshBasicMaterial({color: 0x000000  });
    const legl = new THREE.Mesh(leglGeometry, leglMaterial);
    legl.position.set(x, y, z);
    return legl;
}

// Create chair legs
const legl1 = createLegl(-1, 1.3, 1.4);
const legl2 = createLegl(1, 1.3, 1.4);
const legl3 = createLegl(-1, 1.3, -1.4);
const legl4 = createLegl(1, 1.3, -1.4);
scene.add(legl1, legl2,legl3,legl4);

// Function to create chair legs flat
function createLeg(x, y, z) {
    const legGeometry = new THREE.BoxGeometry(0.5, 0.2, 3);
    const legMaterial = new THREE.MeshBasicMaterial({color: 0x000000  });
    const leg = new THREE.Mesh(legGeometry, legMaterial);
    leg.position.set(x, y, z);
    return leg;
}

// Create chair legs
const leg1 = createLeg(-1, 0.8, -0);
const leg2 = createLeg(1, 0.8, -0);


scene.add(leg1, leg2);


const group1 = new THREE.Group();
group1.add( seat,backrest,leftArmrest,rightArmrest, legl1, legl2,legl3,legl4 , leg1, leg2);

// Create a light source
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);
scene.add( group1 );

// Additional ambient light for better overall illumination
const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});