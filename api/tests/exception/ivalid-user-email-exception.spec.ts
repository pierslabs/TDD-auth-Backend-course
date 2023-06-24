import InvalidUserNameException from "../../src/core/domain/exception/invalid-user-name-exception";
describe("Invalid name exception", () => {
  it("should create name without value", () => {
    const sut: InvalidUserNameException = new InvalidUserNameException();
    expect(sut).toBeInstanceOf(Error);
  });
});
