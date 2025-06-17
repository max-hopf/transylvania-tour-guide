import { createApp } from 'vue';
import './assets/parallax-bg.css';
import './style.css';
import './animations.css';
import App from './App.vue';
import router from './router';

// Force scroll to top before every route navigation
router.beforeEach((to, from, next) => {
  document.body.scrollTo(0, 0);
  next();
});

createApp(App).use(router).mount('#app');
