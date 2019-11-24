import axios from 'axios';

export default {
  getByTerm: async (term = null, offset = 0) => {
    if (term) return axios.get(`${window.location.origin}/api/search`, { params: { term, offset } });
    return axios.get(`${window.location.origin}/api/all`, { params: { offset } });
  },
  getBySlug: async slug => axios.get(`${window.location.origin}/api/spell/${slug}`),
};
