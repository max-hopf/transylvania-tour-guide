<template>
  <DetailsPageHeroSection
  title="Transylvania Tour from Cluj-Napoca"
  description="Designed to explore the major attractions and uncover the authentic charm of Transylvania."
  :backgroundImage="heroImg"
/>
  <DetailsPageEssentialsSection
    duration="3 days"
    price="from 790 € / person"
    groupSize="2 – 8 participants"
  />

  <section class="activity-details-section overview-section">
    <div class="activity-details-container">
      <p class="activity-details-intro">
        <strong>Transylvania is a land of timeless charm—where medieval castles and
        fortified towns meet rolling hills dotted with haystacks and untouched
        wilderness.</strong><br />
        This enchanting region offers a rare glimpse into a way of life steeped
        in tradition and natural beauty. Friendly locals will welcome you with
        home-cooked meals prepared from their own gardens, often accompanied by
        folk tales and stories passed down through generations.<br />
        On this tour, you will explore Transylvania’s most iconic sights and
        immerse yourself in the very essence of what makes this region so
        captivating and unforgettable.
      </p>
    </div>
  </section>

  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import DetailsPageEssentialsSection from './DetailsPageEssentialsSection.vue';
import DetailsPageHeroSection from './DetailsPageHeroSection.vue';
import heroImg from '../assets/activity-title-images/transylvania-title-img.jpg';
</script>

<style scoped>
.activity-details-section {
  background: #fff;
  padding: 3.5rem 1rem 2.5rem 1rem;
  color: #222;
}
.activity-details-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}


</style>

<style scoped>






.activity-details-content {
  text-align: left;
  color: #222;
}
.activity-details-content h2 {
  color: #e08a1e;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.activity-details-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.activity-details-content li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}


</style>
