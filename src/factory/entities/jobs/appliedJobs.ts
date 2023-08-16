import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn,ManyToOne,JoinColumn,Index } from "typeorm"
import { Jobs } from "./jobs.js"
import { Member } from "../user/member.js"
import { Companies } from "../company/companies.js"


@Entity("applied_jobs")
export class AppliedJobs {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn({ foreignKeyConstraintName: "jobAppliedByUser" })
    @Index()
    user?: any
   
    @ManyToOne(type => Jobs, jobs => jobs.id)
    @JoinColumn({ name: "jobId", referencedColumnName: "id", foreignKeyConstraintName: "appliedForJobId" })
    @Index()
    job?: Jobs

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn({  foreignKeyConstraintName: "jobPostedByUser" })
    @Index()
    posted_by?: any

    @ManyToOne(type => Companies, company =>company.id)
    @JoinColumn({ foreignKeyConstraintName: "jobRelatedToCompany" })
    @Index()
    company?: Companies

    @CreateDateColumn()
    appliedOn!: Date

    @Column({ type: "simple-json", default: "" })
    status!: string

    @BeforeInsert()
    convertObjToStr() {
        this.status = JSON.stringify(this.status)
    }
}