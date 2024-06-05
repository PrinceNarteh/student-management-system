import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class IdDto {
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  id: string;
}
