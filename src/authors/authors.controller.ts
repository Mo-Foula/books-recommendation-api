import { Controller, Get, Post, Body, Param } from '@nestjs/common'
import { AuthorsService } from './authors.service'
import { CreateAuthorDto } from './dto/create-author.dto'

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto)
  }

  @Get()
  findAll() {
    return this.authorsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne(+id)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthorDto: UpdateAuthorDto) {
  //   return this.authorsService.update(+id, updateAuthorDto)
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authorsService.remove(+id)
  // }
}
