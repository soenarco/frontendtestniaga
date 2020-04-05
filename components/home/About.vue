<template>
  <section class="section-about">
      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ data[0].headline }}</h1>
        </div>
        <div class="row list-item">
          <ul v-for="item in data[0].list" :key="item" class="col-sm-12 col-md-12 col-lg-6">
            <li> {{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ data[1].headline }}</h1>
        </div>
        <div v-for="item in data[1].list" :key="item" class="col-sm-12 col-md-4 col-lg-4">
          <img class="image-item"
            :src="item.path"
            :alt="item.title">
            <h4> {{ item.title }} </h4>
            <p> {{ item.description }} </p>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ data[2].headline }}</h1>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <p style="text-align:left;">{{ data[2].description }} </p>
          <div class="row" style="text-align:left;">
            <ul v-for="item in data[2].list" :key="item" class="col-sm-12 col-md-12 col-lg-12">
              <li> {{ item }}</li>
            </ul>
          </div>
          <span>{{ data[2].note }}</span>
          <div class="row">
            <button
              type="button"
              class="btn btn-primary">
              Pilih Hosting Anda
            </button>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <img class="image-laravel"
            src="~/assets/img/svg/illustration banner support laravel hosting.svg"
            :alt="data[2].headline">
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ data[3].headline }}</h1>
        </div>
        <div v-for="item in data[3].list" :key="item" class="col-sm-12 col-md-3 col-lg-3">
          <p style="text-align:left;">{{ item }} </p>
        </div>
        <div class="row">
          <button
            type="button"
            class="btn btn-light">
            Selengkapnya
          </button>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <h1 class="title">{{ data[4].headline }}</h1>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <p style="text-align:left;">{{ data[4].description }} </p>
          <div class="row">
            <button
              type="button"
              class="btn btn-primary">
              Pilih Hosting Anda
            </button>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <img class="image-laravel"
            :src="data[4].path"
            :alt="data[4].headline">
        </div>
      </div>

      <div class="row share-page">
        <div class="col-sm-12 col-md-12 col-lg-6">
          <p style="text-align:left;">Bagikan jika anda menyukai halaman ini.</p>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-6">
          <i class="fa fa-facebook-square" aria-hidden="true"> <button> 80 K </button> </i>
          <i class="fa fa-twitter" aria-hidden="true"> <button> 450 </button> </i>
          <i class="fa fa-google-plus-square" aria-hidden="true"> <button> 1900 </button> </i>
        </div>
      </div>

  </section>
</template>

<script>
export default {
  name: 'About',

  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      title: [
        'Powerfull dengan Limit PHP yang Lebih Besar',
        'Semua Paket Hosting Sudah Termasuk',
        'Mendukung Penuh Framework Laravel',
        'Modul Lengkap untuk Menjalankan Aplikasi PHP Anda',
        'Linux Hosting yang Stabil dengan Teknologi LVE',
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
  .section-about {
    text-align: center;
    padding: 0 20%;

    .title {
      margin-bottom: 5%;
      font-size: 24px;
      font-weight: bold;
      color: $black;
    }

    .description {
      font-size: 16px;
      font-weight: normal;
      color: $black;
      margin-bottom: 7%;
    }

    .list-item {
      ul {
        list-style-type: circle;
        font-size: 18px;

        li {
          border: 1px solid $grey-light;
        }
      }
    }

    .justify-content-center {
      margin: 5% 0;
    }

    .image-item {
      height: 50%;
      width: 50%;
    }

    .image-laravel {
      height: 100%;
      width: 100%;
    }

    .btn-primary {
      border-radius: 20px;
      background-color: #007aff;
      font-size: 24;
      font-weight: bold;
      margin: 5% 0;
      align-items: flex-start;
    }

    .btn-light {
      border: 1px solid $grey;
      border-radius: 20px;
      font-size: 24;
      font-weight: bold;
      margin: 5% 0;
    }

    .share-page {
      font-size: 20px;
    }

  }
</style>
