import { Test, TestingModule } from '@nestjs/testing'
import { UsersBooksReadingsService } from './users_books_readings.service'

describe('UsersBooksReadingsService', () => {
  let service: UsersBooksReadingsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersBooksReadingsService],
    }).compile()

    service = module.get<UsersBooksReadingsService>(UsersBooksReadingsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
