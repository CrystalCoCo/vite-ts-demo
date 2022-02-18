import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.less'

createApp(App).use(router).use(store).mount('#app')
