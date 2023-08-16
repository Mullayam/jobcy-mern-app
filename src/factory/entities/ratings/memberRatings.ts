import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn,Index } from "typeorm"
import { Member } from "../user/member.js"
 

@Entity("member_ratings")
export class MemberRatings {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn()
    @Index()
    from!:any // rating by another  to for user

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn()
    @Index()
    for!:any // rating for user

    @Column()
    subject!:string
    
    @Column()
    review?:string

    @Column()
    rating!:number

    @CreateDateColumn()
    addedOn!:Date

}