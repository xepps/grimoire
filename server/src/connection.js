const elasticsearch = require('elasticsearch');

const index = 'spells';
const type = 'spell';
const port = 9200;
const host = process.env.ES_HOST || 'localhost';
const client = new elasticsearch.Client({ host: { host, port } });

async function checkConnection() {
    let isConnected = false;
    while (!isConnected) {
        console.log('Connecting to ES');
        try {
            const health = await client.cluster.health({});
            console.log(health);
            isConnected = true;
        } catch (error) {
            console.log('Connection Failed, Retrying...', error);
        }
    }
}

async function putSpellMapping() {
    const schema = {
        at_higher_levels: { type: 'text' },
        level: { type: 'integer' },
        casting_time: { type: 'text' },
        uri: { type: 'text' },
        casters: { type: 'keyword' },
        type: { type: 'keyword' },
        name: { type: 'text' },
        duration: { type: 'text' },
        range: { type: 'text' },
        description: { type: 'text' },
        components: { type: 'keyword' },
        material_component: { type: 'text' }
    };

    return client.indices.putMapping({ index, type, include_type_name: true, body: { properties: schema } });
}

async function resetIndex() {
    if (await client.indices.exists({ index })) {
        await client.indices.delete({ index })
    }

    await client.indices.create({ index })
    await putSpellMapping()
}

module.exports = {
    client, index, type, checkConnection, resetIndex
};