var Imageload = require('../../imageloader');
var imageload = Imageload();

// - - - - - - - - - - - - - - - - - - - - - - - - - - 

// Load image & cache
imageload.load('image.jpg') // returns a promise (stupid-deferred)
.success(function(image){
	// Do something
})
.error(function(){
	// Do something
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - 

imageload.load('image.jpg') // returns a promise (stupid-deferred)
.then(function(){
	return imageload.load('new-image.jpg');
})
.then(function(){
	return imageload.load('another-new-image.jpg');
})
.then(function(){
	// All 3 images is loaded after each other
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
