import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _BASE_API_URL: string = 'http://localhost:3000/';
  private _http = inject(HttpClient);

  getAllUsers$(): Observable<User[]> {
    return this._http.get<User[]>(this._BASE_API_URL + 'users');
  }

  createUser$(newUser: User): Observable<User> {
    return this._http.post<User>(this._BASE_API_URL + 'users', newUser);
  }
  updateUser$(updatedUser: User): void {
    this._http
      .put<User>(this._BASE_API_URL + 'users/' + updatedUser.id, updatedUser)
      .subscribe();
  }

  deleteUser$(id: string): void {
    this._http.delete<void>(this._BASE_API_URL + 'users/' + id).subscribe();
  }
}
