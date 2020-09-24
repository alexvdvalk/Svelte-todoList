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
const serverUrl =
  "https://9vnj8jycfk.execute-api.eu-west-2.amazonaws.com/todos";

export const loadingSub = new BehaviorSubject<boolean>(false);

export let todos: ToDo[] = [];
export const todosSub = new BehaviorSubject<ToDo[]>(todos);

export const getTodosFromServer = async () => {
  toggleLoading(true);
  let todosFromServer = await axios.get(serverUrl);
  todos = todosFromServer.data.map((todo) => {
    return new ToDo(
      todo.title,
      todo.id,
      todo.complete,
      new Date(todo.dateAdded)
    );
  });
  console.log("todos", todos);
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
  try {
    const t = await axios.put(serverUrl, { title: title });
    todos.push(
      new ToDo(t.data.title, t.data.id, t.data.complete, t.data.dateAdded)
    );
    todosSub.next(todos);
  } catch (err) {
    console.log(err);
  }
  toggleLoading(false);
};

export const toggleCompleteStatus = (id: number) => {
  todos[id].toggleComplete();
  todosSub.next(todos);
};
