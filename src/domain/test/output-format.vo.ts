import { OutputFormatType } from "src/shared/type/test";

export class OutputFormat {
  private readonly _value: OutputFormatType;

  private constructor(value: OutputFormatType) {
    this._value = value;
  }

  public static readonly E2J = new OutputFormat('english-to-japanese');
  public static readonly J2E = new OutputFormat('japanese-to-english');

  public static from(value: string): OutputFormat {
    switch (value) {
      case 'english-to-japanese': return OutputFormat.E2J;
      case 'japanese-to-english': return OutputFormat.J2E;
      default: throw new Error(`不正な出力形式: ${value}`);
    }
  }

  public get value(): OutputFormatType {
    return this._value;
  }

  public equals(other: OutputFormat): boolean {
    return this._value === other.value;
  }
}