import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import { ResetPasswordService } from 'src/app/services/resetPassword/reset-password.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetForm: FormGroup;
  resetSent = false;
  email: string | undefined;

  constructor(
    private fb: FormBuilder,
    private resetPasswordService: ResetPasswordService,
  ) {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.resetForm.valid) {
      this.email = this.resetForm.get('email')?.value;
      this.resetPasswordService
        .resetPassword(this.email as string)
        .subscribe({ next: (res) => (this.resetSent = true) });
    }
  }
}
