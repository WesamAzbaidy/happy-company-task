import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDeleteUser, IUser, IUserEdit, IUsers } from './users';
import { base_URL } from '../../baseURL';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private baseUrl = base_URL;

  constructor(private http: HttpClient) {}

  getUsers(page: number, pageSize: number): Observable<IUsers[]> {
    let params = new HttpParams()
      .set('pageNumber', page.toString())
      .set('pageSize', pageSize.toString());
    return this.http.get<IUsers[]>(`${this.baseUrl}/User`, { params });
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/User/${id}`);
  }
  deleteUserById(id: string): Observable<IDeleteUser> {
    return this.http.delete<IDeleteUser>(`${this.baseUrl}/User/${id}`);
  }
  addUser(item: IUserEdit): Observable<IUser> {
    return this.http.post<IUser>(`${this.baseUrl}/User`, item);
  }
  editUser(id: string, item: IUserEdit): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/User/${id}`, item);
  }
  activeUser(active: boolean, id: string): Observable<IUser> {
    return this.http.put<IUser>(`${this.baseUrl}/User/${id}/change-active`, {
      active,
    });
  }
}
