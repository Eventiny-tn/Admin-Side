import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category, CategoryType } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async addCategory(body: CategoryType): Promise<Error | string> {
    console.log(body);
    if (body) {
      await this.categoryRepository.save(body);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }

  async getAllCategory(req): Promise<Error | object> {
    if (req) {
      const data = await this.categoryRepository.find();
      return data;
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async updateByid(id, body): Promise<Error | string> {
    console.log(body);

    if (id && body) {
      await this.categoryRepository.update(id, body);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
  async deleteOneById(id: number): Promise<Error | string> {
    if (id) {
      await this.categoryRepository.delete(id);
      return 'done';
    } else {
      return new NotFoundException('NOT FOUND');
    }
  }
}
