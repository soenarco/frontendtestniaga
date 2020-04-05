<template>
  <div class="custom-control custom-checkbox">
    <input
      :id="id"
      class="custom-control-input"
      type="checkbox"
      :value="value"
      @change="onChange">
    <label
      class="custom-control-label"
      :for="id">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     active: false,
  //   }
  // },

  props: {
    id: {
      type: String,
      required: true,
    },

    value: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },

  methods: {
    onChange(e) {
      this.$emit('change', e);
    },
  },
};
</script>

<style lang="scss">
.custom-checkbox {
  margin-bottom: 15px;

  .custom-control-input {
    height: 25px;
    width: 25px;
  }

  .custom-control-label {
    font-size: 16px;
    padding-top: 5px;
    padding-left: 25px;
    cursor: pointer;

    &::before,
    &::after {
      height: 25px;
      width: 25px;
    }

    &::before {
      border: solid 2px $black;
      border-radius: 0;
    }
  }
}
</style>
