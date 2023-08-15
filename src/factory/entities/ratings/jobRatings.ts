import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn,Index } from "typeorm" 
import { Jobs } from "../jobs/jobs.js"
import { Member } from "../user/member.js"
 

@Entity("job_ratings")
export class JobRatings {
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(type => Jobs, jobs => jobs.id)
    @JoinColumn()
    @Index()
    jobs!:any

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn()
    @Index()
    user!: any

    @Column()
    subject!:string
    
    @Column()
    review?:string

    @Column()
    rating!:number

    @CreateDateColumn()
    submittedOn!:Date

}