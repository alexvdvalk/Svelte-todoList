<script lang="ts">
  import { addTodo, addRandom } from "./todoList";
  import Flex from "svelte-flex";
  let title: string;
  let fetchingRandom = false;

  const addRandomTodo = async () => {
    fetchingRandom = true;
    await addRandom();
    fetchingRandom = false;
  };
</script>

<style>
  form {
    margin-bottom: 20px;
    margin-top: 20px;
  }
</style>

<form class="form-inline" on:submit|preventDefault>
  <Flex direction="row wrap" align="start">
    <div class="form-group mb-2">
      <input
        type="text"
        bind:value={title}
        class="form-control"
        placeholder="Create a new task" />
    </div>

    <button
      type="submit"
      class="btn btn-primary mb-2"
      on:click={() => addTodo(title)}>Submit</button>
    <button
      type="button"
      disabled={fetchingRandom}
      class="btn btn-primary mb-2"
      on:click={() => addRandomTodo()}>Add Random Todo</button>
  </Flex>
</form>
