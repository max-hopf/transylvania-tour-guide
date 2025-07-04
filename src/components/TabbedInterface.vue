<template>
  <section class="tabbed-interface-section">
    <div class="tabbed-interface">
      <!-- Desktop Tabs -->
      <template v-if="!isMobile">
        <div class="tabs" role="tablist">
          <button
            v-for="(tab, idx) in tabs"
            :key="tab.label"
            :class="['tab', { active: idx === activeTab }]"
            @click="activeTab = idx"
            :aria-selected="idx === activeTab"
            :tabindex="idx === activeTab ? 0 : -1"
            role="tab"
          >
            {{ tab.label }}
          </button>
        </div>
        <div class="tab-content" role="tabpanel">
          <slot :name="'tab-' + activeTab">
            <div v-html="tabs[activeTab].content" />
          </slot>
        </div>
      </template>
      <!-- Mobile Accordion -->
      <template v-else>
        <div class="accordion">
          <div v-for="(tab, idx) in tabs" :key="tab.label" class="accordion-item">
            <button
              class="accordion-header"
              :class="{ active: idx === activeTab }"
              @click="toggleAccordion(idx)"
              :aria-expanded="idx === activeTab"
              :aria-controls="'accordion-content-' + idx"
              :id="'accordion-header-' + idx"
            >
              {{ tab.label }}
              <span class="accordion-icon">
  <svg v-if="idx !== activeTab" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
</span>
            </button>
            <div
              v-show="idx === activeTab"
              class="accordion-content"
              :id="'accordion-content-' + idx"
              :aria-labelledby="'accordion-header-' + idx"
              role="region"
            >
              <slot :name="'tab-' + idx">
                <div v-html="tab.content" />
              </slot>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  }
});
const activeTab = ref(0);
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.matchMedia('(max-width: 600px)').matches;
}

function toggleAccordion(idx) {
  activeTab.value = activeTab.value === idx ? -1 : idx;
}

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>




<style scoped>
/* ========== Base Styles ========== */
.tabbed-interface-section {
  background: #fff;
  margin: 0;
  padding: 0rem 0.5rem 4rem 0.5rem;

}
.tabbed-interface {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
}

/* ========== Desktop Tabs ========== */
@media (min-width: 601px) {
  .tabs {
    display: flex;
    flex-direction: row;
    border-bottom: 2px solid #222;
    background: #fff;
    justify-content: space-around;
    gap: 0.5rem;
    width: 100%;
  }
  .tab {
    position: relative;
    padding: 1rem 1.5rem 0.7rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: #222;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s, background 0.2s;
    margin-bottom: 3px;
  }
  .tab.active {
    color: var(--color-primary-text, #007BFF);
    z-index: 2;
  }
  .tab:hover {
    color: var(--color-primary-text, #007BFF);
  }
  .tab::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0.2em;
    transform: translateX(-50%) scaleX(0);
    transform-origin: center;
    width: 90%;
    height: 2px;
    background: var(--color-primary-text, #007BFF);
    transition: transform 0.4s cubic-bezier(.4,0,.2,1);
    pointer-events: none;
  }
  .tab:hover::after,
  .tab.active::after {
    transform: translateX(-50%) scaleX(1);
  }
  .tab-content {
    padding: 2rem 3rem;
    font-size: 1rem;
    line-height: 1.6;
    color: #222;
    background: #fff;
    text-align: left;
  }
}

@media (max-width: 600px) {

  .tabs, .tab-content {
    display: none;
  }
  .accordion {
    border: 2px solid #efefef;
  }
  .accordion-item {
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    background: #fff;
    border-bottom: 1px solid #efefef;
    overflow: hidden;
    transition: box-shadow 0.3s;
  }
  .accordion-item:last-child {
    border-bottom: none;
  }
  .accordion-header {
    width: 100%;
    text-align: left;
    padding: 1rem 1.5rem;
    background: #fff;
    border: none;
    outline: none;
    font-size: 1.125rem;
    font-weight: 600;
    color: #222;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.2s, color 0.2s;
  }
  .accordion-header.active,
  .accordion-header:focus {
    background: #fff;
    color: var(--color-primary-text, #007BFF);
  }
  .accordion-arrow {
    margin-left: 0.5rem;
    font-size: 1.25em;
    transition: transform 0.3s cubic-bezier(.4,0,.2,1);
    color: #888;
  }
  .accordion-arrow.open {
    transform: rotate(180deg);
    color: var(--color-primary-text, #007BFF);
  }
  .accordion-content {
    padding: 0rem 1.5rem 2rem 1.5rem;
    background: #fff;
    color: #222;
    font-size: 1rem;
    line-height: 1.6;
    animation: accordion-fade-in 0.22s;
    word-break: break-word;
    text-align: left;
  }
  .accordion-icon{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @keyframes accordion-fade-in {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
}
</style>


<style>
.tab-content ul,
.accordion-content ul {
  list-style-type: disc;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  padding-inline-start: 0;
}

.tab-content li,
.accordion-content li {
  text-align: left;
}
</style>