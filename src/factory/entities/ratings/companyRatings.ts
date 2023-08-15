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
    companyId!: any

    @ManyToOne(type => Member, mem => mem.userId)
    @JoinColumn()
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