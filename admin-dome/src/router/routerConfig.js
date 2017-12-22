import Layout from '../views/layout/Layout.vue'
import Home from '../views/Home'
export default[{
    path: '/',
    component: Layout,
    redirect: '/home',
    children:[
        {
            path: '/home',
            component: Home,
        }
    ]
}]