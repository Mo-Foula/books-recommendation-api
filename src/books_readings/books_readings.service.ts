import { HttpStatus, Injectable } from '@nestjs/common'
import { CreateBooksReadingDto } from './dto/create-books_reading.dto'
import { BooksReadings } from './entities/books_readings.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BooksService } from 'src/books/books.service'
import { CustomRequestException } from 'src/exceptions/custom.request.exceptions'
import { UsersProfilesService } from 'src/users_profiles/users_profiles.service'

@Injectable()
export class BooksReadingsService {
  constructor(
    @InjectRepository(BooksReadings)
    private BooksReadingsRepository: Repository<BooksReadings>,
    private booksService: BooksService,
    private usersProfilesService: UsersProfilesService,
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

    return this.BooksReadingsRepository.save({
      pagesCount,
      book,
      firstPage: createBooksReadingDto.start_page,
      user: userProfile,
    })
  }

  async findAll() {
    const result = await this.BooksReadingsRepository.createQueryBuilder(
      'booksRecommendations',
    )
      .select('booksRecommendations.number_of_pages')
      // .addSelect('COUNT(entity.column2)', 'count')
      .groupBy('booksRecommendations.id')
      .getRawMany()
    return result
  }

  async getRecommendationsByMostRead() {
    const result = await this.BooksReadingsRepository.createQueryBuilder(
      'BooksReadings',
    )
      .leftJoinAndSelect('BooksReadings.book', 'book')
      .leftJoinAndSelect('book.author', 'author')
      .select(['SUM(BooksReadings.pages_count) as total_pages'])
      .addSelect('book.name')
      .addSelect('book.numberOfPages')
      .addSelect('author.name')
      .groupBy('BooksReadings.book_id, book.id, author.id')
      .orderBy('total_pages', 'DESC')
      .limit(5)
      .getRawMany()
    return result.map((result) => {
      return {
        ...result,
        total_pages: parseInt(result.total_pages),
      }
    })
    // const result = await this.BooksReadingsRepository.createQueryBuilder(
    //   'books_readings',
    // )
    //   // .select('*')
    //   .addSelect('book.name')
    //   .addSelect('book.numberOfPages')
    //   .addSelect('SUM(books_readings.pagesCount)', 'total_pages')
    //   .groupBy('books_readings.book_id, book.id, books_readings.id')
    //   .orderBy('total_pages', 'DESC')
    //   .take(5)
    //   .leftJoin('books_readings.book', 'book')
    //   .getMany()
    // return result
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} booksReading`
  // }

  // update(id: number, updateBooksReadingDto: UpdateBooksReadingDto) {
  //   return `This action updates a #${id} booksReading`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} booksReading`
  // }
}
