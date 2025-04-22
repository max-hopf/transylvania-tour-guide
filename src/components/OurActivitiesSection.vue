<template>
  <section class="activities-section" id="activities">
    <!-- <h2 class="activities-title">Our Activities</h2> -->
    <div class="activity-label">
      Our Activities <span class="activity-label-line"></span>
    </div>
    <h2 class="activity-title">Explore Activities</h2>

    <div class="activities-grid">
      <div v-for="activity in activities" :key="activity.title" class="activity-card">
        <img :src="activity.img" :alt="activity.title" class="activity-img" />
        <div class="activity-info">
          <h3 class="activity-name">{{ activity.title }}</h3>
          <p class="activity-desc">{{ activity.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import activityImg1 from '../assets/our-activity-1.jpg';
import activityImg2 from '../assets/our-activity-2.png';
import activityImg3 from '../assets/our-activity-3.png';
import activityImg4 from '../assets/our-activity-4.png';
import activityImg5 from '../assets/our-activity-5.jpg';
import activityImg6 from '../assets/our-activity-6.png';

const activities = [
  {
    img: activityImg1,
    title: 'Mountain Hiking',
    desc: 'Explore breathtaking mountain trails with our expert guides.'
  },
  {
    img: activityImg2,
    title: 'Cultural Tours',
    desc: 'Discover Transylvania’s rich history and vibrant culture.'
  },
  {
    img: activityImg3,
    title: 'Wildlife Watching',
    desc: 'Experience the thrill of spotting rare wildlife in their natural habitat.'
  },
  {
    img: activityImg4,
    title: 'Cave Adventures',
    desc: 'Uncover the mysteries of Transylvania’s spectacular caves.'
  },
  {
    img: activityImg5,
    title: 'Cycling Tours',
    desc: 'Enjoy scenic cycling routes for all skill levels.'
  },
  {
    img: activityImg6,
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
