import { Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Share } from "src/share/share.entity";
import Trade from "src/trade/trade.entity";

@Table({ tableName: 'USERPORTFOLİO' })
export class UserPortfolio extends Model<UserPortfolio> {

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    id: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @HasMany(() => Share)
    share: Share[]

    @HasMany(() => Trade)
    trade: Trade[]

}
