import {getRepository} from 'typeorm'
import {Activity} from '../models/Activity'
import { response } from 'express';

interface ActivityData {
    name:string;
    activity_date: Date;
    grade: Number;
    course_unit_id:string;
}

class CreateActivityService {
    
    public async execute({name, activity_date, grade, course_unit_id}: ActivityData){
        
        const activitiesRepository = getRepository(Activity);

        const checkActivityToCourseUnitExists = await activitiesRepository.findOne({name,course_unit_id});

        if(checkActivityToCourseUnitExists){
            throw new Error("Activity to course unit already exists");
        }
      
        const activity = activitiesRepository.create({
            name,
            activity_date,
            grade,
            course_unit_id
        })

        await activitiesRepository.save(activity);

        return activity;

    }
}

export {CreateActivityService}