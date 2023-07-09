import { Injectable } from '@nestjs/common'
import { CreateUsersProfileDto } from './dto/create-users_profile.dto'
import { UpdateUsersProfileDto } from './dto/update-users_profile.dto'
import { SignUpUserDto } from 'src/auth/dto/sign-up-user.dto'
import { UsersProfiles } from './entities/users_profiles.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UsersService } from 'src/auth/users/users.service'

@Injectable()
export class UsersProfilesService {
  constructor(
    @InjectRepository(UsersProfiles)
    private usersProfilesRepository: Repository<UsersProfiles>,
    private usersService: UsersService,
  ) {}

  async create(signUpUserDto: SignUpUserDto, authUserId: number) {
    return await this.usersProfilesRepository.save({
      ...signUpUserDto,
      authUser: {
        id: authUserId,
      },
    })
  }

  findAll() {
    return `This action returns all usersProfiles`
  }

  findOne(id: number) {
    return `This action returns a #${id} usersProfile`
  }

  async findOneByAuthId(id: number) {
    return this.usersProfilesRepository.findOneBy({
      authUser: {
        id,
      },
    })
  }

  update(id: number, updateUsersProfileDto: UpdateUsersProfileDto) {
    return `This action updates a #${id} usersProfile`
  }

  remove(id: number) {
    return `This action removes a #${id} usersProfile`
  }
}
