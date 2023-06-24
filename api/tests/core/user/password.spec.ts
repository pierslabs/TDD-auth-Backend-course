import UserMother from "../../mother/user.mother";

describe("Password", () => {
  it("should create Password", () => {
    expect(() => UserMother.Password()).not.toThrow();
  });

  it("should throw error with empty value", () => {
    expect(() => UserMother.Password(" ")).toThrow();
  });

  it("should throw error with short value", () => {
    const Password = "1";

    expect(() => UserMother.Password(Password)).toThrow();
  });

  it("should throw error with long value", () => {
    const Password = "12".repeat(80);
    expect(() => UserMother.Password(Password)).toThrow();
  });

  it("should throw error with value only numbers", () => {
    const Password = "123456";
    expect(() => UserMother.Password(Password)).toThrow();
  });

  it("should throw error with value start with space", () => {
    const Password = "    fakepas12345! ";

    expect(() => UserMother.Password(Password)).toThrowError();
  });
});
