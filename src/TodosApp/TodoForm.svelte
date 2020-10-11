<script lang="ts">
  import { addTodo, todoStore, loadingStore, toggleLoading } from "./todoList";
  let title = "";
  let error: string;
  let inputFocus = null;
  const submitForm = async () => {
    if (title.length > 0) {
      toggleLoading(true);
      let newT = await addTodo(title);
      $todoStore = [...$todoStore, newT];
      inputFocus.focus();
      title = "";
      error = "";
      toggleLoading(false);
    } else {
      error = "Please add a task description";
    }
  };
</script>

<style>
</style>

<form class="d-flex" on:submit|preventDefault={submitForm}>
  <div class="flex-grow-1 w-100 pt-2 pb-2 pr-2">
    <input
      type="text"
      disabled={$loadingStore}
      bind:value={title}
      class="form-control"
      bind:this={inputFocus}
      placeholder="Create a new task" />
  </div>

  <div class="pt-2 pb-2">
    <button
      type="submit"
      disabled={$loadingStore}
      class="btn btn-primary">Submit</button>
  </div>
</form>
{#if error}
  <div class="alert alert-danger col-12" role="alert">{error}</div>
{/if}
