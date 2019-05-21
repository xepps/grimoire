/* eslint-disable no-param-reassign */
import search from '../../api/search';

export default {
  namespaced: true,
  state: {
    spells: [],
    hits: null,
    offset: 0,
    term: null,
  },
  getters: {
  },
  actions: {
    async getByTerm({ commit }, { term = null }) {
      const results = await search.getByTerm(term);

      commit('setSpells', results.data.hits.hits);
      commit('setHits', results.data.hits.total.value);
      commit('setOffset', 0);
      commit('setTerm', term);
    },
    async nextResults({ commit, state }) {
      if (state.offset > state.hits) return;
      const offset = state.offset + 10;
      const results = await search.getByTerm(state.term, offset);

      commit('setSpells', state.spells.concat(results.data.hits.hits));
      commit('setOffset', offset);
    },
    clearResults({ commit }) {
      commit('setSpells', []);
      commit('setHits', 0);
    },
  },
  mutations: {
    setSpells(state, spells) {
      state.spells = spells;
    },
    setHits(state, hits) {
      state.hits = hits;
    },
    setTerm(state, term) {
      state.term = term;
    },
    setOffset(state, offset) {
      state.offset = offset;
    },
  },
};
