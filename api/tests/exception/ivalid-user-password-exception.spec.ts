import InvalidUserPasswordException from "../../src/core/domain/exception/invalid-user-password-exception";
describe("Invalid Password exception", () => {
  it("should create name without value", () => {
    const sut: InvalidUserPasswordException =
      new InvalidUserPasswordException();
    expect(sut).toBeInstanceOf(Error);
  });
});
