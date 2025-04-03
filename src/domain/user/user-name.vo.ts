const USER_NAME_LENGTH = 18

export class UserName {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  public static create(name: string): UserName {
    const trimmed = name.trim();

    if (trimmed.length < 1 || trimmed.length > USER_NAME_LENGTH) {
      throw new Error(`ユーザー名は1〜${USER_NAME_LENGTH}文字で入力してください`);
    }

    return new UserName(trimmed);
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: UserName): boolean {
    return this._value === other.value;
  }
}
