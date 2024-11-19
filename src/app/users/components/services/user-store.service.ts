import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private _users$ = new BehaviorSubject<User[]>([]);
  constructor() { }
}
