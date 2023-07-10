import { Controller, Get } from '@nestjs/common'
import { BooksRecommendationsService } from './books_recommendations.service'

@Controller('books-recommendations')
export class BooksRecommendationsController {
  constructor(
    private readonly booksRecommendationsService: BooksRecommendationsService,
  ) {}

  @Get()
  getRecommendationsByMostRead() {
    return this.booksRecommendationsService.getRecommendationsByMostRead()
  }
}
