const { Engineer } = require("../lib/Engineer");

describe("Engineer", () => {
  it("should create an engineer object", () => {
    const engineer = new Engineer(
      "Jack",
      35,
      "jack@test.com",
      "github.com/Jack"
    );
    expect(engineer).not.toBeNull();
  });

  it("should return the engineer name when we call getName", () => {
    const name = "Jack",
      id = 35,
      email = "jack@test.com",
      gitHub = "github.com/Jack";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getName()).toBe(name);
  });

  it("should return the engineer id when call getId", () => {
    const name = "Jack",
      id = 35,
      email = "jack@test.com",
      gitHub = "github.com/Jack";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getId()).toBe(id);
  });

  it("should return the engineer email when call getEmail", () => {
    const name = "Jack",
      id = 35,
      email = "jack@test.com",
      gitHub = "github.com/Jack";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getEmail()).toBe(email);
  });

  it("should return the engineer github when call getGithub", () => {
    const name = "Jack",
      id = 35,
      email = "jack@test.com",
      gitHub = "github.com/Jack";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getGithub()).toBe(gitHub);
  });
  it("should return engineer when call getRole", () => {
    const name = "Jack",
      id = 35,
      email = "jack@test.com",
      gitHub = "github.com/Jack";
    const engineer = new Engineer(name, id, email, gitHub);
    expect(engineer.getRole()).toBe("Engineer");
  });
});
