import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Share } from './share.entity';

@Module({
    imports: [SequelizeModule.forFeature([Share])],

})
export class ShareModule { }
