import { Injectable } from '@nestjs/common';
import { CreateNestOneDto } from './dto/create-nest-one.dto';
import { UpdateNestOneDto } from './dto/update-nest-one.dto';

@Injectable()
export class NestOneService {
  create(createNestOneDto: CreateNestOneDto) {
    return 'This action adds a new nestOne';
  }

  findAll() {
    return `This action returns all nestOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nestOne`;
  }

  update(id: number, updateNestOneDto: UpdateNestOneDto) {
    return `This action updates a #${id} nestOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} nestOne`;
  }
}
