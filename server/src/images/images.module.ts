import { Images } from './images.entity';
import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Images])],
  providers: [ImagesService],
  controllers: [ImagesController],
  exports: [TypeOrmModule, ImagesService],
})
export class ImagesModule {}
