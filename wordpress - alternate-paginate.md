#URL Query Args Paginate

## Query
```
<?php

	$paged = ! empty( $_REQUEST['paginate'] ) ? intval( $_REQUEST['paginate'] ) : 1;

	$postsPerPage = 9;

	$postOffset = ( ( $paged - 1 ) * $postsPerPage ) + 15;


	$posts = new WP_Query(
		array(
			'posts_per_page' => $postsPerPage,
			'post_type'      => 'post',
			'post_status'    => 'publish',
			'offset'         => $postOffset,
			'paged'          => $paged,
			'tax_query'      => [
				[
					'taxonomy' => $taxonomy_name,
					'field'    => 'name',
					'terms'    => get_queried_object()->name,
				]
			]
		)
	);


	$third_sec_posts = $posts->posts;


	if ( $third_sec_posts ) {
		$third_sec_post_ids = wp_list_pluck( $third_sec_posts, 'ID' );
		$excluded_posts     = array_merge( $excluded_posts, $third_sec_post_ids );

		foreach ( $third_sec_posts as $post ) {
			setup_postdata( $post );
			get_template_part( 'loop-templates/category-post' );
		}
		wp_reset_postdata();
	}
	?>
```

## Pagination

```
<?php

	$big = 999999999; // need an unlikely integer

	$total = ceil( ( $posts->found_posts - 15 ) / $postsPerPage );

	if ( $total >= 1 ) { ?>
		<div class="category-pagination">
			<?php {

				echo paginate_links( array(
					//'base'     => get_term_link(get_queried_object()) . '%_%',
					'format'   => '?paginate=%#%',
					'mid_size' => 2,
					'current'  => $paged,
					'total'    => $total
				) );

			} ?>
		</div>
	<?php }

	?>
```