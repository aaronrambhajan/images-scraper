'use strict'
var Scraper = require ('./index')
  , google = new Scraper.Google();

// Parse the user's query.
var queryStr = process.argv[2];
var queryArr = queryStr.split(" ");
var testQueryNum = queryArr[queryArr.length-1];
var test = parseInt(testQueryNum);
var numQueries;
var query;

// Check for last arg.
if (isNaN(test)) {
	numQueries = "10";
	query = queryArr.join(" ");
} else {
	numQueries = testQueryNum;
	query = (queryArr.slice(0, queryArr.length-1)).join(" ");
}

console.log(query); // stdout used by Python to write filenames.

google.list({
	keyword: query,
	num: numQueries,
	detail: false,
	nightmare: {
		show: false
	},

  // Feel free to change advanced parameters.
  advanced: {
    imgType: 'photo', // clipart, face, lineart, news, photo
    resolution: undefined, // l(arge), m(edium), i(cons), etc.
    color: undefined // color, gray, trans
  }
})
.then(function (res) {
	console.log('', res);
}).catch(function(err) {
	console.log('err',err);
});

google.on('result', function(item) {
	console.log('result', item);
});