import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lookups } from './lookup';
import { base_URL } from '../baseURL';

@Injectable({
  providedIn: 'root',
})
export class LookupsService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  getLookups(): Observable<Lookups[]> {
    return this.http.get<Lookups[]>(`${this.baseUrl}/Lookup/lookup`);
  }
}
