import User from "../../../src/core/user/user";

describe("User", () => {
  it("should create user with required name and email", () => {
    const name = "any name";
    const email = "any email";
    //subject under test
    const sut: User = new User(name, email);

    expect(sut).toBeInstanceOf(User);
    expect(sut.name).toStrictEqual("any name");
    expect(sut.email).toStrictEqual("any email");
  });
});
