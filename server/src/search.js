const { client, index, type } = require('./connection');

module.exports = {
    queryTerm: (term, offset = 0) => {
        const body = {
            from: offset,
            query: { multi_match: {
                query: term,
                operator: 'and',
                fuzziness: 'auto',
                fields: [ 
                    "at_higher_levels^2",
                    "casting_time",
                    "name^3",
                    "duration",
                    "range",
                    "description^2",
                    "material_component"
                ]
            } },
            highlight: { fields: { description: {} } }
        };

        return client.search({ index, type, body });
    }
}