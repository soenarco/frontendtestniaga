<template>
  <div class="modal">
    <div class="modal-overlay" />

    <div class="modal-dialog">
      <slot />
    </div>

    <slot name="modal-side" />
  </div>
</template>

<script>
export default {
  created() {
    this.addBodyClass();
  },

  beforeDestroy() {
    this.removeBodyClass();
  },

  methods: {
    addBodyClass() {
      document.body.classList.add('modal-open');
    },

    removeBodyClass() {
      document.body.classList.remove('modal-open');
    },
  },
};
</script>

<style lang="scss">
.modal-open {
  overflow: hidden;
}

.modal {
  .modal-dialog {
    display: block;
    position: fixed;
    z-index: 5;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    background: rgba(0, 0, 0, 0.85);
  }
}
</style>
