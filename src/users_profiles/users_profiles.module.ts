import { Module } from '@nestjs/common';
import { UsersProfilesService } from './users_profiles.service';
import { UsersProfilesController } from './users_profiles.controller';

@Module({
  controllers: [UsersProfilesController],
  providers: [UsersProfilesService]
})
export class UsersProfilesModule {}
