import { AbstractControl } from '@angular/forms';

export class CustomEmailValidator {

  static mailFormat(control: AbstractControl): ValidationResult {
    const EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
    if (control.value && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { email: true };
    }

    return null;
  }
}

interface ValidationResult {
  [key: string]: boolean;
}