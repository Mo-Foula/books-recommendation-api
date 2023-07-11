import { Book } from 'src/books/entities/book.entity'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'

@Entity()
export class UsersBooksReadings {
  @PrimaryColumn()
  book_id: number

  @PrimaryColumn()
  user_id: number

  @ManyToOne(() => Book)
  @JoinColumn({ name: 'book_id' })
  book: Book

  @ManyToOne(() => UsersProfiles)
  @JoinColumn({ name: 'user_id' })
  user: UsersProfiles

  @Column()
  uniqueReadPages: number

  @Column()
  totalReadPages: number

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
