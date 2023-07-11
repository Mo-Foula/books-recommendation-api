import { Test, TestingModule } from '@nestjs/testing'
import { UsersBooksReadingsController } from './users_books_readings.controller'
import { UsersBooksReadingsService } from './users_books_readings.service'

describe('UsersBooksReadingsController', () => {
  let controller: UsersBooksReadingsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersBooksReadingsController],
      providers: [UsersBooksReadingsService],
    }).compile()

    controller = module.get<UsersBooksReadingsController>(
      UsersBooksReadingsController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
