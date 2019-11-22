import { TodoEditComponent } from "./todo-edit/todo-edit.component";
import { TodoAddComponent } from "./todo-add/todo-add.component";
import { TodoComponent } from "./todo/todo.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: TodoComponent,
    data: { title: "List of todos" }
  },
  {
    path: "todo/add",
    component: TodoAddComponent,
    data: { title: "Add todo" }
  },
  {
    path: "todo/edit",
    component: TodoEditComponent,
    data: { title: "Edit todo"}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
