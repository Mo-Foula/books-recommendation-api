import { Injectable, Logger } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from './entities/user.entity'
import { Role } from '../roles/entities/role.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  private readonly logger = new Logger(UsersService.name)

  async create({
    email,
    password,
    phone,
    role,
  }: {
    email: string
    phone: string
    password: string
    role: Role
  }): Promise<User> {
    this.logger.log('Adding new auth user')
    return await this.usersRepository.save({
      email,
      phone,
      password,
      role,
    })
  }

  async findAll(): Promise<User[]> {
    this.logger.log('Getting all books')
    return this.usersRepository.find()
  }

  async findOneById(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id })
  }

  async findOneByEmailOrPhone({
    email,
    phone,
  }: {
    email?: string
    phone?: string
  }): Promise<User | null> {
    return this.usersRepository.findOneBy({ email, phone })
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id)
  }

  async update(id: number, updatedUser: any) {
    return await this.usersRepository.update(id, updatedUser)
  }
}
