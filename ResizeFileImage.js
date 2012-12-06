function ResizeFileImage ( source, callback, width, height, format ) {

	var buffer    = document.createElement('canvas');

	buffer.width  = width;
	buffer.height = height;

	var bufferCtx = buffer.getContext('2d');

	if ( typeof source == 'object' && source.length >= 1 ) {
		source = source[0];
	}
	
	switch (source.tagName) {
		case 'INPUT':
			//var file = document.getElementById(id).files[0];
			var file = source.files[0];
			loadFromFile(file);
			break;
		case 'IMG':
			var src = source.src;
			loadFromSrc(src);
			break;
		default:

			if ( typeof source === 'string' ) {
				loadFromSrc(source);
			}

			break;
	}


    function loadFromFile (file) {
		
		var reader = new FileReader();
	    reader.onload = function(e){

	    	var data = e.target.result;
			loadFromSrc(data);

	    }
	    reader.readAsDataURL(file);

    }

    function loadFromSrc (src) {

		var img = new Image();

	 	img.onload = function() {
	 		response(this);
	    };

		img.src = src;

    }

    function response (img) {
		
		bufferCtx.drawImage(img, 0, 0, width, height);

		var data = buffer.toDataURL(format);

		callback(data);

    }


}