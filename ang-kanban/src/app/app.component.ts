import { Component } from '@angular/core';
import { Task } from './task/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-kanban';

  todo: Task[] = [
    {
      title: 'Buy Milk',
      description: 'Go buy milk'
    },
    {
      title: 'Create a Kanban board',
      description: 'Using firebase and angular create kanban board'
    }
  ]
}
