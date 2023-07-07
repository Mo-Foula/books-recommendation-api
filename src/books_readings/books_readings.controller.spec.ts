import { Test, TestingModule } from '@nestjs/testing';
import { BooksReadingsController } from './books_readings.controller';
import { BooksReadingsService } from './books_readings.service';

describe('BooksReadingsController', () => {
  let controller: BooksReadingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksReadingsController],
      providers: [BooksReadingsService],
    }).compile();

    controller = module.get<BooksReadingsController>(BooksReadingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
