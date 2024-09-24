class Student {
    name: string;
    age: number;
    state: string;
    private school: string;
    constructor(name: string, age: number, state: string, school: string) {
        this.name = name;
        this.age = age;
        this.state = state;
        this.school = school;
    }

    getStudentDetails() {
        return console.log({ Name: this.name, age: this.age, state: this.state, school: this.school });
    }
    public getSchool() {
        return this.school;
    }
    setSchool(school: string) {
        this.school = school;
    }
}

class Department extends Student {
    department: string;
    college: string;
    year: number;
    constructor(name: string, age: number, state: string, school: string, department: string, college: string, year: number) {
        super(name, age, state, school)
        this.department = department;
        this.college = college;
        this.year = year;
    }

    getStudentDetails() {
        const school = this.getSchool()
        return console.log({ Name: this.name, age: this.age, state: this.state, school, department: this.department, college: this.college, year: this.year });
    }
    protected getCollegeDetails() {
        return console.log({ department: this.department, college: this.college, year: this.year })
    }
}

const student = new Student('Name', 18, 'TN', 'GOVT');
student.getStudentDetails();
const collegeStudent = new Department('Name', 18, 'TN', 'GOVT', 'CSE', 'UCER', 1);
collegeStudent.getStudentDetails();