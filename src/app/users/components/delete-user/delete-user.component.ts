import { Component, inject, Input } from '@angular/core';
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

  private _userApiService: ApiService = inject(ApiService);
   router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  @Input({ required: true }) userID!: string;


  deleteUser(): void {
    this._userApiService.deleteUser$(this.userID);
  }

}