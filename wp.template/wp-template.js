(function ($) {
    var $button = $('#wptmpl');

    $button.click(function (e) {
        e.preventDefault();
        wp.ajax.send('wp-template', {
            success: function ($posts) {
                console.log($posts.posts);
                var template = wp.template('wp-template');

                //jQuery each
                // $.each($posts.posts, function ($index, $post) {
                //     $button.before(template($post));
                // });

                //underscore foreach
                $posts.posts.forEach(function ($post) {
                    $button.before(template($post));
                });
            }
        });

    });


    $(document).on('click', '.post-title', function (e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        alert($(this).text());
    });


})(jQuery);