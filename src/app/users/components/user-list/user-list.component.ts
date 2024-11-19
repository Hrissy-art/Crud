import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
import { User } from '../../../models/message.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UpdateUserComponent } from "../update-user/update-user.component";
import { DeleteUserComponent } from "../delete-user/delete-user.component";
import { ClonePipe } from "../../../core/clone.pipe";
import { UserFacadeService } from '../services/user-facade.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterModule, UpdateUserComponent, DeleteUserComponent, ClonePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  private _facadeUserService: UserFacadeService = inject(UserFacadeService);
  private _apiService: ApiService = inject(ApiService);
  users$: Observable<User[]> = this._facadeUserService.getAll$();
}
