"use strict";
class Student {
    constructor(name, age, state, school) {
        this.name = name;
        this.age = age;
        this.state = state;
        this.school = school;
    }
    getStudentDetails() {
        return console.log({ Name: this.name, age: this.age, state: this.state, school: this.school });
    }
    getSchool() {
        return this.school;
    }
    setSchool(school) {
        this.school = school;
    }
}
class Department extends Student {
    constructor(name, age, state, school, department, college, year) {
        super(name, age, state, school);
        this.department = department;
        this.college = college;
        this.year = year;
    }
    getStudentDetails() {
        const school = this.getSchool(); // private prop get-fn
        return console.log({ Name: this.name, age: this.age, state: this.state, school, department: this.department, college: this.college, year: this.year });
    }
    getCollegeDetails() {
        return console.log({ department: this.department, college: this.college, year: this.year });
    }
}
const student = new Student('Name', 18, 'TN', 'GOVT');
student.getStudentDetails();
const collegeStudent = new Department('Name', 18, 'TN', 'GOVT', 'CSE', 'UCER', 1);
collegeStudent.getStudentDetails();
