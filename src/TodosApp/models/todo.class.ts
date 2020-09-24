export class ToDo {
  dateCompleted: Date;
  constructor(
    public title: string,
    public id: string,
    public complete: boolean,
    public dateAdded: Date
  ) {}

  toggleComplete() {
    if (this.complete) {
      this.dateCompleted = null;
    } else {
      this.dateCompleted = new Date();
    }
    this.complete = !this.complete;
  }
}
