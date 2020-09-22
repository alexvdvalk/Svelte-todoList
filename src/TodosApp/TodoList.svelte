<script>
  import { todosSub } from "./todoList";
  import Todo from "./Todo.svelte";
</script>

<ul class="list-group pt-2">
  <!-- <div class="row-12"> -->
  {#each $todosSub as todo, i}
    <Todo {todo} id={i} />
  {/each}
  <!-- </div> -->
</ul>
