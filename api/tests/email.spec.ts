import InvalidUserEmailException from "../src/core/domain/exception/invalid-user-email-exception";
import Email from "../src/core/user/email";
import UserMother from "./mother/user.mother";
describe("Email", () => {
  it("should create name with valid email value", () => {
    const email = "dummy@test.com";

    const sut: Email = UserMother.Email(email);
    expect(sut).toBeInstanceOf(Email);
    expect(sut.value).toStrictEqual(email);
  });

  it("should throw error with invalid email value", () => {
    const email = "dummy@test";
    expect(() => UserMother.Email(email)).toThrowError(
      InvalidUserEmailException
    );
  });
  it("should throw error with empty value", () => {
    const email = " ";
    expect(() => UserMother.Email(email)).toThrowError(
      InvalidUserEmailException
    );
  });
  it("should throw error with invalid value", () => {
    const email = "dummy@@test.com";
    expect(() => UserMother.Email(email)).toThrowError(
      InvalidUserEmailException
    );
  });
});
