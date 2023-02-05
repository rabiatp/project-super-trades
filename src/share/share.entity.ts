import { Column, Model, Table, DataType, IsUppercase, PrimaryKey, ForeignKey, BelongsTo, HasMany, HasOne } from 'sequelize-typescript';
import Trade from 'src/trade/trade.entity';
import { UserPortfolio } from 'src/user/user.entity';
@Table({
    tableName: 'Share',
})
export class Share extends Model<Share> {
    @Column({
        type: DataType.STRING(3),
        unique: true,
        allowNull: false,
        validate: {
            isUppercase: true,
            is: /^[A-Z]{3}$/
        },
    })
    symbol: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    rate: number;


    @HasMany(() => Trade)
    trade: Trade[]

    // @ForeignKey(() => UserPortfolio)
    // @Column
    // userPortfolioId: string;

    // @BelongsTo(() => UserPortfolio)
    // userPortfolio: UserPortfolio

}