const { getStockPrice } = require('../getStockPrice');

const now = Date.now(); // Unix timestamp in milliseconds

const ticker = 'TLSa';
const stockPrice = {
  currentPrice: 800.6082,
  highPrice: 805.0486,
  lowPrice: 786.552,
  openingPrice: 790.35,
  previousClose: 803.33,
  time: Math.floor(now / 1000),
  symbol: ticker,
};

describe('Stock API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns a Stock object', async () => {
    fetch.mockResponseOnce(JSON.stringify(stockPrice));
    const result = await getStockPrice(ticker);
    expect(result).not.toEqual(undefined);
    expect(result).toHaveProperty('currentPrice');
    expect(result).toHaveProperty('highPrice');
    expect(result).toHaveProperty('lowPrice');
    expect(result).toHaveProperty('openingPrice');
    expect(result).toHaveProperty('previousClose');
    expect(result).toHaveProperty('time');
  });
});
