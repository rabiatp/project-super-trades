import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { UserPortfolio } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userPortfolioService: UserService) { }

    @Post()
    async createUserPortfolio(@Res() response, @Body() userPortfolio: UserPortfolio) {
        const newUserPortfolio = await this.userPortfolioService.createUserPortfolio(userPortfolio);
        return response.status(HttpStatus.CREATED).json({
            newUserPortfolio
        })
    }
    @Get()
    async fetchAll(@Res() response) {
        const userPortfolio = await this.userPortfolioService.findAll();
        return response.status(HttpStatus.OK).json({
            userPortfolio
        })
    }
    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const userPortfolio = await this.userPortfolioService.findOne(id);
        return response.status(HttpStatus.OK).json({
            userPortfolio
        })
    }
}
