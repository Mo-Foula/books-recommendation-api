import { Injectable } from '@nestjs/common'
import { CreateClaimDto } from './dto/create-claim.dto'
import { UpdateClaimDto } from './dto/update-claim.dto'
import { Claim } from './entities/claim.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Injectable()
export class ClaimsService {
  constructor(
    @InjectRepository(Claim)
    private claimsRepository: Repository<Claim>,
  ) {}

  async create(createClaimDto: CreateClaimDto) {
    return this.claimsRepository.create(createClaimDto)
  }

  findAll() {
    return `This action returns all claims`
  }

  findOne(id: number) {
    return `This action returns a #${id} claim`
  }

  async update(id: number, updateClaimDto: UpdateClaimDto) {
    return this.claimsRepository.update(id, updateClaimDto)
  }

  remove(id: number) {
    return `This action removes a #${id} claim`
  }
}
