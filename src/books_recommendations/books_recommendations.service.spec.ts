import { Test, TestingModule } from '@nestjs/testing'
import { BooksRecommendationsService } from './books_recommendations.service'

describe('BooksRecommendationsService', () => {
  let service: BooksRecommendationsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksRecommendationsService],
    }).compile()

    service = module.get<BooksRecommendationsService>(
      BooksRecommendationsService,
    )
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
