import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users/users.component';
import {UserslistComponent} from './users/userslist/userslist.component';
import {UsersdetailComponent} from './users/usersdetail/usersdetail.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserslistComponent,
    UsersdetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
