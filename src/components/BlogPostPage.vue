<template>
  <section class="blogpost-section">
    <button class="back-btn" @click="goBack">← Back to Blog</button>
    <div v-if="post" class="blogpost-content">
      <img :src="post.image" :alt="post.title" class="blogpost-img" />
      <span class="blogpost-date">{{ post.date }}</span>
      <h2 class="blogpost-title">{{ post.title }}</h2>
      <p class="blogpost-body">{{ post.content }}</p>
    </div>
    <div v-else>
      <p>Blog post not found.</p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

import blogImg1 from '../assets/blog-post-1.jpg';
import blogImg2 from '../assets/blog-post-2.jpg';
import blogImg3 from '../assets/blog-post-3.jpg';
import blogImg4 from '../assets/blog-post-4.jpg';
import blogImg5 from '../assets/blog-post-5.jpg';
import blogImg6 from '../assets/blog-post-6.jpg';
import blogImg7 from '../assets/blog-post-7.jpg';

const blogPosts = [
  {
    id: 1,
    title: 'Lakeside Camping & Activity',
    date: 'May 31, 2024',
    image: blogImg1,
    content: 'Full content for blog post 1.'
  },
  {
    id: 2,
    title: 'Mountain Biking Adventure',
    date: 'June 5, 2024',
    image: blogImg2,
    content: 'Full content for blog post 2.'
  },
  {
    id: 3,
    title: 'Family Hiking Day',
    date: 'June 12, 2024',
    image: blogImg3,
    content: 'Full content for blog post 3.'
  },
  {
    id: 4,
    title: 'Wildlife Photography Tips',
    date: 'June 18, 2024',
    image: blogImg4,
    content: 'Full content for blog post 4.'
  },
  {
    id: 5,
    title: 'Kayaking on the River',
    date: 'June 22, 2024',
    image: blogImg5,
    content: 'Full content for blog post 5.'
  },
  {
    id: 6,
    title: 'Forest Survival Skills',
    date: 'June 28, 2024',
    image: blogImg6,
    content: 'Full content for blog post 6.'
  },
  {
    id: 7,
    title: 'Stargazing Nights',
    date: 'July 2, 2024',
    image: blogImg7,
    content: 'Full content for blog post 7.'
  }
];

const postId = computed(() => Number(route.params.id));
const post = computed(() => blogPosts.find(p => p.id === postId.value));

function goBack() {
  router.push({ name: 'Home', hash: '#blog' });
}
</script>

<style scoped>
.blogpost-section {
  padding: 2.5rem 0;
  background: #f6f9fc;
  min-height: 100vh;
  text-align: center;
}
.back-btn {
  background: none;
  border: none;
  color: #1976d2;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 1.5rem;
  text-align: left;
}
.back-btn:hover {
  color: #ffb300;
}
.blogpost-content {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  max-width: 650px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}
.blogpost-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.2rem;
}
.blogpost-date {
  color: #ffb300;
  font-weight: 600;
  font-size: 1rem;
}
.blogpost-title {
  margin: 0.6rem 0 1.2rem 0;
  font-size: 2rem;
  font-weight: 700;
}
.blogpost-body {
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
}
</style>
