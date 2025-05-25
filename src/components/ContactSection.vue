<template>
  <section class="contact-section" id="contact">
    <div class="contact-container">
      <h2 class="contact-title">Contact Us</h2>
      <form @submit="sendEmail" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" v-model="message" @input="saveDraft" required rows="5"></textarea>
        </div>
        <div class="form-actions">
          <button type="submit" :disabled="isSubmitting">Send Message</button>
          <span v-if="draftSavedAt" class="draft-info">Draft saved at {{ formattedDraftTime }}</span>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import emailjs from 'emailjs-com';

const name = ref('');
const email = ref('');
const message = ref('');
const draftSavedAt = ref(null);
const isSubmitting = ref(false);

const formattedDraftTime = computed(() => {
  if (!draftSavedAt.value) return '';
  return new Date(draftSavedAt.value).toLocaleTimeString();
});

onMounted(() => {
  const savedMessage = localStorage.getItem('tgDraftMessage');
  const savedName = localStorage.getItem('tgDraftName');
  const savedEmail = localStorage.getItem('tgDraftEmail');
  const savedTimestamp = localStorage.getItem('tgDraftSavedAt');
  if (savedMessage) message.value = savedMessage;
  if (savedName) name.value = savedName;
  if (savedEmail) email.value = savedEmail;
  if (savedTimestamp) draftSavedAt.value = savedTimestamp;
});

function saveDraft() {
  localStorage.setItem('tgDraftMessage', message.value);
  localStorage.setItem('tgDraftName', name.value);
  localStorage.setItem('tgDraftEmail', email.value);
  const now = new Date();
  draftSavedAt.value = now.toISOString();
  localStorage.setItem('tgDraftSavedAt', draftSavedAt.value);
}

async function sendEmail(event) {
  event.preventDefault();
  if (isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    await emailjs.sendForm(
      'service_9mup228', // Replace with your EmailJS service ID
      'template_rjfe34l', // Replace with your EmailJS template ID
      event.target,
      '9FJaaHQA-NwdXyMsx', // Replace with your EmailJS user/public key
    );
    localStorage.removeItem('tgDraftMessage');
    localStorage.removeItem('tgDraftName');
    localStorage.removeItem('tgDraftEmail');
    localStorage.removeItem('tgDraftSavedAt');
    name.value = '';
    email.value = '';
    message.value = '';
    alert('Thank you for contacting us! We will get back to you soon.');
  } catch (error) {
    alert('An error occurred while sending your message.');
    console.error('EmailJS error:', error);
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
.contact-section {
  background: #f7f9fa;
  padding: 4rem 1rem 3rem 1rem;
}
.contact-container {
  max-width: 520px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2.5rem 2rem 2rem 2rem;
}
.contact-title {
  font-size: 2rem;
  color: #388e3c;
  margin-bottom: 1.5rem;
  text-align: center;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.form-group label {
  font-weight: 500;
  color: #222;
}
.form-group input,
.form-group textarea {
  border: 1px solid #cfd8dc;
  border-radius: 8px;
  padding: 0.7rem;
  font-size: 1rem;
  background: #f7f9fa;
  color: #222;
}
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #388e3c;
}
.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: flex-end;
}
button[type="submit"] {
  background: #388e3c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s;
}
button[type="submit"]:hover {
  background: #2e7031;
}
.draft-info {
  font-size: 0.98rem;
  color: #888;
  margin-top: 0.2rem;
}
</style>
