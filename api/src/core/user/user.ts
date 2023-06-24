import Email from "./email";
import Name from "./name";
import Password from "./password";

class User {
  constructor(
    public name: Name,
    public email: Email,
    public password: Password
  ) {}
}

export default User;
