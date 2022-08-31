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

//Info Panel
function openInfo() {
  document.getElementById("report").style.width = "350px";
}

function closeInfo() {
  document.getElementById("report").style.width = "0";
}

//Slider
// I hope this over-commenting helps. Let's do this!
// Let's use the 'active' variable to let us know when we're using it
let active = false;
// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
document.querySelector('.scroller-middle').addEventListener('mousedown',function(){
  active = "middle";
  // Add our scrolling class so the scroller has full opacity while active
  document.querySelector('.scroller-middle').classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  document.querySelector('.scroller-middle').classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  document.querySelector('.scroller-middle').classList.remove('scrolling');
});
// We'll have to do the same for our top scroller
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
// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our slider
  x -= document.querySelector('.slider').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});
// Let's use this function
function scrollIt(x){
  // Calculate our transform
  let transform = Math.max(0,(Math.min(x,document.querySelector('.slider').offsetWidth)));
  // we show all our bottom image but how much of our middle and top,
  // that'll depend on what we're dragging
  // if we're dragging the middle slider
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    document.querySelector('.scroller-middle').style.left = transform-25+"px";
    // if we're using scroller-middle, middle must always be to the right of top
    if (document.querySelector('.scroller-top').getBoundingClientRect().left>document.querySelector('.scroller-middle').getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      document.querySelector('.scroller-top').style.left = transform-30+"px";
    }
  }
  // if we're dragging the top slider
  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    document.querySelector('.scroller-top').style.left = transform-25+"px";
    // if we're using scroller-top, top must always be to the left
    if (document.querySelector('.scroller-top').getBoundingClientRect().left>document.querySelector('.scroller-middle').getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      document.querySelector('.scroller-middle').style.left = transform-20+"px";
    }
  }
}
// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
active = "middle";
scrollIt(400);
active = "top";
scrollIt(230);
active = false;

// And finally let's repeat the process for touch events
// first our middle scroller...
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
// then scroller top, our second scroller
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



// Target

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



//Chatbot
function IsEnter()
{
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

	// If enter key is pressed then only respond.
	if (TextBox_val != "")
	{
		if (event.keyCode == 13)
			main();
	}
}

function main()
{
	// the main logic will be coded here.
	var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
	var BotText_val = document.getElementById("BotText"); // Get all the data from the Bot text.

	var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.
	// For example "Apple" -> "apple".

	// Let's code the Logic for chatting...
	// and like this you can add several more features to it make it really advance.
	// As i said, i will be uploading it's source code it github so just check the link in description!
	if (FormatInput.includes("hi") || FormatInput.includes("hello"))
		BotText_val.innerHTML = "Hello there!";

	else if (FormatInput.includes("how are you")) 
		BotText_val.innerHTML = "I'm fine! Thanks for asking!";

	// Open websites!
	else if (FormatInput.includes("open google"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "Opening Google";
		window.open("https://www.google.com", "_blank");
	}

	else if (FormatInput.includes("open youtube"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "Opening YouTube";
		window.open("https://www.youtube.com", "_blank");
	}

	else if (FormatInput.includes("what is sustainability"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "Check this out";
		window.open("https://en.wikipedia.org/wiki/Sustainability", "_blank");
	}

  else if (FormatInput.includes("what is sustainable development"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "Development that meets the needs of the present, without compromising the ability of future generations to meet their own needs";
	}

	else if (FormatInput.includes("ask web"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "Opening Web-search for you!";
		window.open("https://www.google.com", "_blank");
	}

  else if (FormatInput.includes("help"))
	{
		// "https://" is important!
		BotText_val.innerHTML = "For now only a few commands work. Check info below. Further upgrades will be made soon!";
	}

	else
		BotText_val.innerHTML = "Sorry, I can't understand you 😔 ... I am still under-development";
}