<template>
  <section class="hero-section" id="hero">
    <HeaderNavBar />
    <img class="hero-bg" :src="heroImg" alt="Adventure in Transylvania" />
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">Adventure Awaits in Transylvania</h1>
        <p class="hero-subtitle">Find Hidden Gems and Plan Your Next Journey</p>
        <div class="hero-actions">
          <button class="cta-btn">Start Exploring</button>
          <button class="cta-btn secondary">Contact Us</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import heroImg from '../assets/hero-img.jpg';
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

  .hero-title {
    font-size: 1.2rem;
  }
  .hero-subtitle {
    font-size: 0.95rem;
  }
  .hero-bg {
    height: 55vh;
  }
  .hero-actions {
    flex-direction: column;
    gap: 0.5rem;
  }
  .cta-btn {
    font-size: 0.95rem;
    padding: 0.7rem 1.1rem;
  }

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
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
  border-radius: 24px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
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
  .hero-bg {
    min-height: 80vh;
    height: auto;
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
  .hero-bg {
    min-height: 100svh;
    height: auto;
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
