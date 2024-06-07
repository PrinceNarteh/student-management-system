import { EntityRepository } from 'src/database/entity.repository';
import { Grade, GradeDocument } from './schemas/grade.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class GradeRepository extends EntityRepository<GradeDocument> {
  constructor(@InjectModel(Grade.name) gradeModel: Model<GradeDocument>) {
    super(gradeModel);
  }
}
