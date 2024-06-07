import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Staff, StaffSchema } from './schemas/staff.schema';
import { StaffsController } from './staffs.controller';
import { StaffsService } from './staffs.service';
import { StaffsRepo } from './staffs.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Staff.name, schema: StaffSchema }]),
  ],
  controllers: [StaffsController],
  providers: [StaffsService, StaffsRepo],
  exports: [StaffsService],
})
export class StaffsModule {}
