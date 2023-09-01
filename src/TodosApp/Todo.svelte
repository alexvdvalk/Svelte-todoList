<script lang="ts">
  import type { ToDo } from "./interfaces";
  import { todoStore } from "./todoList";
  export let todo: ToDo;

  const toggleComplete = () => {
    todo.complete = !todo.complete;
  };
  const deleteTodo = () => {
    $todoStore = $todoStore.filter((i) => i.id !== todo.id);
  };
</script>

<!-- HTML -->

<div class="flex justify-center">
  <button on:click={toggleComplete} class="text-5xl">
    Mark {todo.complete ? "Incomplete" : "Complete"}</button
  >
  <div class="col-sm-8 align-items-center flex-grow-1 w-100">
    {todo.title}
  </div>
  <div class="col">
    <button
      type="button"
      class="close"
      aria-label="Close"
      on:click={deleteTodo}
    >
      <span aria-hidden="true">Delete</span>
    </button>
  </div>
</div>

<style>
</style>
