<script lang="ts">
  import Card from "./Card.svelte";
  import { addTodo } from "./todoList";
  let title = "";
  let showError = false;

  const submitForm = async () => {
    if (title.length > 0) {
      addTodo(title);
      title = "";
      showError = false;
    } else {
      showError = true;
    }
  };
</script>

<Card>
  <div class="flex flex-col gap-4">
    <form
      class="flex flex-row justify-between gap-1"
      on:submit|preventDefault={submitForm}
    >
      <div class="flex flex-col flex-grow">
        <input
          class="flex-grow rounded-xl p-2 border-2 duration-200"
          class:border-red-600={showError}
          type="text"
          bind:value={title}
          placeholder="Create a new task"
        />
        {#if showError}
          <span class="text-red-600 text-sm my-1">Please enter some text.</span>
        {/if}
      </div>

      <button>Add</button>
    </form>
  </div>
</Card>
