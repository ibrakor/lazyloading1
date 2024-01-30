import {Injectable} from '@angular/core';
import {of} from "rxjs";
import {USERS} from "../data/USERS";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getUsers() {
    return of(USERS)
  }

  getUserById(userId: number) {
    return of(USERS.find(movie => movie.id == userId))

  }
}
