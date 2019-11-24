const { client, index, type } = require('./connection');

module.exports = {
  queryTerm: (term, offset = 0) => {
    const body = {
      from: offset,
      query: {
        multi_match: {
          query: term,
          operator: 'and',
          fuzziness: 'auto',
          fields: [
            'at_higher_levels^2',
            'casting_time',
            'name^3',
            'duration',
            'range',
            'description^2',
            'material_component',
            'type^3',
          ],
        },
      },
      highlight: { fields: { '*': {} } },
    };

    return client.search({ index, type, body });
  },
  getBySlug: (slug) => {
    const body = {
      query: {
        term: {
          uri: slug,
        },
      },
    };

    return client.search({ index, type, body });
  },
  all: (offset = 0) => {
    const body = {
      query: {
        match_all: {},
      },
      from: offset,
      sort: [
        { level: { order: 'asc' } },
        { 'name.raw': { order: 'asc' } },
      ],
    };
    return client.search({ index, type, body });
  },
};
