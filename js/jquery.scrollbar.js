(function($) {

    var elements;
    var timer;

    var options = {};
    var default_options = {
        speed: 100,
        delta: 10,
        class_content: 'scrollbar-content',
        class_up: 'scrollbar-up',
        class_down: 'scrollbar-down',
        img_up: 'img/down.png',
        img_down: 'img/up.png'
    };

    $.fn.scrollbar = function(user_options) {
        elements = this;
        if (!user_options) user_options = {};
        $.each(default_options, function(key, default_value) {
            options[key] = user_options[key] || default_value;
        });
        scrollbar_init();
    }

    scrollbar_init = function() {
        $.each(elements, function(key, element) {
            element = $(element);

            var wrapper = $('<div></div>')
                .addClass(options.class_content)
                .css({height: (element.height() - 76) + 'px', overflow: 'hidden'});
            $(element).wrapInner(wrapper);

            var up = $('<a></a>')
                .addClass(options.class_up)
                .append($('<img></img>', {src: options.img_up}))
                .bind('mousedown', function() { scrollbar_start(this); })
                .mouseup(function() { scrollbar_stop(); });
            $(element).append(up);

            var down = $('<a></a>')
                .addClass(options.class_down)
                .append($('<img></img>', {src: options.img_down}))
                .bind('mousedown', function() { scrollbar_start(this); })
                .mouseup(function() { scrollbar_stop(); });
            $(element).prepend(down);

        });
    }

    scrollbar_start = function(button) {
        var element = $($(button).parent().children()[1]);
        var orientation = $(button).attr('class');
        var current = element.scrollTop();
        if ($(button).hasClass(options.class_up)) {
            element.scrollTop(current + options.delta);
        } else {
            element.scrollTop(current - options.delta);
        }
        timer = setTimeout(function() {
            scrollbar_start(button);
        }, options.speed);
    }

    scrollbar_stop = function() {
        clearTimeout(timer);
    }

})(jQuery);

