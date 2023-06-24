import InvalidUserEmailException from "../../src/core/domain/exception/invalid-user-email-exception";
describe("Invalid email exception", () => {
  it("should create name without value", () => {
    const sut: InvalidUserEmailException = new InvalidUserEmailException();
    expect(sut).toBeInstanceOf(Error);
  });
});
