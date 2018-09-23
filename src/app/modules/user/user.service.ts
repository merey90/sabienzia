import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { User } from './user.model';
import { USERS_MOCK } from './users.mock';

/**
 * simulate slow service
 */
const slow = 1500;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];

  constructor() {
    this.users = USERS_MOCK;
  }

  getUsers(): Observable<User[]> {
    return of(this.users).pipe(delay(slow));
  }

  addUser(user: User): Observable<User> {
    this.users.push(user);
    return of(user).pipe(delay(slow));
  }
}
