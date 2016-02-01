/// <reference path="_reference.ts"/>
// MAIN GAME FILE
// THREEJS Aliases
var Scene = THREE.Scene;
var Renderer = THREE.WebGLRenderer;
var PerspectiveCamera = THREE.PerspectiveCamera;
var BoxGeometry = THREE.BoxGeometry;
var CubeGeometry = THREE.CubeGeometry;
var PlaneGeometry = THREE.PlaneGeometry;
var SphereGeometry = THREE.SphereGeometry;
var Geometry = THREE.Geometry;
var AxisHelper = THREE.AxisHelper;
var LambertMaterial = THREE.MeshLambertMaterial;
var MeshBasicMaterial = THREE.MeshBasicMaterial;
var Material = THREE.Material;
var Mesh = THREE.Mesh;
var Object3D = THREE.Object3D;
var SpotLight = THREE.SpotLight;
var PointLight = THREE.PointLight;
var AmbientLight = THREE.AmbientLight;
var Control = objects.Control;
var GUI = dat.GUI;
var Color = THREE.Color;
var Vector3 = THREE.Vector3;
var Face3 = THREE.Face3;
var Point = objects.Point;
//Custom Game Objects
var gameObject = objects.gameObject;
var scene;
var renderer;
var camera;
var axes;
var plane;
var sphere;
var ambientLight;
var spotLight;
var control;
var gui;
var stats;
var step = 0;
var cubeGeometry;
var cubeMaterial;
//Cubeman body parts
var cubeHead;
var cubeBody;
var cubeRightArm;
var cubeLeftArm;
var cubeLeftLeg;
var cubeRightLeg;
function init() {
    //Instantiate scene objects
    scene = new Scene();
    //Set up the Default renderer
    setupRenderer();
    //Set up the Camera
    setupCamera();
    //Add an axis helper to the scene
    axes = new AxisHelper(10);
    scene.add(axes);
    console.log("Added axis helper to scene");
    //Add a Plane to the scene
    plane = new gameObject(new PlaneGeometry(16, 16, 1, 1), new LambertMaterial({ color: 0x6699FF }), 0, 0, 0);
    plane.rotation.x = -0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene");
    //.....Cubeman
    //Body
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(3, 5, 2);
    cubeBody = new Mesh(cubeGeometry, cubeMaterial);
    cubeBody.castShadow = true;
    cubeBody.receiveShadow = true;
    cubeBody.position.y = 6.5;
    scene.add(cubeBody);
    //Head
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(2, 2, 2);
    cubeHead = new Mesh(cubeGeometry, cubeMaterial);
    cubeHead.castShadow = true;
    cubeHead.receiveShadow = true;
    cubeHead.position.y = 3.5;
    cubeBody.add(cubeHead);
    //RightArm
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(1, 4, 1.5);
    cubeRightArm = new Mesh(cubeGeometry, cubeMaterial);
    cubeRightArm.castShadow = true;
    cubeRightArm.receiveShadow = true;
    cubeRightArm.position.x = -2;
    cubeBody.add(cubeRightArm);
    //LeftArm
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(1, 4, 1.5);
    cubeLeftArm = new Mesh(cubeGeometry, cubeMaterial);
    cubeLeftArm.castShadow = true;
    cubeLeftArm.receiveShadow = true;
    cubeLeftArm.position.x = 2;
    cubeBody.add(cubeLeftArm);
    //LeftLeg
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(1, 4, 2);
    cubeLeftLeg = new Mesh(cubeGeometry, cubeMaterial);
    cubeLeftLeg.castShadow = true;
    cubeLeftLeg.receiveShadow = true;
    cubeLeftLeg.position.x = 1;
    cubeLeftLeg.position.y = -2.5;
    cubeBody.add(cubeLeftLeg);
    //RightLeg
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(1, 4, 2);
    cubeRightLeg = new Mesh(cubeGeometry, cubeMaterial);
    cubeRightLeg.castShadow = true;
    cubeRightLeg.receiveShadow = true;
    cubeRightLeg.position.x = -1;
    cubeRightLeg.position.y = -2.5;
    cubeBody.add(cubeRightLeg);
    // Add an AmbientLight to the scene
    ambientLight = new AmbientLight(0x090909);
    scene.add(ambientLight);
    console.log("Added an Ambient Light to Scene");
    // Add a SpotLight to the scene
    spotLight = new SpotLight(0xffffff);
    spotLight.position.set(5.6, 25, 5.4);
    spotLight.rotation.set(-0.8, 42.7, 19.5);
    spotLight.castShadow = true;
    scene.add(spotLight);
    console.log("Added a SpotLight Light to Scene");
    // add controls
    gui = new GUI();
    control = new Control(0.01, 0.01, 0.01);
    addControl(control);
    // Add framerate stats
    addStatsObject();
    console.log("Added Stats to scene");
    document.body.appendChild(renderer.domElement);
    gameLoop(); // render the scene	
    window.addEventListener('resize', onResize, false);
}
//Main game loop
function gameLoop() {
    stats.update();
    //Loop rotation
    cubeBody.rotation.x += control.rotationSpeedX;
    cubeBody.rotation.y += control.rotationSpeedY;
    cubeBody.rotation.z += control.rotationSpeedZ;
    //Render using requestAnimationFrame
    requestAnimationFrame(gameLoop);
    //Render the scene
    renderer.render(scene, camera);
}
function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//GUI controls
function addControl(controlObject) {
    gui.add(controlObject, 'rotationSpeedX', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedY', -0.5, 0.5);
    gui.add(controlObject, 'rotationSpeedZ', -0.5, 0.5);
}
function addStatsObject() {
    stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
}
//Set up default renderer for the scene
function setupRenderer() {
    renderer = new Renderer();
    renderer.setClearColor(0xEEEEEE, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    console.log("Finished setting up Renderer");
}
//Set up main camera for the scene
function setupCamera() {
    camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = -20;
    camera.position.y = 25;
    camera.position.z = 20;
    camera.lookAt(new Vector3(5, 0, 0));
    console.log("Finished setting up Camera");
}
//# sourceMappingURL=game.js.map