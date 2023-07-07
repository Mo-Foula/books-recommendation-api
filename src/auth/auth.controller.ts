import { Body, Controller, Optional, Post } from '@nestjs/common'
import { SignInUserDto } from './dto/sign-in-user.dto'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @Optional()
  create(@Body() signInUserDto: SignInUserDto) {
    return this.authService.signIn(signInUserDto.email, signInUserDto.password)
  }
}
