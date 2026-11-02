import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from './task/task';

@Component({
  imports: [HeaderComponent, UserComponent, TaskComponent],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('first-app-angular-app');

  users = DUMMY_USERS;
  selectedUserId = 'u2';

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
