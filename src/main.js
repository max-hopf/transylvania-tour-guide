import { createApp } from 'vue';
import './assets/parallax-bg.css';
import './style.css';
import './animations.css';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
