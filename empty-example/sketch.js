document.onclick = function(e) {
  const audio1 = new Audio();
  audio1.src = "./lion.wav.wav";

  if(e.target == document.getElementById('lion')) {
    audio1.play()
  }



  const audio2 = new Audio();
  audio2.src = "./elephant.mp3.mp3";

  if(e.target == document.getElementById('elephant')) {
    audio2.play()
  }



  const audio3 = new Audio();
  audio3.src = "./monkey.wav.wav";

  if(e.target == document.getElementById('monkey')) {
    audio3.play()
  }

}



function setup() {
  createCanvas(720, 200);
}



  
  
 




  





  
  
