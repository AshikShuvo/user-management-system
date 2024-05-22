import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto, CreateUserResponseDto} from "./dtos/User.dto";
import {ApiCreatedResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("User")
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @ApiCreatedResponse({
        description: "creating a new user",
        type: CreateUserResponseDto
    })
    @Post('')
    async createUserRoute(@Body() createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {
        return await this.userService.createUser(createUserDto);
    }
}
