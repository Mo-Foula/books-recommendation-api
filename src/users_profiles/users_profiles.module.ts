import { Module } from '@nestjs/common'
import { UsersProfilesService } from './users_profiles.service'
import { UsersProfilesController } from './users_profiles.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersProfiles } from './entities/users_profiles.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UsersProfiles])],
  controllers: [UsersProfilesController],
  providers: [UsersProfilesService],
})
export class UsersProfilesModule {}
