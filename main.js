noseX=0;
noseY=0;
lWristX=0;
rWristX=0;
difference=0;
text1="";

function store_value(){
    text1=document.getElementById("Input").value;
}

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,400);
    canvas.position(600,200);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function modelLoaded(){
    console.log('model loaded');
}

function draw(){
    background('#E7EBDA');
    textSize(difference);
    fill('#00BB2D');
    text(text1,noseX,noseY);
}


function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        lWristX=results[0].pose.leftWrist.x;
        rWristX=results[0].pose.rightWrist.x;
        difference=Math.round(lWristX-rWristX);
        console.log("left wrist x: "+lWristX+"  right wrist x: "+rWristX+"  nose x: "+ noseX+"  nose y: "+noseY);
        document.getElementById("text_size").innerHTML="The size of the text is: "+difference+"px";
    }
}

