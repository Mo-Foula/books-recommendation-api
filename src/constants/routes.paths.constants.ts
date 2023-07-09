import { AuthController } from 'src/auth/auth.controller'
import { ClaimsController } from 'src/auth/claims/claims.controller'
import { RolesController } from 'src/auth/roles/roles.controller'
import { UsersController } from 'src/auth/users/users.controller'
import { AuthorsController } from 'src/authors/authors.controller'
import { BooksController } from 'src/books/books.controller'
import { BooksReadingsController } from 'src/books_readings/books_readings.controller'
import { UsersProfiles } from 'src/users_profiles/entities/users_profiles.entity'
import { ControllerUtils } from 'src/utils/controller.utils'

// const routesControllers = [
//   {
//     name: 'books',
//     controller: BooksController,
//   },
//   {
//     name: 'auth',
//     controller: AuthController,
//   },
//   {
//     name: 'users',
//     controller: UsersController,
//   },
//   {
//     name: 'usersProfiles',
//     controller: UsersProfiles,
//   },
//   {
//     name: 'roles',
//     controller: RolesController,
//   },
//   {
//     name: 'claims',
//     controller: ClaimsController,
//   },
//   {
//     name: 'booksReadings',
//     controller: BooksReadingsController,
//   },
// ]

export const routesControllers = {
  books: {
    name: 'books',
    controller: BooksController,
  },
  auth: {
    name: 'auth',
    controller: AuthController,
  },
  users: {
    name: 'users',
    controller: UsersController,
  },
  usersProfiles: {
    name: 'usersProfiles',
    controller: UsersProfiles,
  },
  roles: {
    name: 'roles',
    controller: RolesController,
  },
  claims: {
    name: 'claims',
    controller: ClaimsController,
  },
  booksReadings: {
    name: 'booksReadings',
    controller: BooksReadingsController,
  },
  authors: {
    name: 'authors',
    controller: AuthorsController,
  },
}

export const routesPaths =
  ControllerUtils.getMultiplePathsFromControllers(routesControllers)
