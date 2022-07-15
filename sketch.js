let capture;
let posenet;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose,skeleton;
let actor_img;
let specs,smoke;

function setup(){
    createCanvas(800,500);
    // console.log('Setup function');
    capture = createCapture(VIDEO)
    capture.hide();

    posenet = ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    actor_img = loadImage('images\shahrukh.png');
    specs = loadImage('images\spect.png');
    smoke = loadImage('images\sigar.png');
}
// function getRandomArbitrary(min, max){
//     return Math.random()*(max-min)+min;
// }
function receivedPoses(poses){
    console.log(poses);

    if(poses.length > 0){
        singlePose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw(){

    // r= getRandomArbitrary(0,255);
    // g= getRandomArbitrary(0,255);
    // b= getRandomArbitrary(0,255);
    // fill(r,g,b);
    // ellipse(mouseX, mouseY,50,50);


    // console.log('Draw function');
    // background(200);
    //1.point
    // point(200, 200);
    //2.line
    // line(200,200,300,300);

    //3.triangle
    // triangle(100,200,300, 400, 150, 450);
    //4.rectangle
    // rect(500,200,100,100);
    //5. circle

    //stroke and color
    // fill(132,100,100);
    // stroke(250,0,0);
    // strokeWeight(5);

    // ellipse(100, 200,100,100);
    // stroke(0,255,0);
    // ellipse(250, 200,100,100);
    // ellipse(400, 200,100,100);
    // stroke(0,0,255);
    // ellipse(550, 200,100,100);
    // ellipse(700, 200,100,100);

    image(capture, 0, 0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x, singlePose.keypoints[i].position.y,20);
        }
        stroke(255,255,255);
        strokeWeight(5);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x, skeleton[j][0].position.y, skeleton[j][1].position.x, skeleton[j][1].position.y)
        }
    }
}
