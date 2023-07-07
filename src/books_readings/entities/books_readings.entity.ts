import { Book } from 'src/books/entities/book.entity'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class BooksReadings {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Book)
  @JoinColumn()
  book: Book

  @ManyToOne(() => UsersProfiles)
  @JoinColumn()
  user: UsersProfiles

  @Column()
  firstPage: number

  @Column()
  pagesCount: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
