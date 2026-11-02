import { Component, EventEmitter, Input, output, Output } from '@angular/core';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class UserComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>();

  onSelectUser() {
    this.select.emit(this.id);
  }

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
