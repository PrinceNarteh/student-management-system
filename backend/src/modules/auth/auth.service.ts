import { Injectable } from '@nestjs/common';
import { Staff } from '../staffs/schemas/staff.schema';
import { StaffsService } from '../staffs/staffs.service';

@Injectable()
export class AuthService {
  constructor(private readonly staffsService: StaffsService) {}

  async validateStaff(
    email: string,
    password: string,
  ): Promise<Omit<Staff, 'password'>> {
    const user = await this.staffsService.findOne({ email });
    if (user && !((await user.password) === password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
