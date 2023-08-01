import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/login',
            name:'login',
            component:()=>import('../views/login.vue')
        }
    ]
})
export default router
