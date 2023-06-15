import Email from "../../src/core/user/email";
import Name from "../../src/core/user/name";

class UserMother {
  public static Name(name?: string): Name {
    return new Name(name || "dummy name");
  }

  public static Email(email?: string): Email {
    return new Email(email || "dummy@email.com");
  }
}

export default UserMother;
