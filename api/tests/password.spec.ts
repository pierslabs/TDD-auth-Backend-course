import UserMother from "./mother/user.mother";
import InvalidUserPasswordException from "../src/core/domain/exception/invalid-user-password-exception";

describe("Password", () => {
  it("should create Password", () => {
    expect(() => UserMother.Password()).not.toThrow();
  });

  it("should throw error with empty value", () => {
    expect(() => UserMother.Password(" ")).toThrowError(
      InvalidUserPasswordException
    );
  });

  it("should throw error with short value", () => {
    const Password = "1";

    expect(() => UserMother.Password(Password)).toThrowError(
      InvalidUserPasswordException
    );
  });

  it("should throw error with long value", () => {
    const Password = "12".repeat(80);
    expect(() => UserMother.Password(Password)).toThrowError(
      InvalidUserPasswordException
    );
  });

  it("should throw error with value only numbers", () => {
    const Password = "123456";
    expect(() => UserMother.Password(Password)).toThrowError(
      InvalidUserPasswordException
    );
  });

  it("should throw error with value start with space", () => {
    const Password = "    fakepas12345! ";

    expect(() => UserMother.Password(Password)).toThrowError(
      InvalidUserPasswordException
    );
  });
});
