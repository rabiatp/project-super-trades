import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserPortfolio } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserPortfolio)
        private userPortfolioModel: typeof UserPortfolio
    ) { }


    async findAll(): Promise<UserPortfolio[]> {
        return this.userPortfolioModel.findAll()
    }

    async findOne(id: number): Promise<UserPortfolio> {
        return this.userPortfolioModel.findOne({
            where: {
                id
            }
        })
    }

    async createUserPortfolio(userPortfolio: UserPortfolio) {
        return this.userPortfolioModel.create(userPortfolio)
    }

    async deleteUserPortfolio(id: number) {
        return this.userPortfolioModel.destroy({
            where: {
                id: id
            }
        })
    }


    async updateUserPortfolio(id: number, data: Partial<UserPortfolio>): Promise<UserPortfolio> {
        const portfolio = await this.userPortfolioModel.findByPk(id);
        if (!portfolio) {
            throw new NotFoundException(`Portfolio with id ${id} not found`);
        }
        return portfolio.update(data);
    }
}
