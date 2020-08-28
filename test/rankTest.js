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


rankTest('case8: captainHistoryRisk test history length is 5 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 0);
})


rankTest('case9: captainHistoryRisk test history length > 5 and zone is china', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 6,
    },
    {
      zone: 'west-indies',
      profit: 4,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 0);
})

rankTest('case10: captainHistoryRisk test history length < 5 and zone != china', t => {
  const voyage = {
    zone: 'west-indies',
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

rankTest('case11: captainHistoryRisk test history length > 5 and zone != china', t => {
  const voyage = {
    zone: 'west-indies',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 6,
    },
    {
      zone: 'west-indies',
      profit: 4,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = captainHistoryRisk(voyage, history)

  t.is(result, 1);
})

rankTest('case12: voyageProfitFactor test history length < 10 and zone is china and hasChina and voyage length < 12', t => {
  const voyage = {
    zone: 'china',
    length: 10,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 6);
})



rankTest('case13: voyageProfitFactor test history length < 10 and zone is china and hasChina and voyage length > 12 but < 18', t => {
  const voyage = {
    zone: 'china',
    length: 13,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 7);
})


rankTest('case14: voyageProfitFactor test history length < 10 and zone is china and hasChina and voyage length > 18', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 6);
})



rankTest('case15: voyageProfitFactor test history length > 10 and zone is china and hasChina and voyage length > 18', t => {
  const voyage = {
    zone: 'china',
    length: 19,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'china',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 7);
})




rankTest('case16: voyageProfitFactor test history length < 10 and zone is china and has no China and history.length < 8 and voyage.length > 14', t => {
  const voyage = {
    zone: 'china',
    length: 18,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 6,
    },
    {
      zone: 'west-indies',
      profit: 4,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 2);
})


rankTest('case17: voyageProfitFactor test history length < 10 and zone is china and has no China and history.length > 8 and voyage.length = 14', t => {
  const voyage = {
    zone: 'china',
    length: 14,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'east-indies',
      profit: 2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'west-africa',
      profit: 7,
    }
  ];

  const result = voyageProfitFactor(voyage, history)

  t.is(result, 4);
})
