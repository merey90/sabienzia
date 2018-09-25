import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {
  showAdminsOnly = false;
  users: User[] = [];
  private usersSubs: Subscription;
  private addUsersSubs: Subscription[] = [];
  private settingsSubs: Subscription;

  constructor(
    private settingsService: SettingsService,
    private userService: UserService
  ) { }

  handleAddUser(user: User): void {
    this.addUsersSubs.push(
      this.userService.addUser(user)
        .subscribe(newUser => console.log(`user ${newUser.firstname} successfully added`))
    );
  }

  getUsers(): void {
    this.usersSubs = this.userService.getUsers().subscribe(users => {
      if (this.showAdminsOnly) {
        this.users = users.filter((user: User) => user.role === 'Admin');
      } else {
        this.users = users;
      }
    });
  }

  getSettings(): void {
    this.settingsSubs = this.settingsService.getSettings().subscribe(settings => {
      this.showAdminsOnly = settings.showAdminsOnly;
      this.getUsers();
    });
  }

  ngOnInit() {
    this.getSettings();
  }

  ngOnDestroy() {
    if (!!this.settingsSubs) {
      this.settingsSubs.unsubscribe();
    }
    if (!!this.usersSubs) {
      this.usersSubs.unsubscribe();
    }
    this.addUsersSubs.map((sub: Subscription) => sub.unsubscribe());
  }
}
