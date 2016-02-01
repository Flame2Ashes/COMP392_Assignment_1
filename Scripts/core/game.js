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
var cube;
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
    plane = new gameObject(new PlaneGeometry(16, 16, 1, 1), new LambertMaterial({ color: 0x79b61 }), 0, 0, 0);
    plane.rotation.x = 0.5 * Math.PI;
    scene.add(plane);
    console.log("Added Plane Primitive to scene");
    //.....Cubeman
    //Head
    cubeMaterial = new LambertMaterial({ color: 0x00ff00 });
    cubeGeometry = new CubeGeometry(2, 2, 2);
    var cubeHead = new Mesh(cubeMaterial, cubeGeometry);
    cubeHead.castShadow = true;
    cubeHead.receiveShadow = true;
    cubeHead.position.y = 1;
    scene.add(cubeHead);
}
//# sourceMappingURL=game.js.map