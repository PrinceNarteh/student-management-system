import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument } from './schemas/user.schema';
import { IdDto } from 'src/common/dto/id.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: IdDto): Promise<UserDocument> {
    return this.usersService.findOneById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDocument> {
    return this.usersService.create(createUserDto);
  }
}
