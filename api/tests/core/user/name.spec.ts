import Name from "../../../src/core/user/name";

describe("Name", () => {
  it("should create name with valid value 2-25 charts", () => {
    const name = "test Name";

    const sut: Name = new Name(name);
    expect(sut).toBeInstanceOf(Name);
    expect(sut.value).toStrictEqual(name);
  });

  it("should throw error with empty value", () => {
    expect(() => new Name("")).toThrow();
  });

  it("should throw error with short value", () => {
    const name = "a";

    expect(() => new Name(name)).toThrow();
  });

  it("should throw error with long value", () => {
    const name = "a".repeat(80);
    expect(() => new Name(name)).toThrow();
  });

  it("should throw error with value only letters", () => {
    const name = "123456";
    expect(() => new Name(name)).toThrow();
  });

  it("should throw error with value start with space", () => {
    const name = "    pedro ";

    expect(() => new Name(name)).toThrowError();
  });
});
