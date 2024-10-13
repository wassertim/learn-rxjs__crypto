import { map, Observable } from 'rxjs';
import { Trade } from '../model/trade';
import WebSocket from 'ws';
import { mapTrade } from '../mappers/maptrade';

export class BTCService {

    getBTCTrades(): Observable<Trade> {
        const btc$ = new Observable<Trade>(subscriber => {
            const ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

            ws.on('open', () => {
                console.log('Connected to Binance WebSocket');
            });

            ws.on('message', (data) => {
                const trade = JSON.parse(data);

                subscriber.next(mapTrade(trade));
            });

            ws.on('error', (error) => {
                subscriber.error(error);
            });

            ws.on('close', () => {
                console.log('WebSocket connection closed');
                subscriber.complete();
            });

            // Handle program termination
            process.on('SIGINT', () => {
                ws.close();
                process.exit();
            });
        });
        
        return btc$;
    }
}