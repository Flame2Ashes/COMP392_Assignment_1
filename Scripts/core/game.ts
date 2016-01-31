/// <reference path="_reference.ts"/>

// MAIN GAME FILE

// THREEJS Aliases
import Scene = THREE.Scene;
import Renderer = THREE.WebGLRenderer;
import PerspectiveCamera = THREE.PerspectiveCamera;
import BoxGeometry = THREE.BoxGeometry;
import CubeGeometry = THREE.CubeGeometry;
import PlaneGeometry = THREE.PlaneGeometry;
import SphereGeometry = THREE.SphereGeometry;
import Geometry = THREE.Geometry;
import AxisHelper = THREE.AxisHelper;
import LambertMaterial = THREE.MeshLambertMaterial;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import Material = THREE.Material;
import Mesh = THREE.Mesh;
import Object3D = THREE.Object3D;
import SpotLight = THREE.SpotLight;
import PointLight = THREE.PointLight;
import AmbientLight = THREE.AmbientLight;
import Control = objects.Control;
import GUI = dat.GUI;
import Color = THREE.Color;
import Vector3 = THREE.Vector3;
import Face3 = THREE.Face3;
import Point = objects.Point;

//Custom Game Objects
import gameObject = objects.gameObject;

var scene: Scene;
var renderer: Renderer;
var camera: PerspectiveCamera;
var axes: AxisHelper;
var cube: Mesh;
var plane: Mesh;
var sphere: Mesh;
var ambientLight: AmbientLight;
var spotLight: SpotLight;
var control: Control;
var gui: GUI;
var stats: Stats;
var step: number = 0;
var cubeGeometry:CubeGeometry;
var cubeMaterial:LambertMaterial;

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
    plane = new gameObject(
        new PlaneGeometry(16, 16, 1, 1),
        new LambertMaterial( {color: 0x79b61}), 0, 0, 0);
        
    plane.rotation.x = 0.5 * Math.PI;
    
    scene.add(plane);
    console.log("Added Plane Primitive to scene");
 
    )
    
}