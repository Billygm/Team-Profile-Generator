const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the GitHub of the engineer", () => {
      const newEmployee = new Engineer(null, null, null, "Engineer");
      expect(newEmployee.getGithub()).toEqual("Engineer");
    });
  });
  describe("getRole", () => {
    it("should return the role of the engineer", () => {
      const newEmployee = new Engineer("Engineer");
      expect(newEmployee.getRole()).toEqual("Engineer");
    });
  });
});
