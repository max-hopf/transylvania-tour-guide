<template>
  <HeaderNavBar />
  <section class="activity-detail-section">
    <div class="activity-detail-img">
      <img v-if="isTransylvania" :src="transylvaniaTitleImage" alt="Transylvania Tour Title" />
      <img v-else :src="activity.fallback" :alt="activity.title" />
    </div>
    <router-link class="back-link" to="/">&larr; Back to Activities</router-link>
    <div v-if="activity">
      <h1 class="activity-title">{{ activity.title }}</h1>
      <div class="activity-detail-info">
        <div class="activity-detail-price">Start from {{ activity.price }}</div>
        <p class="activity-detail-desc">{{ activity.desc }}</p>
      </div>
      <!-- TRANSYLVANIA DETAILED PAGE -->
      <template v-if="isTransylvania">
        <section class="activity-section overview-section">
          <blockquote class="activity-intro">
            Transylvania is a land of timeless charm—where medieval castles and fortified towns meet rolling hills dotted with haystacks and untouched wilderness.<br>
            This enchanting region offers a rare glimpse into a way of life steeped in tradition and natural beauty. Friendly locals will welcome you with home-cooked meals prepared from their own gardens, often accompanied by folk tales and stories passed down through generations.<br>
            On this tour, you will explore Transylvania’s most iconic sights and immerse yourself in the very essence of what makes this region so captivating and unforgettable.
          </blockquote>
        </section>
        <section class="activity-section essential-info-section">
          <h2>Essential Information</h2>
          <ul class="essential-info-list">
            <li>🗓️ <b>Duration:</b> 3-day private tour from Cluj-Napoca</li>
            <li>💶 <b>Starting Price:</b> from 790 EUR/person</li>
            <li>👥 <b>Group Size:</b> min. 2, max. 7 participants</li>
          </ul>
        </section>
        <section class="activity-section inclusions-section">
          <h2>What’s Included</h2>
          <ul class="inclusions-list">
            <li>🧑‍💼 Full-time guide/driver</li>
            <li>🚗 All transportation in a modern, comfortable vehicle</li>
            <li>🏨 2 nights’ accommodation with breakfast</li>
            <li>🎟️ Entrance fees</li>
            <li>💧 Bottled water during transfers</li>
          </ul>
        </section>
        <section class="activity-section highlights-section">
          <h2>Tour Highlights</h2>
          <div class="highlights-grid">
            <div class="highlight-item">🏰 Sighisoara Citadel</div>
            <div class="highlight-item">🏡 Viscri Village</div>
            <div class="highlight-item">🦇 Bran Castle</div>
            <div class="highlight-item">🛣️ Transfăgărășan Road</div>
            <div class="highlight-item">🛡️ Alba Iulia Citadel</div>
          </div>
          <details class="optional-sites">
            <summary>Show Optional Sites</summary>
            <ul>
              <li>⛪ Biertan Church</li>
              <li>⛏️ Turda Salt Mine</li>
              <li>🐻 Libearty Bear Sanctuary</li>
              <li>🏰 Peleș Castle</li>
              <li>🏰 Corvin Castle</li>
              <li>🚶 Village walks & local visits</li>
            </ul>
          </details>
        </section>
        <section class="activity-section extension-section">
          <div class="extension-box">
            <b>Optional Extension:</b> Add an extra night in Brașov for a more relaxed pace and the chance to visit additional locations.
          </div>
        </section>
        <section class="activity-section booking-section">
          <div class="booking-policy-box">
            <h3>Booking Policy</h3>
            <ul>
              <li>💳 A 30% deposit is required to secure your booking.</li>
              <li>🔄 Cancellation: Full refund for cancellations made at least 7 days before the tour start date.</li>
            </ul>
          </div>
        </section>
      </template>
      <!-- DEFAULT/OTHER ACTIVITIES -->
      <template v-else>
        <section class="activity-section">
          <h2>Description</h2>
          <p>{{ content.description }}</p>
        </section>
        <section class="activity-section">
          <h2>Program</h2>
          <ul class="program-list">
            <li v-for="(step, idx) in content.program" :key="idx" v-html="step"></li>
          </ul>
        </section>
        <section class="activity-section">
          <h2>Equipment List</h2>
          <ul class="equipment-list">
            <li v-for="(item, idx) in content.equipment" :key="idx">{{ item }}</li>
          </ul>
        </section>
        <section class="activity-section">
          <h2>Gallery</h2>
          <div class="gallery-grid">
            <img v-for="(img, idx) in galleryImages" :key="idx" :src="img" :alt="`Gallery image ${idx+1}`" class="gallery-img" loading="lazy" />
          </div>
        </section>
      </template>
    </div>
    <div v-else>
      <h2>Activity not found</h2>
    </div>
  </section>
  <FooterSection />
</template>

<script setup>
import transylvaniaTitleImage from '../assets/activity-title-images/transylvania-title-img.jpg';
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { images as activitiesImages } from './ourActivitiesImages.js';

const titles = [
  'Maramures',
  'Transylvania',
  'Bucovina',
  'Day Trips',
  'Cycling',
  'Hiking',
];
const descs = [
  'Discover Transylvania’s rich history and vibrant culture.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Discover Transylvania’s rich history and vibrant culture.',
  'Experience the thrill of spotting rare wildlife in their natural habitat.',
  'Uncover the mysteries of Transylvania’s spectacular caves.',
  'Enjoy scenic cycling routes for all skill levels.',
  'Immerse yourself in authentic village life and traditions.',
];
const durations = [
  { value: 3, label: 'days' },
  { value: 2, label: 'days' },
  { value: 5, label: 'hours' },
  { value: 1, label: 'week' },
  { value: 4, label: 'days' },
  { value: 2, label: 'weeks' },
];
const prices = [
  '$149,00',
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

const route = useRoute();
const activityId = computed(() => route.params.activityId);

function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

const activity = computed(() => {
  return activities.find(a => slugify(a.title) === activityId.value);
});

const isTransylvania = computed(() => {
  return activity.value && activity.value.title.toLowerCase().includes('transylvania');
});



const contentMap = {
  maramures: {
    description: 'Journey through the wooden villages and rolling hills of Maramureș. Discover UNESCO-listed churches, ancient traditions, and the legendary Merry Cemetery.',
    program: [
      '<strong>Day 1:</strong> Arrival in Baia Mare, transfer to a traditional guesthouse, welcome dinner.',
      '<strong>Day 2:</strong> Explore wooden churches, meet local artisans, visit the Merry Cemetery in Săpânța.',
      '<strong>Day 3:</strong> Hiking in the Gutâi Mountains, picnic lunch, folklore evening.',
      '<strong>Day 4:</strong> Market visit, departure.'
    ],
    equipment: [
      'Hiking boots', 'Rain jacket', 'Notebook for stories', 'Camera', 'Cash for local crafts'
    ]
  },
  transylvania: {
    description: 'Explore the heart of Transylvania: castles, fortified churches, and mysterious forests. Perfect for history buffs and Dracula fans alike!',
    program: [
      '<strong>Day 1:</strong> Arrive in Cluj-Napoca, city tour, local dinner.',
      '<strong>Day 2:</strong> Day trip to Turda Salt Mine and Rimetea village.',
      '<strong>Day 3:</strong> Bran Castle, Brașov Old Town.',
      '<strong>Day 4:</strong> Hike in Piatra Craiului National Park, departure.'
    ],
    equipment: [
      'Comfortable shoes', 'Warm layer', 'Travel adapter', 'Guidebook', 'Backpack'
    ]
  },
  bucovina: {
    description: 'Marvel at the painted monasteries of Bucovina, a UNESCO treasure. Enjoy gentle hikes, monastery tours, and authentic rural hospitality.',
    program: [
      '<strong>Day 1:</strong> Arrival in Suceava, visit Sucevița Monastery.',
      '<strong>Day 2:</strong> Painted monasteries circuit (Voroneț, Humor, Moldovița).',
      '<strong>Day 3:</strong> Bucovina hills hike and picnic.',
      '<strong>Day 4:</strong> Folk craft workshop, departure.'
    ],
    equipment: [
      'Walking shoes', 'Headscarf for women', 'Notebook', 'Reusable water bottle', 'Sun protection'
    ]
  },
  'day-trips': {
    description: 'Short on time? Our day trips cover the best of Transylvania in a single day: castles, nature, and charming towns.',
    program: [
      '<strong>Morning:</strong> Pick-up, drive to Bran Castle.',
      '<strong>Midday:</strong> Guided castle tour, cheese tasting.',
      '<strong>Afternoon:</strong> Walk in Râșnov Fortress, return to base.'
    ],
    equipment: [
      'Daypack', 'Comfortable sneakers', 'Raincoat', 'Snacks', 'Camera'
    ]
  },
  cycling: {
    description: 'Pedal through scenic valleys and Saxon villages. Our cycling tours are suitable for all levels and include support vehicle and picnic stops.',
    program: [
      '<strong>Day 1:</strong> Meet in Sibiu, bike fitting, warm-up ride.',
      '<strong>Day 2:</strong> Cycle to Biertan, visit fortified church.',
      '<strong>Day 3:</strong> Ride through Viscri, UNESCO village experience.',
      '<strong>Day 4:</strong> Final ride, celebratory lunch, departure.'
    ],
    equipment: [
      'Bike helmet', 'Cycling shorts', 'Gloves', 'Water bottle', 'Sunscreen'
    ]
  },
  hiking: {
    description: 'Climb the Carpathians with our expert guides. From gentle walks to challenging summits, we tailor the adventure to your group.',
    program: [
      '<strong>Day 1:</strong> Arrival, gear check, orientation walk.',
      '<strong>Day 2:</strong> Full-day hike in Făgăraș Mountains.',
      '<strong>Day 3:</strong> Ridge trek, mountain hut lunch.',
      '<strong>Day 4:</strong> Descent, hot springs visit, departure.'
    ],
    equipment: [
      'Sturdy boots', 'Trekking poles', 'Layered clothing', 'First aid kit', 'Trail snacks'
    ]
  }
};

const content = computed(() => {
  if (!activity.value) return {
    description: 'No description available.',
    program: [],
    equipment: []
  };
  // Use slug to match
  const slug = slugify(activity.value.title);
  return contentMap[slug] || {
    description: 'No description available.',
    program: [],
    equipment: []
  };
});

const galleryImages = computed(() => {
  if (!activity.value) return [];
  // Use all available jpeg images, fallback to webp if needed
  const imgs = [];
  if (activity.value.jpeg) imgs.push(...activity.value.jpeg);
  if (activity.value.webp) imgs.push(...activity.value.webp);
  // Remove duplicates
  return [...new Set(imgs)];
});
</script>

<style scoped>
.header-navbar{
  background: rgb(255 255 255 / 61%);
}


.activity-detail-section {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  color: #222;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: #00796b;
  text-decoration: none;
}
.activity-title {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.activity-detail-img img {
  width: 100%;
  max-width: 100%;
  height: 480px;
  object-fit: cover;
}

/* --- Transylvania Details Styling --- */
.overview-section .activity-intro {
  font-size: 1.15em;
  background: #faf6f0;
  border-left: 5px solid #c19a6b;
  margin: 1.5em 0;
  padding: 1em 1.5em;
  font-style: italic;
}
.essential-info-section ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1em 0;
}
.essential-info-list li {
  margin-bottom: 0.5em;
  font-size: 1.08em;
}
.inclusions-list {
  list-style: none;
  padding: 0;
}
.inclusions-list li {
  margin-bottom: 0.4em;
  font-size: 1.05em;
}
.highlights-section {
  margin-bottom: 1.5em;
}
.highlights-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8em;
  margin-bottom: 0.6em;
}
.highlight-item {
  background: #f3e9e3;
  border-radius: 7px;
  padding: 0.6em 1.1em;
  font-weight: 500;
  box-shadow: 0 1px 4px #0001;
}
.optional-sites {
  margin-top: 0.5em;
  font-size: 1em;
}
.extension-box {
  background: #e7f5ff;
  border-left: 5px solid #339af0;
  padding: 1em 1.3em;
  margin-bottom: 1.3em;
  font-size: 1.08em;
}
.booking-policy-box {
  background: #fffbea;
  border-left: 5px solid #ffd43b;
  padding: 1em 1.3em;
  font-size: 1.07em;
}
@media (max-width: 600px) {
  .highlights-grid {
    flex-direction: column;
    gap: 0.5em;
  }
  .activity-detail-img img {
    height: 220px;
  }
}

.activity-detail-price {
  font-weight: bold;
  color: #388e3c;
  margin-bottom: 1rem;
}
.activity-detail-desc {
  font-size: 1.15rem;
}

.activity-section {
  margin-top: 2.5rem;
  padding: 1.5rem 1rem;
  background: #f7f9fa;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.04);
}
.activity-section h2 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  color: #388e3c;
}
.program-list,
.equipment-list {
  margin: 0;
  padding-left: 1.5rem;
  text-align: left;
}
.program-list li,
.equipment-list li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
.gallery-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0,0,0,0.07);
  background: #eee;
}
</style>
