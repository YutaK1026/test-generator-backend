import { TestTitle } from './test-title.vo';
import { VocabularyType } from './vocabulary-type.vo';
import { TestGenerationRule } from './test-generation-rule.vo';
import { OutputFormat } from './output-format.vo';
import { WordPair } from 'src/domain/shared/word-pair.vo';

export class Test {
  private readonly _id: string;
  private readonly _userId: string;
  private readonly _title: TestTitle;
  private readonly _vocabulary: VocabularyType;
  private readonly _generationRule: TestGenerationRule;
  private readonly _wordPairs: WordPair[];
  private readonly _outputFormats: OutputFormat;
  private readonly _excludePrevious: boolean;
  private readonly _createdAt: Date;
  private readonly _pdfPath?: string;
  private readonly _imagePath?: string;

  constructor(
    id: string,
    userId: string,
    title: TestTitle,
    vocabulary: VocabularyType,
    generationRule: TestGenerationRule,
    wordPairs: WordPair[],
    outputFormats: OutputFormat,
    excludePrevious: boolean,
    createdAt: Date = new Date(),
    pdfPath?: string,
    imagePath?: string,
  ) {
    this._id = id;
    this._userId = userId;
    this._title = title;
    this._vocabulary = vocabulary;
    this._generationRule = generationRule;
    this._wordPairs = wordPairs;
    this._outputFormats = outputFormats;
    this._excludePrevious = excludePrevious;
    this._createdAt = createdAt;
    this._pdfPath = pdfPath;
    this._imagePath = imagePath;
  }

  get id(): string {
    return this._id;
  }

  get userId(): string {
    return this._userId;
  }

  get title(): TestTitle {
    return this._title;
  }

  get vocabulary(): VocabularyType {
    return this._vocabulary;
  }

  get generationRule(): TestGenerationRule {
    return this._generationRule;
  }

  get wordPairs(): WordPair[] {
    return [...this._wordPairs];
  }

  get outputFormats(): OutputFormat {
    return this._outputFormats;
  }

  get excludePrevious(): boolean {
    return this._excludePrevious;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get pdfPath(): string | undefined {
    return this._pdfPath;
  }

  get imagePath(): string | undefined {
    return this._imagePath;
  }
}
