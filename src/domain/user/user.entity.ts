import { UserEmail } from './user-email.vo';
import { UserName } from './user-name.vo';
import { LoginMethod } from './user-login-method.vo';

export class User {
  private readonly _id: string;
  private readonly _email: UserEmail;
  private _name: UserName;
  private readonly _loginMethod: LoginMethod;
  private _passwordHash?: string;

  private constructor(
    id: string,
    email: UserEmail,
    name: UserName,
    loginMethod: LoginMethod,
    passwordHash?: string,
  ) {
    this._id = id;
    this._email = email;
    this._name = name;
    this._loginMethod = loginMethod;
    this._passwordHash = passwordHash;
  }

  public static createLocal(
    id: string,
    email: UserEmail,
    name: UserName,
    passwordHash: string,
  ): User {
    return new User(id, email, name, LoginMethod.LOCAL, passwordHash);
  }

  public static createGoogle(
    id: string,
    email: UserEmail,
    name: UserName,
  ): User {
    return new User(id, email, name, LoginMethod.GOOGLE);
  }

  public get id(): string {
    return this._id;
  }

  public get email(): UserEmail {
    return this._email;
  }

  public get name(): UserName {
    return this._name;
  }

  public get loginMethod(): LoginMethod {
    return this._loginMethod;
  }

  public get passwordHash(): string | undefined {
    return this._passwordHash;
  }

  public changePasswordHash(newHash: string): void {
    if (!this.loginMethod.isLocal()) {
      throw new Error('Googleログインユーザーはパスワードを変更できません');
    }
    this._passwordHash = newHash;
  }

  public rename(newName: UserName): void {
    this._name = newName;
  }
}
