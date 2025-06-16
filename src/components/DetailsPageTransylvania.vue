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

  <TabbedInterface :tabs="transylvaniaTabs" />
    
    <DetailsPageGallery :images="galleryImages" />

  <FooterSection />
</template>

<script setup>
import HeaderNavBar from './HeaderNavBar.vue';
import FooterSection from './FooterSection.vue';
import DetailsPageEssentialsSection from './DetailsPageEssentialsSection.vue';
import DetailsPageHeroSection from './DetailsPageHeroSection.vue';
import DetailsPageGallery from './DetailsPageGallery.vue';
import TabbedInterface from './TabbedInterface.vue';
import heroImg from '../assets/activity-title-images/transylvania-title-img.jpg';

import img1 from '../assets/detailsPageGalleryTransylvania/1655912594818.jpg';
import img2 from '../assets/detailsPageGalleryTransylvania/20240104_141958.jpg';
import img3 from '../assets/detailsPageGalleryTransylvania/20240520_152930.jpg';
import img4 from '../assets/detailsPageGalleryTransylvania/20240520_170712.jpg';
import img5 from '../assets/detailsPageGalleryTransylvania/20240615_125832.jpg';
import img6 from '../assets/detailsPageGalleryTransylvania/20240615_155557.jpg';
import img7 from '../assets/detailsPageGalleryTransylvania/20240930_204935.jpg';
import img8 from '../assets/detailsPageGalleryTransylvania/20240930_205752.jpg';
import img9 from '../assets/detailsPageGalleryTransylvania/20241001_105424.jpg';
import img10 from '../assets/detailsPageGalleryTransylvania/20241001_170020.jpg';
import img11 from '../assets/detailsPageGalleryTransylvania/20241001_191237.jpg';
import img12 from '../assets/detailsPageGalleryTransylvania/20241002_131812.jpg';
import img13 from '../assets/detailsPageGalleryTransylvania/20241002_165931.jpg';
import img14 from '../assets/detailsPageGalleryTransylvania/20241003_193157.jpg';
import img15 from '../assets/detailsPageGalleryTransylvania/20241005_202713.jpg';
import img16 from '../assets/detailsPageGalleryTransylvania/20241021_120955.jpg';
import img17 from '../assets/detailsPageGalleryTransylvania/IMG_20220613_084523_930.jpg';

const galleryImages = [
  { src: img2, alt: '', orientation: 'portrait' }, // 2120x3766
  { src: img1, alt: '', orientation: 'landscape' }, // 2730x1536
  { src: img4, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img5, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img8, alt: '', orientation: 'portrait' }, // 2252x4000
  { src: img3, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img6, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img7, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img9, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img10, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img17, alt: '', orientation: 'square' }, // 1080x1080
  { src: img11, alt: '', orientation: 'portrait' }, // 2252x4000
  { src: img12, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img13, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img14, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img15, alt: '', orientation: 'landscape' }, // 4000x2252
  { src: img16, alt: '', orientation: 'landscape' }, // 4000x2252
];
const transylvaniaTabs = [
  {
    label: `Highlights of the Tour`,
    content: `You will visit Transylvania’s renowned cities: Brașov, Sibiu, and the Sighișoara Citadel, each featuring guided tours of their most significant landmarks.<br><br>
    <strong>The standard itinerary includes:</strong><ul style='padding-left:1.2em; margin:0;'>
      <li>Sighisoara Citadel</li>
      <li>Viscri Village</li>
      <li>Bran Castle</li>
      <li>Transfăgărășan Road</li>
      <li>Alba Iulia Citadel</li>
    </ul>`
  },
  {
    label: `What’s Included`,
    content: `<ul style='padding-left:1.2em; margin:0;'>
      <li>Full-time guide/driver</li>
      <li>All transportation in a modern, comfortable vehicle</li>
      <li>2 nights’ accommodation with breakfast</li>
      <li>Entrance fees</li>
      <li>Bottled water provided during transfers</li>
    </ul>`
  },
  {
    label: `Optional Extension`,
    content: `<strong>The itinerary is flexible and can be customized to include additional sites such as:</strong>
    <ul style='padding-left:1.2em; margin:0;'>
      <li>Biertan Church</li>
      <li>Turda Salt Mine</li>
      <li>Libearty Bear Sanctuary</li>
      <li>Peleș Castle</li>
      <li>Corvin Castle</li>
    </ul><br>
    We can also arrange village walks and visits to meet local residents, or add an extra night in Brașov for a more relaxed pace and the chance to visit additional locations.`
  },
  {
    label: `Booking Policy`,
    content: `<ul style='padding-left:1.2em; margin:0;'>
      <li>A 30% deposit is required to secure your booking.</li>
      <li>Cancellation policy: Full refund available for cancellations made at least 7 days before the tour start date.</li>
    </ul>`
  }
];

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
