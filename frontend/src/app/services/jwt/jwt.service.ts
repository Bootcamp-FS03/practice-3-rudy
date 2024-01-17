import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { JwtAPIPayload } from 'src/app/types';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getDecodedToken(): JwtAPIPayload | null{
    return this.decodeToken(this.getToken());
  }

  getSessionUser(){
    return this.getDecodedToken()?.user
  }

  decodeToken(token: string | null): JwtAPIPayload | null{
    try {
      if(!token)
        throw new Error("Null token")
      return jwt_decode.jwtDecode(token);
    } catch (error) {
      console.error('Error decoding JWT', error);
      return null
    }
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    //localStorage.setItem("USERDATA",this.decodeToken(token)?)
  }

  destroyToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }
}
