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

  // select = output<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  //imagePath = computed(() => 'assets/users/' + this.avatar());
  onSelectUser() {
    this.select.emit(this.id);
  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().av  atar);

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
