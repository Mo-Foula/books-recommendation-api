import { Controller, Get, Query } from '@nestjs/common'
import { BooksRecommendationsService } from './books_recommendations.service'

@Controller('books-recommendations')
export class BooksRecommendationsController {
  constructor(
    private readonly booksRecommendationsService: BooksRecommendationsService,
  ) {}

  @Get()
  getRecommendationsByMostRead(
    @Query() query: { limit: string; page: string },
  ) {
    const { limit, page } = query
    return this.booksRecommendationsService.getRecommendationsByMostRead({
      limit: parseInt(limit || '5'),
      page: parseInt(page || '1'),
    })
  }
}
