import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, Input, NgModule } from '@angular/core';
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
  private _userApiService: ApiService = inject(ApiService);
  @Input({ required:true}) user!: User

  onSubmit(): void {
    this._userApiService.updateUser$(this.user);
  }
}