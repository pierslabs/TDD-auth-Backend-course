class Name {
  constructor(public readonly value: string) {
    this.validateOrThrowException(value);
  }

  private validateOrThrowException(value: string) {
    // only letters and spaces /^[a-zA-Z ]+$/
    const invalidLength = value.length < 2 || value.length > 25;
    const invalidFormat = /^[a-zA-Z][a-zA-Z\s]*[a-zA-Z]$/.test(value) === false;

    if (invalidLength || invalidFormat) {
      throw new Error();
    }
  }
}

export default Name;
