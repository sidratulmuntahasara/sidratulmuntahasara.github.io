// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Clip
let btn = document.querySelector('.play-btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
btn.onclick = function(){
    btn.classList.add('active');
    clip.classList.add('active');
    video.play();
    video.currentTime = 0;
}
close.onclick = function(){
    btn.classList.remove('active');
    clip.classList.remove('active');
    video.pause();
}
video.onended = function(){
  btn.classList.remove('active')
    clip.classList.remove('active')
}