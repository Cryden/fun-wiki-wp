var $ = require('jquery');

$('#s_dark').click(function () {
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/dark.css'));
  console.log('change');
});

$('#s_light').click(function () {
  $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/light.css'));
  console.log('change');
});
