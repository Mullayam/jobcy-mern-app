import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { Member } from "./member.js"
@Entity("notifications")

export class Notifications {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToOne(() => Member, (member) => member.userId, { nullable: false })
    @JoinColumn({name:"userId" ,foreignKeyConstraintName: "notification_userId_fk", referencedColumnName: "userId"})
    user!: any

    @Column()
    title!: string

    @Column()
    content?: string

    @Column({ default: false })
    isRead!: boolean

    @CreateDateColumn()
    addedOn!: Date

    @Column({ type: 'timestamp', nullable: true })
    timestamp?: Date;

    @UpdateDateColumn()
    updatedDate!: Date

}
