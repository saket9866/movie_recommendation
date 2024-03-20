
let vid = document.getElementById("myVideo"); 
let sid=document.getElementById("mySource");
let btnpp=document.getElementById("btnpp");
let btnm=document.getElementById("btnm");
let btnma=document.getElementById("btnma");

// btnm.addEventListener("toggle",changeTxt);
let vId=vid.volume;
function playVid() { 
if (vid.paused) {
    vid.play(); 
    btnpp.innerHTML="pause";
} else {
    vid.pause();
    btnpp.innerHTML="play";
}

    
  } 
  ////////////////////////////
  function changeTxt() {
    if (vid.muted === false) {    
      vid.muted = true;
      btnm.innerHTML=`<i class="fa-solid fa-volume-high"></i>`;
  }
  else {
    vid.muted =false ;
    btnm.innerHTML=`<i class="fa-solid fa-volume-xmark"></i>`;
      // your code
  }
}
  
 function fullScreen() {
    vid.requestFullscreen();
    vid.removeAttribute("poster");
    vid.setAttribute("controls");
   

    vid.setAttribute("autoplay");
 }

//  function vchange() {
//  sid.src="https://www.w3schools.com/tags/mov_bbb.mp4";
//  }
function inVol () {
  vid.volume=vid.volume+0.1;
}
function deVol() {
  vid.volume=vid.volume-0.1;
}
