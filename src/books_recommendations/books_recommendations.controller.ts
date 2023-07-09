import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { BooksRecommendationsService } from './books_recommendations.service'
import { CreateBooksRecommendationDto } from './dto/create-books_recommendation.dto'
import { UpdateBooksRecommendationDto } from './dto/update-books_recommendation.dto'

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
