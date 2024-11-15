import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {

  private _apiService: ApiService = inject(ApiService);
   router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  // L'id de l'utilisateur à supprimer
  userId: number;

  constructor() {
    // Récupérer l'id de l'utilisateur depuis les paramètres de la route
    this.userId = this.activatedRoute.snapshot.params['id'];
  }

  // Méthode pour supprimer l'utilisateur
  deleteUser(): void {
    this._apiService.deleteUser$(this.userId).subscribe({
      next: () => {
        console.log(`Utilisateur avec id ${this.userId} supprimé.`);
        // Rediriger vers la liste des utilisateurs après la suppression
        this.router.navigate(['/users']);
      },
      error: (err: any) => {
        console.error('Erreur lors de la suppression de l\'utilisateur :', err);
      }
    });
  }
}