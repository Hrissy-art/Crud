import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/message.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private _apiService: ApiService = inject(ApiService);
  users$: Observable<User[]> = this._apiService.getAllUsers$();
}
