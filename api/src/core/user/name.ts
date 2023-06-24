class Name {
  public static MIN_LENGHT: number = 2;
  public static MAX_LENGHT: number = 25;
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
    return value.length < Name.MIN_LENGHT || value.length > Name.MAX_LENGHT;
  };

  private isValidFormat = (value: string): boolean => {
    return /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/.test(value) === false;
  };
}

export default Name;
