var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, age, state, school) {
        this.name = name;
        this.age = age;
        this.state = state;
        this.school = school;
    }
    Student.prototype.getStudentDetails = function () {
        return console.log({ Name: this.name, age: this.age, state: this.state, school: this.school });
    };
    return Student;
}());
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department(name, age, state, school, department, college, year) {
        var _this = _super.call(this, name, age, state, school) || this;
        _this.department = department;
        _this.college = college;
        _this.year = year;
        return _this;
    }
    Department.prototype.getStudentDetails = function () {
        return console.log({ Name: this.name, age: this.age, state: this.state, school: this.school, department: this.department, college: this.college, year: this.year });
    };
    return Department;
}(Student));
var student = new Student('Name', 18, 'TN', 'GOVT');
student.getStudentDetails();
var collegeStudent = new Department('Name', 18, 'TN', 'GOVT', 'CSE', 'UCER', 1);
collegeStudent.getStudentDetails();
