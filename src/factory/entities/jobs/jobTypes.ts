import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"
import Helpers from "../../../helpers/index.js"
@Entity("job_types")
export class JobTypes {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    slug!: string

    @BeforeInsert()   
    generateSlug() {
        this.slug = Helpers.Slugify(this.name);
       }
}