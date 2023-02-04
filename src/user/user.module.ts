import { UserPortfolio } from './user.entity';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Share } from 'src/share/share.entity';
//import { Share } from 'src/share/share.entity';

@Module({
    imports: [SequelizeModule.forFeature([UserPortfolio, Share])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule { }
