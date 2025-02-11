import { createRouter, createWebHistory,  RouteRecordRaw} from 'vue-router';
import Home from '../components/Home.vue'
import ShoppingCart from '../components/ShoppingCart.vue';
import AboutPage from '../components/AboutPage.vue';
import ContactPage from '../components/ContactPage.vue';
import SignInPage from '../components/SignInPage.vue';
import CreateAccountPage from '../components/CreateAccountPage.vue';
import AdminPage from '../components/AdminPage.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/about',
        name: 'AboutPage',
        component: AboutPage,
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage,
    },
    {
        path: '/sign-in',
        name: 'SignInPage',
        component: SignInPage,
    },
    {
        path: '/create-account',
        name: 'CreateAccountPage',
        component: CreateAccountPage,
    },
    {
        path: '/admin',
        name: 'AdminPage',
        component: AdminPage,
    },
    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;