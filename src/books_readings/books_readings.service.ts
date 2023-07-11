import { HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common'
import { CreateBooksReadingDto } from './dto/create-books_reading.dto'
import { BooksReadings } from './entities/books_readings.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BooksService } from 'src/books/books.service'
import { CustomRequestException } from 'src/exceptions/custom.request.exceptions'
import { UsersProfilesService } from 'src/users_profiles/users_profiles.service'
import { Book } from 'src/books/entities/book.entity'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'
import { UsersBooksReadingsService } from 'src/users_books_readings/users_books_readings.service'

@Injectable()
export class BooksReadingsService {
  constructor(
    @InjectRepository(BooksReadings)
    private booksReadingsRepository: Repository<BooksReadings>,
    private booksService: BooksService,
    private usersProfilesService: UsersProfilesService,
    @Inject(forwardRef(() => UsersBooksReadingsService))
    private usersBooksReadingsService: UsersBooksReadingsService,
  ) {}

  async create(createBooksReadingDto: CreateBooksReadingDto, userId: number) {
    const book = await this.booksService.findOne(createBooksReadingDto.book_id)
    if (!book) {
      throw new CustomRequestException(
        'Book does not exist',
        HttpStatus.BAD_REQUEST,
      )
    }

    const pagesCount =
      createBooksReadingDto.end_page - createBooksReadingDto.start_page + 1
    if (pagesCount > book.numberOfPages) {
      throw new CustomRequestException(
        'Number of read pages is more than book number of pages',
        HttpStatus.BAD_REQUEST,
      )
    }
    if (pagesCount <= 0) {
      throw new CustomRequestException(
        'Number of read pages must be a positive number',
        HttpStatus.BAD_REQUEST,
      )
    }

    const userProfile = await this.usersProfilesService.findOneByAuthId(userId)

    let result: BooksReadings | undefined
    try {
      result = await this.booksReadingsRepository.save({
        pagesCount,
        book,
        firstPage: createBooksReadingDto.start_page,
        user: userProfile,
      })
    } catch {
      throw new CustomRequestException('Could not create book reading', 422)
    }

    try {
      await this.usersBooksReadingsService.updateUserUniqueBookReadings({
        user: userProfile,
        book,
      })
    } catch {
      // Rollback
      this.booksReadingsRepository.delete(result?.id)
      throw new CustomRequestException('Could not update user reading', 422)
    }

    return result
  }

  async findAll(filter: { user?: UsersProfiles; book?: Book } = {}) {
    const { user, book } = filter
    const result = await this.booksReadingsRepository.find({
      where: {
        user: {
          id: user.id,
        },
        book: {
          id: book.id,
        },
      },
      relations: {
        user: true,
        book: true,
      },
    })
    return result
  }
}
