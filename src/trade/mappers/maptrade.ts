import { Trade } from '../model/trade';

export const mapTrade = (trade): Trade => {
    return {
        symbol: trade.s,
        price: parseFloat(trade.p),
        quantity: parseFloat(trade.q),
        time: new Date(trade.T),
        maker: trade.m,
        bestPriceMatch: trade.M,
        tradeId: trade.t,
        eventType: trade.e,
        eventTime: trade.E        
    };
};