import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'
import { BooksService } from './books.service'
import { BooksController } from './books.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Book } from './entities/book.entity'
import { ClaimActions } from 'src/auth/claims/constants'
import {
  routesPaths,
  routesControllers,
} from 'src/constants/routes.paths.constants'
import { AuthorizationMiddlewareCreator } from 'src/middlewares/authorization'
import { RolesModule } from 'src/auth/roles/roles.module'
import { UsersModule } from 'src/auth/users/users.module'
import { UsersProfilesModule } from 'src/users_profiles/users_profiles.module'
import { AuthModule } from 'src/auth/auth.module'
import { AuthorsModule } from 'src/authors/authors.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([Book]),
    AuthorsModule,
    AuthModule,
    RolesModule,
    UsersModule,
    UsersProfilesModule,
  ],
  controllers: [BooksController],
  providers: [
    BooksService,
    // AuthService,
    // RolesService,
    // UsersService,
    // UsersProfilesService,
  ],
  exports: [BooksService],
})
export class BooksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        AuthorizationMiddlewareCreator(routesControllers.books.name, [
          ClaimActions.read,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.books.name],
        method: RequestMethod.ALL,
      })

    consumer
      .apply(
        AuthorizationMiddlewareCreator(routesControllers.books.name, [
          ClaimActions.create,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.books.name],
        method: RequestMethod.POST,
      })
  }
}
