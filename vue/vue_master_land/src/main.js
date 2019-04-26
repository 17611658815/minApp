import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store.js'
import {Api} from './net/Api.js'
import LogUtils from './utils/LogUtils'
import ToastUtils from './utils/ToastUtils'
import LoadingUtils from './utils/LoadingUtils'
import DialogUtils from './utils/DialogUtils'
import StorageUtils from './utils/StorageUtils'
import string from "./constant/string"
import 'lib-flexible'//适配
// 按需引入部分组件
import {Toast, Indicator, MessageBox, Header, Tabbar, TabItem, Navbar, Button, Cell} from 'mint-ui';
import 'mint-ui/lib/style.css'

// Vue.component(Toast.name, Toast);
// Vue.component(Indicator.name, Indicator);
// Vue.component(MessageBox.name, MessageBox);
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Navbar.name, Navbar);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

Vue.prototype.$Api = Api;//定义全局变量(请求)
Vue.config.productionTip = false
Vue.prototype.LogUtils = LogUtils;//定义全局log工具类 《使用方式：this.LogUtils.jsonLog(data) 》
Vue.prototype.StorageUtils = StorageUtils;//定义全局数据存储类 《使用方式：this.LocalStorage.XXX》
Vue.prototype.ToastUtils = ToastUtils;
Vue.prototype.LoadingUtils = LoadingUtils;
Vue.prototype.DialogUtils = DialogUtils;
Vue.prototype.$string = string;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
