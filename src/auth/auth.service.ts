import { Injectable, UnauthorizedException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { arrayToObject } from 'src/utils/array.to.object.utils'
import { Repository } from 'typeorm'
import { Role } from './roles/entities/role.entity'
import { UsersService } from './users/users.service'
import { JwtService } from '@nestjs/jwt'
import { SignInUserDto } from './dto/sign-in-user.dto'
import { SignUpUserDto } from './dto/sign-up-user.dto'
import { RolesService } from './roles/roles.service'
import { UsersProfilesService } from 'src/users_profiles/users_profiles.service'
import * as bcrypt from 'bcrypt'
import * as dotenv from 'dotenv'
import { ClaimActions } from 'src/auth/claims/constants'

dotenv.config()

@Injectable()
export class AuthService {
  constructor(
    private rolesService: RolesService,
    private usersService: UsersService,
    private usersProfilesService: UsersProfilesService,
    private jwtService: JwtService,
  ) {}

  private encryptionSalt = 10 //process.env.ENCRYPTION_SALT

  async isRoleAuthorizedForClaim(
    moduleName: string,
    actions: ClaimActions[],
    userId: number,
  ) {
    if (actions.length === 0) return true
    return this.rolesService.isUserAuthorizedForClaim(
      moduleName,
      actions,
      userId,
    )
  }

  async login(signInUserDto: SignInUserDto) {
    const { email, password } = signInUserDto
    const user = await this.usersService.findOneByEmailOrPhone({ email })

    if (!user) {
      throw new UnauthorizedException()
    }

    const correctPassword = await this.comparePassword(password, user?.password)

    if (!correctPassword) {
      throw new UnauthorizedException()
    }
    const payload = { userId: user.id, username: user.email }
    return {
      access_token: await this.jwtService.signAsync(payload),
    }
  }

  private async encryptPassword(password: string) {
    return await bcrypt.hash(password, this.encryptionSalt)
  }

  private async comparePassword(password: string, savedPassword: string) {
    return await bcrypt.compare(password, savedPassword)
  }

  async registerUser(signUpUserDto: SignUpUserDto) {
    const { email, password, phone } = signUpUserDto

    const existingUser = await this.usersService.findOneByEmailOrPhone({
      email,
      phone,
    })

    if (existingUser) {
      throw new UnauthorizedException() // TODO change error type
    }

    const hashedPassword = await this.encryptPassword(password)

    const userRole = await this.rolesService.findOneByRoleName('reader')
    const newAuthUser = await this.usersService.create({
      email,
      phone,
      password: hashedPassword,
      role: userRole,
    })
    const newUser = await this.usersProfilesService.create(
      signUpUserDto,
      newAuthUser.id,
    )
    delete newUser.authUser
    delete newUser.password
    return newUser
  }

  // async signup(signUpUserDto: SignUpUserDto) {
  //   const {
  //     birthDate,
  //     email,
  //     firstName,
  //     gender,
  //     lastName,
  //     password,
  //     phone,
  //     address,
  //   } = signUpUserDto

  //   const user = await this.usersService.findOneByEmailOrPhone({ email, phone })
  //   if (user?.password !== password) {
  //     throw new UnauthorizedException()
  //   }
  //   const payload = { sub: user.id, username: user.email }
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   }
  // }
}
