$(document).ready(function(){
	$(".icon-menu").hide();
	console.log("Documento Listo");

	$('.js-show-recipe').click(function(){
		$(this).addClass("active");
		$('.page').removeClass("make");
		$('.js-show-make').removeClass("active");

	})
	$('.js-show-make').click(function(){
		$('.page').addClass("make");
		$(this).addClass("active");
		$('.js-show-recipe').removeClass("active");
		
	})
	$('.icon-arrow-left-alt').click(function(){
		window.location = 'index.html';
	})
});