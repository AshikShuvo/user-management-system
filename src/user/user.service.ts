import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateUserDto, CreateUserResponseDto} from "./dtos/User.dto";
import {PrismaService} from "../prisma/prisma.service";
import {User} from "@prisma/client";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {
    }

    private async getUserByEmail(email: string): Promise<User> {
        return this.prismaService.user.findUnique({where: {email}});
    }

    private async encryptUserPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 10);
    }

    async createUser({email, password}: CreateUserDto): Promise<CreateUserResponseDto> {
        // check if user exists with the same emil, if yes though appropriate exception
        const user = await this.getUserByEmail(email);
        if (user) {
            throw new HttpException("User already exists", HttpStatus.CONFLICT);
        }
        // encrypt the string password
        const hashedPassword = await this.encryptUserPassword(password);
        // perform user save in db by prisma
        const newUser = await this.prismaService.user.create({
            data: {
                email,
                password: hashedPassword,
            }
        })
        // return response that must not contain the password
        return new CreateUserResponseDto(newUser);
    }
}
