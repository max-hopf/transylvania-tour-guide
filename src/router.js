import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import BlogSection from './components/BlogSection.vue';
import BlogPostPage from './components/BlogPostPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogSection
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPostPage
  }
];

const router = createRouter({
  history: createWebHistory('/transylvania-tour-guide/'),
  routes
});

export default router;
