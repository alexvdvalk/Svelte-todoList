<script lang="ts">
  import { onMount } from "svelte";
  import TodoForm from "./TodoForm.svelte";
  import TodoList from "./TodoList.svelte";
  import { todoStore, getTodosFromServer } from "./todoList";

  let loading: boolean;

  onMount(async () => {
    loading = true;
    try {
      $todoStore = await getTodosFromServer();
    } catch (err) {
      console.log(err);
    } finally {
      loading = false;
    }
  });
</script>

<style>
  .topSpace {
    margin-top: 35px;
  }
</style>

{#if loading}
  <div class="d-flex justify-content-center topSpace">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
{/if}
{#if !loading}
  <TodoForm />
  <TodoList />
{/if}
