
function show_hide() {
	var click = document.getElementById("drop-content");
	if(click.style.display==="none") {
		click.style.display = "block" ;
	}else {
		click.style.display ="none";
	}
}

$(document).ready(function(){
	$(".mobile-btn").click(function(){
	  $("iframe").show();
	});
	$(".mobile-btn").click(function(){
		$(".mobile-btn").hide();
		
  });
  });


  

$(window).scroll(function() {
	if($(window).scrollTop() > 150) {
		$('.sec-one-car-one').addClass('animation-1');
		$('.sec-one-car-two').addClass('animation-2');
	}
	else {
		$('.sec-one-car-one').removeClass('animation-1');
		$('.sec-one-car-two').removeClass('animation-2');
	};

	if($(window).scrollTop() > 500) {
		$('.header').addClass('scroll');
	}
	else {
		$('.header').removeClass('scroll');
	};

	if($(window).scrollTop() > 300) {
		$('.s1-white').addClass('animation-3');
		$('.s1-red').addClass('animation-4');
	}
	else {
		$('.s1-white').removeClass('animation-3');
		$('.s1-red').removeClass('animation-4');
	}

	if($(window).scrollTop() > 1000) {
		$('.s2-pink').addClass('animation-5');
		$('.signal').addClass('animation-6');
		$('.car-stopper').addClass('animation-7');
		$('.s2-yellow').addClass('animation-8');
		$('.s2-red ').addClass('animation-9');
		$('.s2-red ').addClass('animation-10');
	}
	else {
		$('.s2-pink').removeClass('animation-5');
		$('.signal').removeClass('animation-6');
		$('.car-stopper').removeClass('animation-7');
		$('.s2-yellow').removeClass('animation-8');
		$('.s2-red ').removeClass('animation-9');
		$('.s2-red ').removeClass('animation-10');
	}
});