import {
  Injectable,
  NestMiddleware,
  Type,
  UnauthorizedException,
  mixin,
} from '@nestjs/common'
import { NextFunction, request } from 'express'
import { AuthService } from 'src/auth/auth.service'
import { canPassAuthGuards, jwtConstants } from 'src/auth/auth.constants'
import { ClaimActions } from 'src/auth/claims/constants'
import { RequestExtended } from 'src/interfaces/request.interface.'
import { Request } from 'express'
import { JwtService } from '@nestjs/jwt'

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
    constructor(
      private readonly authService: AuthService,
      private jwtService: JwtService,
    ) {}

    private async authorizeClaims(userId: number) {
      const result = await this.authService.isRoleAuthorizedForClaim(
        moduleName,
        actions,
        userId,
      )
      return result
    }

    private async authorizeToken(token: string) {
      return await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      })
    }

    private extractTokenFromHeader(request: Request): string | undefined {
      const [type, token] = request.headers.authorization?.split(' ') ?? []
      return type === 'Bearer' ? token : undefined
    }

    async use(req: RequestExtended, res: Response, next: NextFunction) {
      if (canPassAuthGuards.indexOf(req.originalUrl) !== -1) return true
      const token = this.extractTokenFromHeader(req)
      if (!token) {
        throw new UnauthorizedException()
      }
      try {
        const payload = await this.authorizeToken(token)
        request['user'] = payload
        const authorizedClaims = await this.authorizeClaims(payload.userId)
        if (!authorizedClaims) {
          throw new UnauthorizedException()
        }
        next()
      } catch {
        throw new UnauthorizedException()
      }
    }
  }
  return mixin(AuthorizationMiddleware)
}
