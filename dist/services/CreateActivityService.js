"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CreateActivityService = void 0;
var typeorm_1 = require("typeorm");
var Activity_1 = require("../models/Activity");
var CreateActivityService = /** @class */ (function () {
    function CreateActivityService() {
    }
    CreateActivityService.prototype.execute = function (_a) {
        var name = _a.name, activity_date = _a.activity_date, grade = _a.grade, course_unit_id = _a.course_unit_id;
        return __awaiter(this, void 0, void 0, function () {
            var activitiesRepository, checkActivityToCourseUnitExists, activity;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        activitiesRepository = (0, typeorm_1.getRepository)(Activity_1.Activity);
                        return [4 /*yield*/, activitiesRepository.findOne({ name: name, course_unit_id: course_unit_id })];
                    case 1:
                        checkActivityToCourseUnitExists = _b.sent();
                        if (checkActivityToCourseUnitExists) {
                            throw new Error("Activity to course unit already exists");
                        }
                        activity = activitiesRepository.create({
                            name: name,
                            activity_date: activity_date,
                            grade: grade,
                            course_unit_id: course_unit_id
                        });
                        return [4 /*yield*/, activitiesRepository.save(activity)];
                    case 2:
                        _b.sent();
                        return [2 /*return*/, activity];
                }
            });
        });
    };
    return CreateActivityService;
}());
exports.CreateActivityService = CreateActivityService;
