class Email {
  public emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

  constructor(public readonly value: string) {
    this.validateOrThrowException(this.value);
  }

  private validateOrThrowException(value: string) {
    if (!this.emailRegex.test(value)) {
      throw new Error();
    }
  }
}
export default Email;
