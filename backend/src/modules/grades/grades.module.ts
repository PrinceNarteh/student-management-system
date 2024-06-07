import { Module } from '@nestjs/common';
import { GradeController } from './grades.controller';
import { GradesService } from './grades.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Grade } from './schemas/grade.schema';
import { StudentSchema } from '../students/schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Grade.name, schema: StudentSchema }]),
  ],
  controllers: [GradeController],
  providers: [GradesService],
  exports: [GradesService],
})
export class GradesModule {}
