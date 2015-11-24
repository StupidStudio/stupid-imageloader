var Imageload = require('../../imageload');
var imageload = Imageload();

var src = 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png';

imageload.load(src)
.success(function(img, msg){
	console.log("FIRST", img, msg);

	imageload.load(src)
	.success(function(img, msg){
		console.log("SECOND", img, msg);
	});

	imageload.load('https://www.npmjs.com/static/images/not-found.png').success(function(img, msg){
		console.log("three", img, msg);
		imageload.load('https://www.npmjs.com/static/images/not-found.png').success(function(img, msg){
			console.log("three", img, msg);
		})
	})
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - 

// imageload.load('https://www.npmjs.com/static/images/npm-logo.svg').success(function(img){
// 	console.log("two", img);
// }).error(function(){
// 	console.log('failed');
// });

// imageload.load('https://www.npmjs.com/static/images/not-found.png').success(function(img){
// 	console.log("three", img);
// }).error(function(){
// 	console.log('failed');
// });

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

// imageload.load('https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png')
// .then(function(){
// 	return imageload.load('https://www.npmjs.com/static/images/npm-logo.svg');
// })
// .then(function(){
// 	return imageload.load('https://en.wikipedia.org/static/images/project-logos/enwiki.png');
// })
// .then(function(){
// 	console.log("done");
// });
