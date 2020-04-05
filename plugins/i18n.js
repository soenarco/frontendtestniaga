import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locales from './locale/lang';

Vue.use(VueI18n);

/* eslint-disable no-unused-vars */
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.common.LANG,
    fallbackLocale: 'id',
    messages: locales,
  });
};
