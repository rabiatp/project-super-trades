import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import Trade from './trade.entity';
import { TradeService } from './trade.service';

@Controller('trade')
export class TradeController {
    constructor(
        private readonly tradeService: TradeService) { }


    @Post()
    async createTrade(
        @Body('type') type: 'BUY' | 'SELL',
        @Body('symbol') symbol: string,
        @Body('quantity') quantity: number,
        @Body('portfolioId') portfolioId: number,
        @Body('price') price: number
    ): Promise<Trade> {

        return TradeService.createTrade(type, symbol, quantity, portfolioId, price)
    }

    @Get(':portfolioId')
    async getTrades(@Param('portfolioId') portfolioId: number, @Param('symbol') symbol?: string): Promise<Trade[]> {
        return TradeService.getTrades(portfolioId, symbol);
    }
}




