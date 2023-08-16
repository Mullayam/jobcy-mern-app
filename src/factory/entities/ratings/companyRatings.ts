import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne, CreateDateColumn,Index } from "typeorm"
import { Member } from "../user/member.js"
import { Companies } from "../company/companies.js"


@Entity("company_ratings")
export class CompanyRatings {
    @PrimaryGeneratedColumn()
    id!: number
    @ManyToOne(type => Companies, company => company.id)
    @JoinColumn()
    @Index()
    company!: Companies

    @ManyToOne(type => Member, mem => mem.id)
    @JoinColumn({ foreignKeyConstraintName: "companyRatingsByUser"})
    @Index()
    user!: any

    @Column()
    subject!: string

    @Column()
    review?: string

    @Column()
    rating!: number

    @CreateDateColumn()
    submittedO!: Date

}