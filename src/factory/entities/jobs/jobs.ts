import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, Index, ManyToOne, JoinColumn, Relation } from "typeorm"
import Helpers from "../../../helpers/index.js"
import { Member } from "../user/member.js"
import { Categories } from "../cateogory/cateogories.js"
import { Companies } from "../company/companies.js"
@Entity("jobs")
export class Jobs {
    @PrimaryGeneratedColumn() id!: number

    @ManyToOne(type => Categories, category => category.jobs)    
    // @JoinColumn({ name: "categoryId", referencedColumnName: "id", foreignKeyConstraintName: "job_categories" })   
    category!: Relation<Categories>

    @Column()
    jobTitle!: string

    @Column()
    slug!: string

    @Column({ nullable: true, name: "img" })
    image!: string
    
    @Column({ nullable: true })
    logo!: string

    @Column()
    owner!: string
    @Column({ nullable: true, })
    minimumExperience!: string

    @Column({ nullable: true, })
    industryType!: string

    @Column({ nullable: true })
    job_type!: string

    @Column({ nullable: true })
    job_location!: string

    @Column()
    position!: string

    @Column()
    offeredSalary!: string

    @Column("longtext")
    description!: string

    @Column("longtext")
    responsiblities!: string

    @Column("longtext")
    qualifications!: string
    @Column({ type: "simple-array", nullable: true })
    skills!: string[]

    @Column({ type: "simple-array", nullable: true })
    keywords!: string[]


    @ManyToOne(type => Member, member => member.id)
    @JoinColumn({ foreignKeyConstraintName: "jobs_postedBy" })
    @Index()
    postedBy!: Relation<Member>

    @CreateDateColumn()
    postedOn!: Date

   
    @ManyToOne(type => Companies, companies => companies.id)
    @JoinColumn({ name: "companyId", referencedColumnName: "id", foreignKeyConstraintName: "jobRelatedCompany" })
    @Index()
    company!: Relation<Companies>

    @BeforeInsert()
    generateSlug() {
        this.slug = Helpers.Slugify(this.jobTitle)
    }



}