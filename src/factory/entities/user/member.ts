import { Entity, Column, Index, Unique, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { MyListings } from "./myListings.js"
import { Notifications } from "./notifications.js"
import { AppliedJobs } from "../jobs/appliedJobs.js"



export enum UserStatus {
    ONLINE = 'online',
    OFFLINE = 'offline',
    BUSY = 'busy',
    DND = 'do-not-disturb',
}
export enum AccountType {
    USER = 'user',
    RECRUITER = 'recruiter',
}
const LocationObject = JSON.stringify({
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
})
@Entity("members")
@Unique(["email", "username"])
export class Member {

    @PrimaryGeneratedColumn("uuid")
    id!: number

    @Column({ length: 26, nullable: true })
    gid?: string

    @Column({ length: 26, nullable: true })
    username?: string

    @Column({ length: 32, nullable: true })
    fullname?: string

    @Column({ length: 32, default: "default.png" })
    image?: string

    @Column()
    @Index()
    email!: string

    @Column()
    password!: string

    @Column({ nullable: true })
    phone?: number

    @Column({
        type: 'simple-json', nullable: true, default: LocationObject
    })
    location?: {
        address1?: string
        address2?: string
        city?: string
        pincode?: number
        state?: string
        country?: string
    }

    @Column({ name: "account_type", default: [AccountType.USER], type: 'enum', enum: AccountType })
    account?: string

    @Column({ type: 'simple-json', nullable: true })
    info?: {
        [key: string]: any,
    }

    @Column({ nullable: true })
    about_me?: string

    @Column({ name: "profile_status", default: UserStatus.ONLINE, type: 'enum', enum: UserStatus })
    profileStatus?: string

    @Column({ default: false })
    status?: number

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedDate!: Date

    @OneToMany(() => MyListings, (myListings) => myListings.user)
    myListing!: MyListings[]


    @OneToMany(() => Notifications, (noti) => noti.user, { nullable: false })
    @JoinColumn()
    notifications!: Notifications[]

    @OneToMany(() => AppliedJobs, (applied_jobs) => applied_jobs.user, { nullable: false })
    @JoinColumn()
    appliedJobs!: AppliedJobs[]

    @OneToMany(() => AppliedJobs, (applied_jobs) => applied_jobs.posted_by, { nullable: false })
    @JoinColumn()
    appliedJobsPostedBy!: AppliedJobs[]

}

