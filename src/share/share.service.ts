import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { UserPortfolio } from 'src/user/user.entity';
import { Share } from './share.entity';

@Injectable()
export class ShareService {
    constructor(
        @InjectModel(Share)
        private shareModel: typeof Share
    ) { }

    async fetchAll(): Promise<Share[]> {
        return this.shareModel.findAll();
    }

    async findBySymbol(symbol: string): Promise<Share> {
        return this.shareModel.findOne({
            where: {
                symbol: symbol
            }
        });
    }

    async createShare(share: Share) {
        return this.shareModel.create(share);
    }

    async deleteShare(symbol: string) {
        return this.shareModel.destroy({
            where: {
                symbol: symbol
            }
        });
    }

    async updateShare(symbol: string, data: Partial<Share>): Promise<Share> {
        const share = await this.shareModel.findByPk(symbol);
        if (!share) {
            throw new NotFoundException(`Share with ${symbol}' not found)`)
        }
        return share.update(data);
    }
}

