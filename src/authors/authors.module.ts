import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { AuthorsService } from './authors.service'
import { AuthorsController } from './authors.controller'
import { Author } from './entities/author.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClaimActions } from 'src/auth/claims/constants'
import {
  routesControllers,
  routesPaths,
} from 'src/constants/routes.paths.constants'
import { AuthorizationMiddlewareCreator } from 'src/middlewares/authorization'
import { AuthModule } from 'src/auth/auth.module'

@Module({
  imports: [TypeOrmModule.forFeature([Author]), AuthModule],
  controllers: [AuthorsController],
  providers: [AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        AuthorizationMiddlewareCreator(routesControllers.authors.name, [
          ClaimActions.read,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.authors.name],
        method: RequestMethod.ALL,
      })

    consumer
      .apply(
        AuthorizationMiddlewareCreator(routesControllers.authors.name, [
          ClaimActions.create,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.authors.name],
        method: RequestMethod.POST,
      })
  }
}
