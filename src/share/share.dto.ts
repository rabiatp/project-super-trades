import { IsDate, IsDecimal, IsString } from "class-validator";

export class ShareDto {
    @IsString()
    readonly userPortfolioId: string

    @IsString()
    readonly symbol: string;

    @IsDecimal()
    readonly rate: number;

    @IsDate()
    readonly lastUpdated: Date
}