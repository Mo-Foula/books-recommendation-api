import { Injectable } from '@nestjs/common';
import { CreateUsersProfileDto } from './dto/create-users_profile.dto';
import { UpdateUsersProfileDto } from './dto/update-users_profile.dto';

@Injectable()
export class UsersProfilesService {
  create(createUsersProfileDto: CreateUsersProfileDto) {
    return 'This action adds a new usersProfile';
  }

  findAll() {
    return `This action returns all usersProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersProfile`;
  }

  update(id: number, updateUsersProfileDto: UpdateUsersProfileDto) {
    return `This action updates a #${id} usersProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersProfile`;
  }
}
