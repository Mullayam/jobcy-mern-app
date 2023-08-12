import { Entity, Column, Index, Unique, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany } from "typeorm"
import { MoreInfo } from './moreInfo.js'
import {Tokens} from './tokens.js'
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
    @PrimaryColumn()
    @OneToOne(() => MoreInfo, (more_info) => more_info.userId)
    @JoinColumn()
    userId!: number

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

    @Column()
    phone?: boolean

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
        locationPreferences?: string[],
        currentJobProfie: string,

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

    @OneToMany(()=>Tokens,(tokens)=>tokens.userId)
    tokens?:Tokens[]
}
