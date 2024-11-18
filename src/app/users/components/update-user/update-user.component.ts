import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../models/message.model';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CommonModule, RouterModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent{
  userId$: Observable<string>; 
  editableUser: User | null = null; 

  private _apiService: ApiService = inject(ApiService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  constructor() {
    this.userId$ = this.activatedRoute.paramMap.pipe(
      map(params => {
        const userId = params.get('id') || '';
        console.log('ID extrait de l\'URL:', userId);
        return userId;
      })
    );

    this.userId$.pipe(
      switchMap(userId => 
        this._apiService.getAllUsers$().pipe(
          map(users => users.find(user => user.id === userId) || null),
          tap(user => {
            if (user) {
              this.editableUser = { ...user }; 
              console.log('Utilisateur chargé:', this.editableUser);
            } else {
              console.warn('Utilisateur non trouvé.');
            }
          })
        )
      )
    ).subscribe();
  }

  onSubmit(): void {
    if (this.editableUser && this.editableUser.id) {
      console.log('Envoi des données mises à jour:', this.editableUser);

      this._apiService.updateUser$(this.editableUser.id, this.editableUser).subscribe({
        next: updatedUser => {
          console.log('Utilisateur mis à jour avec succès:', updatedUser);
          this.router.navigate(['/users']);  
        },
        error: err => {
          console.error('Erreur lors de la mise à jour:', err);
        }
      });
    }
  }
}