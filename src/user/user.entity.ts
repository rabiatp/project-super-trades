import { Column, DataType, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Share } from "src/share/share.entity";
import Trade from "src/trade/trade.entity";

@Table({ tableName: 'UserPortfolio' })
export class UserPortfolio extends Model<UserPortfolio> {

    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @HasMany(() => Share)
    shares: Share[]

    @HasMany(() => Trade)
    trade: Trade[]

}
