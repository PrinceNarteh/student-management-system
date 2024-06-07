import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentsService } from './students.service';
import { GradesModule } from '../grades/grades.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    GradesModule,
  ],
  controllers: [],
  providers: [StudentsService],
})
export class StudentsModule {}
