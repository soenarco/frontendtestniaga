import Vue from 'vue';
import VCalendar from 'v-calendar-custom';

Vue.use(VCalendar, {
  masks: {
    L: 'WWW, DD MMM YYYY',
  },
});
