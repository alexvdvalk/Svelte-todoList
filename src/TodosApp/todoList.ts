import { BehaviorSubject } from "rxjs";
import { ToDo } from "./models/todo.class";
import axios from "axios";

// interface todoServerStructure {
//   checked: boolean;
//   createdAt: number;
//   text: string;
//   id: string;
//   updatedAt: number;
// }
export let todos: ToDo[] = [];
const serverUrl =
  "https://9vnj8jycfk.execute-api.eu-west-2.amazonaws.com/todos";

export const loadingSub = new BehaviorSubject<boolean>(false);
export const todosSub = new BehaviorSubject<ToDo[]>(todos);

export const getTodosFromServer = async () => {
  toggleLoading(true);
  let todosFromServer = await axios.get(serverUrl);
  todos = todosFromServer.data.map((todo) => {
    return new ToDo(todo.text, todo.id);
  });
  toggleLoading(false);
  todosSub.next(todos);
};

export const toggleLoading = (state: boolean) => {
  loadingSub.next(state);
};

export const deleteTodoID = async (id: number) => {
  toggleLoading(true);
  try {
    await axios.delete(`${serverUrl}/${todos[id].id}`);
    todos.splice(id, 1);
  } catch (err) {
    console.log(err);
  }
  toggleLoading(false);
  todosSub.next(todos);
};

export const addTodo = async (title: string) => {
  toggleLoading(true);
  const t = await axios.put(serverUrl, { text: title });
  todos.push(new ToDo(title, t.data.id));
  todosSub.next(todos);
  toggleLoading(false);
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
