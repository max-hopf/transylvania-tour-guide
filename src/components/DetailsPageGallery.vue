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
  padding: 2rem 0;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.gallery-item {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  background: #fff;
  position: relative;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.gallery-item.portrait {
  grid-column: span 1;
  grid-row: span 2;
}
.gallery-item.landscape {
  grid-column: span 2;
  grid-row: span 2;
}
@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .gallery-item.portrait, .gallery-item.landscape {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
