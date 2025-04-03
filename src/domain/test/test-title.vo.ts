export const TITLE_MAX_LENGTH = 22

export class TestTitle {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  public static create(value: string): TestTitle {
    const trimmed = value.trim();
    if (trimmed.length < 1 || trimmed.length > TITLE_MAX_LENGTH) {
      throw new Error(`タイトルは1〜${TITLE_MAX_LENGTH}文字で入力してください`);
    }
    return new TestTitle(trimmed);
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: TestTitle): boolean {
    return this._value === other.value;
  }
}