import { IsNotEmpty, IsString } from "class-validator";

export class FilterTodoDto {
    @IsString()
    title?: string;
}