# Stupid Image Loader
A simple image loader

## Usage

Load image:


```javascript

var Imageloader = require('stupid-imageloader');
var imageLoader = Imageloader();

imageLoader.load('image.jpg') // returns a promise (stupid-deferred)
.success(function(image){
	// Do something
})
.error(function(){
	// Do something
});

```

Chain loading events:

```javascript
imageloader.load('image.jpg') // returns a promise (stupid-deferred)
.then(function(){
	// On success
	return imageloader.load('new-image.jpg');
}, function(){
	// On error
})
.then(function(){
	return imageloader.load('another-new-image.jpg');
})
.then(function(){
	// All 3 images is loaded after each other
});
```
