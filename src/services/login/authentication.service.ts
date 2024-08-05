import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { base_URL } from '../baseURL';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, {
      email,
      password,
    });
  }
}
