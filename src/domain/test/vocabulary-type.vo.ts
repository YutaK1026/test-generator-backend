import type { VocabularyTypeValue } from "src/shared/type/test";

export class VocabularyType {
  private readonly _value: VocabularyTypeValue;

  private constructor(value: VocabularyTypeValue) {
    this._value = value;
  }

  public static readonly LEAP = new VocabularyType('LEAP 英単語帳');

  public static from(value: string): VocabularyType {
    if (value === 'LEAP 英単語帳') return VocabularyType.LEAP;
    throw new Error(`無効なVocabularyType: ${value}`);
  }

  public get value(): VocabularyTypeValue {
    return this._value;
  }

  public equals(other: VocabularyType): boolean {
    return this._value === other.value;
  }
}