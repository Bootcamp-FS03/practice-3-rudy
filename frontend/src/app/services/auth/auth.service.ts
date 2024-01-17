import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../jwt/jwt.service';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated() {
    return (
      this.jwtService.getToken() &&
      (this.jwtService.getDecodedToken()?.exp as number) > Date.now() / 1000
    );
  }

  private baseUrl = `${environment.apiUrl}/auth`; // Your backend API base URL

  constructor(
    private http: HttpClient,
    private jwtService: JwtService,
    private router: Router,
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { username, password });
  }

  logout(): void {
    this.jwtService.destroyToken();
    localStorage.clear();
    this.router.navigate(['/login']);
    // You might want to add additional cleanup steps here
  }

  register(req: RegisterRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { ...req });
  }
  
}
