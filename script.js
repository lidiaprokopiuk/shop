//COUNTDOWN


//set the date we're countin down to - new Date("Jan 5, 2024 15:37:25")
var countDown = new Date("Apr 10, 2023 15:37:25").getTime();
 

//update the count down every 1 second 
var x = setInterval(function() {

	//get today's date and time
	var now = new Date().getTime();

	//find the distance between now and the count down date
	var distance = countDown - now;

	//time calculations for days, hours, minutes, seconds
	var days = Math.floor(distance / (1000 * 60 * 60 *24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

	//display the results in the element with id="counter"
	// .slice(-2) gives us the last two characters of the string e.g. ("0" + "10") Giving us "010" so adding .slice(-2) gives us the last two characters "10"

	document.getElementById("days").innerHTML = ('0' + days).slice(-2); 
	document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
	document.getElementById("minutes").innerHTML = ('0' + minutes).slice(-2);
	document.getElementById("seconds").innerHTML = ('0' + seconds).slice(-2);

	//if the count down finished, write some text
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("bd-counter").style.display = "none";
	}
}, 1000);	


//TOGGLE HIDE AND SHOW

//hide tab-text
$('.tab-text').hide();

//show tab that click

$('.tab-title').click(function(e){
	e.preventDefault();

	//hide all tab-text
	var $this = $(this).parent().find('.tab-text');
	$('.tab-text').not($this).hide();

	//here is what I want to do
	$this.toggle(
		function(){
			if($this.siblings(".tab-title").children(".fa-solid").hasClass("fa-plus")){
				$this.siblings(".tab-title").children(".fa-solid").removeClass("fa-plus").addClass("fa-minus");
			} else {
				$this.siblings(".tab-title").children(".fa-solid").removeClass("fa-minus").addClass("fa-plus")
			}		
		}
	);	 
});

//ANIMATE HREF CLICK 

//add smooth scrolling to all buttons
$('.btn').on('click', function(event) {

	//make sure this.hash has a value before overriding default behavior
	if(this.hash !== "") {
		//prevent default anchor click behavior
		event.preventDefault();

		//store hash
		var hash = this.hash;

		//using jquery's animate() method to add smooth page scroll
		//the optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1500, function() {

			//add hash (# to) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
		});
	} //end if

});


//Equal Height

if ($(window).width() > 992) {
   var maxHeight = 0;

   $(".equal-height").each(function(){
		if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
	});

   $(".equal-height").height(maxHeight);
}



	var maxHeight = 0;

	$(".equal-column").each(function(){
		if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }

	});

	$(".equal-column").height(maxHeight);
