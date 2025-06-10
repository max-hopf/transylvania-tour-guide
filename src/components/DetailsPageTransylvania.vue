<template>
  <HeaderNavBar />
  <section class="activity-detail-section">
    <div class="activity-detail-img">
      <img :src="transylvaniaTitleImage" alt="Transylvania Tour Title" />
    </div>
    <router-link class="back-link" to="/">&larr; Back to Activities</router-link>
    <h1 class="activity-title">Transylvania</h1>
    <div class="activity-detail-info">
      <div class="activity-detail-price">Start from 790 EUR/person</div>
      <p class="activity-detail-desc">Discover Transylvania’s rich history and vibrant culture.</p>
    </div>
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
  </section>
  <FooterSection />
</template>

<script setup>
import transylvaniaTitleImage from '../assets/activity-title-images/transylvania-title-img.jpg';
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
</script>

<style scoped>
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
</style>

