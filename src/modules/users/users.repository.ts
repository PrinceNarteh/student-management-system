import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepo extends EntityRepository<User> {
  constructor(@InjectModel(User) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
