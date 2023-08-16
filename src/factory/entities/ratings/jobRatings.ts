import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn,Index } from "typeorm" 
import { Jobs } from "../jobs/jobs.js"
import { Member } from "../user/member.js"
 

@Entity("job_ratings")
export class JobRatings {
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(type => Jobs, jobs => jobs.id)
    @JoinColumn({name:"jobId", referencedColumnName: "id", foreignKeyConstraintName: "jobRatingsByJob"})
    @Index()
    jobs!:Jobs

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn({ foreignKeyConstraintName: "jobRatingsByUser"})
    @Index()
    user!: any

    @Column()
    subject!:string
    
    @Column()
    review?:string

    @Column()
    rating!:number

    @CreateDateColumn()
    addedOn!:Date

}