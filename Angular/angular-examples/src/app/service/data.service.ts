import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { User } from '../ngrx/models/user.model';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
});

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dbUrl = environment.dbUrl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.dbUrl}/users`).pipe(delay(500));
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.dbUrl}/users`, user, { headers });
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.dbUrl}/users/${user.id}`, user, {
      headers,
    });
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${this.dbUrl}/users/${id}`, { headers });
  }
}
