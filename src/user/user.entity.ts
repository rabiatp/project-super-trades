import { type } from "os";
import { share } from "rxjs";
import { Share } from "src/share/share.entity";
import { Trade } from "src/trade/trade.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, SelectQueryBuilder } from "typeorm";

@Entity()
export class UserPortfolio extends BaseEntity {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    id: string

    @Column({ name: 'user_first_name' })
    userFirstName: string

    @Column({ name: 'user_last_name' })
    userLastName: string

    @OneToMany(
        () => Share,
        share => share.userPortfolio
    )
    share: Share[]

    @OneToMany(
        () => Trade,
        trade => trade.userPortfolio
    )
    trade: Trade

}
