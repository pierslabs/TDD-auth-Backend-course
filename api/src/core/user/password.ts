class Password {
  public static MIN_LENGHT: number = 2;
  public static MAX_LENGHT: number = 100;
  constructor(public readonly value: string) {
    this.validateOrThrowException(value);
  }

  private validateOrThrowException(value: string) {
    const invalidLength = this.isValidLength(value);
    const invalidFormat = this.isValidFormat(value);

    if (invalidLength || invalidFormat) {
      throw new Error();
    }
  }

  private isValidLength = (value: string): boolean => {
    return (
      value.length < Password.MIN_LENGHT || value.length > Password.MAX_LENGHT
    );
  };

  private isValidFormat = (value: string): boolean => {
    return (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        value
      ) === false
    );
  };
}

export default Password;
