<template>
  <footer id="site-footer">
    <!-- SUBSCRIBE -->
    <Subscribe />

    <!-- SITEMAP -->
    <div class="section-footer-sitemap">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>HUBUNGI KAMI</h4>
          <div>0274-5305505</div>
          <div>Senin - Minggu</div>
          <div>24 Jam Nonstop</div>
          <div><br></div>
          <div>JL. Selokan Mataram Monjali</div>
          <div>Karangjati MT I/304</div>
          <div>Sinduadi, Mlati, Sleman</div>
          <div>Yogyakarta 55284</div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>LAYANAN</h4>
          <div>Domain</div>
          <div>Shared Hosting</div>
          <div>Cloud VPS Hosting</div>
          <div>Managed VPS Hosting</div>
          <div>Web Builder</div>
          <div>Keamanan SSL / HTTPS</div>
          <div>Jasa Pembuatan Website</div>
          <div>Program Afiliasi</div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>SERVICE HOSTING</h4>
          <div>Hosting Murah</div>
          <div>Hosting Indonesia</div>
          <div>Hosting Singapura SG</div>
          <div>Hosting PHP</div>
          <div>Hosting Wordpress</div>
          <div>Hosting Laravel</div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>TUTORIAL</h4>
          <div>Knowledgebase</div>
          <div>Blog</div>
          <div>Cara Pembayaran</div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>TENTANG KAMI</h4>
          <div>Tim Niagahoster</div>
          <div>Karir</div>
          <div>Events</div>
          <div>Penawaran & Promo Spesial</div>
          <div>Kontak Kami</div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>KENAPA PILIH NIAGAHOSTER?</h4>
          <div>Support Terbaik</div>
          <div>Garansi Harga Termurah</div>
          <div>Domain Gratis Selamanya</div>
          <div>Datacenter Hosting Terbaik</div>
          <div>Review Pelanggan</div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h4>NEWSLATER</h4>
          <input type="email" placeholder="E-mail">
          <div>
            Dapatkan promo dan konten menarik dari penyedia hosting terbaik anda
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-3">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-google-plus-square" aria-hidden="true"></i>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 payment">
          <h4>PEMBAYARAN</h4>
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-1">
              BCA
            </div>
            <div class="col-sm-12 col-md-12 col-lg-1">
              MANDIRI
            </div>
            <div class="col-sm-12 col-md-12 col-lg-1">
              BNI
            </div>
            <div class="col-sm-12 col-md-12 col-lg-1">
              VISA
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
              ATM BERSAMA
            </div>
            <div class="col-sm-12 col-md-12 col-lg-2">
              PERMATA BANK
            </div>
            <div class="col-sm-12 col-md-12 col-lg-1">
              PRIMA
            </div>
            <div class="col-sm-12 col-md-12 col-lg-1">
              ALTO
            </div>
          </div>
        </div>
        <p>Aktivasi instant dengan e-Payment Hosting dan Domain langsung aktif.</p>
      </div>
    </div>

    <!-- COPYRIGHT -->
    <div class="section-footer-copyright">
      <div class="container">
        <div class="row justify-content-center mt-4 mb-5">
          &copy; {{ year }} Sunarko. All rights reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import moment from 'moment';
import Subscribe from '~/components/footer/Subscribe';

export default {
  components: {
    Subscribe,
  },

  asynData() {
    return {
      year: moment().format('YYYY'),
    };
  },

  data() {
    return {
      year: '2020',
    };
  },
};
</script>

<style lang="scss">
#site-footer {
  z-index: 2;
  background-color: white;

  .section-footer-sitemap {
    padding: 2% 20%;
    background-color: $grey;

    .row {
      margin: 2% 0;
    }

    div {
      margin: 1% 0;
    }

    input {
      width: 80%;
      height: 25%;
      border-radius: 25px;
    }

    span {
      button {
        width: 12%;
        height: 60%;
        border-radius: 10px;
        font-size: 12px;
      }
    }

    .payment {
      margin: 0 0;
    }
  }
}
</style>
