import { Category } from 'src/categories/entities/category.entity'
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  numberOfPages: number

  @ManyToMany(() => Category)
  @JoinTable({
    name: 'books_categories',
  })
  categories: Category[]

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date
}
