import { Inject, Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { arrayToObject } from 'src/utils/array.to.object'
import { Repository } from 'typeorm'
import { Role } from './roles/entities/role.entity'
import { UsersService } from './users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async isRoleAuthorizedForClaim(
    moduleName: string,
    actions: ClaimActions[],
    role: Role,
  ) {
    const claimActions = arrayToObject(actions)

    const isAuthorized = await this.rolesRepository.findOne({
      where: {
        id: role.id,
        claims: {
          moduleName,
          ...claimActions,
        },
      },
    })

    return isAuthorized
  }

  async authenticateUser() {
    return 's'
  }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findOneByEmail(email)
    // { password: '', id: '', email: '' }
    if (user?.password !== pass) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user.id, username: user.email }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }
}
