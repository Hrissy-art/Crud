import { Routes } from '@angular/router';
import { CreateUserComponent } from './users/components/create-user/create-user.component';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { DeleteUserComponent } from './users/components/delete-user/delete-user.component';
import { UpdateUserComponent } from './users/components/update-user/update-user.component';

export const routes: Routes = [ {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
 
  {
    path: 'form',
    component: CreateUserComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteUserComponent,

  },
  { path: 'update/:id', component: UpdateUserComponent }, 
];
