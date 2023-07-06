import { Claim } from 'src/auth/claims/entities/claim.entity'
import { User } from 'src/auth/users/entities/user.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm'

@Entity()
export class Role {
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => User, (user) => user.role)
  users: User[]

  @ManyToMany(() => Claim)
  @JoinTable({
    name: 'roles_claims',
  })
  claims: Claim[]
}
