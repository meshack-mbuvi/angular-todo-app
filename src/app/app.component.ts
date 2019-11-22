import { TodoDataService } from './todo-data.service';
import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    TodoDataService]
})
export class AppComponent {
  title = 'todo-app';
  newTodo :Todo = new Todo()

  constructor(private todoDataService: TodoDataService){
  }

  toggleTodoComplete(todo){
    this.todoDataService.toggleTodoComplete(todo)
  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo)
    this.newTodo = new Todo()
  }

  removeTodo(todo){
    return this.todoDataService.deleteTodoById(todo.id)
  }

  get todos(){
    return this.todoDataService.getAllTodos()
  }
}
