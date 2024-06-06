import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import constants from 'src/common/constants';
import { StaffsRepo } from './staffs.repository';
import { StaffDocument } from './schemas/staff.schema';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { CreateStaffDto } from './dto/create-staff.dto';

@Injectable()
export class StaffsService {
  constructor(private readonly staffRepo: StaffsRepo) {}

  async findAll(): Promise<StaffDocument[]> {
    return this.staffRepo.findAll();
  }

  async findOne(
    filter: FilterQuery<StaffDocument>,
    projection?: ProjectionType<StaffDocument>,
    options?: QueryOptions<StaffDocument>,
  ): Promise<StaffDocument> {
    const staff = await this.staffRepo.findOne(filter, projection, options);
    if (!staff) {
      throw new NotFoundException('staff not found');
    }
    return staff;
  }

  async findOneById(
    id: string,
    projection?: ProjectionType<StaffDocument>,
    options?: QueryOptions<StaffDocument>,
  ): Promise<StaffDocument> {
    const staff = await this.staffRepo.findById(id, projection, options);
    if (!staff) {
      throw new NotFoundException('staff not found');
    }
    return staff;
  }

  async create(createStaffDto: CreateStaffDto): Promise<StaffDocument> {
    try {
      const staff = await this.staffRepo.create(createStaffDto);
      return staff;
    } catch (error) {
      if (error.code === constants.MONGODB_VIOLATION_ERROR_CODE) {
        throw new ConflictException('Email already in used');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateStaffDto: UpdateStaffDto,
  ): Promise<StaffDocument> {
    try {
      const staff = await this.staffRepo.findOneAndUpdate(
        { _id: id },
        updateStaffDto,
      );
      if (!staff) {
        throw new NotFoundException('staff not found');
      }
      return staff;
    } catch (error) {
      if (error.code === constants.MONGODB_VIOLATION_ERROR_CODE) {
        throw new ConflictException('Email already in used');
      }
      throw new HttpException(error.response.message, error.statusCode);
    }
  }

  async delete(filter: FilterQuery<StaffDocument>) {
    const res = await this.staffRepo.delete(filter);
    return { message: res ? 'staff deleted successfully' : 'staff not found' };
  }
}
