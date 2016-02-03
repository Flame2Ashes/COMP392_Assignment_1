/// <reference path="../../typings/tsd.d.ts"/>
//Source file name: control.ts
//Last modified by: Angelina Gutierrez
//Date last modified: 02/02/2016
//Program description: This file contains the classes that control rotation speed
//on the X, Y, and Z axes, as well as colour control.

module objects {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++
        public rotationSpeedX:number;
        public rotationSpeedY:number;
        public rotationSpeedZ:number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(rotationSpeedX:number, rotationSpeedY:number, rotationSpeedZ:number) {
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
     //Change colour
     public changeColour(): void {
        cubeBody.material = new LambertMaterial({color: 0xff3300});
        cubeLeftArm.material = new LambertMaterial({color:0x663200});
        cubeRightArm.material = new LambertMaterial({color:0x663200});
        cubeLeftLeg.material = new LambertMaterial({color:0x663200});
        cubeRightLeg.material = new LambertMaterial({color:0x663200});
        cubeHead.material = new LambertMaterial({color:0x663200});
     }
    }
}
