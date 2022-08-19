var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    function set_timeout(){
       imageID=set_timeout(selfie1, selfie2, selfie3);
       take_snapshot();
       speak_data = "Taking your next Selfie in 5 seconds";
       var utterThis = new SpeechSynthesisUtterance(speak_data, 5000, 10000, 15000);
       synth.speak(utterThis); 
    }
}

function take_snapshot(){
    console.log(imageID);

    Webcam.snap(function(data_uri){
        if(imageID==selfie1){
            document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>'
        }
        if(imageID==selfie2){
            document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>'
        }
        if(imageID==selfie3){
            document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>'
        }
    })
}
