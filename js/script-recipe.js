$(document).ready(function(){
	$(".icon-menu").hide();
	console.log("Documento Listo");

	$('.js-show-recipe').click(function(){
		$('.page').removeClass("make");
	})
	$('.js-show-make').click(function(){
		$('.page').addClass("make");
	})
});