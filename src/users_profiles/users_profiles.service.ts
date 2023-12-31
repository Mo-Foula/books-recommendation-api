import { Injectable } from '@nestjs/common'
import { SignUpUserDto } from 'src/auth/dto/sign-up-user.dto'
import { UsersProfiles } from './entities/users_profiles.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class UsersProfilesService {
  constructor(
    @InjectRepository(UsersProfiles)
    private usersProfilesRepository: Repository<UsersProfiles>,
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

  // update(id: number, updateUsersProfileDto: UpdateUsersProfileDto) {
  //   return `This action updates a #${id} usersProfile`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usersProfile`
  // }
}
