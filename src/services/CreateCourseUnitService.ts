import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'
import {response} from 'express';

interface CourseUnitData {
    name:string;
    description:string;
}

class CreateCourseUnitService {
    
    public async execute({name, description}: CourseUnitData){
        
        const courseUnitsRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await courseUnitsRepository.findOne({name});

        if(checkCourseUnitExists){
            throw new Error("Course Unit name already exists");
        }
      
        const courseUnit = courseUnitsRepository.create({
            name,
            description
        })

        await courseUnitsRepository.save(courseUnit);

        return courseUnit;

    }
}

export {CreateCourseUnitService}