$(document).ready(function(){
	$('.slider-news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		],

	});


	$('.header_burger').click(function(event){
		$('.header_burger,.mobile_menu').toggleClass('active');
	});

	$('.submenu_btn').click(function(event){
		$('.submenu_btn,.submenu').toggleClass('active');
	});

});