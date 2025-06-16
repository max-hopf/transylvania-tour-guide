<template>
  <section class="details-page-gallery">
    <div class="gallery-grid">
      <div
        v-for="(img, idx) in images"
        :key="idx"
        class="gallery-item"
        :class="img.orientation === 'landscape' ? 'landscape' : 'portrait'"
      >
        <img :src="img.src" :alt="img.alt || ''" />
      </div>
    </div>
  </section>
</template>

<script setup>
/**
 * Props:
 * images: Array of { src: string, alt?: string, orientation: 'portrait'|'landscape' }
 */
defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  }
});
</script>

<style scoped>
.details-page-gallery {
  width: 100%;
  display: flex;
  justify-content: center;
}
.gallery-grid {
  display: grid;
  padding: 2rem 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 6vw;
  grid-auto-flow: dense;
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
}
.gallery-item {
  /* border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08); */
  background: #fff;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-item.portrait {
  grid-row: span 5;
  grid-column: span 1;
}
.gallery-item.landscape {
  grid-column: span 1;
  grid-row: span 2;
}
.gallery-item.square {
  /* default: 1x1 */
  grid-column: span 1;
  grid-row: span 1;
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 24vw;
  }
}
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: 48vw;
  }
  .gallery-item.portrait, .gallery-item.landscape {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
