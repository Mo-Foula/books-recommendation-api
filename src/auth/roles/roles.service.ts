import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { Role } from './entities/role.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ClaimActions } from '../claims/constants'
import { arrayToObject } from 'src/utils/array.to.object.utils'

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  create(createRoleDto: CreateRoleDto) {
    return this.rolesRepository.create(createRoleDto)
  }

  findAll() {
    return `This action returns all roles`
  }

  findOne(id: number) {
    return `This action returns a #${id} role`
  }

  async findOneByRoleName(roleName: string): Promise<Role | undefined> {
    return await this.rolesRepository.findOne({
      where: {
        name: roleName,
      },
    })
  }

  async isUserAuthorizedForClaim(
    moduleName: string,
    actions: ClaimActions[],
    userId: number,
  ) {
    const claimActions = arrayToObject(actions)
    const isAuthorized = await this.rolesRepository.findOne({
      where: {
        users: {
          id: userId,
        },
        claims: {
          moduleName,
          ...claimActions,
        },
      },
    })

    return isAuthorized ? true : false
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.rolesRepository.update(id, updateRoleDto)
  }

  remove(id: number) {
    return `This action removes a #${id} role`
  }
}
