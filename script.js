$(document).ready(function(){
	$(window).scroll(function()
	{
		if(this.scrollY > 20){
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	// navbar toggle
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	// typing animaton
	var typed = new Typed(".typing",{
		strings:["Coder","Designer","Engineer","Freelancer"],
		typespeed: 100,
		backspeed: 60,
		loop:true
	});
	var typed = new Typed(".typing-2",{
		strings:["Coder","Designer","Engineer","Freelancer"],
		typespeed: 100,
		backspeed: 60,
		loop:true
	});
    // owl carousel
	$('.carousel').owlCarousel({
        margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:3,
				nav:false
			}
		}
	});
});