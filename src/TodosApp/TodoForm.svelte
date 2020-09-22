<script lang="ts">
  import { addTodo, addRandom } from "./todoList";
  let title = "";

  let error: string;

  // const addRandomTodo = async () => {
  //   fetchingRandom = true;
  //   await addRandom();
  //   fetchingRandom = false;
  // };

  const submitForm = async () => {
    if (title.length > 0) {
      addTodo(title);
      title = "";
      error = "";
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
      bind:value={title}
      class="form-control"
      placeholder="Create a new task" />
  </div>

  <div class="pt-2 pb-2">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
{#if error}
  <div class="alert alert-danger col-12" role="alert">{error}</div>
{/if}
<!-- <button
        type="button"
        disabled={fetchingRandom}
        class="btn btn-primary mb-2"
        on:click={() => addRandomTodo()}>Add Random Todo</button> -->
