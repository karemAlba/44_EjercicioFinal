$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$(".icon-arrow-left-alt").hide();

	function printNews(){
		

		var noticias = $('#noticias');
		noticias.append("Nuevas recetas");
		


	}
	printNews();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);

	var objetos = _.where(recipesArray, {highlighted: true});
	_.each(objetos, renderRecipe);

}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);

	var a = $('<a></a>');
	a.addClass('item-recipe');

	var spanPa = $('<span><span/>');
	spanPa.addClass("attribution");

	var spanHiu = $('<span><span/>');
	spanHiu.addClass("title-recipe");
	spanHiu.text(recipe.title);

	var spanHid = $('<span><span/>');
	spanHid.addClass("metadata-recipe");

	var spanNiu = $('<span><span/>');
	spanNiu.addClass("author-recipe");
	spanNiu.text(recipe.source.name);

	var spanNid = $('<span><span/>');
	spanNid.addClass("bookmarks-recipe");
	
	var spanBis = $('<span></span>');
	spanBis.addClass("icon-bookmark");

	var img = $('<img/>');
	img.attr('src', recipe.source.url);


	
	a.append(spanPa);
	spanPa.append(spanHiu);
	spanPa.append(spanHid);
	spanHid.append(spanNiu);
	spanPa.append(spanNid);
	spanNid.append(spanBis);
	a.append(img);

	console.log(a);
	$('.list-recipes').append(a);

}

/*function renderRecipe2(objetos){
	var template = 
		'<a class="item-recipe">' +
			'<span class="attribution">' +
				'<span class="title-recipe"><%= recipe.title %></span>' +
			'</span>' +
			'<span class="metadata-recipe">' +
				'<span class="author-recipe"><%= recipe.source.name %></span>' +
				'<span class="bookmarks-recipe">' +
					'<span class="icon-bookmark"></span>' +
				'</span>' +
			'</span>' +
			'<img src="<%= recipe.source.url %>">' +
		'</a>';

	var compiled = _.template( template );
	var li = compiled(pet);
	console.log(li);

	var elemento = $(li);
	$('#petList').append(elemento);
}*/

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}




