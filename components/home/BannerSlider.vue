<template>
  <section class="section-banner">
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6">
        <h1>PHP Hosting</h1>
        <h4>Cepat, handal, penuh dengan modul PHP yang anda butuhkan</h4>
        <ul>
          <li>Solusi PHP untuk performa query yang lebih cepat</li>
          <li>Konsumsi memory yang lebih rendah</li>
          <li>Suport PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7</li>
          <li>Fitur Enkripsi IonCube dan Zend Guard Loaders</li>
        </ul>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6">
        <img class="php-hosting-image"
          src="~/assets/img/svg/illustration banner PHP hosting-01.svg"
          alt="Niagahoster">
      </div>
    </div>
    <div class="row items">
      <div class="col-sm-12 col-md-4 col-lg-4">
        <img class="image-item"
          src="https://via.placeholder.com/200x150"
          alt="zendguard">
          <p>PHP Zend Guard Loader</p>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <img class="image-item"
          src="https://via.placeholder.com/200x150"
          alt="composer">
          <p>PHP Composer</p>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <img class="image-item"
          src="https://via.placeholder.com/200x150"
          alt="ioncube">
          <p>PHP IonCube Loader</p>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Banners',

};
</script>

<style lang="scss">
.section-banner {
  height: 50%;
  overflow: hidden;
  background-size: cover;
  background-position: 47% 0;
  padding: 0 20%;

  ul {
    list-style-type: circle;

    li {
      margin: 5% 0;
    }
  }

  .php-hosting-image {
    height: 90%;
    width: 90%;
  }

  .items {
    border-top: 1px solid $grey-light;
    margin-bottom: 5% 0;
    padding: 5% 0;
    text-align: center;

    .image-item {
      margin-bottom: 5%;
    }
  }
}
</style>
