<template>
  <section class="activities-section" id="activities">
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
import { images as activitiesImages } from './ourActivitiesImages.js';

const activities = [
  {
    img: activitiesImages[0].img,
    webp: activitiesImages[0].webp,
    title: 'Mountain Hiking',
    desc: 'Explore breathtaking mountain trails with our expert guides.'
  },
  {
    img: activitiesImages[1].img,
    webp: activitiesImages[1].webp,
    title: 'Cultural Tours',
    desc: 'Discover Transylvania’s rich history and vibrant culture.'
  },
  {
    img: activitiesImages[2].img,
    webp: activitiesImages[2].webp,
    title: 'Wildlife Watching',
    desc: 'Experience the thrill of spotting rare wildlife in their natural habitat.'
  },
  {
    img: activitiesImages[3].img,
    webp: activitiesImages[3].webp,
    title: 'Cave Adventures',
    desc: 'Uncover the mysteries of Transylvania’s spectacular caves.'
  },
  {
    img: activitiesImages[4].img,
    webp: activitiesImages[4].webp,
    title: 'Cycling Tours',
    desc: 'Enjoy scenic cycling routes for all skill levels.'
  },
  {
    img: activitiesImages[5].img,
    webp: activitiesImages[5].webp,
    title: 'Village Experiences',
    desc: 'Immerse yourself in authentic village life and traditions.'
  },
];
</script>

<style scoped>
.activities-section {
  background: #fff;
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
