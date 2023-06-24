import User from "../../src/core/user/user";
import Email from "../../src/core/user/email";
import Name from "../../src/core/user/name";
import { faker } from "@faker-js/faker";

class UserMother {
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

  public static User(name?: string, email?: string): User {
    return new User(UserMother.Name(name), UserMother.Email(email));
  }

  public static Email(email?: string): Email {
    return new Email(email || faker.internet.email());
  }
}

export default UserMother;
