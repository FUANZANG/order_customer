import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

// 引入vant组件
import { Swipe, SwipeItem, Sidebar, SidebarItem, ActionSheet, Button, SwipeCell, Card, Stepper, Checkbox, CheckboxGroup, Dialog } from 'vant';

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
Vue.use(Card);
Vue.use(Stepper);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Dialog);

// Vue.prototype.$aaa = "你好你好你好你好";

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
