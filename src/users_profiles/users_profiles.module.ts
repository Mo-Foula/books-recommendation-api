import { Module } from '@nestjs/common'
import { UsersProfilesService } from './users_profiles.service'
import { UsersProfilesController } from './users_profiles.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersProfiles } from './entities/users_profiles.entity'
import { UsersModule } from 'src/auth/users/users.module'

@Module({
  imports: [TypeOrmModule.forFeature([UsersProfiles]), UsersModule],
  controllers: [UsersProfilesController],
  providers: [UsersProfilesService],
  exports: [UsersProfilesService],
})
export class UsersProfilesModule {}
