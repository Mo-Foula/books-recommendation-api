import { PartialType } from '@nestjs/mapped-types';
import { CreateBooksReadingDto } from './create-books_reading.dto';

export class UpdateBooksReadingDto extends PartialType(CreateBooksReadingDto) {}
