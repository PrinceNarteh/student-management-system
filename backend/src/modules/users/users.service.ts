import {
  ConflictException,
  HttpException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User, UserDocument } from './schemas/user.schema';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { UsersRepo } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import constants from 'src/common/constants';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepo) {}

  async findAll(): Promise<UserDocument[]> {
    return this.userRepo.findAll();
  }

  async findOne(
    filter: FilterQuery<User>,
    projection?: ProjectionType<User>,
    options?: QueryOptions<User>,
  ): Promise<UserDocument> {
    const user = await this.userRepo.findOne(filter, projection, options);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async findOneById(
    id: string,
    projection?: ProjectionType<User>,
    options?: QueryOptions<User>,
  ): Promise<UserDocument> {
    const user = await this.userRepo.findById(id, projection, options);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<UserDocument> {
    try {
      const user = await this.userRepo.create(createUserDto);
      return user;
    } catch (error) {
      if (error.code === constants.MONGODB_VIOLATION_ERROR_CODE) {
        throw new ConflictException('Email already in used');
      }
      throw new InternalServerErrorException();
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    try {
      const user = await this.userRepo.findOneAndUpdate(
        { _id: id },
        updateUserDto,
      );
      if (!user) {
        throw new NotFoundException('user not found');
      }
      return user;
    } catch (error) {
      if (error.code === constants.MONGODB_VIOLATION_ERROR_CODE) {
        throw new ConflictException('Email already in used');
      }
      throw new HttpException(error.response.message, error.statusCode);
    }
  }

  async delete(filter: FilterQuery<UserDocument>) {
    const res = await this.userRepo.delete(filter);
    return { message: res ? 'user deleted successfully' : 'user not found' };
  }
}