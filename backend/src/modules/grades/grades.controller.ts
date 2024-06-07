import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GradesService } from './grades.service';
import { IdDto } from 'src/common/dto/id.dto';
import { GradeDocument } from './schemas/grade.schema';
import { CreateGradeDto } from './dtos/create-grade.dto';
import { UpdateGradeDto } from './dtos/update-grade.dto';

@Controller('grades')
export class GradeController {
  constructor(private readonly gradesService: GradesService) {}

  @Get()
  async findAll() {
    return this.gradesService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: IdDto): Promise<GradeDocument> {
    return this.gradesService.findOne({ id });
  }

  @Post()
  async create(@Body() createGradeDto: CreateGradeDto): Promise<GradeDocument> {
    return this.gradesService.create(createGradeDto);
  }

  @Patch(':id')
  async update(
    @Param() { id }: IdDto,
    @Body() updateGradeDto: UpdateGradeDto,
  ): Promise<GradeDocument> {
    return this.gradesService.update(id, updateGradeDto);
  }

  @Delete(':id')
  async delete(@Param() { id }: IdDto) {
    return this.gradesService.delete(id);
  }
}
