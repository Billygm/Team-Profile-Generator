const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(title, id, email);
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;