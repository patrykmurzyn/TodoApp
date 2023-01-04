import { ExecutionContext, SetMetadata, createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator<number>(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.userId;
    },
);