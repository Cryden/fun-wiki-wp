<?php

$data = array(
	'post_title' 		=> 'Энциклопедия фантастических вселенных',
	'post_image_thumb'	=> get_bloginfo('template_url').'/images/logo.png',
	'post_link' 		=> esc_url( home_url( '/' ) ),
	'post_excerpt' 		=> 'Сайт посвященный фантастическим вселенным и всему, что с ними связано.',
	'post_keywords' 	=> 'Энциклопедия, новости, фантастика, фентези',
	'post_og_prefix'	=> 'prefix="og: http://ogp.me/ns# website: http://ogp.me/ns/website#"',
);

if (is_user_logged_in()) {
	$data = array(
		'user_login' => 'login'); /* 	<a href="<?php echo wp_logout_url( home_url() ); ?>">Logout</a>*/
} else { 
	$data = array(
		'user_login' => 'no_login');
};
	/*	get_template_part('ajax', 'auth'); ?>            	
        <a class="login_button" id="show_login" href="">Login</a>
        <a class="login_button" id="show_signup" href="">Signup</a>
<?php } ?>*/

echo $jade->render($jade_template . '/index.pug', $data);

?>
