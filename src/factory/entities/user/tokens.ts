import { Entity, Column, Index, Unique, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, ManyToOne } from "typeorm"
import { Member } from "./member.js"
@Entity("tokens")
@Unique(["userId"])
export class Tokens {
    @PrimaryColumn()
    id!: number

    @ManyToOne(() => Member, (member) => member.tokens)
    @JoinColumn()
    userId!: Member

    @Column()
    token!: string

    @CreateDateColumn({ nullable: true })
    expiresAt!: Date

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedDate!: Date

}
