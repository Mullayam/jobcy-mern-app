import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn,ManyToOne,JoinColumn,Index } from "typeorm"
import { Jobs } from "./jobs.js"
import { Member } from "../user/member.js"
import { Companies } from "../company/companies.js"


@Entity("applied_jobs")
export class AppliedJobs {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn({ name: "userId", referencedColumnName: "userId", foreignKeyConstraintName: "jobAppliedByUser" })
    @Index()
    user?: Member
   
    @ManyToOne(type => Jobs, jobs => jobs.id)
    @JoinColumn({ name: "jobId", referencedColumnName: "id", foreignKeyConstraintName: "appliedForJobId" })
    @Index()
    job?: Jobs[]

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn({ name: "postedBy", referencedColumnName: "userId", foreignKeyConstraintName: "jobPostedByUser" })
    @Index()
    posted_by?: string

    @ManyToOne(type => Companies, company =>company.id)
    @JoinColumn({ name: "companyId", referencedColumnName: "id", foreignKeyConstraintName: "jobRelatedToCompany" })
    @Index()
    companyId?: number

    @CreateDateColumn()
    appliedOn!: Date

    @Column({ type: "simple-json", default: "" })
    status!: string

    @BeforeInsert()
    convertObjToStr() {
        this.status = JSON.stringify(this.status)
    }
}