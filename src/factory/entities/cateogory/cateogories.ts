import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, JoinColumn } from "typeorm"
import Helpers from "../../../helpers/index.js"
 
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
    
    @BeforeInsert()
    generateSlug() {
        this.slug = Helpers.Slugify(this.name);
    }
}