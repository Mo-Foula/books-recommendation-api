import { Injectable, NestMiddleware, Type, mixin } from '@nestjs/common'
import { NextFunction } from 'express'
import { AuthService } from 'src/auth/auth.service'

function AuthenticationMiddlewareCreator(): Type<NestMiddleware> {
  @Injectable()
  class AuthenticationMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

    async use(req: Request, res: Response, next: NextFunction) {
      return 's'
    }
  }
  return mixin(AuthenticationMiddleware)
}
