export class UserEmail {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  public static create(email: string): UserEmail {
    if (!this.isValidEmail(email)) {
      throw new Error('無効なメールアドレス形式です');
    }
    return new UserEmail(email.toLowerCase());
  }

  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: UserEmail): boolean {
    return this.value === other.value;
  }
}
