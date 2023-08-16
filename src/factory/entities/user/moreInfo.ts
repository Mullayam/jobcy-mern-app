import { Entity, Column, UpdateDateColumn, PrimaryGeneratedColumn, Index, JoinColumn, OneToOne } from "typeorm"
import { Member } from "./member.js"

@Entity("more_info")
export class MoreInfo {
    @PrimaryGeneratedColumn()
    id!: number
    
    @OneToOne(() => Member, (member) => member.id)
    @JoinColumn({foreignKeyConstraintName: "userId"})
    user!: Member

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
    languages?: string[]

    @Column({ type: "simple-array", nullable: true })
    skills?: string[]

    @Column({ name: "current_ctc", nullable: true })
    current_salary?: number

    @Column({ name: "expected_ctc", nullable: true })
    expected_salary?: number

    @Column({ name: "hourly_rate", nullable: true })
    perHourRate?: number

    @UpdateDateColumn()
    updatedDate!: Date

}