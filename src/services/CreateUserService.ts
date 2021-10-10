import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {User} from '../models/User'
import { response } from 'express';

interface UserData {
    name:string;
    email:string;
    password:string;
}

class CreateUserService {
    
    public async execute({name, email, password}: UserData){
        
        const usersRepository = getRepository(User);

        const checkUserExists = await usersRepository.findOne({email});

        if(checkUserExists){
            throw new Error("E-mail address already exists");
        }

        const hashedPassword = await hash(password, 8);
        
        const user = {
            name,
            email,
            password:hashedPassword
        }

        await usersRepository.save(user);

        return user;

    }
}

export {CreateUserService}