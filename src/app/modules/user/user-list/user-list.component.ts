import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private showAdminsOnly;
  private users: User[] = [];

  constructor(
    private settingsService: SettingsService,
    private userService: UserService
  ) {
    this.showAdminsOnly = this.settingsService.getSettings().showAdminsOnly;
    if (this.showAdminsOnly) {
      this.users = this.userService.getUsers().filter((user: User) => user.role === 'Admin');
    } else {
      this.users = this.userService.getUsers();
    }
  }

  handleAddUser(user: User): void {
    this.userService.addUser(user);
  }

  ngOnInit() {
  }

}
