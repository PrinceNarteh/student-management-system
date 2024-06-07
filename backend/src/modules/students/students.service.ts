import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentsRepository } from './students.repository';
import { StudentDocument } from './schemas/student.schema';
import { GradesService } from '../grades/grades.service';
import { CreateStudentDto } from './dtos/create-student.dto';
import { UpdateStudentDto } from './dtos/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    private readonly studentsRepo: StudentsRepository,
    private readonly gradesService: GradesService,
  ) {}

  async findAll(): Promise<StudentDocument[]> {
    return this.studentsRepo.findAll();
  }

  async findOne(id: string): Promise<StudentDocument> {
    const student = await this.studentsRepo.findById(id);
    if (!student) {
      throw new NotFoundException('student not found');
    }
    return student;
  }

  async create(createStudentDto: CreateStudentDto): Promise<StudentDocument> {
    const grade = await this.gradesService.findOne({
      id: createStudentDto.grade,
    });
    const student = await this.studentsRepo.create({
      ...createStudentDto,
      grade,
    });
    return student;
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<StudentDocument> {
    const student = await this.studentsRepo.findOneAndUpdate(
      { id },
      updateStudentDto,
    );
    if (!student) {
      throw new NotFoundException('student not foun');
    }
    return student;
  }

  async delete(id: string) {
    const isDeleted = await this.studentsRepo.delete({ id });
    return {
      message: isDeleted ? 'student deleted successfully' : 'student not found',
    };
  }
}
