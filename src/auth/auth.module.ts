import { MiddlewareConsumer, Module } from '@nestjs/common'
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
import { RolesService } from './roles/roles.service'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'
import { UsersProfilesService } from 'src/users_profiles/users_profiles.service'
import { AuthorizationMiddlewareCreator } from 'src/middlewares/authorization'
import { ClaimActions } from 'src/auth/claims/constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([UsersProfiles]),
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
    UsersProfilesService,
    RolesService,
    AuthService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
  controllers: [AuthController],
})
export class AuthModule {
  // constructor(private readonly usersService: UsersService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddlewareCreator('books', [ClaimActions.read]))
      .forRoutes('/books')
    // .exclude('/auth')
    // .forRoutes('*')
  }
}
