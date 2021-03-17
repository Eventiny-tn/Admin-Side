import { CategoryType } from './category.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  addCategory(@Body() body: CategoryType): Promise<Error | string> {
    return this.categoryService.addCategory(body);
  }
  @Get()
  getAllCategory(@Req() req): Promise<Error | object> {
    return this.categoryService.getAllCategory(req);
  }
  @Put(':id')
  updateByid(
    @Param() id: number,
    @Body() body: object,
  ): Promise<Error | string> {
    return this.categoryService.updateByid(id, body);
  }
  @Delete(':id')
  deleteOneById(@Param() id: number): Promise<Error | string> {
    return this.categoryService.deleteOneById(id);
  }
}
