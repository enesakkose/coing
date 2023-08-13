export class Login{
  static readonly type = '[Login] user'
  constructor(public username: string){}
}

export class Logout{
  static readonly type = '[Logout] user'
}