import { Injectable } from '@nestjs/common';
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

    async findOne(id: string): Promise<UserPortfolio> {
        return this.userPortfolioModel.findOne({
            where: {
                id
            }
        })
    }

    async createUserPortfolio(userPortfolio: UserPortfolio) {
        return this.userPortfolioModel.create(userPortfolio)
    }

    // async updateUserPortfolio(id: string, userPortfolio: UserPortfolio) {
    //     return this.userPortfolioModel.update(id, {
    //         ...(userPortfolio.name && { name: userPortfolio.name })
    //     })
    // }
}
