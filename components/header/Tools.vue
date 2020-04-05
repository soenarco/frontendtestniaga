<template>
  <nav class="navbar navbar-tools">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Hosting
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Domain
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Server
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Website
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Afiliasi
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          {{ $t('general.promo') }}
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Pembayaran
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Review
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Kontak
        </router-link>
      </li>
      <li class="nav-item">
        <router-link
          to="/promotions"
          class="nav-link">
          Blog
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },

  computed: {
    lang() {
      return this.$store.state.common.LANG;
    },
  },

  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },

    changeLang(lang) {
      if (this.lang === lang) return;
      this.$store.dispatch('common/setLocalization', lang);
      this.isShow = null;
    },
  },
};
</script>

<style lang="scss">
.navbar-tools {
  margin: 0;
  float: right;

  ul {
    padding: 0;
    margin: 0;
  }

  .nav-item {
    position: relative;
    display: inline-block;
    font-family: $ff-secondary;

    a {
      color: $black;
    }

    &.nav-border {
      border-right: 1px solid $grey-light;
    }

    .promo, .sign-in {
      margin-right: 5px;
    }

    .dropdown-menu {
      position: absolute;
      right: 0;
      width: 200px;
      display: none;
      flex-direction: column;
      z-index: 999;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 10px 20px 0 rgba(53,64,90,.2);

      &.is-show {
        display: flex;
      }

      .dropdown-item {
        padding: 10px 25px;

        &:hover {
          text-decoration: none;
          cursor: pointer;
          background-color: $blue-light;
        }
      }
    }
  }
}
</style>
