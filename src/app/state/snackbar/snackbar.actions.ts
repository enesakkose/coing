export class ShowSnackbar {
  static readonly type = '[Snackbar] show'
  constructor(public message: string) {}
}