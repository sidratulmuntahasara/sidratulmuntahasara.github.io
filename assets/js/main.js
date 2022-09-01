/*
  Header
*/

window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* ---- =========================================================== ---- */



/*
  Clip
*/
let btn = document.querySelector('.play-btn');
let clip = document.querySelector('.clip');
let close = document.querySelector('.close');
let video = document.querySelector('video');
let bg = document.querySelector('.bg');
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
    btn.classList.remove('active');
    clip.classList.remove('active');
}

/* ---- =========================================================== ---- */


/*
  Info Panel
*/

function openInfo() {
  document.getElementById("report").style.width = "350px";
}

function closeInfo() {
  document.getElementById("report").style.width = "0";
}

/* ---- =========================================================== ---- */


/*
  Image Comparison Slider
*/
let active = false;
document.querySelector('.scroller-middle').addEventListener('mousedown',function(){
  active = "middle";
  document.querySelector('.scroller-middle').classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller-middle').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller-middle').classList.remove('scrolling');
});
document.querySelector('.scroller-top').addEventListener('mousedown',function(){
    active = "top";
    document.querySelector('.scroller-top').classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller-top').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller-top').classList.remove('scrolling');
});
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.slider').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
  let transform = Math.max(0,(Math.min(x,document.querySelector('.slider').offsetWidth)));
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    document.querySelector('.scroller-middle').style.left = transform-25+"px";
    if (document.querySelector('.scroller-top').getBoundingClientRect().left>document.querySelector('.scroller-middle').getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      document.querySelector('.scroller-top').style.left = transform-30+"px";
    }
  }

  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    document.querySelector('.scroller-top').style.left = transform-25+"px";
    if (document.querySelector('.scroller-top').getBoundingClientRect().left>document.querySelector('.scroller-middle').getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      document.querySelector('.scroller-middle').style.left = transform-20+"px";
    }
  }
}

active = "middle";
scrollIt(400);
active = "top";
scrollIt(230);
active = false;


document.querySelector('.scroller-middle').addEventListener('touchstart',function(){
    active = "middle";
    document.querySelector('.scroller-middle').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    document.querySelector('.scroller-middle').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    document.querySelector('.scroller-middle').classList.remove('scrolling');
});
document.querySelector('.scroller-top').addEventListener('touchstart',function(){
    active = "top";
    document.querySelector('.scroller-top').classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    document.querySelector('.scroller-top').classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    document.querySelector('.scroller-top').classList.remove('scrolling');
});
document.querySelector('.slider').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.slider').getBoundingClientRect().left;
    scrollIt(x);
});

/* ---- =========================================================== ---- */


/*
  Targets
*/

$(".step").click( function() {
  $(this).addClass("active").prevAll().addClass("active");
  $(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
  $("#line-progress").css("width", "5%");
  $(".11-1").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
  $("#line-progress").css("width", "15%");
  $(".11-2").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
  $("#line-progress").css("width", "25%");
  $(".11-3").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
  $("#line-progress").css("width", "35%");
  $(".11-4").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
  $("#line-progress").css("width", "45%");
  $(".11-5").addClass("active").siblings().removeClass("active");
});

$(".step06").click( function() {
  $("#line-progress").css("width", "55%");
  $(".11-6").addClass("active").siblings().removeClass("active");
});

$(".step07").click( function() {
  $("#line-progress").css("width", "65%");
  $(".11-7").addClass("active").siblings().removeClass("active");
});

$(".stepA").click( function() {
  $("#line-progress").css("width", "75%");
  $(".11-A").addClass("active").siblings().removeClass("active");
});

$(".stepB").click( function() {
  $("#line-progress").css("width", "85%");
  $(".11-B").addClass("active").siblings().removeClass("active");
});

$(".stepC").click( function() {
  $("#line-progress").css("width", "100%");
  $(".11-C").addClass("active").siblings().removeClass("active");
});

/* ---- =========================================================== ---- */


/*
  Basic Chatbot
*/
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value;

	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
  
	var TextBox_val = document.getElementById("InputBox").value; 
	var BotText_val = document.getElementById("BotText"); 

	var FormatInput = TextBox_val.toLowerCase().trim(); 
  
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		BotText_val.innerHTML = "Hello there!";

	else if (FormatInput.includes("how are you")) 
		BotText_val.innerHTML = "I'm fine! Thanks for asking!";

	else if (FormatInput.includes("open google"))
	{
		BotText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		BotText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("what is sustainability"))
	{
		BotText_val.innerHTML = "Check this out";
		window.open("https://en.wikipedia.org/wiki/Sustainability", "_blank");
	}

  else if (FormatInput.includes("what is sustainable development"))
	{
		BotText_val.innerHTML = "Development that meets the needs of the present, without compromising the ability of future generations to meet their own needs";
	}

	else if (FormatInput.includes("ask web"))
	{
		BotText_val.innerHTML = "Opening Web-search for you!";
		window.open("https://www.google.com", "_blank");
	}

  else if (FormatInput.includes("help"))
	{
		BotText_val.innerHTML = "For now only a few commands work. Check info below. Further upgrades will be made soon!";
	}

	else
		BotText_val.innerHTML = "Sorry, I can't understand you 😔 ... I am still under-development";
}

/* ---- =========================================================== ---- */


/*
  Last Image Slider
*/
function setURL(newUrl){
  var url=newUrl;
  return function(){
    document.getElementById('img').setAttribute('src',url);
  }
}
document.getElementById('c2-h1').addEventListener('mouseover',setURL('../assets/imgs/wl-balance.jpg'));
document.getElementById('c2-h2').addEventListener('mouseover',setURL('../assets/imgs/urban.png'));
document.getElementById('c2-h3').addEventListener('mouseover',setURL('../assets/imgs/enhance.png'));
document.getElementById('c2-h4').addEventListener('mouseover',setURL('../assets/imgs/sports.png'));
document.getElementById('c2-h5').addEventListener('mouseover',setURL('../assets/imgs/next-g.jpg'));
document.getElementById('c2-h6').addEventListener('mouseover',setURL('../assets/imgs/env.jpg'));

/* ---- =========================================================== ---- */
