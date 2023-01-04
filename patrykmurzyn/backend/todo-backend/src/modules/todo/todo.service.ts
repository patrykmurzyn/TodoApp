import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoNotFoundException } from './exceptions/TodoNotFoundException';
import { FilterTodoDto } from './dto/filter-todo';

@Injectable()
export class TodoService {
    constructor(private readonly prisma: PrismaService) {}

    async getTodos(filter: FilterTodoDto): Promise<Todo[]> {
        return this.prisma.todo.findMany({
            where: {
                title: {
                    contains: filter.title,
                }
            }
        });
    }

    async addNewTodo(data: CreateTodoDto, userId: number) {
        return this.prisma.todo.create({
            data: {
                title: data.title,
                userId: userId,
            }
        })
    }

    async getTodoById(id: number) {
        const todo = await this.prisma.todo.findUnique({
            where: {
                id: id,
            }
        })
        if(!todo) throw new TodoNotFoundException();

        return todo;
    }

    async deleteTodo(id: number, userId: number) {
        await this.getTodoById(id)
        return this.prisma.todo.deleteMany({
            where: {
                id,
                userId,
            }
        })
    }
}
