import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateUserDto, SigninUserDto} from "../dtos/User.dto";

@Controller('auth')
export class AuthController {
    @Post("signup")
    signUserUp(@Body() createUserDto: CreateUserDto){
        return createUserDto;
    }

    @Get("signin")
    signUserIn(@Body() signinUserDto:SigninUserDto){
        return {
            accessToken:"",
            refreshToken: ""
        };
    }

    @Get("refresh-token")
    getRefreshToken(){
        return {
            accessToken:""
        }
    }
}
