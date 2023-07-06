import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly logger = new Logger(UsersService.name)

  async create(newUser: any) {
    this.logger.log('Adding new book')
    return this.usersRepository.create(newUser)
  }

  async findAll(): Promise<User[]> {
    this.logger.log('Getting all books')
    return this.usersRepository.find()
  }

  async findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id })
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ email })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async update(id: number, updatedUser: any) {
    return await this.usersRepository.update(id, updatedUser)
  }
}
