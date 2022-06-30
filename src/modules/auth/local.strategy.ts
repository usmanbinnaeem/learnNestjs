/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }

    async validate(id, name: string, password: number): Promise<any> {
        const user = this.authService.validateUser(id, name, password)
        if (!user) {
            throw new UnauthorizedException()
        }
        return user;
    }
}