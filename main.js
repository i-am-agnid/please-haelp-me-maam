function preload() {
    lips = loadImage('https://i.postimg.cc/LX8WnRRr/download-3.jpg')
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(lips, nose_x, nose_y, 50, 25);
}

function Take_snapshot() {
    save('YOUR PICTURE.PNG');
}

function modelloaded() {
    console.log("poseNet model has been loaded");
}

nose_x = 0;
nose_y = 0;

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
    }
}