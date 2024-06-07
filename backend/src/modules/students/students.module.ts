import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schemas/student.schema';
import { StudentsService } from './students.service';
import { GradesModule } from '../grades/grades.module';
import { StudentsController } from './students.controller';
import { StudentsRepository } from './students.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    GradesModule,
  ],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsRepository],
})
export class StudentsModule {}
