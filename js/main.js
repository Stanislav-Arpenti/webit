$(document).ready(function(){

	$('.header_burger').click(function(event){
		$('.header_burger,.mobile_menu').toggleClass('active');
	});

	$('.submenu_btn').click(function(event){
		$('.submenu_btn,.submenu').toggleClass('active');
	});


	$('.slider-news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		prevArrow: $('.slider-prev'),
		nextArrow: $('.slider-next'),
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				autoplay:true,
				arrows:false,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows:false,
			}
		},

		],

	});

	$('.gallery_video').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
/*
		prevArrow: $('.gallery-prev'),
		nextArrow: $('.gallery-next'),
		*/
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows:false,
			}
		},
		],
	});

	$('.projects-slider').slick({
		centerMode: true,
		centerPadding: '25%',
		slidesToShow: 1,
	});

});