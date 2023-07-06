import { Injectable, NestMiddleware, Type, mixin } from '@nestjs/common'
import { NextFunction } from 'express'
import { AuthService } from 'src/auth/auth.service'
import { BooksService } from 'src/books/books.service'

// export function authorizationMiddleware(data: any) {
//   return (req: Request, res: Response, next: NextFunction) => {
//     console.log(data)
//     next()
//   }
// }

// @Injectable()
// class ASDASDSS implements NestMiddleware {
//   constructor(private readonly loggerService: LoggerService) {}

//   use(req: Request, res: Response, next: NextFunction) {
//     this.loggerService.log('Request received')
//     next()
//   }
// }

export function AuthorizationMiddlewareCreator(
  moduleName: string,
  actions: ClaimActions[],
): Type<NestMiddleware> {
  @Injectable()
  class AuthorizationMiddleware implements NestMiddleware {
    constructor(private readonly authService: AuthService) {}

    async use(req: Request, res: Response, next: NextFunction) {
      const role = ''
      const result = 2
      // await this.authService.isRoleAuthorizedForClaim(
      //   moduleName,
      //   actions,
      //   role,
      // )
      return result
    }
  }
  return mixin(AuthorizationMiddleware)
}

// @Injectable()
// export class AuthorizationMiddleware implements NestMiddleware {
//   constructor(
//     private readonly moduleName: string,
//     private readonly actions: ClaimActions[],
//     private readonly authService: AuthService,
//   ) {}

//   async use(req: Request, res: Response, next: NextFunction) {
//     const role = ''
//     const result = 2
//     // await this.authService.isRoleAuthorizedForClaim(moduleName, actions, role)
//     return result
//   }
// }
