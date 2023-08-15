import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne,Index } from "typeorm"
import { Member } from "./member.js"
@Entity("tokens")

export class Tokens {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToOne(() => Member)
    @JoinColumn({name:"userId"})
    @Index()
    user!: Member

    @Column()
    @Index()
    token!: string

    @CreateDateColumn({ nullable: true })
    expiresAt!: Date

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedDate!: Date

}
