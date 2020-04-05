<template>
  <div class="custom-control custom-radio">
    <input
      :id="id"
      type="radio"
      :name="name"
      :value="value"
      class="custom-control-input">
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

    name: {
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
.custom-radio {
  margin-bottom: 15px;

  .custom-control-input {
    height: 25px;
    width: 25px;

    &:checked ~ .custom-control-label {
       &::before {
        background-color: white;
        border: solid 3px $blue;
      }

      &::after {
        background-image: none;
        background-color: $blue;
        border: solid 3px $blue;
        margin: 5px 0 0 5px;
        height: 15px;
        width: 15px;
      }
    }
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
      border: solid 3px $black;
      border-radius: 50%;
    }
  }
}
</style>
