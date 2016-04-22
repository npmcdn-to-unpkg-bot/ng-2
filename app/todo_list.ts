import {Component, Input} from 'angular2/core';
import {Todo} from './todo';

@Component({
  selector: 'todo-list',
  styles: [`
    .done-true {
      text-decoration: line-through;
      color: grey;
    }`
  ],
  templateUrl: 'app/templates/todo_lists.html'
})
export class TodoList {
  @Input() todos: Todo[];
}