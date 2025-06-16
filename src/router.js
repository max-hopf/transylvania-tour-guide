import { createRouter, createWebHistory } from 'vue-router';
const HomePage = () => import('./components/HomePage.vue');
const BlogSection = () => import('./components/BlogSection.vue');
const BlogPostPage = () => import('./components/BlogPostPage.vue');

// const ActivityDetail = () => import('./components/ActivityDetail.vue');
const DetailsPageTransylvania = () => import('./components/DetailsPageTransylvania.vue');
const DetailsPageMaramures = () => import('./components/DetailsPageMaramures.vue');
const DetailsPageBucovina = () => import('./components/DetailsPageBucovina.vue');
const AboutUsPage = () => import('./components/AboutUsPage.vue');
const PrivacyPolicyPage = () => import('./components/PrivacyPolicyPage.vue');
import TermsAndConditionsPage from './components/TermsAndConditionsPage.vue';

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
  },
  {
    path: '/activity/transylvania',
    name: 'DetailsPageTransylvania',
    component: DetailsPageTransylvania
  },
  {
    path: '/activity/maramures',
    name: 'DetailsPageMaramures',
    component: DetailsPageMaramures
  },
  {
    path: '/activity/bucovina',
    name: 'DetailsPageBucovina',
    component: DetailsPageBucovina
  },
  // {
  //   path: '/activity/:activityId',
  //   name: 'ActivityDetail',
  //   component: ActivityDetail
  // },
  {
    path: '/about',
    name: 'AboutUsPage',
    component: AboutUsPage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicyPage',
    component: PrivacyPolicyPage
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditionsPage',
    component: TermsAndConditionsPage
  }
];

const router = createRouter({
  history: createWebHistory('/transylvania-tour-guide/'),
  routes
});

export default router;
