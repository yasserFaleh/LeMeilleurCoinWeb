import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import ListOwn from './components/ListOwn.vue'
import ListOwnDemands from './components/ListOwnDemands.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'ListOwn',
        component:ListOwn,
        path:'/myProducts'
    },
    {
        name:'ListOwnDemands',
        component:ListOwnDemands,
        path:'/myDemands'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router