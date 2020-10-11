<script lang="ts">
  import { deleteTodoID, todoStore, toggleLoading } from "./todoList";
  export let id: number;

  const deleteTodo = async () => {
    toggleLoading(true);
    try {
      await deleteTodoID($todoStore[id].id);
      $todoStore.splice(id, 1);
      $todoStore = $todoStore;
    } catch (err) {
      console.log(err);
    } finally {
      toggleLoading(false);
    }
  };

  const toggleComplete = () => {
    // toggleCompleteStatus(id);
    $todoStore[id].toggleComplete();
    $todoStore = $todoStore;
  };
</script>

<style>
</style>

<!-- HTML -->
<div class="d-flex justify-content-between align-items-center list-group-item">
  {#if $todoStore[id].complete}
    <div>
      <i class="fas fa-check-circle text-success" on:click={toggleComplete} />
    </div>
  {:else}
    <div style="width:16px;">
      <i class="far fa-square" on:click={toggleComplete} />
    </div>
  {/if}

  <div class="col-sm-8 align-items-center flex-grow-1 w-100">
    {$todoStore[id].title}
  </div>

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
</div>
<!-- </div>
</div> -->
