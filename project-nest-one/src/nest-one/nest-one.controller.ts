import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NestOneService } from './nest-one.service';
import { CreateNestOneDto } from './dto/create-nest-one.dto';
import { UpdateNestOneDto } from './dto/update-nest-one.dto';

@Controller('nest-one')
export class NestOneController {
  constructor(private readonly nestOneService: NestOneService) {}

  @Post()
  create(@Body() createNestOneDto: CreateNestOneDto) {
    return this.nestOneService.create(createNestOneDto);
  }

  @Get()
  findAll() {
    return this.nestOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNestOneDto: UpdateNestOneDto) {
    return this.nestOneService.update(+id, updateNestOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestOneService.remove(+id);
  }
}
