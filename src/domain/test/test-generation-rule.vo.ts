export const QUESTION_MAX_NUM = 50

import { QuestionMode } from './question-mode.vo';

export class TestGenerationRule {
  private readonly _mode: QuestionMode;
  private readonly _range?: { start: number; end: number };
  private readonly _random?: { count: number };

  private constructor(
    mode: QuestionMode,
    range?: { start: number; end: number },
    random?: { count: number },
  ) {
    this._mode = mode;
    this._range = range;
    this._random = random;
  }

  public static createByRange(range: { start: number; end: number }): TestGenerationRule {
    if (range.start < 0 || range.end < range.start) {
      throw new Error('不正な範囲指定です');
    }
    return new TestGenerationRule(QuestionMode.RANGE, range);
  }

  public static createByRandom(random: { count: number }): TestGenerationRule {
    if (random.count < 1 || random.count > QUESTION_MAX_NUM) {
      throw new Error(`出題数は1〜${QUESTION_MAX_NUM}の範囲で指定してください`);
    }
    return new TestGenerationRule(QuestionMode.RANDOM, undefined, random);
  }

  public get mode(): QuestionMode {
    return this._mode;
  }

  public get range(): { start: number; end: number } | undefined {
    return this._range;
  }

  public get count(): number | undefined {
    return this._random?.count;
  }

  public isRange(): boolean {
    return this._mode.isRange();
  }

  public isRandom(): boolean {
    return this._mode.isRandom();
  }
}