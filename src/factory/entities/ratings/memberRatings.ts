import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn,Index } from "typeorm"
import { Member } from "../user/member.js"
 

@Entity("member_ratings")
export class MemberRatings {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn()
    @Index()
    fromUser!:any

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn()
    @Index()
    ofUser!:any

    @Column()
    subject!:string
    
    @Column()
    review?:string

    @Column()
    rating!:number

    @CreateDateColumn()
    submittedOn!:Date

}