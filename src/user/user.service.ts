import { Injectable } from '@nestjs/common';
import {User} from "@prisma/client";
import {CreateUserDto} from "./dtos/User.dto";

@Injectable()
export class UserService {
    createUser(user: CreateUserDto) {
        // check if user exists with the same emil, if yes though appropriate exception
        // encrypt the string password
        // perform user save in db by prisma orm
        // return response that must not contain the password
        console.log(user);
    }
}
