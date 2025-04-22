<template>
  <section class="blog-section" id="blog">
    <div class="blog-label">
      Our Blogs <span class="blog-label-line"></span>
    </div>
    <h2 class="blog-title">See Our Recent News</h2>
    <div class="blog-cards">
      <div
        v-for="(post, idx) in visiblePosts"
        :key="post.id"
        class="blog-card"
        @click="goToPost(post.id)"
        tabindex="0"
        role="button"
        :aria-label="'Read blog post: ' + post.title"
      >
        <picture>
  <source :srcset="post.image.replace(/\.(jpg|png)$/,'') + '.webp'" type="image/webp" />
  <img :src="post.image" :alt="post.title" class="blog-img" loading="lazy" />
</picture>
        <div class="blog-meta">
          <span class="blog-date">{{ post.date }}</span>
          <h3 class="blog-card-title">{{ post.title }}</h3>
          <p class="blog-summary">{{ post.summary }}</p>
        </div>
      </div>
    </div>
    <div class="blog-toggle-wrapper">
      <button class="blog-toggle" @click="toggleAllPosts">
        {{ showAll ? 'Show Less' : 'See all Blog Posts' }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const showAll = ref(false);
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
    summary: 'Lorem ipsum dolor sit amvcxonsectsdsa eleitur adipiscing elit, sed do eiusmod temr incididunt ut labore et dolore magna aliqua.',
    image: blogImg1,
    content: 'Full content for blog post 1.'
  },
  {
    id: 2,
    title: 'Mountain Biking Adventure',
    date: 'June 5, 2024',
    summary: 'Experience the thrill of mountain biking through scenic trails and breathtaking landscapes.',
    image: blogImg2,
    content: 'Full content for blog post 2.'
  },
  {
    id: 3,
    title: 'Family Hiking Day',
    date: 'June 12, 2024',
    summary: 'A perfect day out for families to explore nature and enjoy the great outdoors together.',
    image: blogImg3,
    content: 'Full content for blog post 3.'
  },
  {
    id: 4,
    title: 'Wildlife Photography Tips',
    date: 'June 18, 2024',
    summary: 'Capture stunning wildlife shots with these essential photography tips from our experts.',
    image: blogImg4,
    content: 'Full content for blog post 4.'
  },
  {
    id: 5,
    title: 'Kayaking on the River',
    date: 'June 22, 2024',
    summary: 'Join us for an exhilarating kayaking adventure down the river.',
    image: blogImg5,
    content: 'Full content for blog post 5.'
  },
  {
    id: 6,
    title: 'Forest Survival Skills',
    date: 'June 28, 2024',
    summary: 'Learn essential survival skills for your next forest adventure.',
    image: blogImg6,
    content: 'Full content for blog post 6.'
  },
  {
    id: 7,
    title: 'Stargazing Nights',
    date: 'July 2, 2024',
    summary: 'Discover the wonders of the night sky with our guided stargazing tours.',
    image: blogImg7,
    content: 'Full content for blog post 7.'
  }
];

const visiblePosts = computed(() => showAll.value ? blogPosts : blogPosts.slice(0, 3));

function toggleAllPosts() {
  showAll.value = !showAll.value;
}

function goToPost(id) {
  router.push({ name: 'BlogPost', params: { id } });
}
</script>

<style scoped>
.blog-section {
  padding: 8rem 0 4rem 0;
  background: #f6f9fc;
  text-align: center;
}
.blog-label {
  font-size: 1.05rem;
  color: #e08a1e;
  font-weight: 600;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
}
.blog-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: #e08a1e;
  border-radius: 2px;
}
.blog-title {
  font-size: 2.1rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 2.5rem;
  margin-top: 0;
}
.blog-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}
.blog-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  max-width: 350px;
  min-width: 270px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.blog-card:focus, .blog-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.blog-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.blog-meta {
  padding: 1rem 1.2rem 1.2rem 1.2rem;
  text-align: left;
}
.blog-date {
  color: #ffb300;
  font-weight: 600;
  font-size: 1rem;
}
.blog-card-title {
  margin: 0.6rem 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  color:#222
}
.blog-summary {
  color: #6c757d;
  font-size: 1rem;
}
.blog-toggle-wrapper {
  margin-top: 2rem;
}
.blog-toggle {
  background: none;
  border: none;
  color: #1976d2;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.18s;
}
.blog-toggle:hover {
  color: #ffb300;
}

@media (max-width: 900px) {
  .blog-section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

@media (max-width: 600px) {
  .blog-title {
    font-size: 1.6rem;
  }
}
</style>
