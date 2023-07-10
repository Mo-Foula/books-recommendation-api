import { Test, TestingModule } from '@nestjs/testing'
import { BooksReadingsService } from './books_readings.service'

describe('BooksReadingsService', () => {
  let service: BooksReadingsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BooksReadingsService],
    }).compile()

    service = module.get<BooksReadingsService>(BooksReadingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
