var Deferred = require('stupid-deferred');

/**
 * Image loader
 * @constructor
 */
function Imageloader(opts){
	/**
     * @define {object} Collection of public methods.
     */
    var self = {};

    /**
     * @define {object} Options for the constructor 
     */
    var opts = opts || {};

    /**
     * @define {object} Cache for loaded images
     */
	var cache = {};

	/**
	 * Loading image
	 * @example imageload.load(src).success( // Do Something ).error( //Do something );
	 * @param {string} src Source of the image that should be loaded
	 * @config {object} def Deferred object to handle callbacks
	 * @return {object} Returns a promise
	 */
	function load(src){
		var def = Deferred();

		/**
		 * If image if cache returns the loaded image.
		 */
		if(cache[src]){
			/** resolve promise with cache image */
			def.resolve(cache[src], 'cached image');
		}else{
			/**
			 * Create new image
			 * Setup listeners for the image,
			 * and then set source.
			 */
			var img = new Image();
		    img.onload = function() {
		    	/** Cache image */
		        cache[src] = img;
		        /** Resolve promise */
		        def.resolve(img);
		    }
		    img.onerror = function(){
		    	def.reject('ERROR: ' + src);
		    }
		    img.src = src;
		}
		/**
		 * @return {object} Return promise
		 */
	    return def.promise;
	}

	/**
	 * Public methods
	 * @public {function}
	 */
	self.load = load;

	/**
	 * @return {object} Public object
	 */
	return self; 
}

/** @export */
module.exports = Imageloader; 