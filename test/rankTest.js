const rankTest = require('ava');
const { rating, voyageRisk, captainHistoryRisk, voyageProfitFactor } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('case1: voyageRisk test voyage length < 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 3,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})
