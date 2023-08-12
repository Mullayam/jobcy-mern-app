import { Entity, Column, Index, Unique, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm"
 
import { MoreInfo } from './more-info.js'
@Entity("members")
@Unique(["email","username"])
export class Member extends BaseEntity{
    @Column({ length: 26 })
    @OneToOne(() => MoreInfo)
    @JoinColumn()
    user_id!: number

    @Column({ length: 26, nullable: true })

    username?: string
    @Column({ length: 32, nullable: true })

    fullname?: string

    @Column({ length: 32, default: "default.png" })
    image?: string

    @Index() 
    email!: string

    @Column()
    password!: string

    @Column()
    phone?: boolean

    @Column({ type: 'simple-json', nullable: true })
    location?: {
        address1?: string
        address2?: string
        city?: string
        pincode?: number
        state?: string
        country?: string
    }

    @Column({ name: "account_type" })
    account?: string

    @Column({ type: 'simple-json', nullable: true })
    info?: {
        locationPreferences?: string[],
        currentJobProfie: string,

    }

    @Column()
    about_me?: string

    @Column({ name: "profile_status", default: "online", enum: ["online", "offline", "busy", "do not disturb"] })
    profileStatus?: string

    @Column({ default: false })
    status?: number

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedDate!: Date

}
 