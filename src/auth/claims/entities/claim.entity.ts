import { Role } from 'src/auth/roles/entities/role.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'

@Entity()
export class Claim {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  claimName: string

  @Column()
  moduleName: string

  @Column()
  read: boolean

  @Column()
  create: boolean

  @Column()
  update: boolean

  @Column()
  delete: boolean

  // TODO test this way
  @ManyToMany(() => Role)
  roles: Role[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
