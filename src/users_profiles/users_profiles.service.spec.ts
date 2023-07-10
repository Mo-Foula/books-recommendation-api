import { Test, TestingModule } from '@nestjs/testing'
import { UsersProfilesService } from './users_profiles.service'

describe('UsersProfilesService', () => {
  let service: UsersProfilesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersProfilesService],
    }).compile()

    service = module.get<UsersProfilesService>(UsersProfilesService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
