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

        const checkActivityExists = await activitiesRepository.findOne({name});

        if(checkActivityExists){
            throw new Error("Activity name already exists");
        }
      
        const activity = {
            name,
            activity_date,
            grade,
            course_unit_id
        }

        await activitiesRepository.save(activity);

        return activity;

    }
}

export {CreateActivityService}