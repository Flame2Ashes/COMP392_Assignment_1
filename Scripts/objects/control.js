/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeedX, rotationSpeedY, rotationSpeedZ) {
            this.rotationSpeedX = rotationSpeedX;
            this.rotationSpeedY = rotationSpeedY;
            this.rotationSpeedZ = rotationSpeedZ;
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        //Change colour
        Control.prototype.changeColour = function () {
            cubeBody.material = new LambertMaterial({ color: 0xff3300 });
            cubeLeftArm.material = new LambertMaterial({ color: 0x663200 });
            cubeRightArm.material = new LambertMaterial({ color: 0x663200 });
            cubeLeftLeg.material = new LambertMaterial({ color: 0x663200 });
            cubeRightLeg.material = new LambertMaterial({ color: 0x663200 });
            cubeHead.material = new LambertMaterial({ color: 0x663200 });
        };
        return Control;
    })();
    objects.Control = Control;
})(objects || (objects = {}));
//# sourceMappingURL=control.js.map