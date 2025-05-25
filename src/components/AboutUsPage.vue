<template>
  <HeaderNavBar />
  <section class="aboutus-page-section">
    <div class="aboutus-container">
      <h1 class="aboutus-title">About Us</h1>
      <p class="aboutus-intro">
        Welcome to Transylvania Tour Guide! We are passionate locals dedicated to sharing the magic of Transylvania, Maramureș, and Bucovina with travelers from around the world.
      </p>
      <div class="aboutus-content">
        <h2>Our Mission</h2>
        <p>
          We aim to provide authentic, immersive experiences that reveal the region's natural beauty, fascinating history, and vibrant traditions. Our guides are storytellers, hikers, cyclists, and culture enthusiasts who love to connect visitors with the heart of Romania.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Expert local guides and personalized tours</li>
          <li>Small groups for a genuine experience</li>
          <li>Eco-friendly and sustainable travel practices</li>
          <li>Support for local communities and artisans</li>
        </ul>
        <h2>Meet the Team</h2>
        <p>
          Our team includes licensed guides, nature lovers, and cultural ambassadors. We are always excited to welcome new friends and share our favorite places, legends, and flavors with you!
        </p>
      </div>
    </div>
  </section>
  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
</script>

<style scoped>
.aboutus-page-section {
  background: #f7f9fa;
  min-height: 100vh;
  padding-top: 80px;
  padding-bottom: 40px;
}
.aboutus-container {
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.5rem 2rem 2rem 2rem;
}
.aboutus-title {
  font-size: 2.5rem;
  color: #388e3c;
  margin-bottom: 1.5rem;
  text-align: center;
}
.aboutus-intro {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}
.aboutus-content h2 {
  color: #e08a1e;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.aboutus-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}
.aboutus-content li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>
