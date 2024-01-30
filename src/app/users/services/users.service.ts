import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {USERS} from "../data/USERS";
import {User} from "../model/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getUsers() {
    return of(USERS)
  }

  getUserById(userId: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === userId))
    );

  }
}
