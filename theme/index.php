<?php

$data = array(
	'post_title' 		=> 'Энциклопедия фантастических вселенных',
	'post_image_thumb'	=> get_bloginfo('template_url').'/images/logo.png',
	'post_link' 		=> esc_url( home_url( '/' ) ),
	'post_excerpt' 		=> 'Сайт посвященный фантастическим вселенным и всему, что с ними связано.',
	'post_keywords' 	=> 'Энциклопедия, новости, фантастика, фентези',
	'post_og_prefix'	=> 'prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#"',
);

echo $jade->render($jade_template . '/index.pug', $data);

?>
