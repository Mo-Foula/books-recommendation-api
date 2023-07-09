import { HttpStatus, Injectable, Logger } from '@nestjs/common'
import { CreateBookDto } from './dto/create-book.dto'
import { UpdateBookDto } from './dto/update-book.dto'
import { Book } from './entities/book.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { AuthorsService } from 'src/authors/authors.service'
import { CustomRequestException } from 'src/exceptions/custom.request.exceptions'

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    private readonly authorsService: AuthorsService,
  ) {}

  private readonly logger = new Logger(BooksService.name)

  async create(newBook: CreateBookDto) {
    this.logger.log('Adding new book')
    const author = await this.authorsService.findOne(newBook.authorId)
    if (!author) {
      throw new CustomRequestException(
        'Author does not exist',
        HttpStatus.BAD_REQUEST,
      )
    }
    return this.booksRepository.save({
      ...newBook,
      author,
    })
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
