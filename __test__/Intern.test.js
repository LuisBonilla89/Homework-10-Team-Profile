const { Intern } = require("../lib/Intern");

describe("Intern", () => {
  it("should create an object", () => {
    const intern = new Intern(
      "Santiago",
      21,
      "santiago@test.com",
      "Monash University"
    );
    expect(intern).not.toBeNull();
  });
  it("should return the intern name when call getName", () => {
    const name = "Santiago",
      id = 21,
      email = "santiago@student.com",
      school = "Monash University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getName()).toBe(name);
  });

  it("should return the intern id when call getId", () => {
    const name = "Santiago",
      id = 21,
      email = "santiago@student.com",
      school = "Monash University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getId()).toBe(id);
  });

  it("should return the intern email when call getEmail", () => {
    const name = "Santiago",
      id = 21,
      email = "santiago@student.com",
      school = "Monash University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getEmail()).toBe(email);
  });

  it("should return the intern school when call getSchool", () => {
    const name = "Santiago",
      id = 21,
      email = "santiago@student.com",
      school = "Monash University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getSchool()).toBe(school);
  });

  it("should return intern when call getRole", () => {
    const name = "Santiago",
      id = 21,
      email = "santiago@student.com",
      school = "Monash University";
    const intern = new Intern(name, id, email, school);
    expect(intern.getRole()).toBe("Intern");
  });
});
