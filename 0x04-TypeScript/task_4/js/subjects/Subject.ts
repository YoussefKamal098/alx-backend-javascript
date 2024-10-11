// <reference path="./Subject.ts" />

namespace Subjects {
    export class Subject {
        teacher!: Teacher; // attribute teacher of type Teacher

        setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
