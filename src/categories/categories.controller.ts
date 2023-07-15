import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriesService } from 'src/categories/categories.service';
import { categoriesDto } from 'src/categories/dto';

@UseGuards(AuthGuard('jwt'))
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  getCategories(@Query('showtodo') showtodo: boolean = false) {
    return this.categoriesService.getCategories(showtodo);
  }

  @Get(':uuid')
  getCategory(
    @Param('uuid') uuid: string,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Query('showtodo') showtodo: boolean = false,
  ) {
    return this.categoriesService.getCategory(uuid, showtodo);
  }

  @Post()
  addCategory(@Body() createCategory: categoriesDto) {
    console.log(createCategory);
    return this.categoriesService.addCategory(createCategory);
  }

  @Delete(':uuid')
  deleteCategory(@Param('uuid') uuid: string) {
    return this.categoriesService.deleteCategory(uuid);
  }

  @Patch(':uuid')
  updateCategory(
    @Param('uuid') uuid: string,
    @Body() updateCategory: categoriesDto,
  ) {
    return this.categoriesService.updateCategory(uuid, updateCategory);
  }
}
