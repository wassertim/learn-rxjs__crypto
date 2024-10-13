import { BTCService } from './trade/services/BTCService';

const btcService = new BTCService();
const btc$ = btcService.getBTCTrades();

const tradeSubscription = btc$.subscribe(
    trade => console.log(`Trade Subscription 1, Trade ID: ${trade.tradeId}, Price: ${trade.price}, Quantity: ${trade.quantity}, Time: ${trade.time}`)
);

const tradeSubscription2 = btc$.subscribe(
    trade => console.log(`Trade Subscription 2, Trade ID: ${trade.tradeId}, Price: ${trade.price}, Quantity: ${trade.quantity}, Time: ${trade.time}`)
);

setTimeout(() => {
    tradeSubscription.unsubscribe();
    tradeSubscription2.unsubscribe();
    btcService.closeConnection();
}, 5000);