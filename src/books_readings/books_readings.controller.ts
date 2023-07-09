import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common'
import { BooksReadingsService } from './books_readings.service'
import { CreateBooksReadingDto } from './dto/create-books_reading.dto'
import { UpdateBooksReadingDto } from './dto/update-books_reading.dto'
import { RequestExtended } from 'src/interfaces/request.interface.'

@Controller('books-readings')
export class BooksReadingsController {
  constructor(private readonly booksReadingsService: BooksReadingsService) {}

  @Post()
  create(
    @Body() createBooksReadingDto: CreateBooksReadingDto,
    @Req() request: RequestExtended,
  ) {
    const { userId } = request.user
    return this.booksReadingsService.create(createBooksReadingDto, userId)
  }

  @Get()
  findAll() {
    return this.booksReadingsService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksReadingsService.findOne(+id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBooksReadingDto: UpdateBooksReadingDto,
  ) {
    return this.booksReadingsService.update(+id, updateBooksReadingDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksReadingsService.remove(+id)
  }
}
