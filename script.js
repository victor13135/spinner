console.log("Spinner!");

let divRightHalf = document.getElementById("rightHalf");
let divRightMask = document.getElementById("rightMask");
let divLeftHalf = document.getElementById('leftHalf');
let divLeftMask = document.getElementById("leftMask");
let divDial = document.getElementById("dial");

let divRightHalfh = document.getElementById("rightHalfh");
let divRightMaskh = document.getElementById("rightMaskh");
let divLeftHalfh = document.getElementById('leftHalfh');
let divLeftMaskh = document.getElementById("leftMaskh");
let divCenterMaskh = document.getElementById("centerMaskh");

let divRightHalfm = document.getElementById("rightHalfm");
let divRightMaskm = document.getElementById("rightMaskm");
let divLeftHalfm = document.getElementById('leftHalfm');
let divLeftMaskm = document.getElementById("leftMaskm");
let divCenterMaskm = document.getElementById("centerMaskm");

let divRightHalfs = document.getElementById("rightHalfs");
let divRightMasks = document.getElementById("rightMasks");
let divLeftHalfs = document.getElementById('leftHalfs');
let divLeftMasks = document.getElementById("leftMasks");
let divCenterMasks = document.getElementById("centerMasks");

function returnTwoCharacterString (arg) {
    let result = "";
    if (arg < 10) {
        result = "0" + String(arg);
    } else {
        result = String(arg);
    }
    return result;
}
// divRightMask.style.transformOrigin= "0 50%";
// divLeftMask.style.transformOrigin= "100% 50%";

// divLeftMasks.style.backgroundColor = "red";
// divRightMasks.style.backgroundColor = "aqua";

let angle = 0, minusAngle = 0;
let h=0; m=0; s=0;
let angleH = 0, angleM = 0, angleS = 0;
let prevS, tenth=0;

setInterval(() => {
    
    divRightHalfh.style.zIndex=35;
    divLeftMaskh.style.transform=`rotate(0deg)`;
    divRightMaskh.style.transform=`rotate(0deg)`;

    divRightHalfm.style.zIndex=35;
    divLeftMaskm.style.transform=`rotate(0deg)`;
    divRightMaskm.style.transform=`rotate(0deg)`;
    
    divRightHalfs.style.zIndex=35;
    divLeftMasks.style.transform=`rotate(0deg)`;
    divRightMasks.style.transform=`rotate(0deg)`;
    
    let date = new Date();
    h = date.getHours();
    m = date.getMinutes();
    s = date.getSeconds();

    angleS = 6*s+6;
    angleM = 6*m + s/10;
    angleH = (h%12) * 30 + m/2;

    divCenterMaskh.textContent = returnTwoCharacterString(h);
    divCenterMaskm.textContent = returnTwoCharacterString(m);
    divCenterMasks.textContent = returnTwoCharacterString(s);
    
    if(angleS >6 && angleS<=180) {
        divRightMasks.style.transform=`rotate(${angleS-6}deg)`;
    } else if (angleS >6 && angleS<=360) {
        divRightHalfs.style.zIndex = 60;
        divLeftMasks.style.transform=`rotate(${angleS-180-6}deg)`;
    } else {
        divRightHalfs.style.zIndex = 60;
        divLeftMasks.style.transform=`rotate(180deg)`;
        divRightMasks.style.transform=`rotate(-180deg)`;
    }

    if(angleM >6 && angleM<=180) {
        divRightMaskm.style.transform=`rotate(${angleM-6}deg)`;
    } else if (angleM >6 && angleM<=360) {
        divRightHalfm.style.zIndex = 60;
        divLeftMaskm.style.transform=`rotate(${angleM-180-6}deg)`;
    } else {
        divRightHalfm.style.zIndex = 60;
        divLeftMaskm.style.transform=`rotate(180deg)`;
        divRightMaskm.style.transform=`rotate(-180deg)`;
    }

    if(angleH >6 && angleH<=180) {
        divRightMaskh.style.transform=`rotate(${angleH-6}deg)`;
    } else if (angleH >6 && angleH<=360) {
        divRightHalfh.style.zIndex = 60;
        divLeftMaskh.style.transform=`rotate(${angleH-180-6}deg)`;
    } else {
        divRightHalfh.style.zIndex = 60;
        divLeftMaskh.style.transform=`rotate(180deg)`;
        divRightMaskh.style.transform=`rotate(-180deg)`;
    }

    // divRightMask.style.backgroundColor="green";
    // divLeftMask.style.backgroundColor="yellow";

    if (angle<=360){
        angle++;
        minusAngle = 0 - angle;
        if(angle<=180) {
            divLeftMask.style.transform=`rotate(${-angle}deg)`;
        } else if (angle = 360) {
            divLeftMask.style.zIndex = 10;
            divLeftHalf.style.zIndex = 60;
            divRightMask.style.transform=`rotate(${180-angle}deg)`;
            divRightHalf.style.zIndex = 35;
        }
    }
}, 1000);