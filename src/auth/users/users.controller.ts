import { Body, Controller, Post } from '@nestjs/common'
import { CreateBookDto } from 'src/books/dto/create-book.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // create(@Body() createBookDto: CreateBookDto) {
  //   return this.usersService.createUser(createBookDto)
  // }
}
