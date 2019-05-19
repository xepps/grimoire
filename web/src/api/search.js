import axios from 'axios';

export default {
  getByTerm: async (term, offset = 0) => axios.get(`${window.location.origin}/api/search`, { params: { term, offset } }),
};
