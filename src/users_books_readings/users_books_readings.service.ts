import { Inject, Injectable, forwardRef } from '@nestjs/common'
import CalculateUserUniqueBookReadingsDto from './dto/calculate_and_update_user_unique_book_readings.dto'
import { UsersBooksReadings } from './entities/users_books_reading.entity'
import { BooksReadingsService } from 'src/books_readings/books_readings.service'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PaginationDto } from 'src/constants/dto/pagination.dto'

@Injectable()
export class UsersBooksReadingsService {
  constructor(
    @InjectRepository(UsersBooksReadings)
    private usersBooksReadingsRepository: Repository<UsersBooksReadings>,
    @Inject(forwardRef(() => BooksReadingsService))
    private booksReadingsService: BooksReadingsService,
  ) {}
  async updateUserUniqueBookReadings(
    calculateUserUniqueBookReadings: CalculateUserUniqueBookReadingsDto,
  ) {
    const { user, book } = calculateUserUniqueBookReadings
    const { totalReadPages, uniqueReadPages } =
      await this.calculateUserUniqueBookReadings(
        calculateUserUniqueBookReadings,
      )
    return this.usersBooksReadingsRepository.upsert(
      {
        user,
        book,
        uniqueReadPages,
        totalReadPages,
      },
      ['book', 'user'],
    )
  }

  async calculateUserUniqueBookReadings(
    calculateUniqueAndTotalUserBookReadings: CalculateUserUniqueBookReadingsDto,
  ): Promise<{ uniqueReadPages: number; totalReadPages: number }> {
    const { user, book } = calculateUniqueAndTotalUserBookReadings
    const userBookReadings = await this.booksReadingsService.findAll({
      user,
      book,
    })

    // Using partial sum technique
    const readingsIndices = new Array(book.numberOfPages + 1).fill(0)
    for (const reading of userBookReadings) {
      const lastPage = reading.pagesCount + reading.firstPage - 1
      readingsIndices[reading.firstPage] += 1
      readingsIndices[lastPage + 1] -= 1
    }

    const pagesReadingsCount = new Array(book.numberOfPages + 1).fill(0)
    for (let i = 1; i <= book.numberOfPages; i++) {
      pagesReadingsCount[i] = pagesReadingsCount[i - 1] + readingsIndices[i]
    }
    const readPagesCount = pagesReadingsCount.reduce(
      (
        params: { uniqueReadPages: number; totalReadPages: number },
        currentValue: number,
      ) => {
        if (currentValue >= 1) ++params.uniqueReadPages
        params.totalReadPages += currentValue
        return params
      },
      { uniqueReadPages: 0, totalReadPages: 0 },
    )
    return readPagesCount
  }

  async getRecommendationsByMostReadUniquePages(
    pagination: PaginationDto = { page: 1, limit: 5 },
  ) {
    const result = await this.usersBooksReadingsRepository
      .createQueryBuilder('UsersBooksReadings')
      .leftJoinAndSelect('UsersBooksReadings.book', 'book')
      .leftJoinAndSelect('book.author', 'author')
      .select(['SUM(UsersBooksReadings.uniqueReadPages) as total_pages'])
      .addSelect('book.name')
      .addSelect('book.numberOfPages')
      .addSelect('author.name')
      .groupBy('UsersBooksReadings.book_id, book.id, author.id')
      .orderBy('total_pages', 'DESC')
      .limit(pagination.limit)
      .offset(pagination.limit * (pagination.page - 1))
      .getRawMany()

    return result.map((result) => {
      return {
        ...result,
        total_pages: parseInt(result.total_pages),
      }
    })
  }
}
