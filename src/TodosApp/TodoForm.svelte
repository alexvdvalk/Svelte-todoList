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
      class="flex flex-row justify-between gap-5"
      on:submit|preventDefault={submitForm}
    >
      <input
        class="flex-grow rounded-xl p-2"
        type="text"
        bind:value={title}
        placeholder="Create a new task"
      />

      <button
        type="button"
        class="text-white h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 items-center"
        >Add</button
      >
    </form>
    {#if showError}
      <div
        class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl"
        role="alert"
      >
        <span class="block sm:inline">Please add a task description</span>
        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            class="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            ><title>Close</title><path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            /></svg
          >
        </span>
      </div>
    {/if}
  </div>
</Card>
