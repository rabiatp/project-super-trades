import { Column, DataType, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Share } from "src/share/share.entity";
import Trade from "src/trade/trade.entity";

@Table({ tableName: 'USERPORTFOLİO' })
export class UserPortfolio extends Model<UserPortfolio> {

    @Column({
        type: DataType.UUID,
        primaryKey: true,
        autoIncrement: true,
        references: {
            model: 'UserPortfolio',
            key: 'userPortfolioId'
        }
    })
    id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @HasMany(() => Share,
        {
            foreignKey: 'userPortfolioId',
            onDelete: 'cascade'
        })
    share: Share[]

    @HasMany(() => Trade)
    trade: Trade[]

}
