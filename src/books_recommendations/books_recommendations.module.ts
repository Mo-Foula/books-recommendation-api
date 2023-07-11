import { Module } from '@nestjs/common'
import { BooksRecommendationsService } from './books_recommendations.service'
import { BooksRecommendationsController } from './books_recommendations.controller'
import { BooksModule } from 'src/books/books.module'
import { BooksReadingsModule } from 'src/books_readings/books_readings.module'
import { UsersBooksReadingsModule } from 'src/users_books_readings/users_books_readings.module'

@Module({
  imports: [BooksModule, BooksReadingsModule, UsersBooksReadingsModule],
  controllers: [BooksRecommendationsController],
  providers: [BooksRecommendationsService],
  exports: [BooksRecommendationsService],
})
export class BooksRecommendationsModule {}
