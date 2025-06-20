<template>
  <!-- <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImages[0].fallback})` }"></div> -->
  <section class="blog-section" id="blog" ref="blogSectionRef">
  <div class="fade-slide-init" ref="blogAnimRef">

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
  <source
    v-if="blogImages[idx].webp && blogImages[idx].webp.length"
    :srcset="blogImages[idx].webp.map((w, i) => w + ' ' + [400, 800, 1600, 1600][i] + 'w').join(', ')"
    type="image/webp"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <source
    v-if="blogImages[idx].jpeg && blogImages[idx].jpeg.length"
    :srcset="blogImages[idx].jpeg.map((j, i) => j + ' ' + [400, 800, 1600, 1600][i] + 'w').join(', ')"
    type="image/jpeg"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <img
    v-if="blogImages[idx].fallback"
    :src="blogImages[idx].fallback"
    :alt="blogImages[idx].alt || post.title"
    class="blog-img"
    loading="lazy"
  />
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
    </div>
</section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const showAll = ref(false);
const router = useRouter();

const blogAnimRef = ref(null);
// Only declare observer ONCE in this script!
// let observer = null; (already declared above if present)

onMounted(() => {
  // Animate blog section content (not section) on scroll
  const el = blogAnimRef.value;
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in');
    }
  };
  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setTimeout(triggerAnimation, 200);
      return;
    }
    if ('IntersectionObserver' in window) {
      observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        },
        { threshold: window.innerWidth <= 750 ? 0.01 : 0.25 }
      );
      observer.observe(el);
    } else {
      window.addEventListener('scroll', triggerAnimation, { passive: true });
    }
  }
});

import { images as blogImages } from './blogImages.js';
import { images as heroImages } from './heroImages.js';

const blogPosts = [
  {
    id: 1,
    title: 'Lakeside Camping & Activity',
    date: 'May 31, 2024',
    summary: 'Lorem ipsum dolor sit amvcxonsectsdsa eleitur adipiscing elit, sed do eiusmod temr incididunt ut labore et dolore magna aliqua.',
    img: blogImages[0].img,
    webp: blogImages[0].webp,
    content: 'Full content for blog post 1.'
  },
  {
    id: 2,
    title: 'Mountain Biking Adventure',
    date: 'June 5, 2024',
    summary: 'Experience the thrill of mountain biking through scenic trails and breathtaking landscapes.',
    img: blogImages[1].img,
    webp: blogImages[1].webp,
    content: 'Full content for blog post 2.'
  },
  {
    id: 3,
    title: 'Family Hiking Day',
    date: 'June 12, 2024',
    summary: 'A perfect day out for families to explore nature and enjoy the great outdoors together.',
    img: blogImages[2].img,
    webp: blogImages[2].webp,
    content: 'Full content for blog post 3.'
  },
  {
    id: 4,
    title: 'Wildlife Photography Tips',
    date: 'June 18, 2024',
    summary: 'Capture stunning wildlife shots with these essential photography tips from our experts.',
    img: blogImages[3].img,
    webp: blogImages[3].webp,
    content: 'Full content for blog post 4.'
  },
  {
    id: 5,
    title: 'Kayaking on the River',
    date: 'June 22, 2024',
    summary: 'Join us for an exhilarating kayaking adventure down the river.',
    img: blogImages[4].img,
    webp: blogImages[4].webp,
    content: 'Full content for blog post 5.'
  },
  {
    id: 6,
    title: 'Forest Survival Skills',
    date: 'June 28, 2024',
    summary: 'Learn essential survival skills for your next forest adventure.',
    img: blogImages[5].img,
    webp: blogImages[5].webp,
    content: 'Full content for blog post 6.'
  },
  {
    id: 7,
    title: 'Stargazing Nights',
    date: 'July 2, 2024',
    summary: 'Discover the wonders of the night sky with our guided stargazing tours.',
    img: blogImages[6].img,
    webp: blogImages[6].webp,
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
const blogSectionRef = ref(null);
let observer = null;

onMounted(() => {
  const el = blogSectionRef.value;
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in');
    }
  };

  // On all screens, use IntersectionObserver for animation
  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setTimeout(triggerAnimation, 200); // short delay for effect
      return;
    }
  }

  observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        triggerAnimation();
        observer.disconnect();
      }
    },
    { threshold: window.innerWidth <= 750 ? 0.01 : 0.25 }
  );
  if (el) {
    observer.observe(el);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.blog-section {
  padding: 8rem 0 8rem 0;
  background: transparent;
  text-align: center;
  scroll-margin-top: -80px; /* Adjust this to your fixed header height or desired offset */
}
.blog-label {
  font-size: 1.05rem;
  color: var(--color-primary-text);
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
  background: var(--color-primary-text);
  border-radius: 2px;
}
.blog-title {
  font-size: 2.1rem;
  font-weight: bold;
  color: #222;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85), 0 1px 12px rgba(255, 255, 255, 0.75);
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
  color: var(--color-primary-text);
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
    padding-top: 4rem;
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
