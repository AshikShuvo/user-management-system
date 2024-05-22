import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";
import {Exclude, Expose} from "class-transformer";
import { User } from "@prisma/client";

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
export class CreateUserResponseDto{
    @Expose()
    id: number;
    @Expose()
    email: string;
    @Exclude()
    password: string;
    @Expose()
    created_at: Date;
    @Expose()
    updated_at: Date;


    constructor(partial: Partial<CreateUserResponseDto>) {
        Object.assign(this, partial);
    }
}