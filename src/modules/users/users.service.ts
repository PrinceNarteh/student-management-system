import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { FilterQuery, Model, ProjectionType, QueryOptions } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(
    filter: FilterQuery<User>,
    projection: ProjectionType<User>,
    options: QueryOptions<User>,
  ): Promise<User> {
    const user = await this.userModel.findOne(filter, projection, options);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
}
