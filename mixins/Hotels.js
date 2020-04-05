import moment from 'moment';
import numeral from 'numeral';

export default {
  props: {
    data: {
      type: Object,
      required: true,
      default: () => {},
    },
  },

  methods: {
    digitGrouping(string) {
      if (!string) return null;
      return numeral(string).format('0,0');
    },

    sanitizeInteger(value) {
      if (!value) return false;
      const number = parseInt(value, 10);
      if (number < 1) return false;
      if (Number.isNaN(Number(number))) return false;
      return number;
    },

    sanitizeDate(value) {
      if (!value) return false;
      const iso = 'YYYY-MM-DD';
      const result = moment(value, iso).format(iso) === value;
      return (result) ? moment(value, iso).format(iso) : false;
    },

    validateParam(key, value, type) {
      if (!value || !key) return null;

      let sanitized = null;

      if (type === 'date') {
        sanitized = this.sanitizeDate(value);
        if (!sanitized) return null;
      }

      if (type === 'number') {
        sanitized = this.sanitizeInteger(value);
        if (!sanitized) return null;
      }

      return `${key}=${sanitized}`;
    },
  },

  computed: {
    name() {
      return this.data.name;
    },

    thumbnail() {
      return this.data.thumbnail_url;
    },

    thumbnailBg() {
      return {
        'background-image': `url(${this.data.thumbnail_url})`,
      };
    },

    location() {
      const city = this.data.area.city.name;
      const area = this.data.area.name;
      return `${area}, ${city}`;
    },

    badges() {
      return this.data.badges.filter((item) => item.name !== 'dynamic_badge');
    },

    rate() {
      const { rate } = this.data.cheapest_room;

      return {
        normal: `${rate.currency} ${this.digitGrouping(rate.gimmick)}`,
        nett: `${rate.currency} ${this.digitGrouping(rate.total)}`,
        note: '/room/night',
      };
    },

    starRating() {
      return this.data.star_rating;
    },

    score() {
      let description = 'Average';

      if (this.data.review.score >= 90) {
        description = 'Fantastic';
      }

      if (this.data.review.score >= 80) {
        description = 'Extraordinary';
      }

      if (this.data.review.score >= 70) {
        description = 'Great';
      }

      if (this.data.review.score >= 60) {
        description = 'Average';
      }

      return {
        count: this.data.review.count,
        value: this.data.review.score,
        description,
      };
    },

    params() {
      const {
        night,
        occupancy,
        check_in: checkin,
        room_quantity: qty,
      } = this.$route.query;

      const params = {
        checkin: this.validateParam('checkin', checkin, 'date'),
        occupancy: this.validateParam('occupancy', occupancy, 'number'),
        quantity: this.validateParam('room_quantity', qty, 'number'),
        night: this.validateParam('night', night, 'number'),
      };

      return `&${Object.values(params).filter((key) => key !== null).join('&')}`;
    },

    permalink() {
      const country = this.data.area.city.state.country.slug;
      const city = this.data.area.city.slug;
      const area = this.data.area.slug;
      const hotel = this.data.slug;
      const { id } = this.data;

      return `/hotel/${country}/${city}/${area}/${hotel}?hotel_id=${id}${this.params}`;
    },
  },
};
