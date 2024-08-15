const tmdbKey = '';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
	const genreRequestEndpoint = `genre/movie/list`;
	const queryString = `?language=en`;
	const urlToFatch = `${tmdbBaseUrl}/${genreRequestEndpoint}/${queryString}`;

	try {
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
			},
		};
		const response = await fetch(urlToFatch, options);
		if (response.ok) {
			const jsonResponse = await response.json();
			const genres = jsonResponse.genres;
			console.log('AAA genres', genres);
			return genres;
		}
	} catch (error) {
		console.log(error);
	}
};

try {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		},
	};
	const response = await fetch(urlToFatch, options);
	if (response.ok) {
		const jsonResponse = await response.json();
		const genres = jsonResponse.genres;
		console.log('AAA genres', genres);
		return genres;
	}
} catch (error) {
	console.log(error);
}

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
getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
