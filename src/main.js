import  { createApp } from 'vue';
import App from '@/App';
import router from '@/router/router';
import HeaderComponent from '@/components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

createApp(HeaderComponent).use(router).mount('header')
createApp(App).use(router).mount('#app')
createApp(FooterComponent).use(router).mount('footer')

