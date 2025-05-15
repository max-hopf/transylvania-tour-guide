<template>
  <footer class="footer-section" id="footer">
    <div class="footer-columns">
      <!-- Quick Links -->
      <div class="footer-col">
        <h4 class="footer-title">Quick Links</h4>
        <ul class="footer-links">
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms and Conditions</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
      </div>

      <!-- Get in Touch -->
      <div class="footer-col">
        <h4 class="footer-title">Get In Touch</h4>
        <ul class="footer-contact">
  <li class="footer-contact-item">
    <a
      href="https://www.google.com/maps/search/?api=1&query=Alverna+79,+Cluj-Napoca,+Romania"
      class="footer-contact-link"
      target="_blank"
      rel="noopener"
      aria-label="Open address in Google Maps"
    >
      <span class="footer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
      </span>
      Alverna 79, Cluj-Napoca, Romania
    </a>
  </li>
  <li class="footer-contact-item">
    <a
      href="mailto:transylvanica@gmail.com"
      class="footer-contact-link"
      aria-label="Send email to transylvanica@gmail.com"
    >
      <span class="footer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </span>
      transylvanica@gmail.com
    </a>
  </li>
  <li class="footer-contact-item">
    <a
      href="tel:+40123456789"
      class="footer-contact-link"
      aria-label="Call +40 123 456 789"
    >
      <span class="footer-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </span>
      +40 123 456 789
    </a>
  </li>
</ul>
      </div>

      <!-- ANPC & Payments -->
      <div class="footer-col">
        <h4 class="footer-title">ANPC & Payments</h4>
        <a href="https://anpc.ro/ce-este-anpc/" target="_blank" rel="noopener">
          <img src="/src/assets/anpc-logo.png" alt="ANPC Logo" class="anpc-logo" />
        </a>
        <!-- <ul class="footer-anpc">
          <li><a href="https://anpc.ro/ce-este-anpc/" target="_blank" rel="noopener">Client Rights</a></li>
          <li><a href="https://anpc.ro/obligatii-clienti/" target="_blank" rel="noopener">Client Obligations</a></li>
        </ul> -->
        <div class="footer-payments">
          <!-- <img src="/assets/visa.svg" alt="Visa" class="payment-icon" />
          <img src="/assets/mastercard.svg" alt="Mastercard" class="payment-icon" />
          <img src="/assets/paypal.svg" alt="PayPal" class="payment-icon" /> -->
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-made">
        Proudly Made in Transylvania
      </div>
      <div class="footer-copyright">
        Copyright © 2025 Transylvania Tour Guide.
      </div>
    </div>
  </footer>
</template>

<script setup>
// No script needed for static footer
</script>

<style scoped>
.footer-section {
  background: #222222;
  color: #fff;
  font-family: 'Montserrat', Arial, sans-serif;
}
.footer-columns {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}
.footer-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 180px;
  flex: 1 1 180px;
}
.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-primary-text);
}
.footer-links,
.footer-contact,
.footer-anpc {
  list-style: none;
  padding: 0;
  margin: 0 0 0.7rem 0;
}
.footer-links li,
.footer-contact li,
.footer-anpc li {
  margin-bottom: 0.6rem;
  font-size: 1rem;
}
.footer-links a,
.footer-anpc a {
  color: #fff;
  text-decoration: none;
  transition: color 0.18s;
}
.footer-links a:hover,
.footer-anpc a:hover {
  color: var(--color-primary-text);
}
.footer-icon {
  display: flex;
  font-size: 1.2em;
  margin-right: 0.7rem;
}
.footer-contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}
.footer-contact-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #fff;
  text-decoration: none;
  transition: color 0.18s;
}
.footer-contact-link:hover,
.footer-contact-link:focus {
  color: var(--color-primary-text);
  outline: none;
}

.anpc-logo {
  width: 8rem;
  height: auto;
  margin-bottom: 0.7rem;
  display: block;
}
.footer-payments {
  margin-top: 0.7rem;
  display: flex;
  gap: 0.7rem;
}
.payment-icon {
  width: 36px;
  height: 24px;
  object-fit: contain;
  background: #fff;
  border-radius: 4px;
  padding: 2px 4px;
}
.footer-bottom {
  background-color: #1b1b1b;
  margin-top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #fff;
}
.footer-made {
  font-size: 0.98rem;
  color: var(--color-primary-text);
}
@media (max-width: 900px) {
  .footer-columns {
    flex-direction: column;
    gap: 2.2rem;
    align-items: center;
    text-align: center;
  }
  .footer-col {
    width: 100%;
    margin-bottom: 1.1rem;
  }
  .footer-bottom {
    font-size: 0.97rem;
    text-align: center;
    padding-top: 0.7rem;
  }
}
@media (max-width: 600px) {
  .footer-section {
    padding-top: 2rem;
  }
  .footer-title {
    font-size: 1rem;
  }
  .footer-bottom {
    font-size: 0.91rem;
  }
}
</style>
