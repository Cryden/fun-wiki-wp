<?php

//
// init Composer libs
//
//

require_once('libs/autoload.php');


//
// Jade function
//

use Pug\Pug;
$jade = new Pug();
$jade_template = get_template_directory() . '/templates/';

function output_buffer_contents($function, $args = array()){
  ob_start();
  $function($args);
  $contents = ob_get_contents();
  ob_end_clean();
  return $contents;
}

add_action('wp_head', 'show_template');
function show_template() {
  if ( $_SERVER["SERVER_ADDR"] == '127.0.0.1' ) { // TODO: Need to test this
  	global $template;
  }
}

?>
