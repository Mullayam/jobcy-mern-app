import { Entity, Column, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, ManyToOne } from "typeorm"
import { Member } from "./member.js"
@Entity("my_listings")

export class MyListings {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    jobId!: string

    @CreateDateColumn({ nullable: true })
    appliedOn!: Date

    @Column({ default: false })
    isApplied!: boolean

    @Column({ default: false })
    isBookmarked!: boolean


    @ManyToOne(() => Member, (member) => member.myListing)
    @JoinColumn({ name: "userId", foreignKeyConstraintName: "mylisting_userId_fk", referencedColumnName: "userId" })
    user!: any

}
