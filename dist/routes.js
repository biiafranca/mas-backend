"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ActivityController_1 = require("./controller/ActivityController");
var CourseUnitController_1 = require("./controller/CourseUnitController");
var UserController_1 = require("./controller/UserController");
var AuthenticateController_1 = require("./controller/AuthenticateController");
var authenticated_1 = __importDefault(require("./middlewares/authenticated"));
var userController = new UserController_1.UserController();
var activityController = new ActivityController_1.ActivityController();
var courseUnitController = new CourseUnitController_1.CourseUnitController();
var authenticateController = new AuthenticateController_1.AuthenticateController();
var routes = (0, express_1.Router)();
routes.post('/user', userController.create);
routes.get('/user', authenticated_1.default, userController.show);
routes.post('/auth', authenticateController.create);
routes.post('/activity', authenticated_1.default, activityController.create);
routes.get('/activity', authenticated_1.default, activityController.show);
routes.post('/courseunit', authenticated_1.default, courseUnitController.create);
routes.get('/courseunit', authenticated_1.default, courseUnitController.show);
exports.default = routes;