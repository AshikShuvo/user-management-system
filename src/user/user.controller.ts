import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dtos/User.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('')
    createUserRoute(@Body() createUserDto: CreateUserDto) {
        this.userService.createUser(createUserDto);
    }
}
