import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserslistComponent} from "./users/userslist/userslist.component";
import {UsersdetailComponent} from "./users/usersdetail/usersdetail.component";

const routes: Routes = [
  {
    path: 'userslist',
    component: UserslistComponent
  },
  {
    path: 'userdetail',
    component: UsersdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
