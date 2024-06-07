import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateGradeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsMongoId()
  classTeacher: string;

  @IsArray()
  @IsMongoId({ each: true })
  students: string[];
}
