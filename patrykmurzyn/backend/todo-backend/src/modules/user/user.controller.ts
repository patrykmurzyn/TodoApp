import { Body, Controller, Post, Headers, HttpException, HttpStatus, HttpCode, Res, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { decodeAuthHeader } from './userHelpers';
import { Response } from 'express';
import { UserGuard } from './user.guard';
import { User } from './user.decorator';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/register')
    async createUser(@Body() body: RegisterUserDto) {
        const user = await this.userService.registerUser(body);
        return this.userService.createToken(user);
    }

    @Post('/login')
    @HttpCode(200)
    async loginUser(
        @Headers('authorization') header: string,
        @Res({passthrough: true}) response: Response) {
        if(!header) throw new HttpException('No authorization header', HttpStatus.BAD_REQUEST);

        const authData = decodeAuthHeader(header);
        if(!authData) throw new HttpException('Wrong authorization header', HttpStatus.BAD_REQUEST);
        
        const user = await this.userService.verifyUser(authData);
        const token = await this.userService.createToken(user);

        response.cookie('access-token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //1 Day
        });
 
        //control cookie
        response.cookie('auth', true, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), //1 Day
        });
    }

    @Post('/logout')
    @HttpCode(200)
    async logoutUser(
        @Res({passthrough: true}) response: Response) {
            response.clearCookie('access-token');
            response.clearCookie('auth');
        }


    @Get()
    @UseGuards(UserGuard)
    getTest(@User() userId: number) {
        return `Hello userid: ${userId}`;
    }
}
