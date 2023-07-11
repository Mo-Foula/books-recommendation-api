import {
  MiddlewareConsumer,
  Module,
  RequestMethod,
  forwardRef,
} from '@nestjs/common'
import { BooksReadingsService } from './books_readings.service'
import { BooksReadingsController } from './books_readings.controller'
import { AuthModule } from 'src/auth/auth.module'
import { BooksReadings } from './entities/books_readings.entity'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  routesControllers,
  routesPaths,
} from 'src/constants/routes.paths.constants'
import { ClaimActions } from 'src/auth/claims/constants'
import { AuthorizationMiddlewareCreator } from 'src/middlewares/authorization'
import { BooksModule } from 'src/books/books.module'
import { UsersProfilesModule } from 'src/users_profiles/users_profiles.module'
import { UsersBooksReadingsModule } from 'src/users_books_readings/users_books_readings.module'

@Module({
  imports: [
    TypeOrmModule.forFeature([BooksReadings]),
    AuthModule,
    BooksModule,
    UsersProfilesModule,
    forwardRef(() => UsersBooksReadingsModule),
  ],
  controllers: [BooksReadingsController],
  providers: [BooksReadingsService],
  exports: [BooksReadingsService],
})
export class BooksReadingsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        AuthorizationMiddlewareCreator(routesControllers.booksReadings.name, [
          ClaimActions.read,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.booksReadings.name],
        method: RequestMethod.GET,
      })

      .apply(
        AuthorizationMiddlewareCreator(routesControllers.booksReadings.name, [
          ClaimActions.create,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.booksReadings.name],
        method: RequestMethod.POST,
      })

      .apply(
        AuthorizationMiddlewareCreator(routesControllers.booksReadings.name, [
          ClaimActions.update,
        ]),
      )
      .forRoutes({
        path: routesPaths[routesControllers.booksReadings.name],
        method: RequestMethod.PUT,
      })
  }
}
