import { Component } from '@angular/core';
import { Task } from './model/task';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  private tasks = [
    new Task(
      "Do a cool thing",
      false
    ),
    new Task(
      "Do another cool thing",
      false
    )
  ]
  private currentTask = new Task(null, false);
}