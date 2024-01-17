import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtService } from '../../services/jwt/jwt.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private jwtService: JwtService,
    private router: Router,
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.jwtService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // Handle authentication errors (e.g., 401 Unauthorized)
        if (error.status === 401) {
          // Optionally, you can handle refresh token logic here
          // or just redirect to the login page
          this.router.navigate(['/login']);
          return throwError(() => new Error('Unauthorized'));
        }
        return throwError(() => error);
      }),
    );
  }
}
