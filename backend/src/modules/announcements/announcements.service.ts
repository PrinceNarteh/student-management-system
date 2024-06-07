import { Injectable, NotFoundException } from '@nestjs/common';
import { AnnouncementRepository } from './announcements.repository';
import { AnnouncementDocument } from './schemas/announcement.schema';
import { IdDto } from 'src/common/dto/id.dto';
import { CreateAnnouncementDto } from './dtos/create-announcement.dto';
import { UpdateAnnouncementDto } from './dtos/update-announcement.dto';

@Injectable()
export class AnnouncementsService {
  constructor(private readonly announcementRepo: AnnouncementRepository) {}

  async findAll(): Promise<AnnouncementDocument[]> {
    return this.announcementRepo.findAll();
  }

  async findOne({ id }: IdDto): Promise<AnnouncementDocument> {
    const announcement = await this.announcementRepo.findById(id);
    if (!announcement) {
      throw new NotFoundException('announcement not found');
    }
    return announcement;
  }

  async create(
    createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<AnnouncementDocument> {
    return this.announcementRepo.create(createAnnouncementDto);
  }

  async update(
    id: string,
    updateAnnouncementDto: UpdateAnnouncementDto,
  ): Promise<AnnouncementDocument> {
    const announcement = await this.announcementRepo.findOneAndUpdate(
      { id },
      updateAnnouncementDto,
    );
    if (!announcement) {
      throw new NotFoundException('announcement not found');
    }
    return announcement;
  }

  async delete(id: string): Promise<{ message: string }> {
    const res = await this.announcementRepo.delete({ id });
    return {
      message: res
        ? 'announcement deleted successfully'
        : 'announcement not found',
    };
  }
}
