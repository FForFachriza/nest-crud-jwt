import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { categoriesDto } from 'src/categories/dto';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  //   Get All Categories
  async getCategories(showTodo?: boolean) {
    const data = await this.prisma.categories.findMany({
      include: {
        todo: showTodo,
      },
    });

    return {
      message: 'Success Get Categories',
      data: data,
    };
  }

  //   Get Single Category
  async getCategory(uuid: string, showTodo?: boolean) {
    const data = await this.prisma.categories.findUnique({
      where: {
        uuid: uuid,
      },
      include: {
        todo: showTodo,
      },
    });

    if (!data) {
      throw new HttpException('Category not found', 404);
    }

    return {
      message: 'Success Get Category',
      data: data,
    };
  }

  //   Add Category
  async addCategory(dto: categoriesDto) {
    const data = await this.prisma.categories.create({
      data: {
        name: dto.name,
      },
    });

    return {
      message: 'Success Add Category',
      data: data,
    };
  }

  // Delete Category
  async deleteCategory(uuid: string) {
    const data = await this.prisma.categories.delete({
      where: {
        uuid: uuid,
      },
    });

    if (!data) {
      throw new HttpException('Category not found', 404);
    }

    return {
      message: 'Success Delete Category',
      data: data,
    };
  }

  // Update Category
  async updateCategory(uuid: string, dto: categoriesDto) {
    const data = await this.prisma.categories.update({
      data: {
        name: dto.name,
      },
      where: {
        uuid: uuid,
      },
    });

    if (!data) {
      throw new HttpException('Category not found', 404);
    }

    return {
      message: 'Success Edit Category',
      data: data,
    };
  }
}
