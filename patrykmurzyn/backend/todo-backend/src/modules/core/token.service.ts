import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService) {}

    createToekn(userId: number): string {
        return this.jwtService.sign({sub: userId}, {expiresIn: '1 day'});
    }

    verifyToken(token: string): {sub: number} {
        return this.jwtService.verify(token);
    } 
}
