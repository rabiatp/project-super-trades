import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';
import { Share } from './share.entity';
import { ShareService } from './share.service';

@Controller('share')
export class ShareController {
    constructor(private readonly shareService: ShareService) { }

    @Get()
    async fetchAll(@Res() response) {
        const share = await this.shareService.fetchAll();
        response.status(HttpStatus.OK).json({
            share
        })
    }
    @Get(':symbol')
    async finBySymbol(@Res() response, @Param('symbol') symbol) {
        const findShare = await this.shareService.findBySymbol(symbol);
        return response.status(HttpStatus.OK).json({
            findShare
        })
    }
    @Post()
    async createShare(@Res() response, @Body() share: Share) {
        const newShare = await this.shareService.createShare(share);
        return response.status(HttpStatus.CREATED).json({
            newShare
        })
    }
    @Delete(':symbol')
    async delete(@Res() response, @Param('symbol') symbol) {
        const deleteShare = await this.shareService.deleteShare(symbol);
        return response.status(HttpStatus.OK).json({
            deleteShare
        })
    }

    @Patch(':symbol')
    async update(@Param('symbol') symbol, @Body() newData: Partial<Share>) {
        return await this.shareService.updateShare(symbol, newData)
    }
}
