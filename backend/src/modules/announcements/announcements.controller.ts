import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { AnnouncementDocument } from './schemas/announcement.schema';
import { IdDto } from 'src/common/dto/id.dto';
import { CreateAnnouncementDto } from './dtos/create-announcement.dto';
import { UpdateAnnouncementDto } from './dtos/update-announcement.dto';

@Controller('announcements')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementsService) {}

  @Get()
  async findAll(): Promise<AnnouncementDocument[]> {
    return this.announcementService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: IdDto): Promise<AnnouncementDocument> {
    return this.announcementService.findOne({ id });
  }

  @Post()
  async create(
    @Body() createAnnouncementDto: CreateAnnouncementDto,
  ): Promise<AnnouncementDocument> {
    return this.announcementService.create(createAnnouncementDto);
  }

  @Patch(':id')
  async update(
    @Param() { id }: IdDto,
    @Body() updateAnnouncementDto: UpdateAnnouncementDto,
  ): Promise<UpdateAnnouncementDto> {
    return this.announcementService.update(id, updateAnnouncementDto);
  }

  @Delete(':id')
  async delete(@Param() { id }: IdDto): Promise<{ message: string }> {
    return this.announcementService.delete(id);
  }
}
