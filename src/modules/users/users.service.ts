import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { FilterQuery, ProjectionType, QueryOptions } from 'mongoose';
import { UsersRepo } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepo) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async findOne(
    filter: FilterQuery<User>,
    projection: ProjectionType<User>,
    options: QueryOptions<User>,
  ): Promise<User> {
    const user = await this.userRepo.findOne(filter, projection, options);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }
}
