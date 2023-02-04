import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Share } from './share/share.entity';
import Trade from './trade/trade.entity';
import { UserController } from './user/user.controller';
import { UserPortfolio } from './user/user.entity';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '254798',
    database: 'Doctor Project',
    autoLoadModels: true,
    //    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
  }), UserModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule { }
