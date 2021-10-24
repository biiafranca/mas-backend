import {Column, CreateDateColumn, Entity, JoinTable, ManyToOne, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

@Entity("activities")
class Activity {

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    activity_date:Date;

    @Column()
    grade:Number;

    @Column()
    course_unit_id:string;

    @ManyToOne(()=> CourseUnit, course_unit => course_unit.activities)
    @JoinTable()
    course_unit:CourseUnit;

    @CreateDateColumn()
    create_at:Date;
}

export {Activity}