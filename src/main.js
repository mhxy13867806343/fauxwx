import { createApp } from 'vue'


import "@/style/tailwind.scss";
import './style.css'
import "normalize.css"
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import * as Pinia from 'pinia';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app=createApp(App)
app.use(Pinia.createPinia());
app.use(router)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')
