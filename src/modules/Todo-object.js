export default class Todo {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index + 1;
  }
}