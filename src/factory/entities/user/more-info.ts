import { Entity, Column, OneToOne, JoinColumn } from "typeorm"
import { Member } from "./member.js"
@Entity({ name: "more-info" })
export class MoreInfo {
    @Column({ length: 26 })
    @OneToOne(() => Member, (member) => member.user_id)
    @JoinColumn()
    user_id!: Member

    @Column({ type: 'json', nullable: true })
    education?: {
        [key: string]: {
            [key: string]: string
        }
    }

    @Column({ type: 'json', nullable: true })
    experiences?: {
        [key: string]: {
            [key: string]: string
        }
    }

    @Column({ type: 'json', nullable: true })
    projects?: {
        [key: string]: {
            [key: string]: string
        }
    }

    @Column({ type: 'json', nullable: true })
    cv?: {
        [key: string]: {
            [key: string]: string
        }
    }

    @Column({ type: "simple-array", nullable: true })
    skills?: string[]

    @Column({ name: "current_ctc", nullable: true })
    current_salary?: number

    @Column({ name: "expected_ctc", nullable: true })
    expected_salary?: number

    @Column({ name: "hourly_rate", nullable: true })
    perHourRate?: number

}