import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-foodlog',
  templateUrl: './foodlog.component.html',
  styleUrls: ['./foodlog.component.css']
})
export class FoodlogComponent  {
	
	 public tasks: Task[] = [
      new Task("MacDonald Burger","Had two days in a row", 900),
      new Task("Green Salad"," For Lunch", 200),
      new Task("Kebab","Didn't drink soda", 600),
      new Task("Dim Sum","Had to share", 200)
  ];

   selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
  	this.selectedTask = null;
  }
}


 
  


