import {Request, Response} from 'express';
import {CreateUserService} from '../services/CreateUserService';
import {GetUsersService} from '../services/GetUsersService';

class UserController {

    async test(request:Request, response:Response) {
        return response.json({message:"Teste Heroku"})
    }
    
    async create(request:Request, response:Response) {
        
        const userData = request.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute(userData);
        return response.json(user);
    
    }

    async show(request:Request, response:Response) {
        const userID = request.body.user;
        const getUsers = new GetUsersService();
        const users = await getUsers.execute(userID);
        return response.json(users);
    }
}

export {UserController};