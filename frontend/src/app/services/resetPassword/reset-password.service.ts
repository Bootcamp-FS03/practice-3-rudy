import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private httpClient: HttpClient) {}

  private baseUrl = `${environment.apiUrl}/auth/reset-password`;

  resetPassword(email: string): Observable<ApiResponse<null>> {
    return this.httpClient.get<ApiResponse<null>>(this.baseUrl, {
      params: new HttpParams().set('email', email),
    });
  }
}
