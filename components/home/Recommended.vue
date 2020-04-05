<template>
  <client-only>
    <section class="section-hotel">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <template v-if="favorites.hotels.length">
              <h3 class="hotel-caption">{{ favorites.title }}</h3>
              <p>{{ favorites.description }}</p>

              <div class="card-columns">
                <div class="card-wrapper">
                  <Hotel v-for="item in favoritesFirst"
                    :key="item.id"
                    template="simple"
                    :data="item" />
                </div>

                <div class="card-wrapper">
                  <Hotel v-for="item in favoritesSecond"
                    :key="item.id"
                    template="simple"
                    :data="item" />
                </div>
              </div>
            </template>
          </div>
          <div class="col-md-6">
            <template v-if="recommended.hotels.length">
              <h1 class="hotel-caption">{{ recommended.title }}</h1>
              <p>{{ recommended.description }}</p>

              <div class="card-wrapper">
                <Hotel v-for="item in recommended.hotels"
                  :key="item.id"
                  template="wide"
                  :data="item" />
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script>
import Hotel from '~/components/template/Hotel';

export default {
  name: 'Recommended',

  components: {
    Hotel,
  },

  data() {
    return {
      favorites: {
        title: 'Most Favorite Hotels',
        description: 'Choose Hotel and Booking Now!',
        hotels: [],
      },
      recommended: {
        title: 'Recomended Hotels',
        description: 'Enjoy the experience of the best hotels.',
        hotels: [],
      },
    };
  },

  computed: {
    favoritesFirst() {
      if (!this.favorites.hotels.length) return [];
      return this.favorites.hotels.slice(0, 4);
    },

    favoritesSecond() {
      if (!this.favorites.hotels.length) return [];
      return this.favorites.hotels.slice(4, 8);
    },
  },

  created() {
    this.init();
  },

  methods: {
    init() {
      this.fetchFavorites();
      this.fetchRecommended();
    },

    fetchFavorites() {
      this.$axios.$get('/hotels/lists/highlights/favorite')
        .then((response) => {
          this.favorites.hotels = response.data;
        })
        .catch((error) => {
          console.log('Fetching Favorites Hotels Error', error);
        });
    },

    fetchRecommended() {
      this.$axios.$get('/hotels/lists/highlights/recommended')
        .then((response) => {
          this.recommended.hotels = response.data;
        })
        .catch((error) => {
          console.log('Fetching Recommended Hotels Error', error);
        });
    },
  },
};
</script>

<style lang="scss">
  .section-hotel {
    margin-top: 50px;
    color: $black;

    .hotel-caption {
      font-weight: bold;
      color: $black;
    }
  }

  .card-columns {
    display: flex;
    justify-content: space-between;

    .card-wrapper {
      width: calc(50% - 15px);
    }
  }

  .card-wrapper {
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
</style>
