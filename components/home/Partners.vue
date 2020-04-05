<template>
  <section class="section-packets">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ title }}</h1>
          <p class="description">{{ description }}</p>
        </div>

        <div v-for="item in data" :key="item.id" class="col-sm-12 col-md-3 col-lg-3">
          <div v-show="item.id === 3" class="label-best">BEST SELLER!</div>
          <client-only>
            <div :class="(item.id === 3) ? 'packet-list best-seller' : 'packet-list'">
              <div :class="(item.id === 3) ? 'best' : ''">
                <h3
                  class="title-list">
                  {{ item.title }}
                </h3>
                <hr>
                <h4>
                  <s>
                    Rp {{ handleNumeral(item.harga_gimick) }}
                  </s>
                </h4>
                <h1>
                  <span>Rp</span>
                  {{ handleNumeral(item.harga) }}
                  <span>/bln</span>
                </h1>
                <hr>
                <p>{{ handleNumeral(item.pengguna) }} Pengguna terdaftar</p>
                <hr>
              </div>
              <h4>
                {{ item.detail.resourcepower }}
                RESOURCE POWER
              </h4>
              <h4>
                {{ item.detail.diskspace }}
                <span> Disk Space </span>
              </h4>
              <h4>
                {{ item.detail.bandwitch }}
                <span> Bandwitch </span>
              </h4>
              <h4
                v-show="item.detail.email">
                {{ item.detail.email }}
                <span> POP3 Email </span>
              </h4>
              <h4>
                {{ item.detail.database }}
                <span> Databases </span>
              </h4>
              <h4>
                {{ item.detail.domain }}
                <span> {{ (item.id !== 1 ) ? 'Addon Domains' : 'Domain' }} </span>
              </h4>
              <h4>
                {{ item.detail.backup }}
                <span> {{ (item.id === 4 ) ? 'Backup & Restore' : 'Backup' }} </span>
              </h4>
              <h4
                v-show="item.detail.freedomain">
                {{ item.detail.freedomain }}
                <span> Selamanya </span>
              </h4>
              <h4>
                {{ item.detail.ssl }}
                <span> Gratis Selamanya </span>
              </h4>
              <h4
                v-show="item.detail.nameserver">
                {{ item.detail.nameserver }}
                <span> Name Server </span>
              </h4>
              <h4
                v-show="item.detail.prioritaslayanan">
                {{ item.detail.prioritaslayanan }} <span> Layanan Support </span><br>
                <span v-for="n in 5" :key="n">
                  <i class="fa fa-star" />
                </span>
              </h4>
              <h4
                v-show="item.detail.mailprotection">
                {{ item.detail.mailprotection }}
                <span>{{ (item.id === 4 ) ? 'Pro' : '' }} Mail Protection </span>
              </h4>

              <button
                type="button"
                :class="(item.id === 3) ? 'btn btn-primary' : 'btn btn-light'">
                {{ (item.diskon) ? item.diskon : 'Pilih Sekarang' }}
              </button>
            </div>
          </client-only>
        </div>
      </div>
  </section>
</template>

<script>
import numeral from 'numeral';

export default {
  name: 'Packets',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      title: 'Paket Hosting Singapura yang tepat',
      description: 'Diskon 40% + Domain dan SSL Gratis untuk Anda',
    };
  },

  methods: {
    handleNumeral(value) {
      return numeral(value).format('0,0');
    },
  },
};
</script>

<style lang="scss" scoped>
  .section-packets {
    text-align: center;
    padding: 0 10%;
    font-size: 12px;

    .title {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: bold;
      color: $black;
    }

    .label-best {
      display: flex;
      font-weight: bold;
      background-color: green;
      color: white;
      -webkit-transform: rotate(-30deg);
      -moz-transform: rotate(-30deg);
      margin-left: -10%;
      margin-right: 79%;
      font-size: 15px;
    }

    .description {
      font-size: 16px;
      font-weight: normal;
      color: $black;
      margin-bottom: 7%;
    }

    .fa-star {
      background-color: white;
      color: #007aff;
    }

    .best-seller {
      border: 1px solid #007aff !important;
      border-radius: 5px;
      margin-top: -8%;

      .best {
        background-color: #007aff !important;
        color: white;
      }
    }

    .packet-list {
      border: 1px solid $grey-light;
      border-radius: 5px;
      margin: 1;

      h3 {
        text-align: center;
      }

      h1 {
        font-size: 32px;
      }

      .btn-primary {
        border-radius: 20px;
        background-color: #007aff;
        font-size: 24;
        font-weight: bold;
        margin-bottom: 10%;
      }

      .btn-light {
        border: 1px solid $grey;
        border-radius: 20px;
        font-size: 24;
        font-weight: bold;
        margin-bottom: 10%;
      }

      span {
        font-size: 16px;
        vertical-align: top;
        font-weight: normal;
      }
    }
  }
</style>
