import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";
import type { ToDo } from "./interfaces";

export const todoStore = writable<ToDo[]>([]);
export const loadingStore = writable<boolean>(false);

export const toggleLoading = (state: boolean): void => {
  loadingStore.set(state);
};

export const addTodo = (title: string): void => {
  // const t = await axios.put(serverUrl, { title: title });
  const id = uuidv4();
  const newTodo: ToDo = {
    title,
    id,
    complete: false,
    dateAdded: new Date(),
  };
  todoStore.update((i) => {
    i.push(newTodo);
    return i;
  });
};

// export const toggleCompleteStatus = (id: number) => {
//   // Should update on server
//   // todos[id].toggleComplete();
//   // todoStore.set(todos);
// };
