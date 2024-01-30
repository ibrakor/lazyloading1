import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {User} from "../../model/User";
import {Observable} from "rxjs";

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrl: './userslist.component.css'
})
export class UserslistComponent implements OnInit {

  post$: Observable<User[]>

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.post$ = this.usersService.getUsers()
  }
}
