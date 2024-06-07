import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Grade } from 'src/modules/grades/schemas/grade.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop()
  middleName: string;

  @Prop({ type: Types.ObjectId, ref: Grade.name, required: true })
  grade: Grade;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
