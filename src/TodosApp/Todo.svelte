<script lang="ts">
  import { fly } from "svelte/transition";
  import type { ToDo } from "./models/todo.class";
  import { deleteTodoID, toggleCompleteStatus } from "./todoList";

  export let todo: ToDo;
  export let id: number;
  // $: doubled = count * 2;
  const deleteTodo = () => {
    deleteTodoID(id);
  };

  const toggleComplete = () => {
    toggleCompleteStatus(id);
  };
</script>

<style>
</style>

<!-- HTML -->
<li
  class="d-flex justify-content-between align-items-center list-group-item"
  transition:fly>
  {#if todo.complete}
    <div>
      <i class="fas fa-check-circle text-success" on:click={toggleComplete} />
    </div>
  {:else}
    <div><i class="far fa-square" on:click={toggleComplete} /></div>
  {/if}

  <div class="col-sm-8 align-items-center flex-grow-1 w-100">{todo.title}</div>

  <!-- <div class="col align-items-center">Complete: {todo.complete}</div> -->

  <div class="col">
    <button
      type="button"
      class="close"
      aria-label="Close"
      on:click={deleteTodo}>
      <span aria-hidden="true">&times;</span>
    </button>

    <!-- type="button"
      class="btn btn-secondary"
      disabled={!$userSub}
      on:click={deleteTodo}>Delete</button> -->
  </div>
  <!-- <div class="col">
    <button
      type="button"
      class="btn btn-primary"
      disabled={!$userSub}
      on:click={toggleComplete}>Mark As {todo.complete ? 'Incomplete' : 'Complete'}</button>
  </div> -->
</li>
<!-- </div>
</div> -->
