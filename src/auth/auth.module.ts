import { Module } from '@nestjs/common'
import { RolesModule } from './roles/roles.module'
import { ClaimsModule } from './claims/claims.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { APP_GUARD } from '@nestjs/core'
import { AuthGuard } from './auth.guard'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from './roles/entities/role.entity'
import { UsersService } from './users/users.service'
import { User } from './users/entities/user.entity'

@Module({
  imports: [
    // UsersModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Role]),
    RolesModule,
    ClaimsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiry },
    }),
  ],
  providers: [
    UsersService,
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {
  // constructor(private readonly usersService: UsersService) {}
}
