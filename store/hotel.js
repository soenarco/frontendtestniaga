export const state = () => ({
  query: {},
  hotelId: null,
});

export const mutations = {
  SET_QUERY_PARAMS(state, payload) {
    state.query = payload;
  },

  SET_HOTEL_ID(state, payload) {
    state.hotelId = payload;
  },
};
