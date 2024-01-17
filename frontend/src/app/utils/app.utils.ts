import { AbstractControl, Validators } from '@angular/forms';

export const UserNameValidator = () => {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value as string;

    if (!email) {
      // If email is empty, mark as valid
      return null;
    }

    if (email.indexOf('@') === -1) {
      // '@' symbol is not present, validate as a simple string
      return null;
    }

    // '@' symbol is present, use Validators.email
    return Validators.email(control);
  };
};
