<template>
  <div v-show="isActive" :data-name="name">
    <slot />
  </div>
</template>

<script>
export default {

  props: {
    name: {
      type: String,
      required: true,
      default: null,
    },

    selected: {
      type: Boolean,
      required: false,
      default: false,
    },

    tabClass: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    href() {
      return `#${this.toLowercase(this.name)}`;
    },
  },

  mounted() {
    this.isActive = this.selected;
  },

  methods: {
    toLowercase(str) {
      return str.toLowerCase().replace(/ /g, '-');
    },
  },
};
</script>
