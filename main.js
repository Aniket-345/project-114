nose_X=""
nose_Y=""


function preload(){
    image_moustach=loadImage("https://i.postimg.cc/rmDL072L/moustach-removebg-preview.png")
    image_lipstic=loadImage("https://i.postimg.cc/hGPH7NRt/1028030370269366-removebg-preview.png")
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    pose_net=ml5.poseNet(video,model_loaded)
    pose_net.on("pose",got_result)


}

function model_loaded(){
    console.log("model_loaded")
}

function draw(){
    image(video,0,0,300,300)
    option=document.getElementById("drop_down").value
    if(option=="Option_1"){
        image(image_moustach,nose_X-20,nose_Y-2,40,40)
    }else{
        image(image_lipstic,nose_X-25,nose_Y+7,50,40)
    }
    
}

function got_result(result){
    if(result.length>0){
        console.log(result);
        nose_X=result[0].pose.nose.x
        nose_Y=result[0].pose.nose.y
    }
}
function snap(){
    save("fillter.png")
}