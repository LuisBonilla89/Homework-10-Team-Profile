const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an employee object", () => {
    const employee = new Employee("Sam", 32, "sam@test.com");

    expect(employee).not.toBeNull();
  });

  it("should return the employee name when we call getName", () => {
    const name = "Sam",
      id = 32,
      email = "sam@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getName()).toBe(name);
  });

  it("should return the employee Id when we call getId", () => {
    const name = "Sam",
      id = 32,
      email = "sam@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getId()).toBe(id);
  });

  it("should return the employee email when we call getEmail", () => {
    const name = "Sam",
      id = 32,
      email = "sam@test.com";
    const employee = new Employee(name, id, email);

    expect(employee.getEmail()).toBe(email);
  });

  it("should return the role when we call getRole", () => {
    const name = "Sam",
      id = 32,
      email = "sam@test.";
    const employee = new Employee(name, id, email);
    expect(employee.getRole()).toBe("Employee");
  });
});
