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
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import todoDto from 'src/todo/dto/todo.dto';
import { TodoService } from 'src/todo/todo.service';

@Controller('todo')
@UseGuards(AuthGuard('jwt'))
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos(
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Query('showcategories') showcategories: boolean = false,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Query('showuser') showuser: boolean = false,
  ) {
    return this.todoService.getTodos(showcategories, showuser);
  }

  @Get(':uuid')
  getTodo(
    @Param('uuid') uuid: string,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Query('showcategories') showcategories: boolean = false,
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    @Query('showuser') showuser: boolean = false,
  ) {
    console.log(uuid);
    return this.todoService.getTodo(uuid, showcategories, showuser);
  }

  @Post()
  addTodo(@Body() createTodo: todoDto, @GetUser() user: User) {
    return this.todoService.addTodo(createTodo, user);
  }

  @Delete(':uuid')
  deleteTodo(@Param('uuid') uuid: string) {
    return this.todoService.deleteTodo(uuid);
  }

  @Patch(':uuid')
  updateTodo(@Body() updateDto: todoDto, @Param('uuid') uuid: string) {
    return this.todoService.updateTodo(updateDto, uuid);
  }
}
