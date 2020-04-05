<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import bus from '~/plugins/bus';
import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';

export default {

  components: {
    Header,
    Footer,
  },

  computed: {
    language() {
      return this.$store.state.common.LANG;
    },
  },

  mounted() {
    this.initLocalization();
    bus.$on('language-updated', this.initLocalization);
  },

  beforeDestroy() {
    bus.$off('language-updated', this.initLocalization);
  },

  methods: {
    setAxiosHeader() {
      this.$axios.onRequest((config) => {
        config.headers['Accept-Language'] = this.language;
      });
    },

    initLocalization(payload) {
      const lang = payload || this.language;
      this.setAxiosHeader();
      this.$i18n.locale = lang;
    },
  },
};
</script>
