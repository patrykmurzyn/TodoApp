import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import {CreateTodoDto} from './dto/create-todo.dto';
import { FilterTodoDto } from './dto/filter-todo';
import { TodoService } from './todo.service';
import { UserGuard } from '../user/user.guard';
import { User } from '../user/user.decorator';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    @Get()
    getTodos(@Query() filter: FilterTodoDto) {
        return this.todoService.getTodos(filter);
    }

    @Get(':id')
    getTodoById(@Param('id', ParseIntPipe) id:number) {
        return this.todoService.getTodoById(id);
    }

    @UseGuards(UserGuard)
    @Post()
    addNewTodo(@User() userid: number, @Body() data: CreateTodoDto) {
        return this.todoService.addNewTodo(data, userid);
    }

    @UseGuards(UserGuard)
    @Delete(':id')
    deleteTodo(@User() userid: number, @Param('id', ParseIntPipe) id:number) {
        return this.todoService.deleteTodo(id, userid);
    }
}
