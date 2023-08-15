import { Entity, Column, Index, Unique, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, PrimaryColumn, OneToMany, } from "typeorm"

import { Tokens } from './tokens.js'
import { MyListings } from "./myListings.js"
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

    @Column({ nullable: true })
   
    @JoinColumn({ name: "tokens", foreignKeyConstraintName: "tokens_userId_fk", referencedColumnName: "userId" })
    tokens?: number

    @OneToMany(() => MyListings, (ml) => ml.userId, { nullable: false })
    @JoinColumn({ name: "myListings", foreignKeyConstraintName: "mylisting_userId_fk", referencedColumnName: "userId" })
    myListings?: MyListings[]
}
