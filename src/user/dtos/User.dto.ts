import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";
import {Exclude, Expose} from "class-transformer";

export class SigninUserDto{
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
    @ApiProperty({
        name: "id",
        type: "Number",
        description: "unique identifier",
    })
    @Expose()
    id: number;

    @ApiProperty({
        name: "email",
        type: "String",
        description: "unique email",
    })
    @Expose()
    email: string;

    @Exclude()
    password: string;

    @ApiProperty({
        name: "created_at",
        type: "String",
        description: "Creation Date",
    })
    @Expose()
    created_at: Date;

    @ApiProperty({
        name: "updated_at",
        type: "String",
        description: "updated Date",
    })
    @Expose()
    updated_at: Date;


    constructor(partial: Partial<CreateUserResponseDto>) {
        Object.assign(this, partial);
    }
}