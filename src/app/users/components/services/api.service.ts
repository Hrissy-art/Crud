import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private  _BASE_API_URL: string = 'http://localhost:3000/users';;
  private http = inject(HttpClient);

  getAllUsers$(): Observable<User[]> {
    return this.http.get<User[]>(this._BASE_API_URL);
  }

  
  createUser$(newUser: User): Observable<User> {
    return this.http.post<User>(this._BASE_API_URL, newUser);
  }
  updateUser$(id: string, updatedUser: User): Observable<User> {
    return this.http.put<User>(`${this._BASE_API_URL}/${id}`, updatedUser);
  }
  

  deleteUser$(id: string): Observable<void> {
    return this.http.delete<void>(`${this._BASE_API_URL}/${id}`);
  }
}
