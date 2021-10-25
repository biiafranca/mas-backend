import {Router, Request, Response, response} from 'express';
import {ActivityController} from './controller/ActivityController';
import {CourseUnitController} from './controller/CourseUnitController';
import {UserController} from './controller/UserController';
import {AuthenticateController} from './controller/AuthenticateController';
import authenticated from './middlewares/authenticated';

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
routes.get('/user', authenticated, userController.show);

routes.post('/auth', authenticateController.create);

routes.post('/activity', authenticated, activityController.create);
routes.get('/activity', authenticated, activityController.show);

routes.post('/courseunit', authenticated, courseUnitController.create);
routes.get('/courseunit', authenticated, courseUnitController.show);

export default routes;
