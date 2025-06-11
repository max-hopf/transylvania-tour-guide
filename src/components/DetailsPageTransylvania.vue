<template>
  <section class="activity-detail-section">
    <HeaderNavBar />
    <!-- <div class="activity-detail-img">
      <img :src="transylvaniaTitleImage" alt="Transylvania Tour Title" />
    </div> -->
    <!-- <router-link class="back-link" to="/">&larr; Back to Activities</router-link> -->
    <h1 class="activity-title">Transylvania Tour from Cluj-Napoca</h1>
    <div class="activity-detail-info">
      <p class="activity-detail-desc">
        Discover Transylvania’s rich history and vibrant culture.
      </p>
    </div>
    <section class="essential-info-section">
      <div class="essential-info-row">
        <div class="essential-info-item">
          <span class="icon" aria-label="Calendar" title="Trip Duration">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-days-icon lucide-calendar-days"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </span>
          <span class="label">Trip Duration:</span>
          <span class="value">3 days</span>
        </div>
        <div class="essential-info-item">
          <span class="icon" aria-label="Price" title="Price">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-banknote-icon lucide-banknote"
            >
              <rect width="20" height="12" x="2" y="6" rx="2" />
              <circle cx="12" cy="12" r="2" />
              <path d="M6 12h.01M18 12h.01" />
            </svg>
          </span>
          <span class="label">Price:</span>
          <span class="value">from 790 € / person</span>
        </div>
        <div class="essential-info-item">
          <span class="icon" aria-label="Group Size" title="Group Size">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-users-icon lucide-users"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <path d="M16 3.128a4 4 0 0 1 0 7.744" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </span>
          <span class="label">Group Size:</span>
          <span class="value">2 – 7 participants</span>
        </div>
      </div>
    </section>
    <section class="activity-container overview-section">
      <blockquote class="activity-intro">
        Transylvania is a land of timeless charm—where medieval castles and
        fortified towns meet rolling hills dotted with haystacks and untouched
        wilderness.<br />
        This enchanting region offers a rare glimpse into a way of life steeped
        in tradition and natural beauty. Friendly locals will welcome you with
        home-cooked meals prepared from their own gardens, often accompanied by
        folk tales and stories passed down through generations.<br />
        On this tour, you will explore Transylvania’s most iconic sights and
        immerse yourself in the very essence of what makes this region so
        captivating and unforgettable.
      </blockquote>
    </section>
    <section class="activity-container inclusions-section">
      <h2>What’s Included</h2>
      <ul class="inclusions-list">
        <li>🧑‍💼 Full-time guide/driver</li>
        <li>🚗 All transportation in a modern, comfortable vehicle</li>
        <li>🏨 2 nights’ accommodation with breakfast</li>
        <li>🎟️ Entrance fees</li>
        <li>💧 Bottled water during transfers</li>
      </ul>
    </section>
    <section class="activity-container highlights-section">
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
    <section class="activity-container extension-section">
      <div class="extension-box">
        <b>Optional Extension:</b> Add an extra night in Brașov for a more
        relaxed pace and the chance to visit additional locations.
      </div>
    </section>
    <section class="activity-container booking-section">
      <div class="booking-policy-box">
        <h3>Booking Policy</h3>
        <ul>
          <li>💳 A 30% deposit is required to secure your booking.</li>
          <li>
            🔄 Cancellation: Full refund for cancellations made at least 7 days
            before the tour start date.
          </li>
        </ul>
      </div>
    </section>
  </section>
  <FooterSection />
</template>

<script setup>
import transylvaniaTitleImage from "../assets/activity-title-images/transylvania-title-img.jpg";
import HeaderNavBar from "./HeaderNavBar.vue";
import FooterSection from "./FooterSection.vue";
</script>

<style scoped>
.header-navbar {
  position: relative;
  top: 0;
  background-color: rgba(15, 15, 15, 0.5);
}

:deep(.site-title),
:deep(.nav-menu a),
:deep(.site-title) {
  color: #fff !important;
}

:deep(.hamburger-menu svg) {
  color: #fff !important;
  stroke: #fff !important;
}

/* When menu is open, make the X icon black */
:deep(.hamburger-menu[aria-expanded="true"] svg:last-of-type) {
  color: #111 !important;
  stroke: #111 !important;
}

.activity-detail-section {
  position: relative;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.activity-detail-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  /* height: 100%; */
  width: 100%;
  height: 480px;
  background-image: url("../assets/activity-title-images/transylvania-title-img.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6) blur(0px);
  z-index: -999;
}

.activity-container {
  width: 100%;
  max-width: 900px;
}

/* .activity-detail-section,
.activity-detail-section > *:not(style):not(.activity-detail-section)::before {
  position: relative;
  z-index: 1;
} */

.activity-title {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  position: relative;
  top: 100px;
}
/* .activity-detail-img img {
  width: 100%;
  max-width: 100%;
  height: 480px;
  object-fit: cover;
} */
/* --- Transylvania Details Styling --- */
.overview-section .activity-intro {
  font-size: 1.15em;
  max-width: 800px;
  background: #faf6f0;
  border-left: 5px solid #c19a6b;
  margin: 1.5em 0;
  padding: 1em 1.5em;
  font-style: italic;
}
.essential-info-section {
  width: 100vw;
  position: relative;
  top: 250px;
  /* left: 50%;
  right: 50%; */
  /* margin-left: -50vw;
  margin-right: -50vw; */
  background: #23272f;
  color: #fff;
  padding: 0rem 0rem 0rem 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  z-index: 2;
}
.essential-info-row {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
}
.essential-info-item {
  flex: 1 1 0;
  /* background: rgb(255, 255, 255); */
  border-radius: 10px;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.07);
}
.essential-info-item .icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  width: 32px;
  height: 32px;
}
.essential-info-item .label {
  font-weight: bold;
  font-size: 1em;
  margin-bottom: 0.2em;
  display: block;
}
.essential-info-item .value {
  font-size: 1rem;
  opacity: 0.95;
  font-weight: 500;
}
/* @media (max-width: 900px) {
  .essential-info-row {
    flex-direction: column;
    gap: 1.2rem;
  }
  .essential-info-item {
    padding: 1.3rem 0.5rem 1rem 0.5rem;
  }
} */

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
.activity-container {
  margin-top: 2.5rem;
  padding: 1.5rem 1rem;
  background: #f7f9fa;
  border-radius: 12px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
  position: relative;
  top: 300px;
}
.activity-container h2 {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  color: #388e3c;
}

@media (max-width: 420px) {
  .essential-info-item .icon {
    font-size: 2.2rem;
    margin-bottom: 0.6rem;
  }
  .essential-info-item .label {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 0.2em;
    display: block;
  }
  .essential-info-item .value {
    font-size: 0.875rem;
    opacity: 0.95;
  }
}
</style>
