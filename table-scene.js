// Import necessary Three.js modules
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(110, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6.2;
camera.position.y = 0.6;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//model lamp
const loader = new GLTFLoader();

loader.load( 'model2/scene.gltf', function ( gltf ) {
    const lamp = gltf.scene;
    
    
    lamp.position.set(-1, 0.1, 0.5); 
    lamp.scale.set(0.02, 0.02, 0.02);
	scene.add( lamp );
    lamp.rotation.y = 90; 
   
    const lightl = new THREE.PointLight(0xc0c0c0, 50,1.3);
    lightl.position.set(-5, 2, 1.5);
    lamp.add(lightl);
    const lightHelper = new THREE.PointLightHelper(lightl, 2);
    lamp.add(lightHelper);
   
    
}, undefined, function ( error ) {

	console.error('An error occurred while loading the  model:', error);

} );
//model bookstack
 
loader.load( 'clock/scene.gltf', function ( gltf ) {
    const clock = gltf.scene;
    
    
    clock.position.set(1.5, 0.1, 0.5); 
    clock.scale.set(0.001, 0.001, 0.001);
	scene.add( clock );
    clock.rotation.y = 180; 
   console.log('Second model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the  model:', error);

} );

//laptop

loader.load( 'laptop/scene.gltf', function ( gltf ) {
    const laptop = gltf.scene;
    
    
    laptop.position.set(0, 0.1, -0.1); 
    laptop.scale.set(1.2, 1.2, 1.2);
	scene.add( laptop );
    laptop.rotation.y = 160; 
   
}, undefined, function ( error ) {

	console.error('An error occurred while loading the model:', error);

} );

//couch

loader.load( 'couch/scene.gltf', function ( gltf ) {
    const couch = gltf.scene;
    
    
    couch.position.set(4.75, -1.5, 2.5); 
    couch.scale.set(0.007, 0.007, 0.007);
	scene.add( couch );
    couch.rotation.y = -1.5708; 
     
    console.log('Scouch model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the  model:', error);

} );

//plant

loader.load( 'plant/scene.gltf', function ( gltf ) {
    const plant = gltf.scene;
    
    
    plant.position.set(4.75, -0.8, -2.5); 
    plant.scale.set(1.4, 1.4, 1.4);
	scene.add( plant );
    //plant.rotation.y = -1.5708; 
    const light3 = new THREE.PointLight(0xffffff, 50,20);
    light3.position.set(4, 2.8, -2);
    scene.add(light3);
     
    console.log('Scouch model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the  model:', error);

} );


//shelf

loader.load( 'shelf/scene.gltf', function ( gltf ) {
    const shelf = gltf.scene;
    
    
    shelf.position.set(-5.8, 1, -2.8); 
    shelf.scale.set(1.8, 1.8, 1.8);
	scene.add( shelf );
    shelf.rotation.y = 1.5708; 
     
    console.log('Shwelf model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the second model:', error);

} );

//float

loader.load( 'float/scene.gltf', function ( gltf ) {
    const float = gltf.scene;
    
    
    float.position.set(-5.8, 1, 3); 
    float.scale.set(1.4, 1.4, 1.4);
	scene.add( float );
    float.rotation.y = 1.5708; 
    const light4 = new THREE.PointLight(0xffffff, 50);
    light4.position.set(4,3, 3);
    scene.add(light4);
     
    console.log('Shwelf model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the second model:', error);

} );

//bottle

loader.load( 'bottle/scene.gltf', function ( gltf ) {
    const bottle = gltf.scene;
    
    
    bottle.position.set(1.4, 0.1, -0.5); 
    bottle.scale.set(0.03, 0.03, 0.03);
	scene.add( bottle );
    //bottle.rotation.y = -30; 
     
    console.log('Shwelf model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the second model:', error);

} );

//frame1

loader.load( 'frame/scene.gltf', function ( gltf ) {
    const frame = gltf.scene;
    
    
    frame.position.set(-1, 1.5, -6); 
    frame.scale.set(2, 3, 2);
	scene.add( frame );
    frame.rotation.y =300; 
    const light2 = new THREE.PointLight(0xc0c0c0, 50,10);
    light2.position.set(0, 2, -5);
    scene.add(light2);
   console.log('Second model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the second model:', error);

} );



//frame2

loader.load( 'frame/scene.gltf', function ( gltf ) {
    const frame = gltf.scene;
    
    
    frame.position.set(1, 1.5, -6); 
    frame.scale.set(2, 3, 2);
	scene.add( frame );
    frame.rotation.y =300; 
   console.log('Second model loaded successfully');
}, undefined, function ( error ) {

	console.error('An error occurred while loading the second model:', error);

} );


// Create room
const roomGeometry = new THREE.BoxGeometry(12, 5, 12);
const wallTexture = new THREE.TextureLoader().load('texture/wall_side.jpg');
const floorTexture = new THREE.TextureLoader().load('texture/floor2.jpg');
const wallTexture2 = new THREE.TextureLoader().load('texture/wall2.avif');
const roomMaterials = [
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Right face
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Left face
    new THREE.MeshBasicMaterial({ color: 0xefe6e6, side: THREE.BackSide }), // Top face
    new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.BackSide }), // Bottom face
    new THREE.MeshBasicMaterial({ map: wallTexture, side: THREE.BackSide }), // Front face
    new THREE.MeshBasicMaterial({ map: wallTexture2, side: THREE.BackSide })  // Back face
];
const room = new THREE.Mesh(roomGeometry, roomMaterials);
room.position.set(0, 1, 0);
scene.add(room);

// Create table top
const tableTopGeometry = new THREE.BoxGeometry(4.1, 0.2, 2);
const tableTopTexture = new THREE.TextureLoader().load('texture/tabletop.avif');
const tableLegTexture = new THREE.TextureLoader().load('texture/table_leg.jpg');
const tableLegFlatTexture = new THREE.TextureLoader().load('texture/table_leg.jpg');
const tableTopMaterial = new THREE.MeshBasicMaterial({ map: tableTopTexture });
const tableTop = new THREE.Mesh(tableTopGeometry, tableTopMaterial);

// Create table legs
const legGeometry = new THREE.BoxGeometry(0.2, 2, 0.15);
const legMaterial = new THREE.MeshBasicMaterial({ map: tableLegTexture });
const leg1 = new THREE.Mesh(legGeometry, legMaterial);
leg1.position.set(-1.8, -1, -0.8);

const leg2 = leg1.clone();
leg2.position.set(1.8, -1, -0.8);
scene.add(leg2);

const leg3 = leg1.clone();
leg3.position.set(-1.8, -1, 0.8);
scene.add(leg3);

const leg4 = leg1.clone();
leg4.position.set(1.8, -1, 0.8);
scene.add(leg4);

// Create table flatleg
const tableFlatGeometry = new THREE.BoxGeometry(0.2, 0.2, 1.5);
const legFlatMaterial = new THREE.MeshBasicMaterial({ map: tableLegFlatTexture });
const tableFlat = new THREE.Mesh(tableFlatGeometry, legFlatMaterial);
tableFlat.position.set(1.8, -1.5, 0);

const tableFlat1 = tableFlat.clone();
tableFlat1.position.set(-1.8, -1.5, 0);
scene.add(tableFlat1);

const group = new THREE.Group();
group.add(tableTop, leg1, leg2, leg3, leg4, tableFlat, tableFlat1);

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
const armrestMaterial = new THREE.MeshBasicMaterial({ map: armrestTexture });

const leftArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
leftArmrest.position.set(-1.6, 3, 0);
scene.add(leftArmrest);

const rightArmrest = new THREE.Mesh(armrestGeometry, armrestMaterial);
rightArmrest.position.set(1.6, 3, 0);
scene.add(rightArmrest);

// Function to create chair legs
function createLegl(x, y, z) {
    const leglGeometry = new THREE.BoxGeometry(0.5, 0.8, 0.2);
    const leglMaterial = new THREE.MeshBasicMaterial({ map: legTexture });
    const legl = new THREE.Mesh(leglGeometry, leglMaterial);
    legl.position.set(x, y, z);
    return legl;
}

// Create chair legs
const legl1 = createLegl(-1, 1.3, 1.4);
const legl2 = createLegl(1, 1.3, 1.4);
const legl3 = createLegl(-1, 1.3, -1.4);
const legl4 = createLegl(1, 1.3, -1.4);
scene.add(legl1, legl2, legl3, legl4);

// Function to create chair legs flat
function createLeg(x, y, z) {
    const legGeometry = new THREE.BoxGeometry(0.5, 0.2, 3);
    const legMaterial = new THREE.MeshBasicMaterial({ map: legTexture });
    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(x, y, z);
    return leg2;
}

// Create chair legs
const legd1 = createLeg(-1, 0.8, 0);
const legd2 = createLeg(1, 0.8, 0);

scene.add(legd1, legd2);

const group1 = new THREE.Group();
group1.add(seat, backrest, leftArmrest, rightArmrest, legl1, legl2, legl3, legl4, legd1, legd2);

const group2 = new THREE.Group();
//group2.add(seat, backrest);


// Scale the object to fit the room
group1.scale.set(0.5, 0.5, 0.5);

// Position the chair beside the table
group1.position.set(0, -1.8, -2.0);


group2.scale.set(0.5, 0.5, 0.5);

// Position the chair beside the table
group2.position.set(0, -1.8, -2.0);
// Add the table and chair groups to the scene
scene.add(group);
scene.add(group1);
scene.add(group2);

//  light source

const light = new THREE.DirectionalLight(0xffffff, 20, 1);
light.position.set(0, 6, 0);
scene.add(light);

// Store the textures for switching
const alternateTexture1 = new THREE.TextureLoader().load('texture/tabletop_alt1.jpg');
const alternateTexture2 = new THREE.TextureLoader().load('texture/tabletop_alt2.jpg');
const textures = [tableTopTexture, alternateTexture1, alternateTexture2];
let currentTextureIndex = 0;

//const chairTexture = textureLoader.load('texture/chair_texture.jpg'); // Base chair texture
const alternateChairTexture1 =new THREE.TextureLoader().load('texture/chair_texture_alt1.jpg');
const alternateChairTexture2 = new THREE.TextureLoader().load('texture/chair_texture_alt2.jpg');
const chairTextures = [backrestTexture, alternateChairTexture1, alternateChairTexture2];
let currentChairTextureIndex = 0;

// Mouse click event to change the texture of the table top
window.addEventListener('click', (event) => {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
    );

    // Create a raycaster
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);

    // Calculate objects intersecting the picking ray
    const intersects = raycaster.intersectObjects([tableTop, seat, backrest]);

    if (intersects.length > 0) {
        if (intersects[0].object === tableTop) {
            // Switch to the next texture for the table
            currentTextureIndex = (currentTextureIndex + 1) % textures.length;
            tableTopMaterial.map = textures[currentTextureIndex];
            tableTopMaterial.needsUpdate = true;
        } else if (intersects[0].object === seat || intersects[0].object === backrest) {
            // Switch to the next texture for the chair
            currentChairTextureIndex = (currentChairTextureIndex + 1) % chairTextures.length;
            seat.material.map = chairTextures[currentChairTextureIndex];
            backrest.material.map = chairTextures[currentChairTextureIndex]; // Change backrest texture
            seat.material.needsUpdate = true;
            backrest.material.needsUpdate = true;
        }
    }
});


// Flag to control model rotation
let rotateModel = false;

// Event listener for keyboard input
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        rotateModel = !rotateModel; 
    }
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    //func1:rotate
    if (scene && rotateModel) {
    scene.rotation.y += 0.015;
    //renderer.render(scene, camera);
    }

    //func2: Update the light position to move in a circular path
    const time = Date.now() * 0.001; // Convert time to seconds
    const radius = 5; // Radius of the circular path
    light.position.x = radius * Math.sin(time);
    light.position.z = radius * Math.cos(time);
    light.position.y = 4 + Math.sin(time * 2); // Optional: Add vertical oscillation

    renderer.render(scene, camera);
}
animate();

// Keyboard controls for camera movement and rotation
document.addEventListener('keydown', (event) => {
    const key = event.key;
   

    switch (key) {
        case 'ArrowUp': 
            camera.rotation.x += 0.01;
            break;
        case 'ArrowDown': 
            camera.rotation.x -= 0.01;
            break;
        case 'ArrowLeft': 
            camera.rotation.y += 0.03;
            break;
        case 'ArrowRight': 
            camera.rotation.y -= 0.03;
            break;
        case 'w': 
            camera.position.y += 0.1;
            break;
        case 's': 
            camera.position.y -= 0.1;
            break;
        case 'a': 
            camera.position.x -= 0.1;
            break;
        case 'd': 
            camera.position.x += 0.1;
            break;
        case 'q': 
            camera.position.z += 0.1;
            break;
        case 'e': 
            camera.position.z -= 0.1;
            break;
    }
});
