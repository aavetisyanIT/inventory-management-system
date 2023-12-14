// Information to reach API

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

const url = 'https://api.datamuse.com/words?sl=';

// Asynchronous function
const getSuggestions = () => {
	const wordQuery = inputField.value;
	const endpoint = url + wordQuery;
	fetch(endpoint, { cache: 'no-cache' })
		.then(
			response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Request failed!');
			},
			networkError => {
				console.log(networkError.message);
			},
		)
		.then(jsonResponse => {
			// renderRawResponse(jsonResponse);
			renderResponse(jsonResponse);
		});
};

// Clears previous results and display results to webpage
const displaySuggestions = event => {
	event.preventDefault();
	while (responseField.firstChild) {
		responseField.removeChild(responseField.firstChild);
	}
	getSuggestions();
};

submit.addEventListener('click', displaySuggestions);

// Asynchronous functions
const shortenUrl = () => {
	const urlToShorten = inputField.value;
	const data = JSON.stringify({ destination: urlToShorten });

	fetch(url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			apikey: apiKey,
		},
		body: data,
	})
		.then(
			response => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Request failed!');
				throw new Error('reach failed!');
			},
			networkError => {
				console.log(networkError.message);
			},
		)
		.then(jsonResponse => {
			renderResponse(jsonResponse);
		});
};

// Clear page and call Asynchronous functions
const displayShortUrl = event => {
	event.preventDefault();
	while (responseField.firstChild) {
		responseField.removeChild(responseField.firstChild);
	}
	shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);
