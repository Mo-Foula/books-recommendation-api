import { Injectable } from '@nestjs/common';
import { CreateBooksReadingDto } from './dto/create-books_reading.dto';
import { UpdateBooksReadingDto } from './dto/update-books_reading.dto';

@Injectable()
export class BooksReadingsService {
  create(createBooksReadingDto: CreateBooksReadingDto) {
    return 'This action adds a new booksReading';
  }

  findAll() {
    return `This action returns all booksReadings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booksReading`;
  }

  update(id: number, updateBooksReadingDto: UpdateBooksReadingDto) {
    return `This action updates a #${id} booksReading`;
  }

  remove(id: number) {
    return `This action removes a #${id} booksReading`;
  }
}
