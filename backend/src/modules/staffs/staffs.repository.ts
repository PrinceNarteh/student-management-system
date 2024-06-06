import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './schemas/staff.schema';

@Injectable()
export class StaffsRepo extends EntityRepository<StaffDocument> {
  constructor(@InjectModel(Staff.name) staffModel: Model<StaffDocument>) {
    super(staffModel);
  }
}
