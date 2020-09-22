export class ToDo {
  public dateAdded: Date;
  public complete: boolean;
  public dateCompleted: Date;

  constructor(public title: string) {
    this.dateAdded = new Date();
    this.complete = Math.random() > 0.5;
  }

  toggleComplete() {
    if (this.complete) {
      delete this.dateCompleted;
    } else {
      this.dateCompleted = new Date();
    }
    this.complete = !this.complete;
  }
}
