import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentDocument } from './schemas/student.schema';
import { IdDto } from 'src/common/dto/id.dto';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';

@Controller('controller')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  async findAll(): Promise<StudentDocument[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: IdDto): Promise<StudentDocument> {
    return this.studentsService.findOne(id);
  }

  @Post()
  async create(
    @Body() createStudentDto: CreateStudentDto,
  ): Promise<StudentDocument> {
    return this.studentsService.create(createStudentDto);
  }

  @Patch(':id')
  async update(
    @Param() { id }: IdDto,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<StudentDocument> {
    return this.studentsService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param() { id }: IdDto): Promise<{ message: string }> {
    return this.studentsService.delete(id);
  }
}
