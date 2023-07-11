import { Module, forwardRef } from '@nestjs/common'
import { UsersBooksReadingsService } from './users_books_readings.service'
import { UsersBooksReadingsController } from './users_books_readings.controller'
import { UsersBooksReadings } from './entities/users_books_reading.entity'
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module'
import { BooksReadingsModule } from 'src/books_readings/books_readings.module'

@Module({
  imports: [
    forwardRef(() => BooksReadingsModule),
    TypeOrmModule.forFeature([UsersBooksReadings]),
  ],
  controllers: [UsersBooksReadingsController],
  providers: [UsersBooksReadingsService],
  exports: [UsersBooksReadingsService],
})
export class UsersBooksReadingsModule {}
