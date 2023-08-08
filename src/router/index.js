import { createRouter, createWebHashHistory } from "vue-router";
import homeRoutes from './modules/home'; // 导入路由配置
const router = createRouter({
    history: createWebHashHistory(),
   
    routes:[
        ...homeRoutes,
        {
            path:'/login',
            name:'login',
            component:()=>import('../views/login.vue')
        }
    ]
})
export default router
