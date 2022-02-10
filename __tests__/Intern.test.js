const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the school the intern atended", () => {
      const newEmployee = new Intern(null, null, null, "Intern");
      expect(newEmployee.getSchool()).toEqual("Intern");
    });
  });
  describe("getRole", () => {
    it("should return the role of the Intern", () => {
      const newEmployee = new Intern("Intern");
      expect(newEmployee.getRole()).toEqual("Intern");
    });
  });
});
