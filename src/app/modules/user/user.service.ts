import { Injectable } from '@angular/core';
import { User } from './user.model';
import { USERS_MOCK } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[];

  constructor() {
    this.users = USERS_MOCK;
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }
}
