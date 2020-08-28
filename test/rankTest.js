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

rankTest('case2: voyageRisk test voyage length is 4', t => {
  const voyage = {
    zone: 'west-indies',
    length: 4,
  };
  const result = voyageRisk(voyage)

  t.is(result, 1);
})

rankTest('case3: voyageRisk test voyage length > 4 but < 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 6,
  };
  const result = voyageRisk(voyage)

  t.is(result, 3);
})

rankTest('case4: voyageRisk test voyage length is 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 8,
  };
  const result = voyageRisk(voyage)

  t.is(result, 3);
})

rankTest('case5: voyageRisk test voyage length > 8', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const result = voyageRisk(voyage)

  t.is(result, 5);
})

rankTest('case6: voyageRisk test voyage length > 8 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const result = voyageRisk(voyage)

  t.is(result, 9);
})


rankTest('case7: captainHistoryRisk test history length < 5 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 6,
    },{
      zone: 'west-indies',
      profit: 4,
    }
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 5);
})
