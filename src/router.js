import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('./components/HomePage.vue');
const BlogSection = () => import('./components/BlogSection.vue');
const BlogPostPage = () => import('./components/BlogPostPage.vue');

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
