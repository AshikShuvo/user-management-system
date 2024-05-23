import { Injectable } from '@nestjs/common';
import {UserService} from "../user.service";
import {CreateUserDto, SigninUserDto} from "../dtos/User.dto";

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {
    }
    private generateTokenAccessToken(){}
    
    async signingUp(createUserDto: CreateUserDto){}
    async signingIn(signinUserDto: SigninUserDto){}
    async resolveRefreshToken(){}

}
