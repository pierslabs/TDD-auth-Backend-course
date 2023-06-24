import UserRegisterRequest from "../../../src/core/aplication/register/user-register-request";
import UserMother from "../../mother/user.mother";

describe("Register user request", () => {
  it("shoud create an user", () => {
    const sut: UserRegisterRequest = UserMother.UserRegisterRequest();

    expect(sut).toBeInstanceOf(UserRegisterRequest);
    expect(sut.name).toBeDefined();
    expect(sut.email).toBeDefined();
    expect(sut.password).toBeDefined();
  });
});
