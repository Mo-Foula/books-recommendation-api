import { User } from 'src/auth/users/entities/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class UsersProfiles {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column()
  gender: string

  @Column()
  address: string

  @Column({ type: 'date' })
  birthDate: Date

  @OneToOne(() => User)
  @JoinColumn()
  authUser: User

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
