import { IsString } from "class-validator";

export class UserPortfolioDto {
    @IsString()
    userFirstName: string

    @IsString()
    userLastName: string
}