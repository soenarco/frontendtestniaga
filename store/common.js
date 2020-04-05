import bus from '~/plugins/bus';

export const state = () => ({
  LANG: 'id',
});

export const mutations = {
  SET_LOCALIZATION(state, payload) {
    console.log('payload in mutations: ', payload);
    state.LANG = payload;
    bus.$emit('language-updated', payload);
  },
};

export const actions = {
  setLocalization: ({ commit, state }, lang) => {
    const language = lang || state.LANG;
    commit('SET_LOCALIZATION', language);
  },
};
