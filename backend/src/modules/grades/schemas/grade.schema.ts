import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Staff } from 'src/modules/staffs/schemas/staff.schema';

export type GradeDocument = HydratedDocument<Grade>;

@Schema()
export class Grade {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Types.ObjectId, ref: Staff.name })
  classTeacher: Staff;

  @Prop()
  students: string[];
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
