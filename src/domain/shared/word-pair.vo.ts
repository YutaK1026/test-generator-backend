export class WordPair {
  private readonly _key: string;
  private readonly _value: string;

  private constructor(key: string, value: string) {
    this._key = key;
    this._value = value;
  }

  public static create(key: string, value: string): WordPair {
    const trimmedKey = key.trim();
    const trimmedValue = value.trim();

    if (trimmedKey.length === 0 || trimmedValue.length === 0) {
      throw new Error('単語ペアの key, value は空であってはいけません');
    }

    return new WordPair(trimmedKey, trimmedValue);
  }

  public get key(): string {
    return this._key;
  }

  public get value(): string {
    return this._value;
  }

  public equals(other: WordPair): boolean {
    return this._key === other.key && this._value === other.value;
  }
}
