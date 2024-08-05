import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { deleteWarehouse, Warehouse, Warehouses } from './warehouse';
import { base_URL } from '../baseURL';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  getWarehouse(): Observable<Warehouses[]> {
    return this.http.get<Warehouses[]>(`${this.baseUrl}/Warehouses`);
  }
  getWarehouseById(id: string): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${this.baseUrl}/Warehouses/${id}`);
  }
  deleteWarehouseById(id: string): Observable<deleteWarehouse> {
    return this.http.delete<deleteWarehouse>(
      `${this.baseUrl}/Warehouses/${id}`
    );
  }
  addWarehouse(item: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(`${this.baseUrl}/Warehouses`, item);
  }
  editWarehouse(id: string, item: Warehouse): Observable<Warehouse> {
    return this.http.post<Warehouse>(`${this.baseUrl}/Warehouses/${id}`, item);
  }
}
