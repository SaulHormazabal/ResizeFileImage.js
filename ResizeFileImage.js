function ResizeFileImage (src,width,height) {
	
	var img = new Image();
	img.src = src;
	console.log(img);

	var buffer    = document.createElement('canvas');

	buffer.width  = width;
	buffer.height = height;

	var bufferCtx = buffer.getContext('2d');

	console.log(buffer);

    img.onload = function() {

		bufferCtx.drawImage(img, 0, 0, width, height);

		var data = buffer.toDataURL();

		return data;
    };


}