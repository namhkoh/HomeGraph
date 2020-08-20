const fetch = require('node-fetch');

describe('getStockPrice', () => {
  it('gets stock price for ticker', async () => {
    const query = `
        {
            getStockPrice(input: {ticker: "SPy"}) {
                currentPrice
                highPrice
                lowPrice
                openingPrice
                previousClose
                time
                symbol
            }
        }
        `;

    const queryStr = encodeURI(query);
    const response = await fetch(
      `http://localhost:4000/graphql/?query=${queryStr}`
    );
    const responseObj = await response.json();
    expect(responseObj.data).not.toBeNull();
    expect(responseObj.data).not.toBeUndefined();
    expect(responseObj.data.getStockPrice).not.toBeNull();
    expect(responseObj.data.getStockPrice).not.toBeUndefined();
    expect(responseObj.data.getStockPrice).toHaveProperty('currentPrice');
    expect(responseObj.data.getStockPrice).toHaveProperty('highPrice');
    expect(responseObj.data.getStockPrice).toHaveProperty('lowPrice');
    expect(responseObj.data.getStockPrice).toHaveProperty('openingPrice');
    expect(responseObj.data.getStockPrice).toHaveProperty('previousClose');
    expect(responseObj.data.getStockPrice).toHaveProperty('time');
  });
});
