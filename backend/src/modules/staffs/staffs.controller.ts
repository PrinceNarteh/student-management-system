import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IdDto } from 'src/common/dto/id.dto';
import { StaffsService } from './staffs.service';
import { StaffDocument } from './schemas/staff.schema';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { CreateStaffDto } from './dto/create-staff.dto';

@Controller('staffs')
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}

  @Get()
  async findAll() {
    return this.staffsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: IdDto): Promise<StaffDocument> {
    return this.staffsService.findOneById(id);
  }

  @Post()
  async create(@Body() createStaffDto: CreateStaffDto): Promise<StaffDocument> {
    return this.staffsService.create(createStaffDto);
  }

  @Patch(':id')
  async update(
    @Param() { id }: IdDto,
    @Body() updateStaffDto: UpdateStaffDto,
  ): Promise<StaffDocument> {
    return this.staffsService.update(id, updateStaffDto);
  }

  @Delete(':id')
  async delete(@Param() { id }: IdDto): Promise<{ message: string }> {
    return this.staffsService.delete({ _id: id });
  }
}
