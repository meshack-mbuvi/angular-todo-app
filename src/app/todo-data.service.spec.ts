import { TestBed, inject } from "@angular/core/testing";

import { TodoDataService } from "./todo-data.service";
import { Todo } from "./todo";

describe("TodoDataService test", async () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TodoDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  describe("#getAllTodos()", () => {
    it("should return an empty array by default", () => {
      expect(service.getAllTodos()).toEqual([]);
    });

    it("should return all todos", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo1 = new Todo({ title: "Hello 1", complete: false });
        let todo2 = new Todo({ title: "Hello 2", complete: true });

        service.addTodo(todo1);
        service.addTodo(todo2);
        expect(service.getAllTodos()).toEqual([todo1, todo2]);
      }
    ));
  });

  describe("#save(todo)", () => {
    it("should automatically assign an incrementing id", inject(
      [TodoDataService],
      (service: TodoDataService) => {
        let todo = new Todo({ title: "Hello 1", complete: false });
        let todo2 = new Todo({ title: "Hello 2", complete: true });
        service.addTodo(todo);
        service.addTodo(todo2);

        expect(service.getTodoById(1)).toEqual(todo);
        expect(service.getTodoById(2)).toEqual(todo2);
      }
    ));
  });
});
