async function getBTCPrice() {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      const btcPrice = data.bitcoin.usd;
      console.log(`The current BTC price is: $${btcPrice}`);
      return btcPrice;
    } catch (error) {
      console.error('Error fetching BTC price:', error);
    }
  }
  
  // Call the function
//   getBTCPrice();