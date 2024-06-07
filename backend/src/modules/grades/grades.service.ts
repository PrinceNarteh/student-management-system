import { Injectable, NotFoundException } from '@nestjs/common';
import { GradeRepository } from './grades.repository';
import { GradeDocument } from './schemas/grade.schema';
import { IdDto } from 'src/common/dto/id.dto';
import { CreateGradeDto } from './dtos/create-grade.dto';
import { UpdateGradeDto } from './dtos/update-grade.dto';

@Injectable()
export class GradesService {
  constructor(private readonly gradeRepo: GradeRepository) {}

  async findAll(): Promise<GradeDocument[]> {
    return this.gradeRepo.findAll();
  }

  async findOne({ id }: IdDto): Promise<GradeDocument> {
    const grade = await this.gradeRepo.findById(id);
    if (!grade) {
      throw new NotFoundException('grade not found');
    }
    return grade;
  }

  async create(createGradeDto: CreateGradeDto): Promise<GradeDocument> {
    return this.gradeRepo.create(createGradeDto);
  }

  async update(
    id: string,
    updateGradeDto: UpdateGradeDto,
  ): Promise<GradeDocument> {
    const grade = await this.gradeRepo.findOneAndUpdate({ id }, updateGradeDto);
    if (!grade) {
      throw new NotFoundException('grade not found');
    }
    return grade;
  }

  async delete(id: string): Promise<{ message: string }> {
    const res = await this.gradeRepo.delete({ id });
    return {
      message: res ? 'grade deleted successfully' : 'grade not found',
    };
  }
}
