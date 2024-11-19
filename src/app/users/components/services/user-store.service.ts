import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  private _users$ = new BehaviorSubject<User[]>([]);
  constructor() {}

  setAll$(users: User[]): Observable<User[]> {
    this._users$.next(users);
    return this._users$.asObservable();
  }

  add$(user: User): Observable<User[]> {
  this._users$.next([...this._users$.value, user]) //j'extrais la valeur contenue dans Bahvir subject , le nouvel élément de mon tableau
  return this._users$.asObservable();
}
}
