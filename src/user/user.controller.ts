import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto, CreateUserResponseDto} from "./dtos/User.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('')
    async createUserRoute(@Body() createUserDto: CreateUserDto):Promise<CreateUserResponseDto> {
        return await this.userService.createUser(createUserDto);
    }
}
