import Email from "../../../src/core/user/email";
describe("Email", () => {
  it("should create name with valid email value", () => {
    const email = "dummy@test.com";

    const sut: Email = new Email(email);
    expect(sut).toBeInstanceOf(Email);
    expect(sut.value).toStrictEqual(email);
  });

  it("should throw error with invalid email value", () => {
    const email = "dummy@test";
    expect(() => new Email(email)).toThrow();
  });
  it("should throw error with empty value", () => {
    const email = "";
    expect(() => new Email(email)).toThrow();
  });
  it("should throw error with empty value", () => {
    const email = "dummy@@test.com";
    expect(() => new Email(email)).toThrow();
  });
});
