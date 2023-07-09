import { Module } from '@nestjs/common'
import { RolesModule } from './roles/roles.module'
import { ClaimsModule } from './claims/claims.module'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './auth.constants'
import { UsersProfilesModule } from 'src/users_profiles/users_profiles.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [
    UsersProfilesModule,
    UsersModule,
    RolesModule,
    ClaimsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiry },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
