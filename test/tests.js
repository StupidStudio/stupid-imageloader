var test = require('tape');
var Imageload = require('../imageload');

test('Image loaded and return success', function(t){
	t.plan(1);
	var imageload = Imageload();
	var src = 'https://en.wikipedia.org/static/images/project-logos/enwiki.png';
	imageload.load(src).success(function(){
		t.pass('Image loaded');	
	}).error(function(){
		t.fail('Image NOT loaded: check if image exist');
	});
});

test('Image failed loading and return error', function(t){
	t.plan(1);
	var imageload = Imageload();
	var src = 'fakeimage.jpg';
	imageload.load(src).success(function(){
		t.fail('Image NOT loaded');
	}).error(function(){
		t.pass('Image loaded');	
	});
});

test('Loaded image return image from cache', function(t){
	t.plan(2);

	var imageload = Imageload();
	var src = 'https://en.wikipedia.org/static/images/project-logos/enwiki.png';
	var image;

	imageload.load(src).success(function(img){
		t.pass();
		image = img;
		
		imageload.load(src).success(function(img){
			t.equal(image, img);
		}).error(function(){
			t.fail();
		});

	}).error(function(){
		t.fail();
	});

});