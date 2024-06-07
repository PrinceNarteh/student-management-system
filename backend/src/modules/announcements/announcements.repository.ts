import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'src/database/entity.repository';
import {
  Announcement,
  AnnouncementDocument,
} from './schemas/announcement.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AnnouncementRepository extends EntityRepository<AnnouncementDocument> {
  constructor(
    @InjectModel(Announcement.name)
    announcementModel: Model<AnnouncementDocument>,
  ) {
    super(announcementModel);
  }
}
