import { BTCService } from './trade/services/BTCService';

const btcService = new BTCService();
const btc$ = btcService.getBTCTrades();

btc$.subscribe(
    trade => console.log(`Trade ID: ${trade.tradeId}, Price: ${trade.price}, Quantity: ${trade.quantity}, Time: ${trade.time}`)
);