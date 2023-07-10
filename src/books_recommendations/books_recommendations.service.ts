import { Injectable } from '@nestjs/common'
import { BooksService } from 'src/books/books.service'
import { BooksReadingsService } from 'src/books_readings/books_readings.service'

@Injectable()
export class BooksRecommendationsService {
  constructor(
    private readonly booksService: BooksService,
    private readonly booksReadingsService: BooksReadingsService,
  ) {}
  async getRecommendationsByMostRead() {
    return this.booksReadingsService.getRecommendationsByMostRead()
  }
}
