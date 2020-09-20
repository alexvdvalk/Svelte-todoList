<script>
  import { todosSub } from "./todoList";
  import Todo from "./Todo.svelte";
</script>

<ul>
  <ul class="list-group">
    {#each $todosSub as todo, i}
      <Todo {todo} id={i} />
    {/each}
  </ul>
</ul>
