import { inject, Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserStoreService } from './user-store.service';
import { Observable, switchMap, tap } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class UserFacadeService {

  private _api: ApiService = inject(ApiService);
  private _store: UserStoreService = inject(UserStoreService);
  constructor() { }

  getAll$(): Observable<User[]> { 
  return this._api.getAllUsers$().pipe(
      switchMap(users => this._store.setAll$(users)) //je passe du premier observable au deixème 
    )
}
post$(user: User){
  this._api.createUser$(user).pipe(
    tap((user: User) => this._store.add$(user))
  ).subscribe();
}
}
