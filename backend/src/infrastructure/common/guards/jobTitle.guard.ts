import { BadGatewayException, BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";
import { JwtAdapter } from "src/infrastructure/services/jwt/jwt.service";

@Injectable()
export class JobTitleGuard implements CanActivate {
    constructor(
        private readonly JwtService:JwtAdapter
    ){};
    public canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request:Request = context.switchToHttp().getRequest();
        let header = request.headers.authorization;
        if (!header){
            throw new UnauthorizedException("You are don't have token");
        }
        const [bearer, token]= header.split(" ");
        const user = this.JwtService.validateToken(token);
        if(!user || bearer !== "Bearer"){
            throw new UnauthorizedException();
        }
        if(user.jobTitle !== 'HR_MANAGER') throw new BadRequestException('Dont have this role');
        request.body._id = user.id;
        return true;
    }
}