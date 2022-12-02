import { PartialType } from '@nestjs/mapped-types';
import { CreateNestOneDto } from './create-nest-one.dto';

export class UpdateNestOneDto extends PartialType(CreateNestOneDto) {}
