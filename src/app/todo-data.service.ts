import { Todo } from "./todo";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoDataService {
  /**
   * placeholder for last id so we can simulate
   * automatic incrementing of ids
   */
  lastId: number = 0;

  // placeholder for todos
  todos: Todo[] = [];

  constructor() {}

  // simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);
    return this;
  }

  //Delete todo
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  //simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });

    return updatedTodo;
  }
}
