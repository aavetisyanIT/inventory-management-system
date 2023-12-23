const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const currencies = {
	diram: {
		countries: ['UAE', 'Morocco'],
	},
	real: {
		countries: ['Brazil'],
	},
	dinar: {
		countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
	},
	vatu: {
		countries: ['Vanuatu'],
	},
	shilling: {
		countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
	},
};

app.put('/currencies/:name/countries', ({ params, query }, res) => {
	currencies[params.name]['countries'] = query.countries;
	res.send(query);
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
