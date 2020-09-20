import { BehaviorSubject } from "rxjs";
import { ToDo } from "./models/todo.class";
import axios from "axios";
export const todos: ToDo[] = [
  new ToDo("Mop the floor"),
  new ToDo("Fix the light"),
  new ToDo("order laptop"),
  new ToDo("make dinner"),
];

export const todosSub = new BehaviorSubject<ToDo[]>(todos);

export const deleteTodoID = (id: number) => {
  console.log("deleting todo", todos[id]);
  todos.splice(id, 1);
  todosSub.next(todos);
};

export const addTodo = (title: string) => {
  todos.push(new ToDo(title));
  todosSub.next(todos);
};

export const toggleCompleteStatus = (id: number) => {
  todos[id].toggleComplete();
  todosSub.next(todos);
};

export const addRandom = async () => {
  const id = Math.round(Math.random() * 200);
  const ax = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  todos.push(new ToDo(ax.data.title));
  todosSub.next(todos);
};
