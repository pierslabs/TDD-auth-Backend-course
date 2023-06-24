// really this is an DTO
class UserRegisterRequest {
  constructor(
    public readonly name: string,
    public readonly email: string,
    public readonly password: string
  ) {}
}

export default UserRegisterRequest;
