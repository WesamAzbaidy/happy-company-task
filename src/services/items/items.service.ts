import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { deleteItem, Item } from './Iitems';
import { base_URL } from '../baseURL';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/Items`);
  }
  getHighLowItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/Items/highlowitems`);
  }
  getItemById(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/Items/${id}`);
  }
  deleteItemById(id: string): Observable<deleteItem> {
    return this.http.delete<deleteItem>(`${this.baseUrl}/Items/${id}`);
  }
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/Items`, item);
  }
  editItem(id: string, item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/Items/${id}`, item);
  }
}
