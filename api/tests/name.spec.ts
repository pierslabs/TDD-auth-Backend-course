import InvalidUserNameException from "../src/core/domain/exception/invalid-user-name-exception";
import Name from "./../src/core/user/name";
import UserMother from "./mother/user.mother";

describe("Name", () => {
  it("should create name with valid value 2-25 charts", () => {
    const name = "test Name";

    const sut: Name = UserMother.Name(name);
    expect(sut).toBeInstanceOf(Name);
    expect(sut.value).toStrictEqual(name);
  });

  it("should throw error with empty value", () => {
    expect(() => UserMother.Name(" ")).toThrowError(InvalidUserNameException);
  });

  it("should throw error with short value", () => {
    const name = "a";

    expect(() => UserMother.Name(name)).toThrowError(InvalidUserNameException);
  });

  it("should throw error with long value", () => {
    const name = "a".repeat(80);
    expect(() => UserMother.Name(name)).toThrowError(InvalidUserNameException);
  });

  it("should throw error with value start with space", () => {
    const name = "    pedro ";

    expect(() => UserMother.Name(name)).toThrowError(InvalidUserNameException);
  });
});
