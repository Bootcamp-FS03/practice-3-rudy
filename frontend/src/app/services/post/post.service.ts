import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse, Post } from '../../types';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = `${environment.apiUrl}/api/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<ApiResponse<Post[]>> {
    return this.http.get<ApiResponse<Post[]>>(this.apiUrl).pipe(
      catchError((error) => {
        return of({ status: 'error', error: 'Failed to fetch posts' });
      }),
    );
  }
}
