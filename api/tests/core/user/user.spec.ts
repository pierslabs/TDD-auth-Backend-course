import User from "../../../src/core/user/user";
import Email from "../../../src/core/user/email";
import Name from "../../../src/core/user/name";

describe("User", () => {
  it("should create user with required name and email", () => {
    const name = new Name("any name");
    const email = new Email("dummy@test.com");
    //subject under test
    const sut: User = new User(name, email);

    expect(sut).toBeInstanceOf(User);
    expect(sut.name).toBeInstanceOf(Name);
    expect(sut.email).toBeInstanceOf(Email);
    expect(sut.name.value).toStrictEqual("any name");
    expect(sut.email.value).toStrictEqual("dummy@test.com");
  });
});
