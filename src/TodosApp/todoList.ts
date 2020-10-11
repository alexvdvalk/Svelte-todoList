import { ToDo } from "./models/todo.class";
import axios from "axios";
import { writable } from "svelte/store";

export const todoStore = writable<ToDo[]>([]);
export const loadingStore = writable<boolean>(false);
const serverUrl =
  "https://9vnj8jycfk.execute-api.eu-west-2.amazonaws.com/todos";

export const getTodosFromServer = async (): Promise<ToDo[]> => {
  let todosFromServer = await axios.get(serverUrl);
  return todosFromServer.data.map((todo) => {
    return new ToDo(
      todo.title,
      todo.id,
      todo.complete,
      new Date(todo.dateAdded)
    );
  });
};

export const toggleLoading = (state: boolean): void => {
  loadingStore.set(state);
};

export const deleteTodoID = async (id: string) => {
  let ax = await axios.delete(`${serverUrl}/${id}`);
  return ax.data;
};

export const addTodo = async (title: string): Promise<ToDo> => {
  const t = await axios.put(serverUrl, { title: title });
  const newTodo = new ToDo(
    t.data.title,
    t.data.id,
    t.data.complete,
    t.data.dateAdded
  );
  return newTodo;
};

// export const toggleCompleteStatus = (id: number) => {
//   // Should update on server
//   // todos[id].toggleComplete();
//   // todoStore.set(todos);
// };
