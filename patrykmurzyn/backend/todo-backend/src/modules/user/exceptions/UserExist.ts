import { NotFoundException } from "@nestjs/common";

export class UserExist extends NotFoundException {
    constructor() {
        super('User already exist');
    }
}