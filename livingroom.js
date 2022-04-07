img="";
status="";

function preload()
{
img=loadImage("biglivingroom.jpeg");
}

function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
objectDetectore=ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw()
{
image(img,0,0,600,400);
}
function modelLoaded()
{
    console.log("model loaded");
    status=true;
    objectDetector.detect(img, gotResults);
}
s
function gotResults(error, results)
{
if(error){
    console.error(error);
}
console.log(results);
}