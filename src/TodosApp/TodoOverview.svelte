<script>
  import { onMount } from "svelte";
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
  import { loadingSub, getTodosFromServer } from "./todoList";

  onMount(async () => {
    await getTodosFromServer();
  });
</script>

<style>
  .topSpace {
    margin-top: 35px;
  }
</style>

{#if $loadingSub}
  <div class="d-flex justify-content-center topSpace">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
{:else}
  <TodoForm />
  <TodoList />
{/if}
