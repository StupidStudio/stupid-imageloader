var Deferred = require('stupid-deferred');

function Loadimage(opts){
	var self = {};
	var opts = opts || {};
	var cache = {};

	function load(src){
		var def = Deferred();

		if(cache[src]){
			def.resolve(cache[src], 'cached image');
		}else{
			var img = new Image();
		    img.onload = function() {
		        cache[src] = img;
		        def.resolve(img);
		    }
		    img.onerror = function(){
		    	def.reject('ERROR: ' + src);
		    }
		    img.src = src;
		}

	    return def.promise;
	}

	self.load = load;

	return self; 
}

module.exports = Loadimage; 