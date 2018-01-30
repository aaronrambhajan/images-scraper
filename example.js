'use strict'

var Scraper = require ('./index')
  , google = new Scraper.Google()
  , bing = new Scraper.Bing()
  , pics = new Scraper.Picsearch()
  , yahoo = new Scraper.Yahoo();

// Get the user's query. 
var query = '';
process.argv.forEach(function (val, index, array) {
	if (index >= 2) {
		query += val + ' ';
	}
});

console.log(query);

google.list({
	keyword: query,
	num: 50,
	detail: false,
	nightmare: {
		show: false
	},
  advanced: {
    imgType: 'photo', // options: clipart, face, lineart, news, photo
    resolution: undefined, // options: l(arge), m(edium), i(cons), etc.
    color: undefined // options: color, gray, trans
  }
})
.then(function (res) {
	console.log('', res);
}).catch(function(err) {
	console.log('err',err);
});

// listening on events is also possible
google.on('result', function(item) {
	console.log('result', item);
});