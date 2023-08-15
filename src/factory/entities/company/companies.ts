import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert ,Index} from "typeorm"
import Helpers from "../../../helpers/index.js"
@Entity("companies")
export class Companies {
    @PrimaryGeneratedColumn() id!: number

    @Column() name!: string
    @Column()  @Index() slug!: string
    @Column({ nullable: true, name: "img" }) image!: string
    @Column({ nullable: true }) location!: string
    @Column() owner!: string
    @Column({ nullable: true }) website!: string
    @Column({ nullable: true, type: "date" }) establishedOn!: Date
    @Column({ nullable: true }) employess!: string
    @Column({ nullable: true }) working_days!: string
    @Column({ default: 0 }) openings!: number
    @Column({ type: "simple-array",nullable:true }) gallery?: string[]
    @Column({ type: "simple-array", nullable: true })
    @Column({ type: "simple-array" }) skills?: string[]

    @BeforeInsert()
    generateSlug() {
        this.slug = Helpers.Slugify(this.name);
    }

}