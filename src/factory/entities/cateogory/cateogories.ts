import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, JoinColumn } from "typeorm"
import Helpers from "../../../helpers/index.js"
import { Jobs } from "../jobs/jobs.js"
 
@Entity("categories")
export class Categories {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    slug!: string
    @Column({ nullable: true })
    icon!: string
    
    @OneToMany(() => Jobs, job => job.category)
    @JoinColumn({foreignKeyConstraintName: "jobsViaCatgoryId"})
    jobs!: Jobs[]

    @BeforeInsert()
    generateSlug() {
        this.slug = Helpers.Slugify(this.name);
    }
}