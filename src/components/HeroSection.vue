<template>
  <section class="hero-section" id="hero">
    <HeaderNavBar />
    <!-- <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImages[0].fallback})` }"></div> -->
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">Adventure Awaits in Transylvania</h1>
        <p class="hero-subtitle">Find Hidden Gems and Plan Your Next Journey</p>
        <div class="hero-actions">
          <button class="cta-btn"><span class="footer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </span>Call us +40 123 456 789</button>
          <button class="cta-btn secondary">Read more</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { images as heroImages } from './heroImages.js';
import HeaderNavBar from './HeaderNavBar.vue';
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100vw;
  min-width: 100vw;
  left: 0;
  right: 0;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Prevent content from being hidden behind mobile browser chrome */
  min-height: 100svh;
}

.parallax-hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
  will-change: transform;
  /* Parallax effect */
  transform: translateZ(0) scale(1.1);
  /* fallback for browsers not supporting background-attachment: fixed */
  background-attachment: fixed;
}

@media (max-width: 900px) {
  .parallax-hero-bg {
    background-attachment: scroll;
    min-height: 80vh;
    height: auto;
  }
}

  .hero-title {
    font-size: 1.2rem;
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  .cta-btn {
    font-size: 0.95rem;
    padding: 0.7rem 1.1rem;
  }



.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 100%);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  color: #fff;
  text-align: center;
  z-index: 3;
  max-width: 700px;
}
.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 0 4px 24px rgba(0,0,0,0.45);
}
.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  text-shadow: 0 2px 12px rgba(0,0,0,0.32);
}
.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}
.cta-btn {
  background: #e08a1e;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
}
.cta-btn.secondary {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border: 1.5px solid #fff;
}
.cta-btn:hover {
  background: #d1770e;
}

@media (max-width: 900px) {
  .hero-section {
    height: auto;
    min-height: 80vh;
    padding-top: 56px;
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  .hero-overlay {
    min-height: 80vh;
    height: auto;
    left: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.5rem 0.5rem;
  }
  .hero-title {
    font-size: 2.6rem;
  }
  .hero-subtitle {
    font-size: 1.3rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cta-btn {
    width: 100%;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  }
}
@media (max-width: 600px) {
  .hero-section {
    min-height: 100svh;
    height: auto;
    padding-top: 56px; /* space for nav if needed */
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  .hero-overlay {
    min-height: 100svh;
    height: auto;
    left: 0;
    right: 0;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 0.5rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hero-content {
    margin-top: 2.5rem;
    padding: 0.5rem 0.5rem;
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero-title {
    font-size: 2.2rem;
    margin-bottom: 0.7rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cta-btn {
    width: 100%;
    font-size: 1.08rem;
    padding: 1rem 0;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  }
}
</style>
