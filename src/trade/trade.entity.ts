import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Share } from 'src/share/share.entity';
import { UserPortfolio } from 'src/user/user.entity';

@Table
export default class Trade extends Model<Trade> {
    @Column({
        type: DataType.ENUM('BUY', 'SELL'),
        allowNull: false,
    })
    type!: 'BUY' | 'SELL';

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    quantity!: number;

    @Column({
        type: DataType.DECIMAL(10, 2),
        allowNull: false,
    })
    price!: number;

    @ForeignKey(() => Share)
    @Column({
        type: DataType.STRING(3),
        allowNull: false,
    })
    shareSymbol!: string;

    @BelongsTo(() => Share)
    share!: Share;

    @ForeignKey(() => UserPortfolio)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    portfolioId!: number;

    @BelongsTo(() => UserPortfolio)
    portfolio!: UserPortfolio;
}
