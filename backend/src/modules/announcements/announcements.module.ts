import { Module } from '@nestjs/common';
import { AnnouncementController } from './announcements.controller';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementRepository } from './announcements.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Announcement,
  AnnouncementSchema,
} from './schemas/announcement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Announcement.name, schema: AnnouncementSchema },
    ]),
  ],
  controllers: [AnnouncementController],
  providers: [AnnouncementsService, AnnouncementRepository],
})
export class AnnouncementsModule {}
