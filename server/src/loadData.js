const spells = require('../data/spells');
const {
  resetIndex, index, type, client,
} = require('./connection');

async function insertSpells() {
  await resetIndex();

  let bulkOps = [];
  for (let i = 0; i < spells.length; i += 1) {
    bulkOps.push({ index: { _index: index }, _type: type });
    bulkOps.push(spells[i]);

    if (i > 0 && i % 500 === 0) {
      // eslint-disable-next-line no-await-in-loop
      await client.bulk({ body: bulkOps });
      bulkOps = [];
      console.log(`Indexed Spells ${i - 499} - ${i}`);
    }
  }

  await client.bulk({ body: bulkOps });
  console.log(`Indexed all ${spells.length} spells`);
}

insertSpells();
