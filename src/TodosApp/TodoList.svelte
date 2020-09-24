<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";

  import { todosSub } from "./todoList";
  import Todo from "./Todo.svelte";
</script>

<ul class="list-group pt-2">
  <!-- <div class="row-12"> -->
  {#each $todosSub as todo, i (todo.id)}
    <div animate:flip transition:fly|local>
      <Todo {todo} id={i} />
    </div>
  {/each}
  <!-- </div> -->
</ul>
