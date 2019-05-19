import Vue from 'vue';
import Vuex from 'vuex';
import spells from './modules/spells';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    spells,
  },
});
