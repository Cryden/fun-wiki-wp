require ('./modules/main/fonts_loader.js');
require ('./modules/main/menu.js');
require ('./modules/main/change_theme.js');
//require ('./modules/main/social.js');
//require ('./modules/main/js_loader.js');

/* Инициализация Vue */
import Vue from 'vue'

/* Подключаем компоненты */

import VueResource from 'vue-resource'
import topadvert from './vue/components/Topadvert.vue'    
import userprofile from './vue/components/Userprofile.vue'    

Vue.use(VueResource)

new Vue({
  name: 'app',
  el: '#app',
  components: { [topadvert, userprofile] }
})