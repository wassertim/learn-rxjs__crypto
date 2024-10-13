import { map, Observable } from 'rxjs';
import { Trade } from '../model/trade';
import WebSocket from 'ws';
import { mapTrade } from '../mappers/maptrade';

export class BTCService {

    ws: WebSocket;

    constructor() {
        this.ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
        this.ws.on('open', () => {
            console.log('Connected to Binance WebSocket');
        });
        // Handle program termination
        process.on('SIGINT', () => {
            this.ws.close();
            console.log('SIGINT WebSocket connection closed');
            process.exit();
        });
    }

    getBTCTrades(): Observable<Trade> {
        const btc$ = new Observable<Trade>(subscriber => {
            this.ws.on('message', (data) => {
                const trade = JSON.parse(data);

                subscriber.next(mapTrade(trade));
            });

            this.ws.on('error', (error) => {
                subscriber.error(error);
            });

            this.ws.on('close', () => {
                console.log('Completed');
                subscriber.complete();
            });
            return () => {
                
            }
        });

        return btc$;
    }

    closeConnection() {
        this.ws.close();
    }
}