import { IsUppercase, Length } from "class-validator";
import { trace } from "console";
import { Trade } from "src/trade/trade.entity";
import { UserPortfolio } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()

export class Share extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'share_id' })
    id: number;

    @Column({
        type: "varchar",
        unique: true,
        length: 3,
        nullable: true,

    })
    @IsUppercase()
    symbol: string;

    @Column({
        type: 'decimal',
        precision: 10,
        scale: 2
    })
    rate: number;

    @Column({
        type: "date",
        nullable: false
    })
    lastUpdated: Date

    @OneToMany(
        () => Trade,
        trade => trade.share
    )
    trade: Trade

    @ManyToOne(
        () => UserPortfolio,
        userPortfolio => userPortfolio.share
    )
    @JoinColumn({ name: 'user_id' })
    userPortfolio: UserPortfolio
}