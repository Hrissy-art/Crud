import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  User } from '../../../models/message.model';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  newUser: User = {
    id: 0,
    username: "",
    email: "",
  };
contactForm: any;


private _apiService: ApiService = inject(ApiService);

  onSubmit(): void {
    this._apiService.createUser$(this.newUser).subscribe({
      next: (user) => {
        console.log('Utilisateur créé avec succès :', user);
      },
      error: (err) => {
        console.error('Erreur lors de la création de l\'utilisateur :', err);
      }
    });
    console.log(this.newUser);
  }
}
