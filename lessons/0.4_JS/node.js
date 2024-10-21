// console.log(5);

// console.log(process.argv[2]);

const buyStock = (ticker, action) => {
  if (action === "BUY") {
    // buys stock here
    console.log(`Successfully bought ${ticker}`);
  } else if (action === "SELL") {
    console.log(`Successfully sold ${ticker}`);
  }
};

buyStock(process.argv[2], process.argv[3]);
