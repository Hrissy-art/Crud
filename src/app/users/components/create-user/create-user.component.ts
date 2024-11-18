import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/message.model';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  private _userApiService: ApiService = inject(UserApiService);
  user: User = new User("", "", "");

  onSubmit(): void {
    const userId = Math.floor(Math.random() * 1000).toString();
    this.user.id = userId;
    this._userApiService.post$(this.user);
  }
}