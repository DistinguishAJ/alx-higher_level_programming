$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
	$('UL#list_movies').append(...data.result.map(movie => '<li>${movie.title}</li>'));
});
