export type LoginMethodType = 'local' | 'google';

export class LoginMethod {
  private readonly _value: LoginMethodType;

  private constructor(value: LoginMethodType) {
    this._value = value;
  }

  public static readonly LOCAL = new LoginMethod('local');

  public static readonly GOOGLE = new LoginMethod('google');

  public static from(value: string): LoginMethod {
    if (value === 'local') return this.LOCAL;
    if (value === 'google') return this.GOOGLE;
    throw new Error(`無効なログイン方式です: ${value}`);
  }

  public get value(): LoginMethodType {
    return this._value;
  }

  public isLocal(): boolean {
    return this._value === 'local';
  }

  public isGoogle(): boolean {
    return this._value === 'google';
  }

  public equals(other: LoginMethod): boolean {
    return this._value === other.value;
  }
}
