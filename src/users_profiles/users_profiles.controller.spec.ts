import { Test, TestingModule } from '@nestjs/testing';
import { UsersProfilesController } from './users_profiles.controller';
import { UsersProfilesService } from './users_profiles.service';

describe('UsersProfilesController', () => {
  let controller: UsersProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersProfilesController],
      providers: [UsersProfilesService],
    }).compile();

    controller = module.get<UsersProfilesController>(UsersProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
