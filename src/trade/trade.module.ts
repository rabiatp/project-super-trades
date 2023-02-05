import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TradeController } from './trade.controller';
import { TradeService } from './trade.service';
import Trade from './trade.entity';
import { Share } from 'src/share/share.entity';
import { UserPortfolio } from 'src/user/user.entity';

@Module({
    imports: [SequelizeModule.forFeature([Trade, Share, UserPortfolio])],
    controllers: [TradeController],
    providers: [TradeService],

})
export class TradeModule { }
