<template>
  <section class="hero-section" id="hero">
    <HeaderNavBar />
    <div class="parallax-hero-bg" :style="{ backgroundImage: `url(${heroImages[0].fallback})` }"></div>
    <!-- <div class="hero-overlay"> -->
      <div class="hero-content">
        <div class="hero-top-text">Let's Make Your Best Trip Ever</div>
        <h1 class="hero-title">Welcome to Transylvania!</h1>
        <div class="hero-phone-number cta-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call-icon lucide-phone-call" style="vertical-align: middle; margin-right: 0.5em;"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg><span>+40-740-364-842</span></div>
      </div>
    <!-- </div> -->
    <div class="social-media-buttons">
      <a
        class="social-btn instagram"
        href="https://instagram.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/social-media-icons/instagram-icon-3.svg" alt="Instagram" />
        <span class="social-label">instagram</span>
      </a>
      <a
        class="social-btn linkedin"
        href="https://linkedin.com/placeholder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="../assets/social-media-icons/linkedin-icon-2.svg" alt="LinkedIn" />
        <span class="social-label">linkedin</span>
      </a>
    </div>
  </section>
</template>

<script setup>
import { images as heroImages } from './heroImages.js';
import HeaderNavBar from './HeaderNavBar.vue';
</script>

<style scoped>
.social-media-buttons {
  position: absolute;
  top: 10rem;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  width: 170px; /* enough for expanded button */
  align-items: flex-end;
}
.social-btn {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 24px 0 0 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  padding: 0.5rem 0.75rem 0.5rem 0.5rem;
  width: 32px;
  height: 32px;
  transition: width 0.3s cubic-bezier(.4,2,.6,1), background 0.2s;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  right: 0;
  text-decoration: none;
}
.social-btn:hover {
  width: 160px;
  background: #f5f5f5;
}

.social-btn:hover img {
  filter: brightness(0) invert(1);
}
.social-btn img {
  width: 20px;
  height: 20px;
  display: block;
}
.social-label {
  color: #222;
  font-size: 1rem;
  font-weight: 600;
  margin-left: 0;
  opacity: 0;
  white-space: nowrap;
  width: 0;
  overflow: hidden;
  transition: opacity 0.2s, margin 0.3s, width 0.3s;
}

.social-btn:hover .social-label {
  opacity: 1;
  margin-left: 0.75rem;
  width: 90px;
}
.social-btn.instagram:hover {
  background: #e1306c;
}
.social-btn.instagram:hover .social-label {
  color: #fff;
}
.social-btn.linkedin:hover {
  background: #0077b5;
}
.social-btn.linkedin:hover .social-label {
  color: #fff;
}
@media (max-width: 600px) {
  .social-media-buttons {
    position: absolute;
    top: unset;
    bottom: 0.5rem;
    right: 0;
    gap: 0.5rem;
    /* width: 120px; */
  }
  .social-btn {
    /* width: 120px; */
    /* height: 44px; */
    /* padding: 0.5rem 0.5rem 0.5rem 0.5rem; */
  }
  .social-label {
    width: 0;
    margin-left: 0;
  }
  .social-btn:hover .social-label {
    width: 60px;
    /* margin-left: 0.5rem; */
  }
}


.hero-section {
  position: relative;
  width: 100vw;
  min-width: 100vw;
  left: 0;
  right: 0;
  height: 100vh;
  min-height: 480px !important;
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

.hero-top-text {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1.1rem;
  color: #fff;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 1), 0 1px 12px rgba(0, 0, 0, 1);
}
.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 1), 0 1px 12px rgba(0, 0, 0, 1);
  margin-bottom: 1.6rem;

}
.hero-phone-number {
  color: #000;
  font-weight: 600;
}

.hero-content {
  color: #fff;
  text-align: center;
  z-index: 3;
  max-width: 700px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  display:flex;
  background: var(--color-primary);
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 1.5rem;
  padding: 0.75rem 1.75rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.cta-btn svg {
  /* Use drop-shadow for SVG icons */
  /* filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 1)); */
}

.cta-btn.secondary {
  background: rgba(255,255,255,0.18);
  color: #fff;
  border: 1.5px solid #fff;
}
.cta-btn:hover {
  /* background: #d1770e; */
  filter: brightness(1.12);
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
    /* width: 100%; */
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  }
}
@media (max-width: 600px) {
  .hero-section {
    min-height: 100vh;
    height: auto;
    padding-top: 56px; /* space for nav if needed */
    padding-bottom: 16px;
    box-sizing: border-box;
  }

  .hero-overlay {
    min-height: 100vh;
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
    margin-bottom: 3rem;
  }
  .hero-top-text {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.1rem;
    color: #fff;
    letter-spacing: 0.04em;
    text-shadow: 0 1px 6px rgba(0, 0, 0, 1), 0 1px 12px rgba(0, 0, 0, 1);
  }
  .hero-subtitle {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
  .cta-btn {
    width: 90%;
    font-size: 1rem;
    padding: 1rem 0;
    border-radius: 32px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.13);
  }
}

@media (max-height: 600px) {
  .hero-content {
    /* text-align: left; */
    /* max-width: 700px;  */
    /* margin-top: 24vh; 
    margin-left: 12vw; */
    /* align-items: center; */
    /* justify-content: center; */
    /* display: flex; */
    /* flex-direction: column; */
    min-height: 600px;
    margin: 0;
    display: flex;
  }
  .hero-section {
    /* position: relative; */
    /* width: 100vw; */
    /* min-width: 100vw; */
    /* left: 0; */
    /* right: 0; */
    /* height: 100vh; */
    /* min-height: 600px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    /* margin: 0; */
    /* padding: 0; */
    /* box-sizing: border-box; */
    /* Prevent content from being hidden behind mobile browser chrome */
    /* min-height: 100svh; */
  }
  .hero-phone-number {
    align-self: center;
  }
}
</style>
