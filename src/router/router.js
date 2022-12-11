import MainPage from '../pages/MainPage';
import ProductPage from '../pages/ProductPage';
import NotFoundPage from '../pages/404page';
import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/product/:id',
        name: 'ProductPage',
        component: ProductPage,
    },
    {
        path: '/404',
        name: 'NotFoundPage',
        component: NotFoundPage,
    },
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
}
);

export default router;