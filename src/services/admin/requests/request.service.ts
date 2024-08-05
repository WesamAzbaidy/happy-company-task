import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestLogService } from './request';
import { base_URL } from '../../baseURL';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  getRequest(): Observable<RequestLogService[]> {
    return this.http.get<RequestLogService[]>(
      `${this.baseUrl}/RequestLogService`
    );
  }
}
