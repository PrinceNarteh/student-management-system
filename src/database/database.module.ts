import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost', {
      dbName: 'sch-mgt-sys',
    }),
  ],
})
export class DatabaseModule {}
