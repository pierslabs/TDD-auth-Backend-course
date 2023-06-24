import User from "../../src/core/user/user";
import Email from "../../src/core/user/email";
import Name from "../../src/core/user/name";
import Password from "../../src/core/user/password";
import { faker } from "@faker-js/faker";

class UserMother {
  public static PASSWORD_TEST: string = "abcd1234!";
  public static Name(name?: string): Name {
    return new Name(
      name
        ? name
        : faker.word.adverb({
            length: {
              min: Name.MIN_LENGHT,
              max: Name.MAX_LENGHT,
            },
          })
    );
  }
  public static Password(password?: string): Password {
    return new Password(password ? password : UserMother.PASSWORD_TEST);
  }

  public static User(name?: string, email?: string, password?: string): User {
    return new User(
      UserMother.Name(name),
      UserMother.Email(email),
      UserMother.Password(password)
    );
  }

  public static Email(email?: string): Email {
    return new Email(email || faker.internet.email());
  }
}

export default UserMother;
