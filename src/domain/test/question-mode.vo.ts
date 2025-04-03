import { QuestionModeType } from "src/shared/type/test";

export class QuestionMode {
  private readonly _value: QuestionModeType;

  private constructor(value: QuestionModeType) {
    this._value = value;
  }

  public static readonly RANGE = new QuestionMode('range');
  public static readonly RANDOM = new QuestionMode('random');

  public static from(value: string): QuestionMode {
    if (value === 'range') return this.RANGE;
    if (value === 'random') return this.RANDOM;
    throw new Error(`不正なQuestionMode: ${value}`);
  }

  public get value(): QuestionModeType {
    return this._value;
  }

  public isRange(): boolean {
    return this._value === 'range';
  }

  public isRandom(): boolean {
    return this._value === 'random';
  }

  public equals(other: QuestionMode): boolean {
    return this._value === other.value;
  }
}