import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* symbol方式 */
import 'common/stylus/iconfont.js'
/* 引入字体文件需要的样式库 */
import 'common/stylus/index.styl'
/* svg-sprite-loader使用 */
import './icons/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
