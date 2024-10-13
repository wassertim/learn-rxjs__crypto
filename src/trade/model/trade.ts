export interface Trade {
    symbol: string;
    price: number;
    quantity: number;
    time: Date;
    maker: boolean;
    bestPriceMatch: boolean;
    tradeId: number;
    eventType: string;
    eventTime: number;
}