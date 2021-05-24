const { Manager } = require("../lib/Manager");

describe("Manager", () => {
  it("should create a manager object", () => {
    const manager = new Manager("Andrew", 50, "andrew@test.com", 123456789);
    expect(manager).not.toBeNull();
  });

  it("should return the manager name when we call getName", () => {
    const name = "Andrew",
      id = 50,
      email = "andrew@test.com",
      officeNumber = 123456789;
    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.getName()).toBe(name);
  });

  it("should return the manager Id when we call getId", () => {
    const name = "Andrew",
      id = 50,
      email = "andrew@test.com",
      officeNumber = 123456789;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getId()).toBe(id);
  });

  it("should return the manager email when we call getEmail", () => {
    const name = "Andrew",
      id = 50,
      email = "andrew@test.com",
      officeNumber = 123456789;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getEmail()).toBe(email);
  });

  it("should return the manager office number when we call getOfficeNumber", () => {
    const name = "Andrew",
      id = 50,
      email = "andrew@test.com",
      officeNumber = 123456789;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });

  it("should return manager when we call getRole", () => {
    const name = "Andrew",
      id = 50,
      email = "andrew@test.com",
      officeNumber = 123456789;
    const manager = new Manager(name, id, email, officeNumber);
    expect(manager.getRole()).toBe("Manager");
  });
});
