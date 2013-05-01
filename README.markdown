jQuery Scrollbar Plugin
===============

This jQuery plugin allows you to customize vertical scrollbar.


Demo
-----------------

*   [www.frederic-blatiere.com](http://www.frederic-blatiere.com/atelier)


Dependances
------------------

* [jQuery](http://jquery.com/)


Usage
------------------

1.  In header, include js and css files:

        <script type="text/javascript" src="js/jquery.scrollbar.js"></script>
        <link rel="stylesheet" type="text/css" href="css/jquery.scrollbar.css" />
        
2.  In body:

        <div class="scrollbar"> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mattis, purus sodales pharetra tempor, neque tortor aliquam orci, elementum vulputate nisl enim vel urna. Vestibulum lectus erat, varius quis eleifend ac, volutpat sed quam. Fusce placerat hendrerit turpis sit amet commodo. Quisque faucibus euismod metus, vel aliquam nisl consequat pharetra. Vivamus tempus faucibus cursus. Etiam ornare ante quis elit consectetur sollicitudin. Vivamus venenatis lacus nec massa mollis et posuere nisi consequat. Morbi convallis risus ut odio viverra vulputate. Etiam at dui ut tortor convallis viverra. Nunc tempus risus id massa suscipit cursus tempor nisl tristique. Nunc ultrices tristique lorem id accumsan. Quisque ligula quam, vestibulum vel sagittis sed, lacinia eget sapien. Vivamus pretium consectetur sapien eget venenatis. Curabitur at est eu ante semper tristique. Phasellus a velit eros. Sed molestie vestibulum erat at condimentum. Fusce at nulla vitae lacus sollicitudin commodo. Donec laoreet, purus in consequat accumsan, odio velit posuere turpis, ut tempor justo arcu quis nisi. Sed massa risus, iaculis non vehicula non, tristique in purus.</p> 
        </div>
        
3.  Then, apply plugin:

        <script type="text/javascript">
            $(function() {
                $('.scrollbar').scrollbar();
            });
        </script>
