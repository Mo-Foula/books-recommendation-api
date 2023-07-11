import { PartialType } from '@nestjs/mapped-types'
import { CreateUsersBooksReadingDto } from './create-users_books_reading.dto'

export class UpdateUsersBooksReadingDto extends PartialType(
  CreateUsersBooksReadingDto,
) {
  userId: number
  bookId: number
  uniqueReadPages: number
}
