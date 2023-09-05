<script lang="ts">
  import Card from "./Card.svelte";
  import type { ToDo } from "./interfaces";
  import { todoStore } from "./todoList";
  export let todo: ToDo;

  const toggleComplete = () => {
    todo.complete = !todo.complete;
  };
  const deleteTodo = () => {
    $todoStore = $todoStore.filter((i) => i.id !== todo.id);
  };
</script>

<!-- HTML -->

<Card bg={todo.complete ? "bg-green-300" : "bg-slate-100"}>
  <div class="flex justify-between">
    <div class="my-auto">
      {todo.title}
    </div>
    <div>
      <button on:click={toggleComplete}>
        Mark {todo.complete ? "Incomplete" : "Complete"}</button
      >

      <button on:click={deleteTodo}>
        <span>Delete</span>
      </button>
    </div>
  </div>
</Card>
