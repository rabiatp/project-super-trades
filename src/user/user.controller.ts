import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
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

    @Delete(':id')
    async delete(@Res() response, @Param('id') id) {
        const deleteUserPortfolio = await this.userPortfolioService.deleteUserPortfolio(id);
        return response.status(HttpStatus.OK).json({
            deleteUserPortfolio
        })
    }

    @Patch(':id')
    async update(@Param('id') id, @Body() newData: Partial<UserPortfolio>) {
        return await this.userPortfolioService.updateUserPortfolio(id, newData)
    }
}


