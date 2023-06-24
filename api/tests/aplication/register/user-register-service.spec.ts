import UserMother from "../../mother/user.mother";
import UserRegisterRequest from "../../../src/core/aplication/register/user-register-request";
import UserRegisterService from "../../../src/core/aplication/register/user-register-service";

describe("Register user service", () => {
  it("shoud create an user", () => {
    const request: UserRegisterRequest = UserMother.UserRegisterRequest();
    const sut: UserRegisterService = new UserRegisterService();

    expect(() => sut.execute(request)).not.toThrow();
  });
});
