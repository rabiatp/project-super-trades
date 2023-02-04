import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShareModule } from './share/share.module';
import { TradeModule } from './trade/trade.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '254798',
    database: 'Super Traders',
    autoLoadModels: true,
    synchronize: true
  }), UserModule, ShareModule, TradeModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
