$(document).ready(function(){

	$('.tab-health').click(function(){
		$('section').removeClass('active');
		$('.tab').removeClass('active');
		$('section.health').addClass('active');
		$('.tab-health').addClass('active');
	});

	$('.tab-todo').click(function(){
		$('section').removeClass('active');
		$('.tab').removeClass('active');
		$('section.todo').addClass('active');
		$('.tab-todo').addClass('active');
	});

	$('.tab-notes').click(function(){
		$('section').removeClass('active');
		$('.tab').removeClass('active');
		$('section.notes').addClass('active');
		$('.tab-notes').addClass('active');
	});

	navOffset = $('nav').offset().top;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll>navOffset){
			$('nav').addClass('fixed');
			$('section').css('margin-top',$('nav').height() + 'px');
		}

		if(scroll<=navOffset){
			$('nav').removeClass('fixed');
			$('section').css('margin-top','0px');
		}
	});

});