import { Injectable, Logger } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'
import { Book } from './entities/book.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  private readonly logger = new Logger(BooksService.name)

  async create(newBook: CreateBookDto) {
    this.logger.log('Adding new book')
    return this.booksRepository.create(newBook)
  }

  async findAll(): Promise<Book[]> {
    this.logger.log('Getting all books')
    return this.booksRepository.find()
  }

  async findOne(id: number): Promise<Book | null> {
    return this.booksRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id)
  }

  async update(id: number, updatedBook: UpdateBookDto) {
    return await this.booksRepository.update(id, updatedBook)
  }
}
