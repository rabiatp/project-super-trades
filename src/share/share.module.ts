import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Share } from './share.entity';
import { ShareService } from './share.service';
import { ShareController } from './share.controller';

@Module({
    imports: [SequelizeModule.forFeature([Share])],
    providers: [ShareService],
    controllers: [ShareController],

})
export class ShareModule { }
