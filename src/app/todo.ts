export class Todo {
  id: number;
  title: string = "";
  complete: boolean = false;
  updated_at: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
