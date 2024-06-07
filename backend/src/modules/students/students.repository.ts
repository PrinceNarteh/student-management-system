import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'src/database/entity.repository';
import { Student, StudentDocument } from './schemas/student.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class StudentsRepository extends EntityRepository<StudentDocument> {
  constructor(@InjectModel(Student.name) studentModel: Model<StudentDocument>) {
    super(studentModel);
  }
}
