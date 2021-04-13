import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入vant组件
import { Swipe, SwipeItem, Sidebar, SidebarItem, ActionSheet, Button, SwipeCell, Card } from 'vant';

// 引入rem
import rem from 'assets/js/public'
rem(window, 1242)

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(ActionSheet);
Vue.use(Button);
Vue.use(SwipeCell);
Vue.use(Card)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
