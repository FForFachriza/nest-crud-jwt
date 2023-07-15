import { HttpException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import todoDto from 'src/todo/dto/todo.dto';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  //   Get All Todos
  async getTodos(showcategories?: boolean, showUser?: boolean) {
    const data = await this.prisma.todo.findMany({
      include: {
        category: showcategories,
        user: showUser,
      },
    });

    for (const x of data) {
      if (x.user) delete x.user.password;
    }

    if (!data) {
      throw new HttpException('Todo not found', 404);
    }

    return {
      message: 'Success Get Todos',
      data: data,
    };
  }

  //   Get Single Todo
  async getTodo(uuid: string, showcategories?: boolean, showUser?: boolean) {
    const data = await this.prisma.todo.findUnique({
      where: {
        uuid: uuid,
      },
      include: {
        category: showcategories,
        user: showUser,
      },
    });

    delete data.user.password;

    if (!data) {
      throw new HttpException('Todos not found', 404);
    }

    return {
      message: 'Success Get Todo',
      data: data,
    };
  }

  // Add Todo
  async addTodo(dto: todoDto, user: User) {
    const data = await this.prisma.todo.create({
      data: {
        title: dto.title,
        category: {
          connect: {
            id: dto.categoriesId,
          },
        },
        user: {
          connect: {
            uuid: user.uuid,
          },
        },
      },
    });

    return {
      message: 'Success Add Todo',
      data: data,
    };
  }

  // Delete Todo
  async deleteTodo(uuid: string) {
    const data = await this.prisma.todo.delete({
      where: {
        uuid: uuid,
      },
    });

    if (!data) {
      throw new HttpException('Todo not found', 404);
    }

    return {
      message: 'Success Delete Todo',
      data: data,
    };
  }

  // Update Todo
  async updateTodo(dto: todoDto, uuid: string) {
    const data = await this.prisma.todo.update({
      where: { uuid: uuid },
      data: {
        title: dto.title,
        category: {
          connect: {
            id: dto.categoriesId,
          },
        },
      },
    });

    if (!data) {
      throw new HttpException('Todo not found', 404);
    }

    return {
      message: 'Success Update Todo',
      data: data,
    };
  }
}
