import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import Trade from './trade.entity';

@Module({
    imports: [SequelizeModule.forFeature([Trade])],

})
export class TradeModule { }
