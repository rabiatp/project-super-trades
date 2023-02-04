import { Share } from "src/share/share.entity";
import { UserPortfolio } from "src/user/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Trade extends BaseEntity {
    // @Column()
    // type: 'BUY' | 'SELL'
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ nullable: false })
    shareId: string

    @Column({ nullable: false })
    portfolioId: string

    @Column()
    price: number

    @Column()
    quantity: number


    @ManyToOne(() => Share, share => share.trade)
    @JoinColumn({ name: 'share_id' })
    share: Share

    @ManyToOne(() => UserPortfolio, userPortfolio => userPortfolio.trade)
    @JoinColumn({ name: 'user_id' })
    userPortfolio: UserPortfolio


}