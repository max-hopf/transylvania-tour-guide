<template>
  <section class="tabbed-interface-section">
    <div class="tabbed-interface">
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
  </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    default: () => []
  }
});
const activeTab = ref(0);
</script>

<style scoped>
.tabbed-interface-section {
  width: 100%;
  background-color: #fff;
  margin: 0;
  padding-bottom: 6rem;
}

.tabbed-interface {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
}
.tabs {
  display: flex;
  border-bottom: 2px solid #222;
  background: #fff;
  justify-content: space-between;
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
  border-bottom: 3px solid transparent;
  transition: color 0.2s, background 0.2s;
}

.tab::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0.18em; 
  transform: translateX(-50%) scaleX(0);
  transform-origin: center;
  width: 90%;
  height: 2px;
  background: var(--color-primary-text);
  transition: transform 0.4s cubic-bezier(.4,0,.2,1);
  pointer-events: none;
}

.tab:hover::after,
.tab.active::after {
  transform: translateX(-50%) scaleX(1);
}

.tab.active {
  /* background: #f8f8f8; */
  color: var(--color-primary-text);
}

.tab:hover {
  color: var(--color-primary-text);
  /* border-top: 3px solid red;
  border-left: 3px solid red;
  border-right: 3px solid red; */
}




/* .tab:not(.active):hover {
  background: #f2f2f2;
} */
.tab-content {
  /* border: 2px solid #222; */
  border-top: none;
  padding: 2rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #222;
  background: #fff;
  text-align: left;
}

.tab-content li {
  text-align: left;
}

@media (max-width: 600px) {
  .tabbed-interface {
    max-width: 100%;
  }
  .tabs {
    flex-direction: column;
    border-bottom: none;
    border-right: 2px solid #222;
  }
  .tab {
    border-bottom: none;
    border-right: 3px solid transparent;
    border-radius: 0;
    padding: 1rem 1rem 1rem 1.2rem;
    text-align: left;
  }
  .tab.active {
    border-bottom: none;
    border-right: 3px solid #222;
    background: #f8f8f8;
  }
  .tab-content {
    border: 2px solid #222;
    border-left: none;
    border-top: none;
    padding: 1.2rem 1rem;
  }
}
</style>

<style>
/* .tab-content li {
  text-align: left;
  color: blue;
} */
</style>
