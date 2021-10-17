import {Router, Request, Response, response} from 'express';
import {ActivityController} from './controller/ActivityController';
import {CourseUnitController} from './controller/CourseUnitController';
import {UserController} from './controller/UserController';
import {AuthenticateController} from './controller/AuthenticateController'

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const userController = new UserController();
const activityController = new ActivityController();
const courseUnitController = new CourseUnitController();
const authenticateController = new AuthenticateController();

const routes = Router();

routes.post('/user', userController.create);
routes.post('/auth', authenticateController.create);
routes.post('/activity', activityController.create);
routes.post('/courseunit', courseUnitController.create);

export default routes;
