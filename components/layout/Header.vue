<template>
  <header id="site-header">
    <div class="container">
      <div class="row align-items-center justify-content-center">
        <div class="col-sm-12 col-md-3 col-lg-3">
          <div class="header-brand">
            <a :href="homepage" title="Niagahoster">
              <img
                src="~/assets/img/homepage/niagahoster-logo.png"
                alt="Niagahoster"
                class="header-logo">
            </a>
          </div>
        </div>

        <div class="col-sm-12 col-md-9 col-lg-9">
          <Tools />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Tools from '../header/Tools';

export default {
  name: 'Header',

  components: {
    Tools,
  },

  computed: {
    homepage() {
      return (process.env.APP_ENV === 'production') ? process.env.NIAGA_URL : '/';
    },
  },
};
</script>

<style lang="scss" scoped>
#site-header {
  z-index: 2;
  background-color: white;
  border-top: 1px solid $grey-light;
  border-bottom: 1px solid $grey-light;
}

.header-logo {
  max-width: 200px;
}
</style>
