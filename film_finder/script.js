const tmdbKey = '';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = () => {
	const genreRequestEndpoint = tmdbBaseUrl + '/genre/movie/list';
	const queryString = `?key=value`;
};

const getMovies = () => {
	const selectedGenre = getSelectedGenre();
};

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
	const movieInfo = document.getElementById('movieInfo');
	if (movieInfo.childNodes.length > 0) {
		clearCurrentMovie();
	}
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
