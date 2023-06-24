import User from "../../../src/core/user/user";
import Email from "../../../src/core/user/email";
import Name from "../../../src/core/user/name";
import UserMother from "../../mother/user.mother";
import Password from "../../../src/core/user/password";

describe("User", () => {
  it("should create user with required name and email", () => {
    const name: Name = UserMother.Name("pier");
    const email: Email = UserMother.Email();
    const password: Password = UserMother.Password();
    //subject under test
    const sut: User = new User(name, email, password);
    expect(sut).toBeInstanceOf(User);
    expect(sut.name).toBeInstanceOf(Name);
    expect(sut.email).toBeInstanceOf(Email);
    expect(sut.password).toBeInstanceOf(Password);
  });
});
