import { Book } from 'src/books/entities/book.entity'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'

export default class CalculateUserUniqueBookReadingsDto {
  user: UsersProfiles
  book: Book
}
