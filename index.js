const path = require('path');
const express = require('express');
const rp = require('request-promise');
const exphbs = require('express-handlebars');

const port = 3000;
const app = express();

app.engine('.hbs', exphbs({
	defaultLayout: 'main',
	extname: '.hbs',
	layoutsDir: path.join(__dirname, 'views/layouts')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/:city', (request, response) => {
	rp({
		uri: 'http://apidev.accuweather.com/locations/v1/search',
		qs: {
			q: request.params.city
		},
		json: true
	}).then((data) => {
		response.render('index', data);
	}).catch((err) => {
		console.log(err);
		response.render('error');
	});
});

app.listen(port);