<template>
  <main id="site-content">
    <Banner />
    <Packet :data="lists.packets" />
    <About :data="lists.abouts" />
  </main>
</template>

<script>
import About from '~/components/home/About';
import Banner from '~/components/home/BannerSlider';
import Packet from '~/components/home/Partners';

export default {
  name: 'Homepage',

  components: {
    About,
    Banner,
    Packet,
  },

  async asyncData({ app }) {
    const packetData = await app.$axios.$get('packet.json');
    const aboutData = await app.$axios.$get('about.json');

    const listData = {
      packets: packetData,
      abouts: aboutData,
    };

    return {
      lists: listData,
    };
  },

  data() {
    return {
      lists: {
        packets: [],
        abouts: [],
      },
    };
  },

  head() {
    return {
      title: 'Hosting Indonesia Unlimited & Terbaik - Niagahoster',
      bodyAttrs: {
        class: 'page-home',
      },
    };
  },
};
</script>
