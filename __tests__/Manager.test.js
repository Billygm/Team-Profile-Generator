const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getRole", () => {
    it("should return the role of the Manager", () => {
      const newEmployee = new Manager("Manager");
      expect(newEmployee.getRole()).toEqual("Manager");
    });
  });
});
