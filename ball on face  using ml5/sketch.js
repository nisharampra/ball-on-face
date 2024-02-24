let video;
let poseNet;
let noseX=0;
let noseY=0;

function setup() {
  createCanvas(640, 480);
  video=createCapture(VIDEO)
  video.hide();
poseNet=ml5.poseNet(video,modelReady)
  poseNet.on('pose',gotPoses);
}

function gotPoses(poses){
  console.log(poses);
  noseX=poses[0].pose.keypoints[0].position.x
    noseY=poses[0].pose.keypoints[0].position.y

}




function modelReady(){
  console.log('model ready');
}


function draw() {
  image(video,0,0);
  
  fill(255,0,0);
  ellipse(noseX,noseY,100);
}