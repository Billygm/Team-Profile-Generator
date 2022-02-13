const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const newEmployee = new Employee("Billy");
      expect(newEmployee.getName()).toEqual("Billy");
    });
  });

  describe("getId", () => {
    it("should return the ID of the employee", () => {
      const newEmployee = new Employee(null, 1);
      expect(newEmployee.getId()).toEqual(1);
    });
  });

  describe("getEmail", () => {
    it("should return the employee's email", () => {
      const newEmployee = new Employee(null, null, "email@email.com");
      expect(newEmployee.getEmail()).toEqual("email@email.com");
    });
  });
});
