const fetch = require('node-fetch');

class Stock {
  constructor({ c, h, l, o, pc, t, sym }) {
    this.currentPrice = c;
    this.highPrice = h;
    this.lowPrice = l;
    this.openingPrice = o;
    this.previousClose = pc;
    this.time = t;
    this.symbol = sym;
  }
}

const getStockPrice = async arg => {
  const apiKey = `${process.env.FINHUB_KEY}`;
  if (apiKey) {
    const uri = `https://finnhub.io/api/v1/quote?symbol=${arg.toUpperCase()}&token=${apiKey}`;
    const response = await fetch(uri).catch(error => {
      console.log('ERROR', error);
    });
    const stockJson = await response.json();
    console.log('main_response:', stockJson);
    stockJson.sym = arg.toUpperCase();
    return new Stock(stockJson);
  }
  return null;
};

exports.getStockPrice = getStockPrice;
exports.Stock = Stock;
