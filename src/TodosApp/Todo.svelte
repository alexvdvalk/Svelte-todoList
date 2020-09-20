<script lang="ts">
  import { fade } from "svelte/transition";
  import type { ToDo } from "./models/todo.class";
  import { deleteTodoID, toggleCompleteStatus } from "./todoList";
  import { userSub } from "../auth0.config";

  export let todo: ToDo;
  export let id: number;

  const deleteTodo = () => {
    deleteTodoID(id);
  };

  const toggleComplete = () => {
    toggleCompleteStatus(id);
  };
</script>

<style>
  .row {
    margin-top: 10px;
    border: 1px solid black;
    padding: 10px;
    border-radius: 5px;
  }
</style>

<!-- HTML -->
<div class="row" transition:fade>
  <div class="col-sm">{id + 1}: {todo.title}</div>
  <div class="col-sm">Complete: {todo.complete}</div>
  <div class="col-sm">
    <button
      type="button"
      class="btn btn-secondary"
      disabled={!$userSub}
      on:click={deleteTodo}>Delete</button>
  </div>
  <div class="col-sm">
    <button
      type="button"
      class="btn btn-primary"
      disabled={!$userSub}
      on:click={toggleComplete}>Mark As {todo.complete ? 'Incomplete' : 'Complete'}</button>
  </div>
</div>
