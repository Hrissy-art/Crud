import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/message.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private _userApiService: ApiService = inject(ApiService);
  user: User = {
    id: "",
    username: "",
    email: "",
  };

  onSubmit(): void {
    const userId = Math.floor(Math.random() * 1000).toString();
    this.user.id = userId;
    this._userApiService.createUser$(this.user);
  }
}