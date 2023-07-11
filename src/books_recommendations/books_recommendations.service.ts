import { Injectable } from '@nestjs/common'
import { PaginationDto } from 'src/constants/dto/pagination.dto'
import { UsersBooksReadingsService } from 'src/users_books_readings/users_books_readings.service'

@Injectable()
export class BooksRecommendationsService {
  constructor(
    private readonly usersBooksReadingsService: UsersBooksReadingsService,
  ) {}
  async getRecommendationsByMostRead(paginationDto: PaginationDto) {
    return this.usersBooksReadingsService.getRecommendationsByMostReadUniquePages(
      paginationDto,
    )
  }
}
