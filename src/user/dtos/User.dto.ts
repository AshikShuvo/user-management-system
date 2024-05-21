import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @ApiProperty({
        name: "email",
        type: "string",
        description: "Email address",
        required: true,
    })
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        name: "password",
        type: "string",
        description: "Password",
        required: true,
    })
    @IsNotEmpty()
    password: string;

}