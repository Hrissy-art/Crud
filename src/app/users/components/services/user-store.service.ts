import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _users$ = new BehaviorSubject<User[]>([]);
  constructor() { }

  setAll$(users: User[]): Observable<User[]> {
    this._users$.next(users);
    return this._users$.asObservable();
  
}}
