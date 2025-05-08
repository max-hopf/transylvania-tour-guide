<template>
  <section class="about-us-section fade-slide-init fade-slide-left" id="about" ref="aboutSectionRef">
    <div class="about-container">
      <div class="about-text">
        <div class="about-label">
          About Us <span class="about-label-line"></span>
        </div>
        <h2 class="about-title">World Best Hikking Agency Company Since 2015.</h2>
        <p class="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dsedo eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan ldsdeceus vel facilisis. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button class="about-btn">Read More</button>
      </div>
      <div class="about-images">
        <picture>
  <source :srcset="aboutImg1Webp" type="image/webp" />
  <img :src="aboutImg1" :alt="'Hiking in Transylvania'" class="about-img about-img-left" loading="lazy" />
</picture>
<picture>
  <source :srcset="aboutImg2Webp" type="image/webp" />
  <img :src="aboutImg2" :alt="'Discovering nature'" class="about-img about-img-right" loading="lazy" />
</picture>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import aboutImg1 from '../assets/about-us-1.png';
import aboutImg2 from '../assets/about-us-2.png';
import aboutImg1Webp from '../assets/about-us-1.webp';
import aboutImg2Webp from '../assets/about-us-2.webp';

const aboutSectionRef = ref(null);
let observer = null;

onMounted(() => {
  const el = aboutSectionRef.value;
  const triggerAnimation = () => {
    if (el && !el.classList.contains('fade-slide-in')) {
      el.classList.add('fade-slide-in');
    }
  };

  // Check if already visible on mount
  if (el) {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setTimeout(triggerAnimation, 200); // short delay for effect
      return;
    }
  }

  observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        triggerAnimation();
        observer.disconnect();
      }
    },
    { threshold: 0.25 }
  );
  if (el) {
    observer.observe(el);
  }
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.about-us-section {
  background: #f6f8fb;
  padding: 8rem 1.5rem 4rem 1.5rem;
  display: flex;
  justify-content: center;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  width: 100%;
  max-width: 64rem;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}

.about-text {
  flex: 1 1 320px;
  text-align: left;
  /* min-width: 340px;
  max-width: 580px; */
}

.about-label {
  font-size: 1.05rem;
  color: #e08a1e;
  font-weight: 600;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.about-label-line {
  display: inline-block;
  height: 2px;
  width: 36px;
  background: #e08a1e;
  border-radius: 2px;
}

.about-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 1.2rem;
}

.about-description {
  font-size: 1.12rem;
  margin-bottom: 2.1rem;
  color: #444;
  line-height: 1.7;
}

.about-btn {
  background: #e08a1e;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 24px;
  padding: 0.75rem 2.2rem;
  font-size: 1.1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background 0.2s;
  box-shadow: 0 2px 12px rgba(224,138,30,0.09);
}

.about-btn:hover {
  background: #d1770e;
}

.about-images {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 340px;
}

/* Unified .about-img rules for DRYness */
.about-img {
  width: 220px;
  height: 320px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
}

.about-img-left {
  position: relative;
  z-index: 2;
  top: -2rem;
}

.about-img-right {
  position: relative;
  z-index: 2;
  top: 2rem;
}

/* Tablet & below: stack content vertically, adjust gaps */
@media (max-width: 900px) {
  .about-us-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .about-container {
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 3.5rem 0;
  }

  .about-images {
    flex-direction: row;
    min-width: 0;
    justify-content: center;
    gap: 1.2rem;
  }

  .about-text {
    text-align: left;
    min-width: 0;
    max-width: 100vw;
  }
}

/* Mobile: font, full-width images/buttons, aspect ratio */
@media (max-width: 600px) {
  .about-us-section {
    padding: 1.6rem 1.5rem 1.1rem 1.5rem;
  }

  .about-title {
    font-size: 1.6rem;
  }

  .about-description {
    font-size: 1rem;
  }

  .about-img {
    max-width: 400px;
    width: 100%;
    height: auto;
    min-width: 120px;
    aspect-ratio: 5/7;
  }

  .about-btn {
    width: 100%;
    padding: 1rem 2rem;
  }
}
</style>
