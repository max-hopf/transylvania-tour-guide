<template>
  <section class="blogpost-section">
    <button class="back-btn" @click="goBack">← Back to Blog</button>
    <div v-if="post" class="blogpost-content">
      <picture>
  <source :srcset="post.webp" type="image/webp" />
  <img :src="post.img" :alt="post.title" class="blogpost-img" loading="lazy" />
</picture>
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

import { blogImages } from './blogImages.js';

const blogPosts = [
  {
    id: 1,
    title: 'Lakeside Camping & Activity',
    date: 'May 31, 2024',
    img: blogImages[0].img,
    webp: blogImages[0].webp,
    content: 'Full content for blog post 1.'
  },
  {
    id: 2,
    title: 'Mountain Biking Adventure',
    date: 'June 5, 2024',
    img: blogImages[1].img,
    webp: blogImages[1].webp,
    content: 'Full content for blog post 2.'
  },
  {
    id: 3,
    title: 'Family Hiking Day',
    date: 'June 12, 2024',
    img: blogImages[2].img,
    webp: blogImages[2].webp,
    content: 'Full content for blog post 3.'
  },
  {
    id: 4,
    title: 'Wildlife Photography Tips',
    date: 'June 18, 2024',
    img: blogImages[3].img,
    webp: blogImages[3].webp,
    content: 'Full content for blog post 4.'
  },
  {
    id: 5,
    title: 'Kayaking on the River',
    date: 'June 22, 2024',
    img: blogImages[4].img,
    webp: blogImages[4].webp,
    content: 'Full content for blog post 5.'
  },
  {
    id: 6,
    title: 'Forest Survival Skills',
    date: 'June 28, 2024',
    img: blogImages[5].img,
    webp: blogImages[5].webp,
    content: 'Full content for blog post 6.'
  },
  {
    id: 7,
    title: 'Stargazing Nights',
    date: 'July 2, 2024',
    img: blogImages[6].img,
    webp: blogImages[6].webp,
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
