<template>
  <header class="header-navbar">
    <nav class="navbar">
    
      <div class="logo-title">
        <picture>
  <source v-if="logoImages[0].webp && logoImages[0].webp.length"
    :srcset="logoImages[0].webp.map((w, i) => w + ' ' + [400, 800, 1600][i] + 'w').join(', ')"
    type="image/webp"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <source v-if="logoImages[0].jpeg && logoImages[0].jpeg.length"
    :srcset="logoImages[0].jpeg.map((j, i) => j + ' ' + [400, 800, 1600][i] + 'w').join(', ')"
    type="image/png"
    sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1600px"
  />
  <img
    v-if="logoImages[0].fallback"
    :src="logoImages[0].fallback"
    alt="Transylvania Tour Guide Logo"
    class="logo"
    loading="lazy"
  />
</picture>
        <span class="site-title">Transylvania Tour Guide</span>
      </div>
      <transition name="fade">
        <ul v-if="isMenuOpen && windowWidth < 900" class="nav-menu-overlay" aria-label="Main navigation">
          <li v-for="item in menuItems" :key="item.href">
            <a :href="item.href" @click="onMenuClick($event, item.href)">{{ item.label }}</a>
          </li>
        </ul>
      </transition>
      <ul v-if="windowWidth >= 900" class="nav-menu" aria-label="Main navigation">
        <li v-for="item in menuItems" :key="item.href">
          <a :href="item.href" @click="onMenuClick($event, item.href)">{{ item.label }}</a>
        </li>
      </ul>
      <transition name="fade">
        <div v-if="isMenuOpen" class="overlay" @click="closeMenu"></div>
      </transition>
      <button v-if="windowWidth < 900" class="hamburger-menu" @click="toggleMenu" aria-label="Toggle menu" :aria-expanded="isMenuOpen">
        <svg v-if="!isMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { images as logoImages } from './logoImages.js';
import { ref, onMounted, computed, onUnmounted } from 'vue';

const menuItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Activities', href: '#activities' },
  { label: 'Blog', href: '#blog' }, // This will link to section with id="blog"
  { label: 'Contact', href: '#footer' }, // This will link to section with id="footer"
];

let isMenuOpen = ref(false);
let windowWidth = ref(window.innerWidth);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
  });
});
function onMenuClick(event, href) {
  // Only handle in-page anchors
  if (href.startsWith('#')) {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      // Use scrollIntoView for smooth, accessible scrolling
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optionally, set focus for accessibility
      setTimeout(() => {
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }, 600);
    }
    closeMenu();
  }
}

</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
html {
  scroll-behavior: smooth;
}
.header-navbar {
  background: rgba(30, 30, 30, 0.122);
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: absolute;
  top: 0;
  left: 0; 
  width: 100vw;
  z-index: 2000;  
  margin: 0;
  padding: 0;
  transition: background 0.35s cubic-bezier(.4,0,.2,1);
}
.header-navbar .site-title,
.header-navbar .nav-menu a,
.header-navbar .nav-menu-overlay a {
  color: #fff;
  transition: color 0.28s cubic-bezier(.4,0,.2,1);
}
.header-navbar.scrolled .site-title,
.header-navbar.scrolled .nav-menu a,
.header-navbar.scrolled .nav-menu-overlay a {
  color: #222;
}
.header-navbar .logo {
  filter: brightness(1.1) invert(0);
  transition: filter 0.28s cubic-bezier(.4,0,.2,1);
}
.header-navbar.scrolled .logo {
  filter: none;
}



.hamburger-menu {
  display: none;
  /* position: absolute;
  top: 0.7rem; */
  right: 1.2rem;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  z-index: 1202;
  box-shadow: none;
}
@media (max-width: 900px) {
  .hamburger-menu {
    display: block;
    /* position: absolute;
    top: 0.7rem;
    right: 1.2rem; */
  }
}
@media (min-width: 900px) {
  .hamburger-menu {
    display: none !important;
  }
}
.hamburger-menu svg {
  width: 32px;
  height: 32px;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0.5rem 2.5rem;
  box-sizing: border-box;
}
.logo-title {
  display: flex;
  align-items: center;
}
.logo {
  height: 6rem;
  margin-right: 1rem;
}
.site-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e08a1e;
}
.nav-menu {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: opacity 0.3s;
}
.nav-menu a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  transition: color 0.2s;
}
.nav-menu a:hover {
  color: #e08a1e;
}
@media (max-width: 900px) {
  .navbar {
    flex-direction: row;
    padding: 0.5rem 1rem;
    align-items: center;
  }
  .nav-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #2c2c2c;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 4rem 0 0 0;
  }
  .nav-menu-overlay a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.2s;
  }
  .nav-menu-overlay a:hover {
    color: #e08a1e;
  }
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: row;
    align-items: center;
  }
  .logo {
    height: 4rem;
  margin-right: 0.25rem;
  }
  .site-title {
    font-size: 1.2rem;
  }
}
</style>
