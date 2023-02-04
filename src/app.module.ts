import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Share } from './share/share.entity';
import { Trade } from './trade/trade.entity';
import { UserController } from './user/user.controller';
import { UserPortfolio } from './user/user.entity';
import { UserService } from './user/user.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '254798',
    database: 'Doctor Project',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    UserPortfolio, Share, Trade],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
