export class OpenModal{
  static readonly type = '[Modal] open'
  constructor(public modal: string){}
}

export class CloseModal{
  static readonly type = '[Modal] close'
}