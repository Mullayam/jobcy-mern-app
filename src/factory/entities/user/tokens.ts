import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne } from "typeorm"
import { Member } from "./member.js"
@Entity("tokens")

export class Tokens {
    @PrimaryGeneratedColumn()
    id!: number

    @OneToOne(() => Member, (member) => member.tokens,{nullable:false})
    @JoinColumn({ name:"userId" ,foreignKeyConstraintName: "tokens_userId_fk", referencedColumnName: "userId" })
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
