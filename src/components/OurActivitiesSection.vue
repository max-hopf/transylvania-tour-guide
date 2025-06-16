<template>
  <!-- <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImages[0].fallback})` }"></div> -->
  <section class="activities-section fade-slide-init fade-slide-right" id="activities" ref="activitiesSectionRef">
    <!-- <h2 class="activities-title">Our Activities</h2> -->
    <div class="activity-label">
      Our Activities <span class="activity-label-line"></span>
    </div>
    <h2 class="activity-title">Explore Activities</h2>

    <div class="activities-grid">
      <router-link
        v-for="activity in activities"
        :key="activity.title"
        class="activity-card"
        :to="activity.title.toLowerCase() === 'transylvania' ? '/activity/transylvania' : activity.title.toLowerCase() === 'maramures' ? '/activity/maramures' : `/activity/${slugify(activity.title)}`"
        style="text-decoration: none; color: inherit;"
      >
        <div class="activity-days-badge">
          <span class="days-number">{{ activity.durationValue }}</span>
          <span class="days-label">{{ activity.durationLabel }}</span>
        </div>
        <div class="activity-img-wrapper">
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
        </div>
        <div class="activity-info">
          <div class="activity-price">
  Start from
  <span v-if="activity.price && activity.price.includes('/person')">
    {{ activity.price.split('/person')[0] }}<span class="per-person">/person</span>
  </span>
  <span v-else>
    {{ activity.price }}
  </span>
</div>
          <h3 class="activity-name">{{ activity.title }}</h3>
          <p class="activity-desc">{{ activity.desc }}</p>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { images as activitiesImages } from './ourActivitiesImages.js';
import { images as heroImages } from './heroImages.js';

const titles = [
  'Transylvania',
  'Maramures',
  'Bucovina',
  'Day Trips',
  'Cycling',
  'Hiking',
];

const descs = [
  'Explore breathtaking mountain trails with our expert guides.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Experience the thrill of spotting rare wildlife in their natural habitat.',
  'Uncover the mysteries of Transylvania’s spectacular caves.',
  'Enjoy scenic cycling routes for all skill levels.',
  'Immerse yourself in authentic village life and traditions.',
];

// Example durations for each activity (customize as needed)
const durations = [
  { value: 3, label: 'days' },
  { value: 2, label: 'days' },
  { value: 5, label: 'hours' },
  { value: 1, label: 'week' },
  { value: 4, label: 'days' },
  { value: 2, label: 'weeks' },
];
const prices = [
  '790 EUR/person',
  '$199,00',
  '$99,00',
  '$179,00',
  '$129,00',
  '$109,00',
];
const activities = activitiesImages.map((imgObj, idx) => ({
  ...imgObj,
  title: titles[idx],
  desc: descs[idx],
  durationValue: durations[idx].value,
  durationLabel: durations[idx].label,
  price: prices[idx],
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
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

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
  /* border-top-left-radius: 18px;
  border-top-right-radius: 18px; */
}
.activity-info {
  padding: 0 0.5rem;
  text-align: left;
}
.activity-price {
  font-size: 1.125rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 0.5rem;
}
.per-person {
  font-size: 0.875rem;
  color: #222;
  font-weight: 400;
  margin-left: 2px;
}

.activity-name {
  font-size: 1.4rem;
  font-weight: 700;
  color: #222;
}
.activity-desc {
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: #444;
}
.activity-label {
  font-size: 1.05rem;
  color: var(--color-primary-text);
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
  background: var(--color-primary-text);
  border-radius: 2px;
}
.activity-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #222;
  text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85), 0 1px 12px rgba(255, 255, 255, 0.75);
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
  .activity-title {
    font-size: 1.6rem;
  }
}
.activity-days-badge {
  position: absolute;
  top: 320px;
  right: 2rem;
  background: #fff;
  border: 3px solid rgba(208, 208, 208, 0.83);
  outline: 4px solid #fff;
  color: #222222;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
  z-index: 2;
}
.days-number {
  font-size: 1.4rem;
  line-height: 1;
}
.days-label {
  font-size: 1rem;
  font-weight: 400;
  color: #444;
  margin-top: -2px;
}
.activity-card {
  position: relative;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 1rem rgba(0,0,0,0.07);
  border: 2.5px solid #edeaf7;
  max-width: 350px;
  min-width: 270px;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0.2rem 0.2rem 0 0.2rem;
}
.activity-card:hover {
  transform: translateY(-7px) scale(1.03);
  box-shadow: 0 6px 24px rgba(0,0,0,0.12);
}
.activity-img-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  /* fallback for browsers that do not support aspect-ratio */
  height: 0;
  padding-bottom: 100%;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
  overflow: hidden;
  border-radius: 1rem;
  /* border removed to fix aspect ratio */
}

.activity-img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 4px solid #fff;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  background: #fff;
  display: block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
}

</style>
