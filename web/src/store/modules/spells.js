/* eslint-disable no-param-reassign */
import search from '../../api/search';

export default {
  namespaced: true,
  state: {
    spells: [],
    hits: null,
  },
  getters: {
  },
  actions: {
    async getByTerm({ commit }, { term, offset }) {
      const results = await search.getByTerm(term, offset);

      commit('setSpells', results.data.hits.hits);
      commit('setHits', results.data.hits.total.value);
    },
  },
  mutations: {
    setSpells(state, spells) {
      state.spells = spells;
    },
    setHits(state, hits) {
      state.hits = hits;
    },
  },
};
