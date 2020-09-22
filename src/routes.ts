import router from "page";
import TodoList from "./TodosApp/TodoList.svelte";
import TodoForm from "./TodosApp/TodoForm.svelte";
import Login from "./Login.svelte";

export let page;

router("/addTodo", () => (page = TodoForm));
router("/home", () => (page = TodoList));
router("/login", () => (page = Login));
router("/", () => (page = TodoForm));
router.start();
