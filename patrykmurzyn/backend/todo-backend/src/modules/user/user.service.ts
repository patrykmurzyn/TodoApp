import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as argon2 from 'argon2';
import { UserExist } from './exceptions/UserExist';
import { userInfo } from 'os';
import { UserPass } from './userHelpers';
import { User } from '@prisma/client';
import { TokenService } from '../core/token.service';

@Injectable()
export class UserService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly tokenService: TokenService,
        ) {}

    createToken(user: User) {
        return this.tokenService.createToekn(user.id);
    }

    async registerUser(data: RegisterUserDto) {
        const hash = await argon2.hash(data.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: data.email,
                    password: hash,
                }
            })
            return user;
        }
        catch (e) {
            throw new UserExist();
        }
    }

    async verifyUser(authData: UserPass) : Promise<User | undefined> {
        const user = await this.prisma.user.findFirst({
            where: {
                email: authData.username,
            }
        })
        if(!user) throw new UnauthorizedException();
        const isValid = await argon2.verify(user.password, authData.password);

        if(!isValid) throw new UnauthorizedException();

        return user;
    }
}
