import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  styleUrl: './task.css',
  templateUrl: './task.html',
})
export class TaskComponent {
  @Input() name?: string;
}
