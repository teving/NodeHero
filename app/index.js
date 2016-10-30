const fs = require('fs');
const async = require('async');

function stats(file){
	return new Promise((resolve, reject) => {
		fs.stat(file, (err, data) => {
			if (err){
				return reject(err);
			}
			resolve(data);
		});
	});
}

Promise.all([
	stats('app/index.js'),
	stats('app/calc.js'),
	stats('app/bad.js')
])
.then((data) => {
	console.log(`success: ${data}`);
})
.catch((err) => {
	console.log(`error: ${err}`);
});