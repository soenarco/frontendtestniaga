export default {
  watch: {
    form(value) {
      this.selected = value;
    },
  },

  props: {
    form: {
      type: Array,
      required: true,
    },

    list: {
      type: Array,
      required: true,
    },
  },

  computed: {
    limitedList() {
      return (this.showAll) ? this.list.slice(0, 5) : this.list;
    },

    faChevron() {
      return (!this.collapse) ? 'fa fa-chevron-up' : 'fa fa-chevron-down';
    },
  },

  methods: {
    syncData() {
      this.$emit('update:form', this.selected);
    },

    toggleShowAll() {
      this.showAll = !this.showAll;
    },

    toggleCollapse() {
      this.collapse = !this.collapse;
      this.showAll = (!this.collapse);
    },
  },
};
