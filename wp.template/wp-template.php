<?php

/**
 * Plugin Name: WP Template
 */

add_action( 'wp_enqueue_scripts', function () {

	wp_enqueue_script( 'wp-template', plugin_dir_url( __FILE__ ) . '/wp-template.js', [
		'jquery',
		'wp-util'
	], time(), true );
} );

add_shortcode( 'wp-template', 'wp_template' );

function wp_template( $attrs ) { ?>
    <button class="button" id="wptmpl">Get Posts</button>
<?php }

/**
 * Get Ajax Posts
 */

function get_posts_callback() {
	$posts = get_posts( array(
		'post_type' => 'post'
	) );

	wp_send_json_success( array( 'posts' => $posts ) );
}

add_action( 'wp_ajax_wp-template', 'get_posts_callback' );

/**
 * Print Template Script
 */
add_action( 'wp_footer', function () { ?>
    <script type="text/html" id="tmpl-wp-template">
        <h1 class="post-title">{{data.post_title}}</h1>
        <p>{{{data.post_content}}}</p>
    </script>
<?php } );
