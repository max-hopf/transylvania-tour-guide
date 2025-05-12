<template>
  <div class="parallax-hero-bg"></div>
  <section class="activities-section fade-slide-init fade-slide-right" id="activities" ref="activitiesSectionRef">
    <!-- <h2 class="activities-title">Our Activities</h2> -->
    <div class="activity-label">
      Our Activities <span class="activity-label-line"></span>
    </div>
    <h2 class="activity-title">Explore Activities</h2>

    <div class="activities-grid">
      <div v-for="activity in activities" :key="activity.title" class="activity-card">
        <picture>
  <source
    v-if="activity.webp && activity.webp.length"
    :srcset="activity.webp.map((w, i) => w + ' ' + [400, 800, 1600, 1600][i] + 'w').join(', ')"
    type="image/webp"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <source
    v-if="activity.jpeg && activity.jpeg.length"
    :srcset="activity.jpeg.map((j, i) => j + ' ' + [400, 800, 1600, 1600][i] + 'w').join(', ')"
    type="image/jpeg"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <img
    v-if="activity.fallback"
    :src="activity.fallback"
    :alt="activity.title"
    class="activity-img"
    loading="lazy"
  />
</picture>
        <div class="activity-info">
          <h3 class="activity-name">{{ activity.title }}</h3>
          <p class="activity-desc">{{ activity.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { images as activitiesImages } from './ourActivitiesImages.js';

const titles = [
  'Mountain Hiking',
  'Cultural Tours',
  'Wildlife Watching',
  'Cave Adventures',
  'Cycling Tours',
  'Village Experiences',
];

const descs = [
  'Explore breathtaking mountain trails with our expert guides.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Experience the thrill of spotting rare wildlife in their natural habitat.',
  'Uncover the mysteries of Transylvania’s spectacular caves.',
  'Enjoy scenic cycling routes for all skill levels.',
  'Immerse yourself in authentic village life and traditions.',
];

const activities = activitiesImages.map((imgObj, idx) => ({
  ...imgObj,
  title: titles[idx],
  desc: descs[idx],
}));
const activitiesSectionRef = ref(null);
let observer = null;

onMounted(() => {
  const el = activitiesSectionRef.value;
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
.activities-section {
  background: transparent;
  padding: 8rem 1rem 4rem 1rem;
  text-align: center;
}
.activities-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #e08a1e;
  margin-bottom: 2.5rem;
}
.activities-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2.5rem;
}
.activity-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  max-width: 350px;
  min-width: 270px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.activity-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.activity-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}
.activity-info {
  padding: 1rem 1.2rem 1.2rem 1.2rem;
  text-align: center;
}
.activity-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: #222;
}
.activity-desc {
  font-size: 1.06rem;
  color: #444;
}
.activity-label {
  font-size: 1.05rem;
  color: #e08a1e;
  font-weight: 600;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  justify-content: center;
}
.activity-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: #e08a1e;
  border-radius: 2px;
}
.activity-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 3rem;
  margin-top: 0;
}
@media (max-width: 900px) {
  .activities-grid {
    gap: 1rem;
  }
  .activities-section {
  padding: 4rem 1rem 4rem 1rem;
  }
}
@media (max-width: 600px) {
  .activities-grid {
    gap: 0.7rem;
  }
  .activity-img {
    height: 210px;
  }
  .activity-title {
    font-size: 1.6rem;
  }
}
</style>
