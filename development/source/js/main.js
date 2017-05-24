console.log('script init');

//require ('./modules/main/fonts_loader.js');
require ('./modules/main/menu.js');
require ('./modules/main/change_theme.js');
//require ('./modules/main/social.js');
//require ('./modules/main/js_loader.js');

// News_page script
/*

    var adv = $('.advert').width();
    console.log (adv);

    if (adv == 320) {
        elem = document.createElement('div');
        elem.innerHTML = '<img src="./images/320x480_advert.png">';
        $('.advert').append(elem);
        console.log ('ok 320');
    }
    if (adv == 300) {
        elem = document.createElement('div');
        elem.innerHTML = '<img src="./images/320x250_advert.png">';
        $('.advert').append(elem);
        console.log ('ok 300')
    }

*/


/* Инициализация Vue */
import Vue from 'vue'

/* Подключаем компоненты */

import VueResource from 'vue-resource'
import topadvert from './vue/components/Topadvert.vue'    

Vue.use(VueResource)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: { topadvert }
})