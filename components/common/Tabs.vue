<template>
  <div class="tab-wrapper">
    <div class="tab-list">
      <ul class="nav nav-tabs">
        <li v-for="(tab, index) in tabs"
          :key="index"
          class="nav-item">
          <a :id="setReferrence(index + 1)"
            :ref="setReferrence(index + 1)"
            class="nav-link"
            :href="tab.href"
            :class="[tab.tabClass, { 'active': tab.isActive }]"
            @click.prevent="selectTab(tab)">
            {{ tab.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <slot />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tabs: [],
    };
  },
  computed: {
    tabsCount() {
      return this.tabs.length || 0;
    },
  },

  created() {
    this.tabs = this.$children;
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = (tab.href === selectedTab.href);
      });
    },

    setReferrence(index) {
      if (index === 1) {
        return 'firstTab';
      }

      if (index === this.tabs.length) {
        return 'lastTab';
      }

      return null;
    },
  },
};
</script>
