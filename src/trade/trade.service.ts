import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WhereOptions } from 'sequelize/types/model';
import { Share } from 'src/share/share.entity';
import { UserPortfolio } from 'src/user/user.entity';
import Trade from './trade.entity';

@Injectable()
export class TradeService {
    constructor(
        @InjectModel(Trade)
        private readonly tradeModel: typeof Trade,
        @InjectModel(Share)
        private readonly shareModel: typeof Share,
        @InjectModel(UserPortfolio)
        private readonly portfolioModel: typeof UserPortfolio
    ) { }
    static async createTrade(type: 'BUY' | 'SELL', symbol: string, quantity: number, portfolioId: number, price: number): Promise<Trade> {


        // Ensure that the portfolio is registered
        const portfolio = await UserPortfolio.findOne({ where: { id: portfolioId } });
        if (!portfolio) {
            throw new Error('The Portfolio of the user is not registered');
        }

        // Ensure that the share is registered
        const share = await Share.findOne({ where: { symbol } });
        if (!share) {
            throw new Error('The share specified is not registered');
        }

        // Perform trade specific validations
        if (type === 'BUY') {
            // Validate price
            if (price !== share.price) {
                throw new Error('The rate at which the shares will be bought is not the latest price in the database');
            }
        } else if (type === 'SELL') {
            const trades = await Trade.findAll({ where: { portfolioId, symbol } });
            // check if the share is in the portfolio
            const totalBoughtShares = await Trade.sum('quantity', { where: { type: 'BUY', symbol, portfolioId } });
            if (!totalBoughtShares) {
                throw new BadRequestException('The share is not in the portfolio');
            }
            // Calculate the total shares bought and sold
            let sharesBought = 0;
            let sharesSold = 0;
            trades.forEach(trade => {
                if (trade.type === 'BUY') {
                    sharesBought += trade.quantity;
                } else if (trade.type === 'SELL') {
                    sharesSold += trade.quantity;
                }
            });
            // Ensure that there are sufficient shares to sell
            if (sharesBought - sharesSold < quantity) {
                throw new Error('The number of shares is not sufficient for selling');
            }
            // Validate price
            if (price !== share.price) {
                throw new Error('The rate at which the shares will be sold is not the latest price in the database');
            }
        }

        // Create trade
        return Trade.create({ type, symbol, quantity, price, portfolioId });
    }

    static async getTrades(portfolioId: number, symbol?: string): Promise<Trade[]> {
        // Get trades
        const where: WhereOptions = { portfolioId };
        if (symbol) {
            where.symbol = symbol;
        }
        return Trade.findAll({ where });
    }
}
