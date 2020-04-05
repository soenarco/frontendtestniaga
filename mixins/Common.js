export default {
  methods: {
    openModal(type) {
      this.isOpenModal.overlay = true;
      this.isOpenModal[type] = true;
    },

    closeModal(type) {
      this.isOpenModal.overlay = false;
      this.isOpenModal[type] = false;
    },
  },
};
