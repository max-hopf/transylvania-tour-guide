<template>
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
</template>

<script setup>
// No script logic needed for static links
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
    bottom: 1rem;
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

</style>
