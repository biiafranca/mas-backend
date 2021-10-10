import {Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Activity } from './Activity';

@Entity("course_units")
class CourseUnit {

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
    description:string;

    @OneToMany(()=> Activity, activity => activity.course_unit)
    activities:Activity[];

    @CreateDateColumn()
    create_at:Date;

}

export {CourseUnit}