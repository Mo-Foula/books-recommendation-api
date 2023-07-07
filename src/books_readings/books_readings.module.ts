import { Module } from '@nestjs/common';
import { BooksReadingsService } from './books_readings.service';
import { BooksReadingsController } from './books_readings.controller';

@Module({
  controllers: [BooksReadingsController],
  providers: [BooksReadingsService]
})
export class BooksReadingsModule {}
