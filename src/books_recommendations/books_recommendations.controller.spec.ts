import { Test, TestingModule } from '@nestjs/testing'
import { BooksRecommendationsController } from './books_recommendations.controller'
import { BooksRecommendationsService } from './books_recommendations.service'

describe('BooksRecommendationsController', () => {
  let controller: BooksRecommendationsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksRecommendationsController],
      providers: [BooksRecommendationsService],
    }).compile()

    controller = module.get<BooksRecommendationsController>(
      BooksRecommendationsController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
