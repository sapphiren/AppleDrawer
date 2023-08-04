x = 0;
y = 0;
screen_width = 0;
screen_height = 0;

draw_apple = "";
apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  loadImage(apple.png);
  var apple = loadImage
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 
 to_number = Number(content);
if(Number.isInteger(to_number)){
  if(to_number == isInteger()){
    document.getElementById("status").innerHTML = "Apples are being drawn.";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "The speech has not identified a number.";
  }
}

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight

  createCanvas(screen_width, screen_height-150);
  canvas.position(0, 150)
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; i <= to_number; i++){
      x = Math.floor(Math.random() * 700)
      y = Math.floor(Math.random() * 400)
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";

    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = to_number + "Apples drawn.";
    speak();
}
