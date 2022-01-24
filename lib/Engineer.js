const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(title, id, email);
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;