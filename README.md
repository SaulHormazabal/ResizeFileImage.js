#ResizeFileImage.js

Resize images with JavaScript.

##Parameters

    ResizeFileImage ( source, callback, width, height, format );

##Sources

Resize images from diferents sources.

###input tag

    <input id="input_image_to_resize" type="file">
    <script>
        var source = document.getElementById('input_image_to_resize');
    </script>

###img tag

    <img id="img_image_to_resize" src="image_to_resize.jpg">
    <script>
        var source = document.getElementById('img_image_to_resize');
    </script>

###JQuery Selector

    <script>
        var source = $('#image_to_resize');
    </script>

* if selector return more than one, only resized the first element.

###String

    <script>
        var source = 'img/image_to_resize.jpg';
    </script>
    
##Format

Default format image/png

###Options

* 'image/png'
* 'image/jpg'

##Basic usage

source from input tag and de image resized loaded in img tag.


    <img id="image_resized">
    <script>
        ResizeFileImage ( 
            source, 
            function(data){
                var img = document.getElementById('image_resized');
                img.src = data;
            },
            100, 
            100
        );
    </script>